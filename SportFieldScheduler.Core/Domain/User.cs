

namespace SportFieldScheduler.Core.Domain
{
    public class User : Entity
    {
        public string Name { get;  set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public List<Appointment> Appointments { get; set; }
       public User()
        {   
            Appointments = new List<Appointment> ();

        }
        public override string ToString()
        {
            return Name +" "+ Email+ " "+ Username+ " ID "+Id;
        }


    }
}
