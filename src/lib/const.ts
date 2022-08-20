export const base_url = `https://api.trello.com`;
export const location = window.location.toString();
export const repository_name = getRepositoryName(location);
export const key = `${repository_name}_trello`;

export let repository_trello = {
  repository_name: "",
  board_id: "",
};

export let trello = {
  api_key: "",
  api_token: "",
};

export let isLinked = false;
chrome.storage.sync.get(key, (obj) => {
  repository_trello = obj[key];
  isLinked =
    !(
      obj &&
      Object.keys(obj).length === 0 &&
      Object.getPrototypeOf(obj) === Object.prototype
    ) && repository_trello.board_id != "";
});

export let isLogIn = false;
chrome.storage.sync.get("trello", (result) => {
  trello = result.trello;
  isLogIn = result.trello.api_key != null && result.trello.api_token != null;
});

var oldHref = document.location.pathname;

var intervalId = window.setInterval(function () {
  if (oldHref != document.location.pathname) {
    oldHref = document.location.pathname;
    Router(getRepositoryName(window.location.toString()), () =>
      document.location.reload()
    );
  }
}, 1);

function getRepositoryName(address: string) {
  var res = address?.match(/https:\/\/github.com\/([^\/]+\/[^\/]+)/);

  return res != null ? res[1] : null;
}

function Router(rep: string | null, callback: any) {
  switch (document.location.pathname) {
    case null:
      break;
    case `/${rep}`:
    case `/${rep}/`:
      callback();
      break;
    case `/${rep}/trello`:
    case `/${rep}/trello/`:
      callback();
      break;
    default:
      if (
        document.location.pathname.includes(rep!) &&
        document.location.pathname.includes("/pull/")
      ) {
        callback.call(document.location);
      }
      break;
  }
}
