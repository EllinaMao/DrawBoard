using System.ComponentModel.DataAnnotations;

namespace DrawBoard.Models
{
    public class Message
    {
        public string Sender { get; set; } = "Аноним";
        [Required(ErrorMessage = "Need your text")]
        public string Content { get; set; }
    }
}
