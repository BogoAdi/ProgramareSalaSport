using MediatR;
using SportFieldScheduler.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportFieldScheduler.Application.Commands.Users
{
    public class UpdateUserCommand :IRequest<User>
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public List<Appointment> Appointments { get; set; }
    }
}
