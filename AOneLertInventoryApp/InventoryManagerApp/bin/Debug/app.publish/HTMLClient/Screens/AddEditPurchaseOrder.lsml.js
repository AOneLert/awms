/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditPurchaseOrder.created = function (screen) {
    // Write code here.
    //var contentSupplier = screen.PurchaseOrder.Supplier;
    //if (contentSupplier != undefined || contentSupplier != null) {
    //    screen.findContentItem("PurchaseOrderDate").isEnabled = false;
    //    screen.findContentItem("Supplier").isEnabled = false;
    //};

    //var newPO = new myapp.PurchaseOrder();
    //var crrDate = new Date();
    //var docYear = crrDate.format("yy")
    //var filter = "substringof('PO" + docYear + "',PurchaseOrderNumber)";
    //myapp.activeDataWorkspace.ApplicationData.PurchaseOrders.filter(filter).execute()
    //.then(function (result) {
    //    var LastPONo = result.results[result.results.length - 1];
    //    var newNumber = parseInt(LastPONo.PONumber.substring(4)) + 1;
    //    var tempDoc = "000000";
    //    var NewPONo = 'PO' + docYear + tempDoc.substring(0, tempDoc.length - newNumber.toString().length) + newNumber.toString();
    //    newPO.PurchaseOrderNumber = NewPONo;
    //}, function () {
    //    newPO.PurchaseOrderNumber = 'PO' + docYear + '000001';
    //});
    //newPO.PurchaseOrderDate = crrDate;
    //newPO.PurchaseOrderStatus = true;
    //screen.PurchaseOrder = newPO;
};

myapp.AddEditPurchaseOrder.PurchaseOrderStatus_postRender = function (element, contentItem) {
    // Write code here.
    if (contentItem.value == true) {
        contentItem.screen.details.properties.POStatusDescription.value = "มีรายการรอรับ";
    }
    else {
        contentItem.screen.details.properties.POStatusDescription.value = "ปิดการสั่งซื้อ";
    };
};