/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditWorkOrderIssueDetail.QueryStockOnHandForIssue_ItemTap_execute = function (screen) {
    // Write code here.
    var Query = screen.findContentItem("QueryStockOnHandForIssue");
    var SelectStock = Query.value.selectedItem;

    var Location = SelectStock.Location;
    var Product = SelectStock.Product;
    var Lot = SelectStock.LotNo;
    var setSalePrice = SelectStock.SellingPrice;
    var unitCost = SelectStock.CostPrice / SelectStock.QuantityOnHand;
    var stockAvailable = SelectStock.QuantityOnHand;

    screen.WorkOrderIssueDetail.setIssueLocation(Location);
    screen.WorkOrderIssueDetail.setIssueProduct(Product);
    screen.WorkOrderIssueDetail.setIssueLot(Lot);
    screen.WorkOrderIssueDetail.setIssueUnitCost(unitCost);
    screen.AvailableQuantity = stockAvailable;
    //screen.ProductDescription = Products.ProductCode + ": " + Products.ProductName;
    screen.closePopup();
};