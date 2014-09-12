/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseSaleOrders.SaleOrderDate_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.dataBind("value", function (value) {
        if (value) {
            $(element).text(moment(value).format("DD/MM/YYYY"));
        }
    });
};
myapp.BrowseSaleOrders.RowTemplate_postRender = function (element, contentItem) {
    // Write code here.
    var desc = "";
    if (contentItem.value.SaleOrderStatus)
        desc = "ปิดการขาย";
    else
        desc = "รอจัดส่ง";

    element.cells[10].innerText = desc;
};

myapp.BrowseSaleOrders.SaleOrder_ItemTap_execute = function (screen) {
    // Write code here.
    myapp.showAddEditSaleOrder(null, {
        beforeShown: function (addNewScreen) {
            addNewScreen.SaleOrder = screen.SaleOrders.selectedItem;
        },
        afterClosed: function (addEditScreen, navigationAction) {
            if (navigationAction === msls.NavigateBackAction.commit) {
                screen.SaleOrders.refresh();
            }
        }
    });
};