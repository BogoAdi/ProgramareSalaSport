

using Microsoft.EntityFrameworkCore;
using SportFieldScheduler.Domain;

namespace SportFieldScheduler.Infrastructure
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<SportField> SportFields { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Appointment> Appointments { get; set; }

    }
}
