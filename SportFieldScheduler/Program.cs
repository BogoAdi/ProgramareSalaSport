
using SportFieldScheduler.Repositories;
using SportFieldScheduler.Domain;

namespace SportFieldScheduler
{
    public class Program
    {

        static UserRepository r1=new UserRepository();
        static SportFieldRepository r2=new SportFieldRepository();
        static AppointmentRepository r3=new AppointmentRepository();
        public  static void Main(string[] args)
        {   int i = 1;
            string name, username, password, email,Cname, fieldName;
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
                            User u1 = new User { Name=name, Email= email, Username= username, Password =password, Id=Guid.NewGuid() };
                            r1.AddUser(u1);
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
                            SportField sp = new SportField { Name=name,Address= address,City= city,PricePerHour= pricePerHour,Category= cateogry,Description= "ok",Id= Guid.NewGuid() };
                            r2.AddSportField(sp);
                            break;
                        }


                    case 3:
                        {
                            Console.WriteLine("Enter your username:");
                            name = Console.ReadLine();
                            User selectedUser = r1.GetUser(name);
                            if (selectedUser == null) break;
                            Console.WriteLine(selectedUser.ToString());
                            Console.WriteLine("Choose a sport field!");
                            fieldName=Console.ReadLine();
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
                            var selectedField = r2.GetSportField(fieldName);
                            totalPrice = selectedField.PricePerHour * hours;
                            Appointment a1 = new Appointment {Date= dt, Hours= hours, TotalPrice= totalPrice,ClientName= Cname,PhoneNumber= phoneNumber,IdField= selectedField.Id, Id= Guid.NewGuid() };
                            r3.AddAppointment(a1);
                            r1.AddAppointment(a1,selectedUser);
                            r2.AddAppointment(a1, selectedField);
                            break;

                        }
                    case 4:
                        {
                            r2.ShowAll();
                            break;
                        }
                    case 5:
                        {
                            Console.Write("Please enter a username: ");
                            name = Console.ReadLine();
                            User u1 = r1.GetUser( name);
                           
                            Console.WriteLine(u1);
                            foreach(var appointment in u1.Appointments)
                            {
                                Console.WriteLine(appointment);
                            }
                            break;
                        }
                    case 6:
                        {
                            r1.ShowAll();
                            break;
                        }
                    case 7:
                        {
                            Console.Write("Please enter the name of the  sportfield: ");
                            name = Console.ReadLine();

                            SportField s1 = r2.GetSportField(name);
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