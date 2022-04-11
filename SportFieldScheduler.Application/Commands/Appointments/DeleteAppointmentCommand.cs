using MediatR;

namespace SportFieldScheduler.Application.Commands.Appointments
{
    public class DeleteAppointmentCommand : IRequest<Guid>
    {
       public Guid Id { get; set; }
    }
}
