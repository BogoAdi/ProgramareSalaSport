using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldSchedulerAPI1.Appointments.Queries.GetAppointmentById
{
    public class GetAppointmentByIdQuery : IRequest<Appointment>
    {
            public Appointment Appointment { get; set; }

    }
}
