/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditPOReceiveDetail.created = function (screen) {
    // Write code here.
    var currentDate = new Date();
    screen.PurchaseOrderDetail.ReceiveDate = currentDate;
    screen.PurchaseOrderDetail.ReceiveQuantity = screen.PurchaseOrderDetail.RequireQuantity;
    screen.PurchaseOrderDetail.ReceiveTotalCost = screen.PurchaseOrderDetail.RequireTotalCost;
    
};
myapp.AddEditPOReceiveDetail.LocationActiveQuery_ItemTap_execute = function (screen) {
    // Write code here.
    var Query = screen.findContentItem("LocationActiveQuery");
    var Location = Query.value.selectedItem;

    screen.PurchaseOrderDetail.setLocation(Location);
    //screen.ProductDescription = Products.ProductCode + ": " + Products.ProductName;
    screen.closePopup();
};