using System;
using System.IO;
using System.Net.Http;
using System.Collections.Generic;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

class MainClass
{
    static async Task Main()
    {
        HttpClient client = new HttpClient();
        string s = await client.GetStringAsync("https://coderbyte.com/api/challenges/json/age-counting");

        int count = CountItemsWithAge(s, 50);
        Console.WriteLine($"Count of items with age greater than or equal to 50: {count}");
    }

    static int CountItemsWithAge(string jsonData, int level)
    {
        int count = 0;
        JObject json = JObject.Parse(jsonData);
        JArray items = (JArray)json["data"];

        foreach (var item in items)
        {
            string[] keyValuePairs = item.ToString().Split(',');
            int age = 0;

            foreach (var pair in keyValuePairs)
            {
                string[] keyValue = pair.Trim().Split('=');

                if (keyValue.Length == 2 && keyValue[0].Trim().Equals("age", StringComparison.OrdinalIgnoreCase))
                {
                    if (int.TryParse(keyValue[1].Trim(), out int Age))
                    {
                        age = Age;
                        break;
                    }
                }
            }

            if (age >= level)
            {
                count++;
            }
        }

        return count;
    }
}