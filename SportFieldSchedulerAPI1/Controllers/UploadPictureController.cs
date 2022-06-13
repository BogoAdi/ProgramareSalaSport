using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.AspNetCore.Mvc;


namespace SportFieldScheduler.Api.Controllers
{
        [Produces("application/json")]
        [Route("api/[controller]")]


        public class UploadPictureController : Controller
        {
            private readonly string _azureConnectionString;
            public UploadPictureController(IConfiguration configuration)
            {
                _azureConnectionString = "DefaultEndpointsProtocol=https;AccountName=sportfieldscheduler;AccountKey=q+H40meNcgFuT79a0tpU0JXHmpwDP+yiNzV13YSXbPc7xss7albFhIPBCyIbzlck7naa4C5qycTF+ASt3XUKaQ==;EndpointSuffix=core.windows.net";
            }

            [HttpPost]
            public async Task<IActionResult> Upload(IFormFile file)
            {
                try
                {
                    // var formCollection = await Request.ReadFormAsync
                    if (file != null && file.Length > 0)
                    {
                        var container = new BlobContainerClient(_azureConnectionString, "images");
                        var createResponse = await container.CreateIfNotExistsAsync();
                        if (createResponse != null && createResponse.GetRawResponse().Status == 201)
                            await container.SetAccessPolicyAsync(Azure.Storage.Blobs.Models.PublicAccessType.Blob);
                        var blob = container.GetBlobClient(file.FileName);
                        await blob.DeleteIfExistsAsync(DeleteSnapshotsOption.IncludeSnapshots);
                        using (var fileStream = file.OpenReadStream())
                        {
                            await blob.UploadAsync(fileStream, new BlobHttpHeaders { ContentType = file.ContentType });
                        }
                        return Ok(blob.Uri.ToString());
                    }
                    return BadRequest();
                }
                catch (Exception ex)
                {
                    return StatusCode(500, $"Internal server error: {ex}");
                }
            }
        }

    }
