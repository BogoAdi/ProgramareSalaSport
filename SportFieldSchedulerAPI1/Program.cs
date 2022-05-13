using MediatR;
using Microsoft.EntityFrameworkCore;

using SportFieldScheduler.Application;
using SportFieldScheduler.Core.Interfaces;
using SportFieldScheduler.Infrastructure;
using SportFieldScheduler.Infrastructure.Repositories;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("https://localhost:44413").AllowAnyMethod();

                      });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddMediatR(typeof(Marker));
builder.Services.AddAutoMapper(typeof(Marker));


var cs = builder.Configuration.GetConnectionString("Default");
builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(cs));

builder.Services.AddScoped<IUserRepository,UserRepository>();
builder.Services.AddScoped<ISportFieldRepository, SportFieldRepository>();
builder.Services.AddScoped<IAppointmentRepository,AppointmentRepository>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(MyAllowSpecificOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
