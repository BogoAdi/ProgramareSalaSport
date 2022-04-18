using AutoMapper;
using SportFieldScheduler.Application.Commands.Users;
using SportFieldScheduler.Application.Dto;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Application.Profiles
{
    public class UserProfile : Profile
    {

            public UserProfile()
            {
                CreateMap<UserPutPostDto, AddUserCommand>();
                CreateMap<User, UserGetDto>();
              //  CreateMap<Appointment, UserAppointmentDto>();

            }

    }
}
