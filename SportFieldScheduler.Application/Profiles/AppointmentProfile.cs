using AutoMapper;
using SportFieldScheduler.Application.Commands.Appointments;
using SportFieldScheduler.Application.Dto;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Application.Profiles
{
    public class AppointmentProfile : Profile
    {
        public AppointmentProfile()
        {

            CreateMap<AppointmentPostDto, CreateAppointmentCommand>()
                .ForMember(dest => dest.IdField, act => act.MapFrom(src => src.SportFieldId))
                .ForMember(dest => dest.IdUser, act => act.MapFrom(src => src.UserId));
            CreateMap<Appointment, AppointmentGetDto>();
        }
    }
}
