using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldSchedulerAPI1.Appointments.Commands
{
        public class CreateAppointmentCommand : Entity, IRequest<Guid>
        {

            public Guid IdField { get; set; }
            public Guid IdUser { get; set; }
            public DateTime Date { get; set; }
            public int Hours { get; set; }
            public double TotalPrice { get; set; }
            public string ClientName { get; set; }
            public string PhoneNumber { get; set; }
        }
}
