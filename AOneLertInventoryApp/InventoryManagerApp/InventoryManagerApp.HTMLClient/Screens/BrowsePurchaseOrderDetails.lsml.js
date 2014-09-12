/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowsePurchaseOrderDetails.ShowAddEditProductReceivePurchaseOrderDetail_Tap_execute = function (screen) {
    // Write code here.
    //var newReceive = myapp.activeDataWorkspace.ApplicationData.ProductReceivePurchaseOrderDetails;
    //        newReceive.PurchaseOrderDetail = screen.PurchaseOrderDetails.selectedItem;

    myapp.showAddEditProductReceivePurchaseOrderDetail(null, {
        beforeShown: function (addNewScreen) {
            //var newReceive = new myapp.activeDataWorkspace.ApplicationData.ProductReceivePurchaseOrderDetails;
            //newReceive.PurchaseOrderDetail = screen.PurchaseOrderDetails.selectedItem;
            //addNewScreen.ProductReceivePurchaseOrderDetail = newReceive;
        },
        afterClosed: function (addEditScreen, navigationAction) {
            if (navigationAction === msls.NavigateBackAction.commit) {
                screen.PurchaseOrderDetails.refresh();
            }
        }
    });
};