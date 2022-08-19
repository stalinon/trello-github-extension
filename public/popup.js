document
  .getElementById("trello-regiser-account-btn")
  .addEventListener("click", () => {
    let api_key = document.getElementById(
      "trello-register-account-input"
    )?.value;
    console.log(api_key);
    chrome.storage.sync.set({ trello: api_key });
  });
