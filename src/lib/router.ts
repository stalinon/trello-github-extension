import {
  repository_name,
  repository_trello,
  isLinked,
  isLogIn,
  trello,
} from "../lib/const";
import {
  appendElement,
  appendNode,
  replaceItem,
  generateHTMLTrelloListSelector,
  generateHTMLTrelloBoardSelector,
} from "../lib/htmlHelper";
import { linkTrelloBoard, linkTrelloAccount } from "../lib/linkers";
import { Trello } from "../lib/trelloApi";

import BorderGridCell from "../components/BorderGridCell";
import BorderGridCellConnected from "../components/BorderGridCellConnected";
import DiscussionSidebarItem from "../components/DiscussionSidebarItem";
import TrelloAddingForm from "../components/TrelloAddingForm";
import Footer from "../components/Footer";

export class Router {
  static onRepositoryPage() {
    let list = document.getElementsByClassName(
      "BorderGrid BorderGrid--spacious"
    )[0];
    let link = "https://github.com/" + repository_name + "/trello";

    if (!isLinked) {
      appendElement(BorderGridCell(link), list);
    } else {
      Trello.getBoard(repository_trello.board_id).then((board) => {
        appendElement(
          BorderGridCellConnected(board.shortUrl, link, board.name),
          list
        );
      });
    }
  }

  static onPullRequestPage() {
    if (isLinked) {
      let list = document.getElementById("partial-discussion-sidebar")!;
      let pull_request_name = document.getElementsByClassName(
        "js-issue-title markdown-title"
      )[0]?.innerHTML;
      let pattern = pull_request_name?.match(/\w+-(\d+)/)!;
      Trello.getCard(repository_trello.board_id, pattern[0]).then((card) => {
        Trello.getLists(repository_trello.board_id).then((lists) => {
          let cardStatus = lists.filter(
            (x: { id: any }) => x.id === card.idList
          )[0].name;

          appendElement(
            DiscussionSidebarItem(card.url, card.name, cardStatus),
            list,
            false
          );

          appendNode(
            generateHTMLTrelloListSelector(lists, cardStatus),
            document.getElementById("trello_list_selector_container")!
          );

          document
            .getElementById("trello_list_selector")
            ?.addEventListener("change", (e) => {
              let select = e.target as HTMLSelectElement;
              Trello.moveCard(
                card.id,
                select.options[select.selectedIndex].value
              );
            });
        });
      });
    }
  }

  static setTrelloItemCell() {
    document.title = `Trello · ${repository_name}`;
    let footer = document.getElementsByTagName("footer")[0];
    replaceItem(Footer(), footer);

    let main = document.getElementsByTagName("main")[0];
    main?.replaceChildren("");
    appendElement(TrelloAddingForm(), main);

    if (isLogIn) {
      Trello.getMe().then((dude) => {
        Trello.getBoards(dude.id).then((boards) => {
          setSelector(boards);
        });
      });
    } else {
      setSelector();

      let api_key = document.getElementById("api_key") as HTMLInputElement;
      let api_token = document.getElementById("api_token") as HTMLInputElement;

      api_key?.addEventListener("focusout", focusOutEvent);

      api_token?.addEventListener("focusout", focusOutEvent);

      function focusOutEvent(e: FocusEvent) {
        if (api_key?.value && api_token?.value) {
          if (api_key?.value != "" && api_token?.value != "") {
            linkTrelloAccount();
          }

          Trello.getMe().then((dude) => {
            Trello.getBoards(dude.id).then((boards) => {
              document
                .getElementById("board_id_container")
                ?.parentNode?.replaceChild(
                  generateHTMLTrelloBoardSelector(boards),
                  document.getElementById("board_id_container")!
                );
            });
          });
        }
      }
    }
  }
}

function setSelector(boards: any = []) {
  appendNode(
    generateHTMLTrelloBoardSelector(boards),
    document.getElementById("board_id_container")!
  );

  document
    .getElementById("link-trello-board-button")
    ?.addEventListener("click", () => {
      linkTrelloBoard();
      window.location.href = window.location.href.replace("/trello", "");
    });
}
