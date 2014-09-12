/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditPOReceive.PurchaseOrderDetails_ItemTap_execute = function (screen) {
    // Write code here.
    var PODeatail = screen.PurchaseOrderDetails.selectedItem;
    myapp.showBrowseProductReceivePurchaseOrderDetails(null, {
        beforeShown: function (addNewScreen) {
            addNewScreen.SelectedPODetail = screen.PurchaseOrderDetails.selectedItem;
        },
        afterClosed: function (addEditScreen, navigationAction) {
            if (navigationAction === msls.NavigateBackAction.commit) {
                screen.PurchaseOrder.refresh();
                screen.PurchaseOrderDetails.refresh();

            }
        }
    });
};
myapp.AddEditPOReceive.PurchaseOrderDetailsTemplate_postRender = function (element, contentItem) {
    // Write code here.
    var desc = "";
    if (contentItem.value.ReceiveQuantity < contentItem.value.RequireQuantity)
        desc = contentItem.value.ReceiveQuantity;
    else
        desc = "(" + contentItem.value.ReceiveQuantity + ")";

    element.cells[7].innerText = desc;
};
myapp.AddEditPOReceive.PurchaseOrderDate_postRender = function (element, contentItem) {
    // Write code here.

};
myapp.AddEditPOReceive.created = function (screen) {
    // Write code here.
};