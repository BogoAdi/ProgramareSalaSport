using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportFieldScheduler.Application.Dto;
using SportFieldScheduler.Application.Queries.Users;
using SportFieldScheduler.Core.Domain;

namespace SportFieldScheduler.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        public readonly IMapper _mapper;
        public readonly IMediator _mediator;
        public UsersController(IMapper mapper, IMediator mediator)
        {
            _mediator = mediator;
            _mapper = mapper;
        }
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetUserById(Guid id)
        {
            var query = new GetUserByIdQuery { Id = id };
            var result = await _mediator.Send(query);
            if(result == null)
            {
                return NotFound();
            }
            var mappedResult = _mapper.Map<User, UserGetDto>(result);
            return Ok(mappedResult);
        }
    }
}
