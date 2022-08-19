import trello from "../../trello.png";

export default function BorderGridCellConnected(link: string, name: string) {
  return (
    <div className="BorderGrid-cell">
      <h2
        className="h4 mb-3"
        data-pjax="#repo-content-pjax-container"
        data-turbo-frame="repo-content-turbo-frame"
      >
        <a
          href={link}
          data-view-component="true"
          className="Link--primary no-underline"
        >
          Trello
        </a>
      </h2>

      <a
        className="Link--primary d-flex no-underline"
        data-pjax="#repo-content-pjax-container"
        data-turbo-frame="repo-content-turbo-frame"
        href={link}
        target="_blank"
      >
        <img
          className="octicon octicon-tag flex-shrink-0 mt-1 color-fg-success"
          src={trello}
          alt=""
          width={20}
          height={20}
        />
        <div className="ml-2 min-width-0">
          <div className="d-flex">
            <span
              className="css-truncate css-truncate-target text-bold mr-2"
              style={{ maxWidth: "none" }}
            >
              {name}
            </span>
            <span
              title="Label: Link"
              data-view-component="true"
              className="Label flex-shrink-0"
            >
              Link
            </span>{" "}
          </div>
        </div>
      </a>
    </div>
  );
}
