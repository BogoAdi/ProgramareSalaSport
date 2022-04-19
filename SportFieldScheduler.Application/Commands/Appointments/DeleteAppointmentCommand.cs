using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Application.Commands.Appointments
{
    public class DeleteAppointmentCommand : IRequest<Appointment>
    {
       public Guid Id { get; set; }
    }
}
