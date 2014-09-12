/// <reference path="../GeneratedArtifacts/viewModel.js" />


myapp.ViewPurchaseOrder.PurchaseOrderStatus_postRender = function (element, contentItem) {
    if (contentItem.value) {
        contentItem.screen.findContentItem("POStatusDescription").value = "ปิดการรับ";
    } else {
        contentItem.screen.findContentItem("POStatusDescription").value = "รอรับสินค้า";
    }
};
myapp.ViewPurchaseOrder.RequireDate_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.dataBind("value", function (value) {
        if (value) {
            $(element).text(moment(value).format("DD/MM/YYYY"));
        }
    });
};