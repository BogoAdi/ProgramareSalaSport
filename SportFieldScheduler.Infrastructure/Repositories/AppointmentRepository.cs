﻿
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

        public async Task AddAppointmentAsync(Appointment appointment)
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
                _context.Appointments.Add(appointment);
                await _context.SaveChangesAsync();
            }
          //  return null;
        }

        public async Task<Appointment> RemoveAppointmentAsync(Guid id)
        {
           var appointment= _context.Appointments.FirstOrDefault(x=>x.Id == id);
            if (appointment != null)
            {
                _context.Appointments.Remove(appointment);
                await _context.SaveChangesAsync();
            }
            return appointment;

        }

        public async Task<List<Appointment>> GetAllAppointmentsAsync()
        {
            return await _context.Appointments.ToListAsync();
        }

        public async Task<Appointment> GetAppointmentByIdAsync(Guid id)
        {
            var found = await _context.Appointments.FirstOrDefaultAsync(x => x.Id == id);
            if(found == null)
            {
                throw new InvalidOperationException("Appointment not Found");
            }
            return  found;
        }

        public async Task UpdateAppointment(Guid id, Appointment appointment)
        {
            var found = await _context.Appointments.FirstOrDefaultAsync(x => x.Id == id);
            if(found != null)
            {
                     found.PhoneNumber = appointment.PhoneNumber;
                     found.Hours = appointment.Hours;

                         //Verification for Date...

                 bool freeSlot = true;
                 foreach (Appointment appointmentIn in _context.Appointments)
                 {
                       if (appointment.SportFieldId == found.SportFieldId)
                       {
                           if (appointment.Date >= found.Date &&
                               found.Date.AddHours(Convert.ToDouble(found.Hours))
                               > appointment.Date)
                           {
                               freeSlot = false;
                               break;
                           }
                           if (appointment.Date < found.Date &&
                              appointment.Date.AddHours(Convert.ToDouble(found.Hours))
                              > found.Date)
                           {
                               freeSlot = false;
                               break;
                           }
                       }
                 }
                 if (freeSlot)
                     found.Date = appointment.Date;
                 found.ClientName = appointment.ClientName;
                 await _context.SaveChangesAsync();

            }
        }
    }
}