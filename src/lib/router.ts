import {
  location,
  repository_name,
  repository_trello,
  isLinked,
  isLogIn,
} from "../lib/const";
import { getCardStatus } from "../lib/mapper";
import { appendElement, replaceItem } from "../lib/htmlHelper";
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
      Trello.getBoard(repository_trello.board_id)
        .then((response) => {
          return response.json();
        })
        .then((board) => {
          appendElement(
            BorderGridCellConnected(board.shortUrl, board.name),
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
        let cardStatus = getCardStatus(card.idList);
        appendElement(
          DiscussionSidebarItem(card.url, card.name, cardStatus),
          list,
          false
        );

        document
          .getElementById("open_trello_btn")
          ?.addEventListener("click", () =>
            Trello.moveCard(card.id, repository_trello.open_list_id)
          );
        document
          .getElementById("in_progress_trello_btn")
          ?.addEventListener("click", () =>
            Trello.moveCard(card.id, repository_trello.in_progress_list_id)
          );
        document
          .getElementById("closed_trello_btn")
          ?.addEventListener("click", () =>
            Trello.moveCard(card.id, repository_trello.closed_list_id)
          );
      });
    }
  }

  static setTrelloItemCell() {
    document.title = `Trello · ${repository_name}`;
    let footer = document.getElementsByTagName("footer")[0];
    replaceItem(Footer(), footer);

    let main = document.getElementsByTagName("main")[0];
    main?.replaceChildren("");
    appendElement(TrelloAddingForm(!isLogIn), main);

    document
      .getElementById("link-trello-board-button")
      ?.addEventListener("click", () => {
        if (!isLogIn) {
          linkTrelloAccount();
        }
        linkTrelloBoard();
        window.location.href = window.location.href.replace("/trello", "");
      });
  }
}
