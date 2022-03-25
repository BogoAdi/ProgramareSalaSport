using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportFieldScheduler.Domain
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
        public SportField( string name ,string address, string city, double pricePerHour, string category,string? description, Guid id) :base( id )
        {
            Appointments= new List<Appointment>();
            Name = name;
            Address = address;
            City = city;
            PricePerHour = pricePerHour;
            Category = category;
            Description = description;
        }
        public override string ToString()
        {
            return Address + " " + City + " " + PricePerHour + " " + Category+ " "+Id;
        }

    }
}
