using AutoMapper;
using SportFieldScheduler.Application.Dto;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Application.Profiles
{
    public class UserProfile : Profile
    {

            public UserProfile()
            {
               // CreateMap<UserPutPostDto, AddUser>();
                CreateMap<User, UserGetDto>();
              //  CreateMap<Appointment, UserAppointmentDto>();

            }

    }
}
