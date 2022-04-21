using AutoMapper;
using MediatR;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using SportFieldScheduler.Api.Controllers;
using SportFieldScheduler.Application.SportFields.Queries;
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
    }
}