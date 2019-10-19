using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MessingAround.DAL.UnitOfWork
{
  public class MAUnitOfWork
  {
    private readonly MAContext dbContext;

    public MAUnitOfWork()
    {
      this.dbContext = new MAContext();
    }

    public MAUnitOfWork(MAContext dbContext)
    {
      this.dbContext = dbContext;
    }
    // repos
  }
}
