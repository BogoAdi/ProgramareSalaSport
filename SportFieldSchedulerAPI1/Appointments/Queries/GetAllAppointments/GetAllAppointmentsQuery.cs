using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldSchedulerAPI1.Appointments.Queries.GetAllAppointments
{
    public class GetAllAppointmentsQuery : IRequest<List<Appointment>>
    {
        
    }
}
