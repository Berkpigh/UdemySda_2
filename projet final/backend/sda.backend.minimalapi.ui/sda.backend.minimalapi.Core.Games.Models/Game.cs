using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace sda.backend.minimalapi.Core.Games.Models
{
    /// <summary>
    /// Game model, domain first
    /// </summary>
    public class Game
    {
        #region Properties
        public decimal Id { get; set; }
        public string Titre { get; set; } = string.Empty;
        public DateTime BeginDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Character { get; set; } = string.Empty;
        public bool Success { get; set; }
        #endregion
    }
}
