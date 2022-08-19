import { base_url, trello } from "./const";
import { getCardStatus } from "./mapper";

export class Trello {
  static async getBoard(id: string) {
    return fetch(
      `${base_url}/1/boards/${id}?key=${trello.api_key}&token=${trello.api_token}`
    );
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
    )
      .then((response) => response.json())
      .then((card) => {
        document.getElementById("status_badge_ided")!.innerText = getCardStatus(
          card.idList
        );
      });
  }
}
