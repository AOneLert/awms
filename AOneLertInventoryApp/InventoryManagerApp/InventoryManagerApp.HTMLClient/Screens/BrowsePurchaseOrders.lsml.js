/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowsePurchaseOrders.POStatusDescription_postRender = function (element, contentItem) {
    // Write code here.

};
myapp.BrowsePurchaseOrders.PurchaseOrderStatus_postRender = function (element, contentItem) {
    // Write code here.
    //if (contentItem.value == true) {
    //    contentItem.screen.details.properties.POStatusDescription.value = "มีรายการรอรับ";
    //}
    //else {
    //    contentItem.screen.details.properties.POStatusDescription.value = "ปิดการสั่งซื้อ";
    //};
};
myapp.BrowsePurchaseOrders.AddPurchaseOrder_execute = function (screen) {
    // Write code here.
    //myapp.showAddEditPurchaseOrder(null, {
    //    beforeShown: function (addNewScreen) {
    //        var newPO = new myapp.PurchaseOrder();
    //        var crrDate = new Date();
    //        var docYear = crrDate.format("yy")
    //        var filter = "substringof('PO" + docYear + "',PurchaseOrderNumber)";
    //        myapp.activeDataWorkspace.ApplicationData.PurchaseOrders.filter(filter).execute()
    //            .then(function (result) {
    //                var LastPONo = result.results[result.results.length - 1];
    //                var newNumber = parseInt(LastPONo.PONumber.substring(4)) + 1;
    //                var tempDoc = "000000";
    //                var NewPONo = 'PO' + docYear + tempDoc.substring(0, tempDoc.length - newNumber.toString().length) + newNumber.toString();
    //                newPO.PurchaseOrderNumber = NewPONo;
    //            }, function () {
    //                newPO.PurchaseOrderNumber = 'PO' + docYear + '000001';
    //            });
    //        newPO.PurchaseOrderDate = crrDate;
    //        newPO.PurchaseOrderStatus = true;
    //        addNewScreen.PurchaseOrder = newPO;
    //    }
    //});
};