export const base_url = `https://api.trello.com`;
export const location = window.location.toString();
export const repository_name = getRepositoryName(location);
export const key = `${repository_name}_trello`;

export let repository_trello = {
  repository_name: "",
  board_id: "",
  open_list_id: "",
  in_progress_list_id: "",
  closed_list_id: "",
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
    ) &&
    repository_trello.board_id != "" &&
    repository_trello.open_list_id != null &&
    repository_trello.in_progress_list_id != null &&
    repository_trello.closed_list_id != null;
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
  var res = address.match(/https:\/\/github.com\/([^\/]+\/[^\/]+)/);
  return res![1];
}

function Router(rep: string, callback: any) {
  switch (document.location.pathname) {
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
        document.location.pathname.includes(rep) &&
        document.location.pathname.includes("/pull/")
      ) {
        callback.call(document.location);
      }
      break;
  }
}
