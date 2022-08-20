import ReactDOMServer from "react-dom/server";

export function appendElement(
  element: JSX.Element,
  toElement: Element,
  append = true
) {
  var div = getNodeFromJsx(element);
  if (append) {
    toElement?.append(div);
  } else {
    toElement?.prepend(div);
  }
}

export function appendNode(element: Node, toElement: Element, append = true) {
  if (append) {
    toElement?.append(element);
  } else {
    toElement?.prepend(element);
  }
}

export function replaceItem(element: JSX.Element, replaceItem: Element) {
  var div = getNodeFromJsx(element);
  replaceItem?.parentNode?.replaceChild(div, replaceItem);
}

export function replaceNode(element: Node, replaceItem: Element) {
  var div = element;
  replaceItem?.parentNode?.replaceChild(div, replaceItem);
}

export function generateHTMLTrelloListSelector(lists: any, status: any) {
  var htmls = lists.map((v: { id: string; name: string }) => {
    return v.name === status
      ? `<option selected value=${v.id} key=${v.id}>${v.name}</option>`
      : `<option value=${v.id} key=${v.id}>${v.name}</option>`;
  });
  var node = getNodeFromString(
    `<select
      id="trello_list_selector"
      class="btn btn-sm"
      style="outline:0px !important"
    >${htmls.join("")}</select>`
  );
  return node;
}

export function generateHTMLTrelloBoardSelector(boards: any) {
  var htmls = boards.map((v: { id: string; name: string }) => {
    return `<option value=${v.id} key=${v.id}>${v.name}</option>`;
  });
  var node = getNodeFromString(
    `<select 
      class="btn m-2" 
      id="board_id"
      style="outline:0px !important"
    >${htmls.join("")}</select>`
  );
  return node;
}

function getNodeFromJsx(element: JSX.Element) {
  let html = ReactDOMServer.renderToString(element);
  return getNodeFromString(html);
}

function getNodeFromString(html: string) {
  var wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  return wrapper.firstChild as Node;
}
