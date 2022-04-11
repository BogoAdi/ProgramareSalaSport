using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Application.Queries.Appointments
{
    public class GetAllAppointmentsQuery : IRequest<List<Appointment>>
    {
        
    }
}
