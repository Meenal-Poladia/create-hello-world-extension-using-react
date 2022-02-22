// function injectedFunction() {
//     document.body.style.backgroundColor = 'orange';
// }
//
// const searchActiveTab = chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: injectedFunction
//     });
// });