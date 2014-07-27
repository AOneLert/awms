/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseProductPricings.RowTemplate_postRender = function (element, contentItem) {
    var desc = "";
    if (contentItem.value.IsAvailableForSale)
        desc = "พร้อมขาย";
    else
        desc = "รอกำหนดราคาขาย";

    element.cells[7].innerText = desc;
};
myapp.BrowseProductPricings.StockOnHand_ItemTap_execute = function (screen) {
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