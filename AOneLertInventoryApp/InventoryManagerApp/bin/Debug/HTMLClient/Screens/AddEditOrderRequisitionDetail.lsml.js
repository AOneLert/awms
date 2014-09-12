/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditOrderRequisitionDetail.ProductsActiveQuery_ItemTap_execute = function (screen) {
    // Write code here.
    var query = screen.findContentItem("ProductsActiveQuery");
    var prod = query.value.selectedItem;

    screen.OrderRequisitionDetail.setProduct(prod);
    screen.closePopup();
};
myapp.AddEditOrderRequisitionDetail.deleteSelectedOrderRequisitionDetail_execute = function (screen) {
    // Write code here.
    screen.OrderRequisitionDetail.deleteEntity();

    return myapp.commitChanges().then(null, function fail(e) {

        myapp.cancelChanges();

        throw e;

    });
};
myapp.AddEditOrderRequisitionDetail.created = function (screen) {
    // Write code here.
    if(screen.OrderRequisitionDetail.Status == undefined || screen.OrderRequisitionDetail.Status == null)
    {
        screen.OrderRequisitionDetail.Status = false;
    }
};
myapp.AddEditOrderRequisitionDetail.DeliveredQuantity_postRender = function (element, contentItem) {
    // Write code here.
    if (contentItem.value == undefined || contentItem.value == null) {
        contentItem.value = 0;
    }
};