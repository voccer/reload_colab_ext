// content.js

// alert("Hello from your Chrome extension!")

function getTime(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime;
}


console.log('Extension voccer working')
function ClickConnect() {
    console.log('Time: ' + getTime());
    document.querySelector("colab-toolbar-button#connect").click()
  }
setInterval(ClickConnect, 60000)

// var firstHref = $("a[href^='http']").eq(0).attr("href");

// console.log(firstHref);
// // content.js
// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse) {
//         if (request.message === "clicked_browser_action") {
//             var firstHref = $("a[href^='http']").eq(0).attr("href");

//             console.log(firstHref);
//         }
//     }
// );
// // content.js
// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if( request.message === "clicked_browser_action" ) {
//         var firstHref = $("a[href^='http']").eq(0).attr("href");

//         console.log(firstHref);

//         // This line is new!
//         chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
//       }
//     }
//   );
