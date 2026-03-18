using Microsoft.AspNetCore.SignalR;

namespace Chat.Hubs
{
    /*
     Создайте общий чат, в котором пользователи могут обмениваться сообщениями.
     */
    public class ChatHub: Hub
    {
        public async Task Send(string message, string userName)
        {
            await Clients.All.SendAsync("Receive", message, userName);
        }

    }
}
