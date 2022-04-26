using AutoMapper;
using MediatR;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using SportFieldScheduler.Api.Controllers;
using SportFieldScheduler.Application.Dto;
using SportFieldScheduler.Application.SportFields.Queries;
using SportFieldScheduler.Core.Domain;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace SportFieldScheduler.Test
{
    [TestClass]
    public class SportFieldControllerFixture
    {
        private readonly Mock<IMediator> _mockMediator = new Mock<IMediator>();
        private readonly Mock<IMapper> _mockMapper = new Mock<IMapper>();

        [TestMethod]
        public async Task Get_All_SportFields_GetAllSportFiledsQueryIsCalled()
        {
            //Arrange
            _mockMediator
                .Setup(m => m.Send(It.IsAny<GetAllSportFieldsQuery>(), It.IsAny<CancellationToken>()))
                .Verifiable();
           

            //Act
            var controller = new SportFieldsController(_mockMediator.Object, _mockMapper.Object);
            await controller.GetSportFields();

            _mockMediator.Verify(x => x.Send(It.IsAny<GetAllSportFieldsQuery>(), It.IsAny<CancellationToken>()), Times.Once());
       
        }


        [TestMethod]
        public async Task Get_SportField_By_Id_GetSportFieldQueryIsCalled()
        {
            _mockMediator
                .Setup(m => m.Send(It.IsAny<GetSportFieldByIdQuery>(), It.IsAny<CancellationToken>()))
                .Verifiable();
     
            var controller = new SportFieldsController(_mockMediator.Object, _mockMapper.Object);

            var g = Guid.NewGuid();
            await controller.GetSportFieldById(g);
     
            _mockMediator.Verify(x => x.Send(It.IsAny<GetSportFieldByIdQuery>(), It.IsAny<CancellationToken>()), Times.Once());
        }

        [TestMethod]
        public async Task Get_SportField_By_Id_GetSportFieldQueryWithCorrectSportFieldIdIsCalled()
        {
            Guid id=Guid.Empty;
            Guid idNew = Guid.NewGuid();
            _mockMediator
                .Setup(m => m.Send(It.IsAny<GetSportFieldByIdQuery>(), It.IsAny<CancellationToken>()))
                .Returns<GetSportFieldByIdQuery, CancellationToken>(async (q, c) =>
                {   
                    id = q.Id;
                    idNew = id;
                    return await Task.FromResult(
                      new SportField
                        {
                            Id = q.Id,
                            Address = "str Florilor number 25",
                            Category = "fotball",
                            City = "Cluj Napoca",
                            Description = "good conditions",
                            PricePerHour = 125,
                            Appointments = new List<Appointment>
                            {
                                new Appointment
                                {
                                    ClientName = "George Groza",
                                    SportFieldId = id,
                                    Date = DateTime.Now,
                                    Hours = 3,
                                    PhoneNumber = "0765431221",
                                    TotalPrice = 0,
                                    UserId = Guid.NewGuid(),
                                    Id = Guid.NewGuid()
                                }
                            }
                        });
                });


            var controller = new SportFieldsController(_mockMediator.Object,_mockMapper.Object);

            await controller.GetSportFieldById(idNew);

            Assert.AreEqual(idNew, id);
        }
    }
}