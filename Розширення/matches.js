const askContainer = document.createElement("div");
askContainer.id = "ask__container";
document.body.appendChild(askContainer);

const envelope = document.createElement("div");
envelope.className = "envelope";
askContainer.appendChild(envelope);

const envelopeFlap = document.createElement("div");
envelopeFlap.className = "envelope-top";
envelope.appendChild(envelopeFlap);

const envelopeBody = document.createElement("div");
envelopeBody.className = "envelope-bottom";
envelope.appendChild(envelopeBody);

const chatContainer = document.createElement("div");
chatContainer.className = "chat-container";
askContainer.appendChild(chatContainer);

askContainer.addEventListener('click', chatOpen);
function chatOpen(){
    document.querySelector('.chat-container').classList.add('d-block');
    chatContainer.innerHTML = '<h4>Чим можу допомогти?</h4><input type="text" id="chatInp"><button id="chatBtn">Запитати</button>';
    askContainer.addEventListener('click', chatClose);
    function chatClose(){
        document.querySelector('.chat-container').classList.remove('d-block');
    };
};

