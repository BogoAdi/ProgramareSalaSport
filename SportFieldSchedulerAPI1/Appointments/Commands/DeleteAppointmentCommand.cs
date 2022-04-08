using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldSchedulerAPI1.Appointments.Commands
{
    public class DeleteAppointmentCommand :Entity, IRequest<Guid>
    {
       

    }
}
