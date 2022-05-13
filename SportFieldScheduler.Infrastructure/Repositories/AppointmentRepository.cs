
using Microsoft.EntityFrameworkCore;
using SportFieldScheduler.Core.Domain;
using SportFieldScheduler.Core.Interfaces;

namespace SportFieldScheduler.Infrastructure.Repositories
{
    public class AppointmentRepository : IAppointmentRepository
    {
        private readonly AppDbContext _context;

        public AppointmentRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Appointment> AddAppointmentAsync(Appointment appointment)
        {
            //logic for allowing free dates
            bool freeSlot = true;

            foreach(Appointment appointment1 in _context.Appointments)
            {
                if (appointment.SportFieldId == appointment1.SportFieldId) 
                {
                    if (appointment.Date >= appointment1.Date &&
                        appointment1.Date.AddHours(Convert.ToDouble(appointment1.Hours))
                        > appointment.Date)
                    {
                        freeSlot = false;
                        break;
                    }
                    if (appointment.Date < appointment1.Date &&
                       appointment.Date.AddHours(Convert.ToDouble(appointment1.Hours))
                       > appointment1.Date)
                    {
                        freeSlot = false;
                        break;
                    }

                }

            }
         // Console.WriteLine();
         // Console.WriteLine(freeSlot);
         // Console.WriteLine();
            if (freeSlot)
            {
              var res = _context.Appointments.Add(appointment);
                await _context.SaveChangesAsync();
                
            }
            var isAdded = await _context.Appointments.FirstOrDefaultAsync(x => x.Id == appointment.Id);
            return isAdded;
       
        }

        public async Task<Appointment> RemoveAppointmentAsync(Guid id)
        {
           var appointment = await _context.Appointments.FirstOrDefaultAsync(x => x.Id == id);
            if (appointment != null)
            {
                _context.Appointments.Remove(appointment);
                await _context.SaveChangesAsync();
            }
            return appointment;

        }

        public async Task<List<Appointment>> GetAllAppointmentsAsync()
        {
            return await _context.Appointments
                .Include(x =>x.User)
                .Include(x => x.SportField)
                .ToListAsync();
        }

        public async Task<Appointment> GetAppointmentByIdAsync(Guid id)
        {
            var found = await _context.Appointments
                .Include(x => x.User)
                .Include(x => x.SportField)
                .FirstOrDefaultAsync(x => x.Id == id);
            if(found == null)
            {
                throw new InvalidOperationException("Appointment not Found");
            }
            return  found;
        }

       
    }
}
