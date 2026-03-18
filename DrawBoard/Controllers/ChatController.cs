using DrawBoard.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Chat.Controllers
{
    public class ChatController : Controller
    {
        public IActionResult Index()
        {
            var message = new Message { Sender = "", Content = "" };
            return View(message);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
