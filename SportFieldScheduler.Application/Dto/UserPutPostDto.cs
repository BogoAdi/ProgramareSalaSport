using SportFieldScheduler.Core.Domain;
using System.ComponentModel.DataAnnotations;

namespace SportFieldScheduler.Application.Dto
{
    public class UserPutPostDto
    {
        [Required]
        [MaxLength(30)]
        [MinLength(5)]
        public string  Name{ get; set; }
        [Required]
        [MaxLength(16)]
        [MinLength(8)]
        public string Password { get; set; }

        [Required]
        [MaxLength(32)]
        [MinLength(10)]
        public string Email { get; set; }

        [Required]
        [MaxLength(25)]
        [MinLength(5)]
        public string Username { get; set; }
        [Required]
        [MaxLength(10)]
        [MinLength(10)]
        public string PhoneNumber { get; set; }
        [Required]
        public Role Role { get; set; }

        //  public Guid Id { get; set; }

    }
}
