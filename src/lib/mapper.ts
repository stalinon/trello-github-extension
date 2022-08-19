import { repository_trello } from "./const";

export function getCardStatus(listId: string): string {
  switch (listId) {
    case repository_trello.open_list_id:
      return "Open";
    case repository_trello.in_progress_list_id:
      return "In progress";
    case repository_trello.closed_list_id:
      return "Closed";
    default:
      return "";
  }
}
