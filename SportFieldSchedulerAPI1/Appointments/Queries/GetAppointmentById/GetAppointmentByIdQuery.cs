using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldSchedulerAPI1.Appointments.Queries.GetAppointmentById
{
    public class GetAppointmentByIdQuery :Entity, IRequest<Appointment>
    {

    }
}
