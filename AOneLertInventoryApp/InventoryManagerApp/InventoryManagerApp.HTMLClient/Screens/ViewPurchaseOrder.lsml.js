/// <reference path="../GeneratedArtifacts/viewModel.js" />


myapp.ViewPurchaseOrder.PurchaseOrderStatus_postRender = function (element, contentItem) {
    // Write code here.
    if (contentItem.value) {
        contentItem.screen.findContentItem("POStatusDescription").value = "ปิดการรับ";
    } else {
        contentItem.screen.findContentItem("POStatusDescription").value = "รอรับสินค้า";
    }
};