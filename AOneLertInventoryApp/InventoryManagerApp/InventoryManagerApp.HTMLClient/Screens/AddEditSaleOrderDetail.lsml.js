/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditSaleOrderDetail.deleteSelected_execute = function (screen) {
    screen.SaleOrderDetail.deleteEntity();

    return myapp.commitChanges().then(null, function fail(e) {

        myapp.cancelChanges();

        throw e;

    });
};
myapp.AddEditSaleOrderDetail.StockOnHandForSale_ItemTap_execute = function (screen) {
    // Write code here.
    var Query = screen.findContentItem("StockOnHandForSale");
    var SelectStock = Query.value.selectedItem;

    var Location = SelectStock.Location;
    var Product = SelectStock.Product;
    var Lot = SelectStock.LotNo;
    var setSalePrice = SelectStock.SellingPrice;
    var unitCost = SelectStock.CostPrice / SelectStock.QuantityOnHand;
    var stockAvailable = SelectStock.QuantityOnHand;

    screen.SaleOrderDetail.setLocation(Location);
    screen.SaleOrderDetail.setProduct(Product);
    screen.SaleOrderDetail.setLotNo(Lot);
    screen.SaleOrderDetail.setMasterSalePrice(setSalePrice);
    screen.SaleOrderDetail.setUnitCost(unitCost);
    screen.AvailableQuantity = stockAvailable;
    //screen.ProductDescription = Products.ProductCode + ": " + Products.ProductName;
    screen.closePopup();
};