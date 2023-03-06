using Newtonsoft.Json;

namespace CarCheck24.Persistance
{
    public class MyFileLogger : IMyLogger
    {
        private readonly string path;
        public MyFileLogger(IConfiguration configuration) {
            path = configuration["loggerPath"] ?? "a.txt";
            if (!File.Exists(path))
            {
                File.Create(path);
            }
        }
        public MyFileLogger(string filePath) {
            path = filePath;
            if (!File.Exists(path)) {
                File.Create(path);
            }
        }

        public IEnumerable<string> getData(int limit)
        {
            var lines = File.ReadLines(path).ToArray();
            IEnumerable<string> res = new List<string>();
            for (int i = Math.Max(0, lines.Count() - limit); i < lines.Count(); i++)
            {
                res = res.Append(lines[i]);
            }

            return res;
        }

        public void Log(string shape, string parameters, string circumference)
        {
            string TextToWrite = JsonConvert.SerializeObject(new { shape, parameters, circumference });
            File.AppendAllLines(path, new string[] { TextToWrite });
        }
    }
}
