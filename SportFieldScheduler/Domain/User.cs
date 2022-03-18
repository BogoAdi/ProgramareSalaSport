using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportFieldScheduler.Domain
{
    public class User : Entity
    {
  
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public List<Appointment> Appointments { get; set; }
       public User(string name, string email,string username,string password, int id ) : base ( id )
        {
            Name = name;
            Email = email;
            Username = username;
            Password = password;
        }
        public void AddAppointment(Appointment at)
        {
            Appointments.Add(at);
            //Console.WriteLine("");
        }


    }
}
