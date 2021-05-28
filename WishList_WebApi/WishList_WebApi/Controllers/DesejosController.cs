using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai_WishList_WebApi.Interfaces;
using Senai_WishList_WebApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WishList_WebApi.Domains;

namespace Senai_WishList_WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class DesejosController : ControllerBase
    {
        private IDesejoRepository _desejo { get; set; }

        public DesejosController()
        {
            _desejo = new DesejoRepository();
        }


        [HttpGet]
        public IActionResult ListarDesejo()
        {
            return Ok(_desejo.WishList());
        }

        [HttpPost]
        public IActionResult CadastrarDesejo(Desejo novoDesejo)
        {
            try
            {
                _desejo.CadastraDesejo(novoDesejo);

                return StatusCode(201);
            }
            catch (Exception error)
            {
                return BadRequest(error);
                
            }
        }
    }
}
