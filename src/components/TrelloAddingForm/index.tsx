export default function TrelloAddingForm(token: boolean = false) {
  return (
    <div className="clearfix container-xl px-3 px-md-4 px-lg-5 mt-4">
      <div className="clearfix">
        <div className="col-12 col-md-9">
          <div className="form-group">
            <div className="d-flex flex-column">
              {token && (
                <>
                  <input
                    placeholder="API Key"
                    className="form-control flex-auto m-2"
                    type="text"
                    name="api_key"
                    id="api_key"
                  />
                  <input
                    placeholder="API Token"
                    className="form-control flex-auto m-2"
                    type="text"
                    name="api_token"
                    id="api_token"
                  />
                </>
              )}
              <input
                placeholder="Board Id"
                className="form-control flex-auto m-2"
                type="text"
                name="board_id"
                id="board_id"
              />
              <input
                placeholder="Open List Id"
                className="form-control flex-auto m-2"
                type="text"
                name="open_list_id"
                id="open_list_id"
              />
              <input
                placeholder="In Progress List Id"
                className="form-control flex-auto m-2"
                type="text"
                name="in_progress_list_id"
                id="in_progress_list_id"
              />
              <input
                placeholder="Closed List Id"
                className="form-control flex-auto m-2"
                type="text"
                name="closed_list_id"
                id="closed_list_id"
              />
            </div>
            <hr></hr>
            <button
              className="btn btn-primary js-publish-release m-2"
              type="submit"
              data-disable-with="Linking…"
              id="link-trello-board-button"
            >
              Link board
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
