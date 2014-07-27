/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowsePOReceive.PurchaseOrderDate_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.dataBind("value", function (value) {
        if (value) {
            $(element).text(moment(value).format("DD/MM/YYYY"));
        }
    });
};
myapp.BrowsePOReceive.RowTemplate_postRender = function (element, contentItem) {
    // Write code here.
    var desc = "";
    if (contentItem.value.PurchaseOrderStatus)
        desc = "ปิดการรับ";
    else
        desc = "รอรับสินค้า";

    element.cells[5].innerText = desc;
};
myapp.BrowsePOReceive.PurchaseOrder_ItemTap_execute = function (screen) {
    // Write code here.
    myapp.showAddEditPOReceive(null, {
        beforeShown: function (addNewScreen) {            
            addNewScreen.PurchaseOrder = screen.PurchaseOrders.selectedItem;
        },
        afterClosed: function (addEditScreen, navigationAction) {
            if (navigationAction === msls.NavigateBackAction.commit) {
                screen.PurchaseOrders.refresh();
            }
        }
    });
};