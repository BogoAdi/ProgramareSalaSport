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
        public List<Appointment> Appointments { get; set; }
        public SportField()
        {
            Appointments= new List<Appointment>();
        
        }
        public override string ToString()
        {
            return Address + " " + City + " " + PricePerHour + " " + Category+ " "+Id;
        }

    }
}
