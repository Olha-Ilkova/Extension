document.getElementById("bootstrap--btn").onclick = () => {
    chrome.runtime.sendMessage({method: "clear"}, () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                function: getDocumentBootstrap
            },()=>{
                if (chrome.runtime.lastError) {
                    document.querySelector('.checkbox--bootstrap--false').classList.remove('d-none');
                }
                else{
                    document.querySelector('.checkbox--bootstrap--true').classList.remove('d-none');
                }
            });
        });
    });
}
document.getElementById("jQuery--btn").onclick = () => {
    chrome.runtime.sendMessage({method: "clear"}, () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                function: getDocumentJQuery
            },()=>{
                if (chrome.runtime.lastError) {
                    document.querySelector('.checkbox--jQuery--false').classList.remove('d-none');
                }
                else{
                    document.querySelector('.checkbox--jQuery--true').classList.remove('d-none');
                }
            });
        });
    });
}
document.getElementById("h1--btn").onclick = () => {
    chrome.runtime.sendMessage({method: "clear"}, () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                function: getDocumentH1
            },()=>{
                if (chrome.runtime.lastError) {
                    document.querySelector('.checkbox--h1--false').classList.remove('d-none');
                }
                else{
                    document.querySelector('.checkbox--h1--true').classList.remove('d-none');
                }
            });
        });
    });
}

function getDocumentBootstrap(){
    var links = document.getElementsByTagName('link');
    for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute('href');
        if (href && (href.includes('bootstrap.min.css') || href.includes('bootstrap.css'))) {
            return true;
        }
    }
}

function getDocumentJQuery(){
    if (window.jQuery !== undefined){
        return true;
    }
}

function getDocumentH1(){
    let title = document.title;
    let h1Count = document.getElementsByTagName("h1").length;
    let messageH1 = {
        title
    }
}
