/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.ViewPOReceivedDetail.Details_postRender = function (element, contentItem) {
    // Write code here.
};
myapp.ViewPOReceivedDetail.IsReceiveComplete_postRender = function (element, contentItem) {
    // Write code here.
    //if (contentItem.value) {
    //    contentItem.screen.findContentItem("POStatusDescription").value = "ปิดการรับ";
    //} else {
    //    contentItem.screen.findContentItem("POStatusDescription").value = "รอรับสินค้า";
    //}
    if (contentItem.value) {
        contentItem.screen.findContentItem("IsReceiveCompleteDescription").value = "ปิดการรับ";
    } else {
        contentItem.screen.findContentItem("IsReceiveCompleteDescription").value = "รอรับสินค้า";
    }
};
myapp.ViewPOReceivedDetail.RequireDate_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.dataBind("value", function (value) {
        if (value) {
            $(element).text(moment(value).format("DD/MM/YYYY"));
        }
    });
};
myapp.ViewPOReceivedDetail.ReceiveDate_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.dataBind("value", function (value) {
        if (value) {
            $(element).text(moment(value).format("DD/MM/YYYY"));
        }
    });
};