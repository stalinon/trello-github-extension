export default function BorderGridCell(link: string) {
  return (
    <div className="BorderGrid-row">
      <div className="BorderGrid-cell">
        <h2 className="h4 mb-3">Trello</h2>

        <div className="text-small color-fg-muted">
          Trello board isn't linked yet
        </div>
        <div className="text-small">
          <a href={link}>Link Trello board</a>
        </div>
      </div>
    </div>
  );
}
