using AutoMapper;
using SportFieldScheduler.Application.Commands.SportFields;
using SportFieldScheduler.Application.Dto;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Application.Profiles
{
    public class SportFieldProfile : Profile
    {
        public SportFieldProfile()
        {
            CreateMap<SportFieldPostDto, CreateSportFieldCommand>();
            CreateMap<SportField, SportFieldGetDto>();
        }

    }
}
