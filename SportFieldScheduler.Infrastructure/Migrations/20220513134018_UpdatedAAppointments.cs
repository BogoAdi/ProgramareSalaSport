using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SportFieldScheduler.Infrastructure.Migrations
{
    public partial class UpdatedAAppointments : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "AppointmentId",
                table: "Users",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "AppointmentId",
                table: "SportFields",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AppointmentId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "AppointmentId",
                table: "SportFields");
        }
    }
}
