/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditProductReceivePurchaseOrderDetail.PurchaseOrderDetail_postRender = function (element, contentItem) {
    // Write code here.
    if (contentItem != undefined && contentItem != null) {
        
    }
};
myapp.AddEditProductReceivePurchaseOrderDetail.created = function (screen) {
    // Write code here.
    var currDate = new Date();
    screen.ProductReceivePurchaseOrderDetail.ReceiveDate = currDate;

    if (screen.ProductReceivePurchaseOrderDetail.ReceiveNumber == undefined || screen.ProductReceivePurchaseOrderDetail.ReceiveNumber == null) {

        myapp.activeDataWorkspace.ApplicationData.QueryMaxRPNumber().execute().then(function (results) {
            var docNo = results;
            if (docNo.results.length == 0) {
                screen.ProductReceivePurchaseOrderDetail.ReceiveNumber = 'RC' + (new Date().getFullYear().toString().substring(2, 4)) + '00001';
            }
            else {
                //POYYMMNNN
                var latestNo = docNo.results[docNo.results.length - 1].ReceiveNumber.toString();
                var latestYear = docNo.results[docNo.results.length - 1].ReceiveNumber.toString().substring(2, 4);
                var latestRunningNo = docNo.results[docNo.results.length - 1].ReceiveNumber.toString().substring(4, 10);
                var curentYear = new Date().getFullYear().toString().substring(2, 4);
                var runningNo = 'RC' + (latestYear == curentYear ? latestYear : curentYear) + String('00000' + (parseInt(latestRunningNo) + 1)).slice(-5);
                screen.ProductReceivePurchaseOrderDetail.ReceiveNumber = runningNo;
            }
        });
    }

    if (screen.SelectedPODetail != undefined && screen.SelectedPODetail != null) {
        screen.ProductReceivePurchaseOrderDetail.PurchaseOrderDetail = screen.SelectedPODetail;
        screen.ProductReceivePurchaseOrderDetail.Product = screen.SelectedPODetail.Product;
        screen.ProductReceivePurchaseOrderDetail.ReceiveUnitCost = screen.SelectedPODetail.RequireUnitCost;
        if (screen.SelectedPODetail.RequireQuantity - screen.SelectedPODetail.ReceiveQuantity > 0)
            screen.ProductReceivePurchaseOrderDetail.ReceiveQuantity = screen.SelectedPODetail.RequireQuantity - screen.SelectedPODetail.ReceiveQuantity;
        else
            screen.ProductReceivePurchaseOrderDetail.ReceiveQuantity = 0;
    }
    screen.ProductReceivePurchaseOrderDetail.addChangeListener("ReceiveUnitCost", function (e) {
        calculateTotalPrice(screen)
    });

    screen.ProductReceivePurchaseOrderDetail.addChangeListener("ReceiveQuantity", function (e) {
        calculateTotalPrice(screen)
    });
};

function calculateTotalPrice(screen) {
    var receiveQty = screen.ProductReceivePurchaseOrderDetail.ReceiveQuantity;
    var itemPrice = screen.ProductReceivePurchaseOrderDetail.ReceiveUnitCost;
    if (receiveQty != undefined && receiveQty != null && itemPrice != undefined && itemPrice != null)
        screen.ProductReceivePurchaseOrderDetail.ReceiveTotalCost = (receiveQty * itemPrice).toFixed(2);
}

myapp.AddEditProductReceivePurchaseOrderDetail.LocationActiveQuery_ItemTap_execute = function (screen) {
    // Write code here.
    var Query = screen.findContentItem("LocationActiveQuery");
    var Location = Query.value.selectedItem;

    screen.ProductReceivePurchaseOrderDetail.setLocation(Location);
    //screen.ProductDescription = Products.ProductCode + ": " + Products.ProductName;
    screen.closePopup();
};