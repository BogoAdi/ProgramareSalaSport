using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Core.Interfaces
{
    public interface IUserRepository
    {
         Task AddUserAsync(User user);
         Task RemoveUserAsync(Guid id);
         Task<List<User>> GetAllUsersAsync();
         Task<User> GetUserByIdAsync(Guid id);
         Task UpdateUser(Guid id, User user);

    }
}
