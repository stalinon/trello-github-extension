import trello from "../../trello.png";

export default function DiscussionSidebarItem(
  link: string,
  name: string,
  status: string
) {
  return (
    <div id="partial-users-participants" className="discussion-sidebar-item">
      <div className="participation">
        <div className="discussion-sidebar-heading text-bold">Trello</div>
        <div className="participation-avatars d-flex flex-wrap">
          <a
            className="participant-avatar d-flex flex-row"
            data-octo-click="hovercard-link-click"
            data-octo-dimensions="link_type:self"
            href={link}
            target="_blank"
          >
            <img
              className="avatar avatar-user mr-2"
              src={trello}
              alt=""
              width={20}
              height={20}
            />
            <p>{name}</p>
            <span
              title="Label: Link"
              data-view-component="true"
              className="Label flex-shrink-0 ml-2 d-flex"
              style={{ alignItems: "center", height: "20px" }}
              id="status_badge_ided"
            >
              {status}
            </span>
          </a>
        </div>
        <button
          id="open_trello_btn"
          type="button"
          className="btn m-2"
          data-disable-with=""
          style={{
            fontSize: "10px",
          }}
        >
          Open
        </button>
        <button
          id="in_progress_trello_btn"
          type="button"
          className="btn m-2"
          data-disable-with=""
          style={{
            fontSize: "10px",
          }}
        >
          In progress
        </button>
        <button
          id="closed_trello_btn"
          type="button"
          className="btn m-2"
          data-disable-with=""
          style={{
            fontSize: "10px",
          }}
        >
          Closed
        </button>
      </div>
    </div>
  );
}
