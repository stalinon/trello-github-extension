import { repository_name } from "../lib/const";
import { Router } from "../lib/router";

setTimeout(All, 1);

async function All() {
  switch (document.location.pathname) {
    case `/${repository_name}`:
    case `/${repository_name}/`:
      Router.onRepositoryPage();
      break;
    case `/${repository_name}/trello`:
    case `/${repository_name}/trello/`:
      Router.setTrelloItemCell();
      break;
    default:
      if (
        document.location.pathname.includes(repository_name) &&
        document.location.pathname.includes("/pull/")
      ) {
        Router.onPullRequestPage();
      }
      break;
  }
}
