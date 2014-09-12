/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditPOReceive.PurchaseOrderDetails_ItemTap_execute = function (screen) {
    // Write code here.
    myapp.showBrowseProductReceivePurchaseOrderDetails(null, {
        beforeShown: function (addNewScreen) {
            addNewScreen.SelectedPODetail = screen.PurchaseOrderDetails.selectedItem;
        },
        afterClosed: function (addEditScreen, navigationAction) {
            if (navigationAction === msls.NavigateBackAction.commit) {
                screen.PurchaseOrderDetails.refresh();
            }
        }
    });
};