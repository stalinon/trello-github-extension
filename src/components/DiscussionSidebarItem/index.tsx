import trello from "../../trello.png";

export default function DiscussionSidebarItem(link: string, name: string) {
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
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
