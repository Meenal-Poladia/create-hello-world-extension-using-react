// Listen for messages for changing text colour
chrome.runtime.onMessage.addListener(function (payload, sender, sendResponse) {
    // If the received message has the expected format...
    console.log('received message')
    if (payload.message === 'changeTextColor') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        let all = document.getElementsByTagName('*')
        if (payload.isChecked) {
            for (let i = 0; i < all.length; i++){
                all[i].style.color = 'orange';
            }
        } else {
            for (let i = 0; i < all.length; i++){
                all[i].style.color = 'black';
            }
        }
    }
    sendResponse(true)
});
console.log('script loaded')