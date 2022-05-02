using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Core.Interfaces
{
    public interface IUserRepository
    {
         Task <User> AddUserAsync(User user);
         Task<User> RemoveUserAsync(Guid id);
         Task<List<User>> GetAllUsersAsync();
         Task<User> GetUserByIdAsync(Guid id);
         Task<User> UpdateUserAsync(Guid id, User user);

    }
}
