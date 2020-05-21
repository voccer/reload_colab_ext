
function getTime() {
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  return dateTime;
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function ClickFile() {
  document.querySelector("div.colab-left-pane-nib.layout.vertical > paper-listbox").getElementsByTagName("paper-item")[2].click();
}

window.onload = function () {
  // code goes here
  console.log('load complete');
  setTimeout(function () {
    ClickFile()
  }, 4000);
};

console.log("Extension voccer working");

function ClickConnect() {
  console.log('Time: ' + getTime());
  document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click()
}
setInterval(ClickConnect, 60000)