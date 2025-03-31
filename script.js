function addMessage(){
    const messageI = document.createElement("div");
    messageI.className =  "MessageI"
    const myName = document.createElement("h3");
    myName.textContent = "Eu";
    messageI.appendChild(myName);
    const messageContentI = document.createElement("div");
    messageContentI.className = "MessageContentI";
    const message = document.createElement("p");
    const myMessage = document.getElementById("myMessage");
    message.innerHTML = myMessage.value;
    messageContentI.appendChild(message);

    messageI.appendChild(messageContentI);
    const chatMessages = document.querySelector(".ChatMessages");
    chatMessages.appendChild(messageI);
}

function Hello(){
 const message = document.getElementById("myMessage");
 console.log(message.value);
}