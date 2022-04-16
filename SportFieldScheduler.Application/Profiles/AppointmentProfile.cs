using AutoMapper;
using SportFieldScheduler.Application.Dto;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Application.Profiles
{
    public class AppointmentProfile : Profile
    {
        public AppointmentProfile()
        {
            CreateMap<Appointment, AppointmentGetDto>();
        }
    }
}
