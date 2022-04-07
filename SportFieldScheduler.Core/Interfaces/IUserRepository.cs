using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Core.Interfaces
{
    public interface IUserRepository
    {
        void AddUser(User user);
        void RemoveUser(User user);
        void ShowAll();
        User GetUser(string user);
        void AddAppointment(Appointment appointment,User user);
       
    }
}
