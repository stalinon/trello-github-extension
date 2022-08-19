import { appendElement, replaceItem } from "../lib/htmlHelper";
import { linkTrelloBoard, linkTrelloAccount } from "../lib/linkers";
import { base_url, location, repository_name, key } from "../lib/const";
import BorderGridCell from "../components/BorderGridCell";
import BorderGridCellConnected from "../components/BorderGridCellConnected";
import DiscussionSidebarItem from "../components/DiscussionSidebarItem";
import TrelloAddingForm from "../components/TrelloAddingForm";
import Footer from "../components/Footer";

let repository_trello = {
  repository_name: "",
  board_id: "",
  open_list_id: "",
  in_progress_list_id: "",
  closed_list_id: "",
};

let trello = {
  api_key: "",
  api_token: "",
};

let isLinked = false;
chrome.storage.sync.get(key, (obj) => {
  repository_trello = obj[key];
  console.log(obj);
  isLinked =
    !(
      obj &&
      Object.keys(obj).length === 0 &&
      Object.getPrototypeOf(obj) === Object.prototype
    ) &&
    repository_trello.board_id != "" &&
    repository_trello.open_list_id != null &&
    repository_trello.in_progress_list_id != null &&
    repository_trello.closed_list_id != null;
});

let isLogIn = false;
chrome.storage.sync.get("trello", (result) => {
  trello = result.trello;
  console.log(result);
  isLogIn = result.trello.api_key != null && result.trello.api_token != null;
});

setTimeout(All, 1);

async function All() {
  if (location.includes("/pull/")) {
    if (isLinked) {
      let list = document.getElementById("partial-discussion-sidebar")!;
      let pull_request_name = document.getElementsByClassName(
        "js-issue-title markdown-title"
      )[0]?.innerHTML;
      let pattern = pull_request_name?.match(/\w+-(\d+)/)!;
      getCard(repository_trello.board_id, pattern[0]).then((card) => {
        console.log(card.url);
        appendElement(DiscussionSidebarItem(card.url, card.name), list, false);
      });
    }
  } else if (repository_name.split("/").length === 2) {
    let list = document.getElementsByClassName(
      "BorderGrid BorderGrid--spacious"
    )[0];

    let link = "https://github.com/" + repository_name + "/trello";

    if (!isLinked) {
      setTrelloItemCell(link, list);
    } else {
      getBoard(repository_trello.board_id)
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
}

function setTrelloItemCell(link: string, list: Element) {
  appendElement(BorderGridCell(link), list);

  if (location.endsWith("/trello")) {
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
        window.location.href = link.replace("/trello", "");
      });
  }
}

async function getBoard(id: string) {
  return fetch(
    `${base_url}/1/boards/${id}?key=${trello.api_key}&token=${trello.api_token}`
  );
}

async function getCard(boardId: string, pattern: string) {
  return fetch(
    `${base_url}/1/boards/${boardId}/cards?key=${trello.api_key}&token=${trello.api_token}`
  )
    .then((response) => {
      return response.json();
    })
    .then((cards) => {
      return cards.filter((c: { name: string }) =>
        c.name.startsWith(pattern)
      )[0];
    });
}
