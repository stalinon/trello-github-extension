import { base_url, trello } from "./const";

export class Trello {
  static async getBoard(id: string) {
    return fetch(
      `${base_url}/1/boards/${id}?key=${trello.api_key}&token=${trello.api_token}`
    ).then((response) => {
      return response.json();
    });
  }

  static async getCard(boardId: string, pattern: string) {
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

  static async moveCard(cardId: string, moveToListId: string) {
    return fetch(
      `${base_url}/1/cards/${cardId}?idList=${moveToListId}&key=${trello.api_key}&token=${trello.api_token}`,
      {
        method: "PUT",
      }
    ).then((response) => response.json());
  }

  static async getLists(boardId: string) {
    return fetch(
      `${base_url}/1/boards/${boardId}/lists?key=${trello.api_key}&token=${trello.api_token}`
    ).then((response) => {
      return response.json();
    });
  }
}
