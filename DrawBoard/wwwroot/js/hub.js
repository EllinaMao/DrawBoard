const hubConnection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .build();

// Получение
hubConnection.on("Receive", function (message, userName) {
    const chatroom = document.getElementById("chatroom");

    // имя пользователя
    const userNameElem = document.createElement("b");
    userNameElem.textContent = `${userName}: `;

    // время
    const timeElem = document.createElement("small");
    timeElem.className = "text-muted";
    timeElem.textContent = ` (${new Date().toLocaleTimeString()})`;

    // сообщение
    const elem = document.createElement("p");
    elem.className = "mb-2 p-2 bg-white rounded";
    elem.appendChild(userNameElem);
    elem.appendChild(timeElem);
    elem.appendChild(document.createElement("br"));
    elem.appendChild(document.createTextNode(message));

    // приклеили в конце
    chatroom.appendChild(elem);

    // вниз в конец
    chatroom.scrollTop = chatroom.scrollHeight;
});

// соединение
hubConnection.start()
    .then(function () {
        document.getElementById("sendBtn").disabled = false;
    })
    .catch(function (err) {
        console.error(err.toString());
    });

