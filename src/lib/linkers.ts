import { repository_name, key } from "../lib/const";

export function linkTrelloBoard() {
  let board_id = (document.getElementById("board_id") as HTMLInputElement)
    ?.value;

  let open_list_id = (
    document.getElementById("open_list_id") as HTMLInputElement
  )?.value;

  let in_progress_list_id = (
    document.getElementById("in_progress_list_id") as HTMLInputElement
  )?.value;

  let closed_list_id = (
    document.getElementById("closed_list_id") as HTMLInputElement
  )?.value;

  let value = {
    repository_name: repository_name,
    board_id: board_id,
    open_list_id: open_list_id,
    in_progress_list_id: in_progress_list_id,
    closed_list_id: closed_list_id,
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
