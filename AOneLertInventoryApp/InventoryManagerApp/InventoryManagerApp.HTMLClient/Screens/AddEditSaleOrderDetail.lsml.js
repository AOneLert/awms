/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditSaleOrderDetail.deleteSelected_execute = function (screen) {
    screen.SaleOrderDetail.deleteEntity();

    return myapp.commitChanges().then(null, function fail(e) {

        myapp.cancelChanges();

        throw e;

    });
};
myapp.AddEditSaleOrderDetail.StockOnHandForSale_ItemTap_execute = function (screen) {
    // Write code here.
    var Query = screen.findContentItem("StockOnHandForSale");
    var SelectStock = Query.value.selectedItem;

    var Location = SelectStock.Location;
    var Product = SelectStock.Product;
    var Lot = SelectStock.LotNo;
    var setSalePrice = SelectStock.SellingPrice;
    //var unitCost = SelectStock.CostPrice / SelectStock.QuantityOnHand;
    var unitCost = SelectStock.CostPrice / SelectStock.ReservedQuantity;
    //var stockAvailable = SelectStock.QuantityOnHand;
    var stockAvailable = SelectStock.ReservedQuantity;
    screen.SaleOrderDetail.setLocation(Location);
    screen.SaleOrderDetail.setProduct(Product);
    screen.SaleOrderDetail.setLotNo(Lot);
    screen.SaleOrderDetail.setMasterSalePrice(setSalePrice);
    screen.SaleOrderDetail.setSalePrice(setSalePrice);
    screen.SaleOrderDetail.setUnitCost(unitCost);
    screen.AvailableQuantity = stockAvailable;
    //screen.ProductDescription = Products.ProductCode + ": " + Products.ProductName;
    screen.closePopup();
};
myapp.AddEditSaleOrderDetail.created = function (screen) {
    // Write code here.
    screen.SaleOrderDetail.addChangeListener("OrderQuantity", function (e) {
        var order = screen.SaleOrderDetail;
        var availableQty = screen.findContentItem("AvailableQuantity");
        var contentItem = screen.findContentItem("OrderQuantity");
        contentItem.validationResults = null;
        var salePrice = screen.findContentItem("SalePrice");
        if (order.OrderQuantity > availableQty.value) {
            contentItem.validationResults = [new msls.ValidationResult(order.details.properties.OrderQuantity, "ไม่สามารถขายของจำนวนมากกว่าที่ระบบมี")];
        } else if (order.OrderQuantity ==0) {
            contentItem.validationResults = [new msls.ValidationResult(order.details.properties.OrderQuantity, "จำนวนขายต้องมีต่ามากกว่า 0")];        
        }
        
        if (salePrice != undefined) {
            var totalPrice = salePrice.value * order.OrderQuantity;
            //order.details.properties.SalePrice.value = totalPrice;
            screen.TotalSalePrice = totalPrice;
        }
    });

    var SODetail = screen.SaleOrderDetail;
    if (SODetail.Product != undefined && SODetail.Location != undefined && SODetail.LotNo != undefined) {
        
        var filter = "((Product/Id eq " + msls._toODataString(SODetail.Product.Id, ":Int32")
            + ") and (Location/Id eq " + msls._toODataString(SODetail.Location.Id, ":Int32")
            + ") and (LotNo eq " + msls._toODataString(SODetail.LotNo, ":String") + "))";
        myapp.activeDataWorkspace.ApplicationData.StockOnHands.filter(filter).execute().then(function (result) {
            if (result.results.length > 0) {
                var availableStock = result.results[0].ReservedQuantity;
                screen.AvailableQuantity = availableStock;
            }
        });
    }
};