using Senai_WishList_WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_WishList_WebApi.Interfaces
{
    interface IDesejoRepository
    {
        List<Desejo> WishList();

        void CadastraDesejo(Desejo novoDesejo);
    }
}
