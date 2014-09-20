/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditPickingSlipDetail.StockOnHandForSale_ItemTap_execute = function (screen) {
    // Write code here.
    var Query = screen.findContentItem("StockOnHandForSale");
    var location = Query.value.selectedItem.Location;
    var lot = Query.value.selectedItem.LotNo;
    var qtyAvailable = Query.value.selectedItem.QuantityOnHand;
    screen.PickingSlipDetail.setLocation(location);
    screen.PickingSlipDetail.LotNo = lot;
    screen.AvailableQuantity = qtyAvailable;
    screen.PickingSlipDetail.PickingQuantity = qtyAvailable;
    //screen.ProductDescription = Products.ProductCode + ": " + Products.ProductName;
    screen.closePopup();
};