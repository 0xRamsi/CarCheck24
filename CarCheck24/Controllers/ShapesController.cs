using CarCheck24.Models;
using CarCheck24.Persistance;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace CarCheck24.Controllers
{
    public class ShapesController : Controller
    {
        private readonly IMyLogger myLogger;

        public ShapesController(IMyLogger logger)
        {
            myLogger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public string GetHistory()
        {
            return JsonConvert.SerializeObject(myLogger.getData(10));
        }

        public string Calculate(string shape, string parameters)
        {
            IShape shapeObj = ShapesFactory.GetShape(shape, parameters);
            double circumference  = shapeObj.CalculateCircumference();

            // Persist
            myLogger.Log(shape, parameters, circumference.ToString());

            // return result as JSON {shape, parameters, circumference}
            var res = new { shape, parameters, circumference };
            return JsonConvert.SerializeObject(res);
        }
    }
}
