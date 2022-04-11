using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Application.Queries.Appointments
{
    public class GetAppointmentByIdQuery : IRequest<Appointment>
    {
        public Guid Id { get; set; }
    }
}
