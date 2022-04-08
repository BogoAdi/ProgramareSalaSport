using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldSchedulerAPI1.Users.Commands
{
    public class AddUserCommand : Entity, IRequest<Guid>
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public List<Appointment> Appointments { get; set; }
    }
}
