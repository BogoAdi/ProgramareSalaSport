using SportFieldScheduler.Repositories;

namespace SportFieldScheduler.Domain
{
    public class Program
    {
        static List<User> users=new List<User>();
        static UserRepository userRepository = new UserRepository();
        static List<SportField> gyms;
        static List<Appointment> appointments;
        
        private void CreateNewAppointment(User u1,Appointment a1)
        {
            
            appointments.Add(a1);
            u1.AddAppointment(a1);
            foreach(SportField sf in gyms)
            {
                if (sf.Id.Equals(a1.IdField))
                {
                    sf.AddAppointment(a1);
                    break;
                }
            }        

        }
        public  static void Main(string[] args)
        { int i = 1;
        string name, username, password, email;     
            int id;
            while (i>0)
            {
                Console.WriteLine("Options:");
                Console.WriteLine("0:Exit");
                Console.WriteLine("1:Add user");
                Console.WriteLine("2:Add SportField");
                Console.WriteLine("3:Add appointment");
                Console.WriteLine("4:Show all sportsFields");
                Console.WriteLine("5:Show all appointments from a user");

                switch (i)
                {
                    case 1:
                        {
                            Console.WriteLine("ID:");
                            id= Convert.ToInt32(Console.ReadLine());
                            Console.WriteLine("Full name:");
                            name=Console.ReadLine();
                            Console.WriteLine("Email:");
                            email = Console.ReadLine();
                            Console.WriteLine("Username:");
                            username = Console.ReadLine();
                            Console.WriteLine("Username:");
                            password = Console.ReadLine();
                            User u1 = new(name, email, username, password, id);
                            //users.Add(u1);

                            userRepository.AddUser(u1);
                            userRepository.AddUser(u1);
                            userRepository.AddUser(u1);


                            break;
                        }


                   case 2:
                        {
                            Console.WriteLine("ID:");
                            id = Convert.ToInt32(Console.ReadLine());
                            Console.WriteLine("Category");
                            name = Console.ReadLine();
                            SportField sp = new SportField(1, 1, "Gara", "Paris", 12, name, "ok", id);

                            break;
                        }


                    case 3:
                        {
                            foreach(User u in users)
                            {
                                Console.Write("id: " + u.Id);

                            }
                            Console.WriteLine("ID:");
                            id = Convert.ToInt32(Console.ReadLine());
                            Console.WriteLine("Category");
                            name = Console.ReadLine();
                            break;

                        }
                    default:
                        break;
                }

            }
           
        }

    }
}