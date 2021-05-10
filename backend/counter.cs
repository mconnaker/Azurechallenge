using Newtonsoft.Json;

namespace Company.Function
{
    public class counter
    {
        [JsonProperty(PropertyName = "id")]
        public string Id {get; set;}
        [JsonProperty(PropertyName = "loadcount")]
        public int Count {get;set;}
    }
}