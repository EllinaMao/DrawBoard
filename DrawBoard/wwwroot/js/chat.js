// Отправка сообщения
document.getElementById("sendBtn").addEventListener("click", function () {
    sendMessage();
});

// Отправка сообщения по ентеру, так удобнее
document.getElementById("message").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
        event.preventDefault();
    }
});


function sendMessage() {
    const userName = document.getElementById("userName").value.trim() || "Секретный агент Фбр";
    const message = document.getElementById("message").value.trim();

    if (message === "") {
        alert("Введите сообщение!");
        return;
    }

    hubConnection.invoke("Send", message, userName)
        .catch(function (err) {
            console.error(err.toString());
        });

    // очистили поле ввода
    document.getElementById("message").value = "";
}
