using MediatR;
using SportFieldScheduler.Core.Domain;

namespace SportFieldSchedulerAPI1.SportFields.Commands
{
    public class CreateSportFieldCommand : Entity, IRequest<SportField>
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public double PricePerHour { get; set; }
        public string Category { get; set; }
        public string? Description { get; set; }
        public List<Appointment> Appointments { get; set; }
    }
}
