using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Net;
using System.Net.Http;
using System.Text;

namespace Company.Function
{
    public static class updatecount
    {
        [FunctionName("updatecount")]
        public static HttpResponseMessage Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
            [CosmosDB(databaseName:"visitcount", collectionName: "visitcount",
                ConnectionStringSetting = "visitcount", Id = "resumename", PartitionKey = "appname")] counter counter,
                [CosmosDB(databaseName:"visitcount", collectionName: "visitcount",
                ConnectionStringSetting = "visitcount", Id = "resumename", PartitionKey = "appname")] out counter updatedCounter,
            ILogger log)
        {
            log.LogInformation("updatecount was triggered.");
            updatedCounter = counter;
            updatedCounter.count += 1;
            var jsonToReturn = JsonConvert.SerializeObject(counter);
            return new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StringContent(jsonToReturn, Encoding.UTF8, "application/json")
            };
        }
    }
}