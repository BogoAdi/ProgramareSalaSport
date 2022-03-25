namespace SportFieldScheduler.Domain
{
    public class Program
    {
       static List<User> users=new List<User>();
       static List<SportField> gyms=new List<SportField>();
       static List<Appointment> appointments= new List<Appointment>();
        
        public  static void Main(string[] args)
        {   int i = 1;
            string name, username, password, email,Cname;
            string cateogry, address, city,phoneNumber;
            double pricePerHour,totalPrice;
            int hours;

            DateTime dt;

            while (i>0)
            {
                Console.WriteLine("Options:");
                Console.WriteLine("0:Exit");
                Console.WriteLine("1:Add user");
                Console.WriteLine("2:Add SportField");
                Console.WriteLine("3:Add appointment");
                Console.WriteLine("4:Show all sportsFields");
                Console.WriteLine("5:Show all appointments from a user");
                Console.WriteLine("6:Show all Users");
                Console.WriteLine("7:Show all appointments for a SportField");
                Console.WriteLine("8:Remove a SportField");
                Console.WriteLine("9:Remove an Appointment!");
                Console.WriteLine("10:Remove a user");
                Console.WriteLine("Your options:");
                i=Convert.ToInt32(Console.ReadLine());
                switch (i)
                {
                    case 1:
                        {
                            
                            Console.WriteLine("Full name:");
                            name=Console.ReadLine();
                            Console.WriteLine("Email:");
                            email = Console.ReadLine();
                            Console.WriteLine("Username:");
                            username = Console.ReadLine();
                            Console.WriteLine("Password:");
                            password = Console.ReadLine();
                            User u1 = new User(name, email, username, password, Guid.NewGuid());
                            users.Add(u1);
                            break;
                        }

                   case 2:
                        {
                            Console.WriteLine("Name");
                            name = Console.ReadLine();
                            Console.WriteLine("Category");
                            cateogry = Console.ReadLine();
                            Console.WriteLine("PricePerHour");
                            pricePerHour = Convert.ToDouble(Console.ReadLine());
                            Console.WriteLine("Adress");
                            address = Console.ReadLine();
                            Console.WriteLine("City");
                            city = Console.ReadLine();
                            SportField sp = new SportField(name,address, city, pricePerHour, cateogry, "ok", Guid.NewGuid());
                            gyms.Add(sp);
                            break;
                        }


                    case 3:
                        {
                            Console.WriteLine("Enter your username:");
                            name = Console.ReadLine();
                            var queryUser = users.Where(user => user.Username == name);
                            User u1=queryUser.FirstOrDefault();
                            Console.WriteLine("Choose a sport field!");
                            name=Console.ReadLine();
                            Console.WriteLine(" When you wish to rent the sport field and starting from what hour?");
                            Console.WriteLine("Format answer:MM dd yyyy H:mm:ss");
                            password =Console.ReadLine();
                            dt=DateTime.Parse(password);
                            Console.WriteLine(dt);
                            
                            Console.WriteLine("For how many hours?");
                            hours = Convert.ToInt32(Console.ReadLine());
                            
                            Console.WriteLine("ClientName");
                            Cname = Console.ReadLine();
                            Console.WriteLine("PhoneNumber");
                            phoneNumber = Console.ReadLine();
                            var queryField = gyms.Where(field=>field.Name == name);
                            SportField s1 = queryField.FirstOrDefault();
                            totalPrice = s1.PricePerHour * hours;
                            Appointment a1 = new Appointment(dt,hours, totalPrice, Cname,phoneNumber,s1.Id,Guid.NewGuid());
                            appointments.Add(a1);
                            s1.Appointments.Add(a1);
                            u1.Appointments.Add(a1);
                            break;

                        }
                    case 4:
                        {
                            foreach(var field in gyms)
                            {
                                Console.WriteLine(field.Address +" "+field.City+" "+field.Category+" "+field.PricePerHour);
                            }
                            break;
                        }
                    case 5:
                        {
                            Console.Write("Please enter a username: ");
                            name = Console.ReadLine();
                            var queryUser = users.Where(user => user.Username == name);
                            User u1=queryUser.FirstOrDefault();
                            Console.WriteLine(u1);
                            foreach(var appointment in u1.Appointments)
                            {
                                Console.WriteLine(appointment);
                            }
                            break;
                        }
                    case 6:
                        {
                            foreach(var user in users)
                            {
                                Console.WriteLine(user.ToString());
                            }
                            break;
                        }
                    case 7:
                        {
                            Console.Write("Please enter the name of the  sportfield: ");
                            name = Console.ReadLine();
                            var queryField = gyms.Where(field => field.Name == name);
                            SportField s1 = queryField.FirstOrDefault();
                            Console.WriteLine(s1);
                            foreach (var appointment in s1.Appointments)
                            {
                                Console.WriteLine(appointment);
                            }
                            break;
                        }
                //   case 8:
                //       {
                //           break;
                //       }
                //   case 9:
                //       {
                //           break ;
                //       }
                //   case 10:
                //       {
                //           break;
                //       }
                    default:
                        break;
                }

            }
           
        }

    }
}