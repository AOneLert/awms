/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditPOReceiveDetail.created = function (screen) {
    // Write code here.
    var currentDate = new Date();
    screen.PurchaseOrderDetail.ReceiveDate = currentDate;
    screen.PurchaseOrderDetail.ReceiveQuantity = screen.PurchaseOrderDetail.RequireQuantity;
    screen.PurchaseOrderDetail.ReceiveUnitCost = screen.PurchaseOrderDetail.RequireUnitCost;
    screen.PurchaseOrderDetail.ReceiveTotalCost = screen.PurchaseOrderDetail.RequireTotalCost;
    
    screen.PurchaseOrderDetail.addChangeListener("ReceiveUnitCost", function (e) {
        calculateTotalPrice(screen)
    });

    screen.PurchaseOrderDetail.addChangeListener("ReceiveQuantity", function (e) {
        calculateTotalPrice(screen)
    });
};

function calculateTotalPrice(screen) {
    var receiveQty = screen.PurchaseOrderDetail.ReceiveQuantity;
    var itemPrice = screen.PurchaseOrderDetail.ReceiveUnitCost;
    if (receiveQty != undefined && receiveQty != null && itemPrice != undefined && itemPrice != null)
        screen.PurchaseOrderDetail.ReceiveTotalCost = (receiveQty * itemPrice).toFixed(2);
}

myapp.AddEditPOReceiveDetail.LocationActiveQuery_ItemTap_execute = function (screen) {
    // Write code here.
    var Query = screen.findContentItem("LocationActiveQuery");
    var Location = Query.value.selectedItem;

    screen.PurchaseOrderDetail.setLocation(Location);
    //screen.ProductDescription = Products.ProductCode + ": " + Products.ProductName;
    screen.closePopup();
};