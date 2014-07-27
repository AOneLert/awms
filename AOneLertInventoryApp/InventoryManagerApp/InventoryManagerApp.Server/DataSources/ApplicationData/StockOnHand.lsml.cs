using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class StockOnHand
    {
        partial void AvailableForSaleDescription_Compute(ref string result)
        {
            // Set result to the desired field value
            if (this.IsAvailableForSale)
            {
                result = "พร้อมขาย";
            }
            else
            {
                result = "รอกำหนดราคาขาย";
            }
        }
    }
}
