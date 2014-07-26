/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditPODetail.deleteSelectedPODetail_execute = function (screen) {
    // Write code here.
    screen.PurchaseOrderDetail.deleteEntity();

    return myapp.commitChanges().then(null, function fail(e) {

        myapp.cancelChanges();

        throw e;

    });
};



myapp.AddEditPODetail.ProductsActiveQuery_ItemTap_execute = function (screen) {
    // Write code here.
    var ProductsActiveQuery = screen.findContentItem("ProductsActiveQuery");
    var Products = ProductsActiveQuery.value.selectedItem;
    var Location = Products.Location;
    //var xx = Location.Id;
    screen.PurchaseOrderDetail.setProduct(Products);
    screen.PurchaseOrderDetail.setLocation(Location);
    screen.closePopup();
};
myapp.AddEditPODetail.created = function (screen) {
    // Write code here.
    screen.PurchaseOrderDetail.RequireDate = new Date();
    screen.PurchaseOrderDetail.IsReceiveComplete = false;
};