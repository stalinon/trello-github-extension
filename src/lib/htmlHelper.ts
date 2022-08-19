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

export function replaceItem(element: JSX.Element, replaceItem: Element) {
  var div = getNodeFromJsx(element);
  replaceItem?.parentNode?.replaceChild(div, replaceItem);
}

export function getNodeFromJsx(element: JSX.Element) {
  let html = ReactDOMServer.renderToString(element);
  var wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  return wrapper.firstChild as Node;
}
