using SportFieldScheduler.Domain;
using SportFieldScheduler.Interfaces;

namespace SportFieldScheduler.Repositories
{
    internal class UserRepository : IUserRepository
    {
        private List<User> users = new List<User>();

        public void AddUser(User user)
        {

            users.Add(user);
        }
    }
}
