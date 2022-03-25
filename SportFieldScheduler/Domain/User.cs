using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportFieldScheduler.Domain
{
    public class User : Entity
    {
  
        public string Name { get;  set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public List<Appointment> Appointments { get; set; }
       public User(string name, string email,string username,string password, Guid id ) : base ( id )
        {
            Name = name;
            Email = email;
            Username = username;
            Password = password;
        }
        public override string ToString()
        {
            return Name +" "+ Email+ " "+ Username+ " ID "+Id;
        }


    }
}
