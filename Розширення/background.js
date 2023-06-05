chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.method === "results") {
    updateCheckbox("bootstrap", request.bootstrap);
    updateCheckbox("jQuery", request.jQuery);
    updateCheckbox("h1", request.h1);
  }
});
