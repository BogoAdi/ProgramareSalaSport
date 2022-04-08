using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Repositories
{
    public class UserRepository : IUserRepository
    {
        private List<User> users = new List<User>();

        public async Task AddUserAsync(User user)
        {
            users.Add(user);
        }
        public async Task RemoveUserAsync(Guid id)
        {
            users.Remove(users.FirstOrDefault(x => x.Id == id));
        }

        public async Task<List<User>> GetAllUsersAsync()
        {
            return users;
        }

        public  async Task<User> GetUserByIdAsync(Guid id)
        {
           return users.FirstOrDefault(x => x.Id == id);
        }

    }
}
