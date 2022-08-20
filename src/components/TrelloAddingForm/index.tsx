export default function TrelloAddingForm(token: boolean = false) {
  return (
    <div className="clearfix container-xl px-3 px-md-4 px-lg-5 mt-4">
      <div className="clearfix">
        <div className="col-12 col-md-9">
          <div className="form-group">
            <div className="d-flex flex-column" id="board_id_container">
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
