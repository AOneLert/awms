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
    if (contentItem.value.ReceiveQuantity == undefined || contentItem.value.ReceiveQuantity == null) {
        desc = "0";
    } else if (contentItem.value.ReceiveQuantity < contentItem.value.RequireQuantity) {
        desc = contentItem.value.ReceiveQuantity;
        $(element.cells[7]).addClass("ReceiptQuantityAbnormal");
    } else if (contentItem.value.ReceiveQuantity > contentItem.value.RequireQuantity) {
        desc = "(" + contentItem.value.ReceiveQuantity + ")";
        $(element.cells[7]).addClass("ReceiptQuantityAbnormal");
    } else
        desc = contentItem.value.ReceiveQuantity;

    element.cells[7].innerText = desc;
};
myapp.AddEditPOReceive.ReceiveQuantity_postRender = function (element, contentItem) {
    // Write code here.
    if (contentItem.value == undefined || contentItem.value == null)
        contentItem.value = "0";
};
myapp.AddEditPOReceive.ReceiveUnitCost_postRender = function (element, contentItem) {
    // Write code here.
    if (contentItem.value == undefined || contentItem.value == null)
        contentItem.value = "0";
};
myapp.AddEditPOReceive.ReceiveTotalCost_postRender = function (element, contentItem) {
    // Write code here.
    if (contentItem.value == undefined || contentItem.value == null)
        contentItem.value = "0";
};
myapp.AddEditPOReceive.created = function (screen) {
    // Write code here.
    function onEvent() {
        // Do something.
        screen.PurchaseOrderDetails.refresh();
    }
    screen.PurchaseOrderDetails.addEventListener(
        "Event", onEvent);
};