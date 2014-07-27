/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseProductPricings.AvailableForSaleDescription_postRender = function (element, contentItem) {
    // Write code here.
    //contentItem.dataBind("screen.StockOnHand.AvailableForSaleDescription", "xx");
};
var i = 1;
myapp.BrowseProductPricings.RowTemplate_postRender = function (element, contentItem) {
    var itemTemplate = $("<div> </div>");
    var desc = "";
    if (contentItem.value.IsAvailableForSale)
        desc = "พร้อมขาย";
    else
        desc = "รอกำหนดราคาขาย";

    var title = $("<h3>" + desc + "</h3>");
  
    element.cells[7].innerText = desc;
};
myapp.BrowseProductPricings.StockOnHand_ItemTap_execute = function (screen) {
    // Write code here.
    //screen.StockOnHands.selectedItem
    myapp.showAddEditProductPricing(screen.StockOnHands.selectedItem, {
        beforeShown: function(addEditScreen) {

        },
        afterClosed: function (addEditScreen, navigationAction) {
            if (navigationAction === msls.NavigateBackAction.commit) {
                myapp.showBrowseProductPricings();
            }
        }
    });
};