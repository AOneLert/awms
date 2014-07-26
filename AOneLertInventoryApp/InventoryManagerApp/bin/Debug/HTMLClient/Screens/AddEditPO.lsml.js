/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditPO.created = function (screen) {
    // Write code here.
    //if (screen.PurchaseOrder.PurchaseOrderNumber == undefined)
    //    screen.PurchaseOrder.PurchaseOrderNumber = "xxxx";
    //screen.PurchaseOrder.PurchaseOrderDate = Date.now;
    var currDate = new Date();
    screen.PurchaseOrder.PurchaseOrderDate = currDate;

    if (screen.PurchaseOrder.PurchaseOrderNumber == undefined || screen.PurchaseOrder.PurchaseOrderNumber == null) {

        myapp.activeDataWorkspace.ApplicationData.QueryMaxPONumber().execute().then(function (results) {
            var docNo = results;
            if (docNo.results.length == 0)
                screen.PurchaseOrder.PurchaseOrderNumber = 'PO' + (new Date().getFullYear().toString().substring(2, 4)) + (new Date().getMonth().toString().length == 1 ? '0' + new Date().getMonth().toString() : new Date().getMonth().toString()) + '001';
            else {
                //POYYMMNNN
                var latestNo = docNo.results[0].PurchaseOrderNumber.toString();
                var latestYear = docNo.results[0].PurchaseOrderNumber.toString().substring(2, 4);
                //var latestMonth = docNo.results[0].PurchaseOrderNumber.toString().substring(4, 6);
                var latestRunningNo = docNo.results[0].PurchaseOrderNumber.toString().substring(4, 10);

                var curentYear = new Date().getFullYear().toString().substring(2, 4);
                //var curentMonth = new Date().getMonth().toString().length == 1 ? '0' + new Date().getMonth().toString() : new Date().getMonth().toString();

                var runningNo = 'PO' + (latestYear == curentYear ? latestYear : curentYear) + String('00000' + (parseInt(latestRunningNo) + 1)).slice(-5);
                screen.PurchaseOrder.PurchaseOrderNumber = runningNo;
                screen.PurchaseOrder.PurchaseOrderStatus = true;
            }
        });
    }


};
myapp.AddEditPO.PurchaseOrderNumber_postRender = function (element, contentItem) {
    // Write code here.
    //if (contentItem.screen.PurchaseOrder.PurchaseOrderNumber == undefined || contentItem.screen.PurchaseOrder.PurchaseOrderNumber == null) {

    //    myapp.activeDataWorkspace.ApplicationData.QueryMaxPONumber().execute().then(function (results) {
    //        var docNo = results;
    //        if (docNo.results.length == 0)
    //            contentItem.value = 'PO' + (new Date().getFullYear().toString().substring(2, 4)) + (new Date().getMonth().toString().length == 1 ? '0' + new Date().getMonth().toString() : new Date().getMonth().toString()) + '001';
    //        else {
    //            //POYYMMNNN
    //            var latestNo = docNo.results[0].PurchaseOrderNumber.toString();
    //            var latestYear = docNo.results[0].PurchaseOrderNumber.toString().substring(2, 4);
    //            //var latestMonth = docNo.results[0].PurchaseOrderNumber.toString().substring(4, 6);
    //            var latestRunningNo = docNo.results[0].PurchaseOrderNumber.toString().substring(4, 10);

    //            var curentYear = new Date().getFullYear().toString().substring(2, 4);
    //            //var curentMonth = new Date().getMonth().toString().length == 1 ? '0' + new Date().getMonth().toString() : new Date().getMonth().toString();

    //            var runningNo = 'PO' + (latestYear == curentYear ? latestYear : curentYear) + String('00000' + (parseInt(latestRunningNo) + 1)).slice(-5);
    //            contentItem.value = runningNo;
    //        }
    //    });
    //}
};
myapp.AddEditPO.SupplierActiveQuery_ItemTap_execute = function (screen) {
    // Write code here.
    var Query = screen.findContentItem("SupplierActiveQuery");
    var Supplier = Query.value.selectedItem;

    screen.PurchaseOrder.setSupplier(Supplier);
    //screen.ProductDescription = Products.ProductCode + ": " + Products.ProductName;
    screen.closePopup();
};
myapp.AddEditPO.PurchaseOrderStatus_postRender = function (element, contentItem) {
    // Write code here.
    if (contentItem.value) {
        contentItem.screen.POStatusDescription = "xx";
    } else {
        contentItem.screen.POStatusDescription = "yy";
    }
};

