/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditPOReceiveDetail.created = function (screen) {
    // Write code here.
    var currentDate = new Date();
    screen.PurchaseOrderDetail.ReceiveDate = currentDate;

    screen.PurchaseOrderDetail.ReceiveQuantity = screen.PurchaseOrderDetail.RequireQuantity;
    
};