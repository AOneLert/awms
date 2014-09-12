/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditProductReceiveBalanceForwardDetail.deleteSelectedItem_execute = function (screen) {
    screen.ProductReceiveDetail.deleteEntity();
  
    return myapp.commitChanges().then(null, function fail(e) {

        myapp.cancelChanges();

        throw e;

    });
};
myapp.AddEditProductReceiveBalanceForwardDetail.CostAmountReadOnly_postRender = function (element, contentItem) {
    //function updateCostAmount() {
    //    contentItem.screen.CostAmountReadOnly = contentItem.screen.ProductReceiveBalanceForwardDetail.ReceivedQuantity * contentItem.screen.ProductReceiveBalanceForwardDetail.CostPrice;
    //}

    //contentItem.dataBind("screen.ProductReceiveBalanceForwardDetail.ReceivedQuantity", updateCostAmount);
    //contentItem.dataBind("screen.ProductReceiveBalanceForwardDetail.CostPrice", updateCostAmount);


    // Write code here.     
    contentItem.dataBind("screen.ProductReceiveDetail.ReceivedQuantity", function (newValue) {
        contentItem.screen.CostAmountReadOnly = contentItem.screen.ProductReceiveDetail.ReceivedQuantity * contentItem.screen.ProductReceiveDetail.CostPrice;
    });     
    contentItem.dataBind("screen.ProductReceiveDetail.CostPrice", function (newValue) {
        contentItem.screen.CostAmountReadOnly = contentItem.screen.ProductReceiveDetail.ReceivedQuantity * contentItem.screen.ProductReceiveDetail.CostPrice;
    });

};


myapp.AddEditProductReceiveBalanceForwardDetail.ProductsActiveQuery_ItemTap_execute = function (screen) {
    var ProductsActiveQuery = screen.findContentItem("ProductsActiveQuery");
    var Products = ProductsActiveQuery.value.selectedItem;

    screen.ProductReceiveDetail.setProduct(Products);
    screen.ProductDescription = Products.ProductCode + ": " + Products.ProductName;
    screen.closePopup();
};
myapp.AddEditProductReceiveBalanceForwardDetail.created = function (screen) {
    var currDate = new Date();
    //screen.ProductReceiveDetail.LotNo = (currDate.getFullYear().toString().substring(2, 4)) + (currDate.getMonth().toString().length == 1 ? '0' + currDate.getMonth().toString() : currDate.getMonth().toString()) + (currDate.getDate().toString().length == 1 ? '0' + currDate.getDate().toString() : currDate.getDate().toString() + "01");
};
myapp.AddEditProductReceiveBalanceForwardDetail.ProductsActiveQueryTemplate_postRender = function (element, contentItem) {
    // Write code here.

};