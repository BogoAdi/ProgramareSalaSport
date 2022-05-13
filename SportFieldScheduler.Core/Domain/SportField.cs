using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportFieldScheduler.Core.Domain
{
    public class SportField : Entity
    {   
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public double PricePerHour { get; set; }
        public string Category { get; set; }
        public string? Description { get; set; }
        public string Img { get; set; }
        public Guid AppointmentId { get; set; }
        public ICollection<Appointment> Appointments { get; set; } 
        public override string ToString()
        {
            return Address + " " + City + " " + PricePerHour + " " + Category+ " "+Id;
        }

    }
}
