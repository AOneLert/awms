/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditWorkOrderProduce.ProductsActiveQuery_ItemTap_execute = function (screen) {
    // Write code here.
    var Query = screen.findContentItem("ProductsActiveQuery");
    var Product = Query.value.selectedItem;
    var defaultLocation = Product.Location;

    screen.WorkOrderProduce.setProduceProduct(Product);
    screen.WorkOrderProduce.setProduceLocation(defaultLocation);
    //screen.ProductDescription = Products.ProductCode + ": " + Products.ProductName;
    screen.closePopup();
};
myapp.AddEditWorkOrderProduce.created = function (screen) {
    // Write code here.
};
myapp.AddEditWorkOrderProduce.isReceiveComplete_postRender = function (element, contentItem) {
    // Write code here.
    //createBooleanSwitch(element, 'Active', 'Inactive');
    if (contentItem.value == undefined) {
        contentItem.value = false;
    }
};
