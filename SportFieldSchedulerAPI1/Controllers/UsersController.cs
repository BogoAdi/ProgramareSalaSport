using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportFieldScheduler.Application.Commands.Users;
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
        [HttpPost]
        public async Task<IActionResult> CreateUser(UserPutPostDto user)
        {
            var command = _mapper.Map<UserPutPostDto, AddUserCommand>(user);
            var created = await _mediator.Send(command);
            var dto = _mapper.Map<User, UserGetDto>(created);
            return CreatedAtAction(nameof(GetUserById), new { id = created.Id }, dto);
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var result = await _mediator.Send(new GetAllUsersQuery());
            var mappedResult = _mapper.Map<List<UserGetDto>>(result);
            return Ok(mappedResult);
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

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteSportField(Guid id)
        {
            var command = new DeleteUserCommand { Id = id };
            var result = await _mediator.Send(command);

            if (result.Equals(Guid.Empty))
                return NotFound();

            return NoContent();
        }
        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateUser(Guid id, [FromBody] UserPutPostDto user)
        {
            var command = new UpdateUserCommand
            {
                Id = id,
               Username = user.Username,
               Password = user.Password,
               Name = user.Name,
               Email = user.Email
            };
            var result = await _mediator.Send(command);
            if (result == null)
            {
                return NotFound();
            }
            var mappedResult = _mapper.Map<User, UserGetDto>(result);
            return Ok(mappedResult);
        }
    }
}
