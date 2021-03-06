using Microsoft.EntityFrameworkCore;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    { 
        private readonly AppDbContext _context;

        public UserRepository(AppDbContext context)
        {
            _context= context;
        }

        public async Task<User> AddUserAsync(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;

        }

        public async Task<User> RemoveUserAsync(Guid id)
        {
            var user = _context.Users.FirstOrDefault(x => x.Id == id);
            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
            }
            return user;
        }

        public async Task<List<User>> GetAllUsersAsync()
        {
            return await _context.Users.Include(x=>x.Appointments).ToListAsync();
        }

        public async Task<User> GetUserByIdAsync(Guid id)
        {
            var user= await _context.Users.Include(x => x.Appointments).FirstOrDefaultAsync(x => x.Id == id);
       //   if (user == null)
       //   {
       //       throw new InvalidOperationException("User not Found");
       //   }
            return user;
        }

        public async Task<User> UpdateUserAsync(Guid id, User user)
        {
            var found = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);

            if (found != null)
            {
                found.Password = user.Password;
                found.Username = user.Username;
                found.Name = user.Name;
                found.Email = user.Email;

                await _context.SaveChangesAsync();
            }
            return found;
        }
      
    }
}
