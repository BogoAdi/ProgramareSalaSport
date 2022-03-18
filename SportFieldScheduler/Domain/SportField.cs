using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportFieldScheduler.Domain
{
    public class SportField : Entity
    {
        
        public float Length { get; set; }
        public float Width { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public float PricePerHour { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public List<Appointment> Appointments { get; set; }
        public SportField(float length,float width, string address, string city, float pricePerHour, string category,string description,int id) :base( id )
        {
            Length = length;
            Width = width;
            Address = address;
            City = city;
            PricePerHour = pricePerHour;
            Category = category;
            Description = description;
        }
        public void AddAppointment(Appointment at)
        {
            appointments.Add(at);

        }
    }
}
