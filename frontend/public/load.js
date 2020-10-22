var origin = window.location.origin;
console.log(origin);

var iframeEl = document.createElement("iframe");

function receiveMessage(event) {
  // if (event.origin !== "http://localhost:3000") {
  //   return;
  // }
  if (event.data.type === "UPDATE_IFRAM") {
    let styleData = event.data.values;
    iframeEl.style[styleData[0]] = styleData[1];
  }
  if (event.data.type === "LOCALSTORE_IFRAM") {
    switch (event.data.action) {
      case "remove": {
        localStorage.removeItem(event.data.key);
        break;
      }
      case "get": {
        let data = localStorage.getItem(event.data.key);
        if (data) data = JSON.parse(data);
        iframeEl.contentWindow.postMessage(
          { [event.data.key]: data, type: "GET_LOCALDATA" },
          "*"
        );
        break;
      }
      case "set": {
        localStorage.setItem(event.data.key, event.data.val);
        break;
      }
    }
  }
}
window.addEventListener("message", receiveMessage, false);
iframeEl.setAttribute(
  "src",
  "http://localhost:3000?origin=" +
    origin +
    "&h=b08171a9-887d-49f9-8977-58077b3b192e&w=http://localhost:3001"
);
iframeEl.setAttribute("frameborder", "0");
iframeEl.setAttribute("allowfullscreen", "true");
// iframeEl.style.display = "none";
// iframeEl.style.border = "none";
iframeEl.style.position = "fixed";
iframeEl.style.zIndex = "100";
iframeEl.style.bottom = "0";
iframeEl.style.right = "0";
iframeEl.style.height = "550px";
iframeEl.style.width = "372px";
// iframeEl.className = "chat-frame";

document.body.append(iframeEl);
