using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class ProductReceiveBalanceForwardDetail
    {
        partial void CostAmount_Compute(ref decimal result)
        {
            // Set result to the desired field value
            result = CostPrice * Convert.ToDecimal(ReceivedQuantity);
        }
    }
}
