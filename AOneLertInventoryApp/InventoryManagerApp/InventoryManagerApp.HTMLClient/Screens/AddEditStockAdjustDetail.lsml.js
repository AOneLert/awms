/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditStockAdjustDetail.StockOnHandsQuery_ItemTap_execute = function (screen) {
    // Write code here.
    var StockOnHandsQuery = screen.findContentItem("StockOnHandsQuery");
    var StockOnHand = StockOnHandsQuery.value.selectedItem;

    screen.StockAdjustDetail.setProduct(StockOnHand.Product);
    screen.StockAdjustDetail.setLocation(StockOnHand.Location);
    screen.StockAdjustDetail.LotNo = StockOnHand.LotNo;
    screen.StockAdjustDetail.CurrentQuantity = StockOnHand.QuantityOnHand;

    screen.closePopup();
};