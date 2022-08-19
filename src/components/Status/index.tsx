export default function Status(status: string) {
  return (
    <span
      title="Label: Link"
      data-view-component="true"
      className="Label flex-shrink-0 ml-2 d-flex"
      style={{ alignItems: "center", height: "20" }}
      id="status-badge-ided"
    >
      {status}
    </span>
  );
}
