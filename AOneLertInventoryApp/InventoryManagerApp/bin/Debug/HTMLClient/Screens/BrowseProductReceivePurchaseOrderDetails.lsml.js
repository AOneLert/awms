/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseProductReceivePurchaseOrderDetails.created = function (screen) {
    // Write code here.
    function onEvent() {
        // Do something.
        screen.ProductReceivePurchaseOrderDetails.refresh();
    }
    screen.ProductReceivePurchaseOrderDetails.addEventListener("Event", onEvent);
};
myapp.BrowseProductReceivePurchaseOrderDetails.AddProductReceivePurchaseOrderDetail_Tap_execute = function (screen) {
    // Write code here.
    var recPO = screen.ProductReceivePurchaseOrderDetails.selectedItem;
    myapp.showAddEditProductReceivePurchaseOrderDetail(null,null, {
        beforeShown: function (addNewScreen) {
            var newReceive = new myapp.ProductReceivePurchaseOrderDetail();
            newReceive.PurchaseOrderDetail = screen.SelectedPODetail;
            addNewScreen.ProductReceivePurchaseOrderDetail = newReceive;
            addNewScreen.SelectedPODetail = screen.SelectedPODetail;
        },
        afterClosed: function (addEditScreen, navigationAction) {
            if (navigationAction === msls.NavigateBackAction.commit) {
                screen.ProductReceivePurchaseOrderDetails.refresh();
                screen.SelectedPODetail.refresh();
                screen.SelectedPODetail.PurchaseOrder.refresh();
            }
        }
    });
};
myapp.BrowseProductReceivePurchaseOrderDetails.ReceiveDate_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.dataBind("value", function (value) {
        if (value) {
            $(element).text(moment(value).format("DD/MM/YYYY"));
        }
    });
};