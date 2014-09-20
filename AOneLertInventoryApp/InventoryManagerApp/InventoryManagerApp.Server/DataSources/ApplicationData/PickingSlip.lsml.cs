using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class PickingSlip
    {
        //partial void PickingSlip_Created()
        //{
        //    var queryRequisition = (from rq in OrderRequisitionDetails
        //                        where rcvPO.Product.Id == (entity.PurchaseOrderDetail.Product.Id) &&
        //                         rcvPO.PurchaseOrderDetail.Id == entity.PurchaseOrderDetail.Id
        //                        group rcvPO by rcvPO.PurchaseOrderDetail.Id into g
        //                        select new
        //                        {
        //                            sumReceive = g.Sum(rcvPO => rcvPO.ReceiveQuantity)
        //                            ,
        //                            sumTotalCost = g.Sum(rcvPO => rcvPO.ReceiveTotalCost)
        //                        }).FirstOrDefault();
        //    var sumData = queryReceive;
        //    entity.PurchaseOrderDetail.ReceiveQuantity = sumData.sumReceive;
        //    entity.PurchaseOrderDetail.ReceiveUnitCost = sumData.sumTotalCost / System.Convert.ToDecimal(sumData.sumReceive);
        //    entity.PurchaseOrderDetail.ReceiveTotalCost = sumData.sumTotalCost;

        //    updateStockOnHand(entity.Location, entity.Product, entity.LotNo, entity.ReceiveQuantity, entity.ReceiveTotalCost);
        //}
    }
}
