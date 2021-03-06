using Microsoft.EntityFrameworkCore;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Infrastructure.Repositories
{
    public class SportFieldRepository : ISportFieldRepository
    {   
        
        private readonly AppDbContext _context;
        public SportFieldRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<SportField> RemoveSportFieldAsync(Guid id)
        {
            var sportfield = _context.SportFields.FirstOrDefault(x => x.Id == id);
            if (sportfield != null)
            {
                _context.SportFields.Remove(sportfield);
                await _context.SaveChangesAsync();
            }
            return sportfield;
        }
       
        public  async Task<SportField> AddSportFieldAsync(SportField sportField)
        {
            _context.SportFields.Add(sportField);
            await _context.SaveChangesAsync();
            return sportField;
        }

        public async  Task<List<SportField>> GetAllSportFieldAsync()
        {
            return await _context.SportFields.Include(x => x.Appointments).ToListAsync();
        }

        public async Task<SportField> GetSportFieldByIdAsync(Guid id)
        {
            var sportfield= await _context.SportFields.Include(x =>x.Appointments).FirstOrDefaultAsync(x => x.Id == id);
            if(sportfield == null)
            {
                throw new InvalidOperationException("SportField not Found");
            }
            return sportfield;
        }
        public async Task<SportField> UpdateSportFieldAsync(Guid id, SportField sportField)
        {
            var found = await _context.SportFields.FirstOrDefaultAsync(x => x.Id == id);

            if (found != null)
            {
                found.Address = sportField.Address;
                found.City = sportField.City;
                found.Category = sportField.Category;
                found.PricePerHour = sportField.PricePerHour;
                found.Description = sportField.Description;
                found.Img = sportField.Img;

                await _context.SaveChangesAsync();
            }
            return found;
        }

       
    }
}
