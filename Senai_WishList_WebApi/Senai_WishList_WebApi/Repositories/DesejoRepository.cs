using Microsoft.EntityFrameworkCore;
using Senai_WishList_WebApi.Contexts;
using Senai_WishList_WebApi.Domains;
using Senai_WishList_WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_WishList_WebApi.Repositories
{
    public class DesejoRepository : IDesejoRepository
    {
        private WishListContext ctx = new WishListContext();


        public void CadastraDesejo(Desejo novoDesejo)
        {
            ctx.Desejos.Add(novoDesejo);
            ctx.SaveChanges();
        }

        public List<Desejo> WishList()
        {
            return ctx.Desejos.Include(d => d.IdUsuarioNavigation).ToList();
        }
    }
}
