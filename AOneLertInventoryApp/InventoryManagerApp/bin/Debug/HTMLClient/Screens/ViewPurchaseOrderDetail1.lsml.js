/// <reference path="../GeneratedArtifacts/viewModel.js" />


myapp.ViewPurchaseOrderDetail1.ReceiveDate1_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.dataBind("value", function (value) {
        if (value) {
            $(element).text(moment(value).format("DD/MM/YYYY"));
        }
    });
};
myapp.ViewPurchaseOrderDetail1.RequireDate_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.dataBind("value", function (value) {
        if (value) {
            $(element).text(moment(value).format("DD/MM/YYYY"));
        }
    });
};