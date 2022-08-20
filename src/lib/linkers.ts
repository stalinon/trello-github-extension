import { repository_name, key } from "../lib/const";

export function linkTrelloBoard() {
  let board_id = (document.getElementById("board_id") as HTMLSelectElement)
    ?.value;

  let value = {
    repository_name: repository_name,
    board_id: board_id,
  };

  chrome.storage.sync.set({ [key]: value });
}

export function linkTrelloAccount() {
  let api_key = (document.getElementById("api_key") as HTMLInputElement)?.value;
  let api_token = (document.getElementById("api_token") as HTMLInputElement)
    ?.value;

  let value = {
    api_key: api_key,
    api_token: api_token,
  };

  chrome.storage.sync.set({ ["trello"]: value });
}
