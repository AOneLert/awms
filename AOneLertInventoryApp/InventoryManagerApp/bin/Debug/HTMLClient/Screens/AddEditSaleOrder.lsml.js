/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditSaleOrder.created = function (screen) {
    var currDate = new Date();
    screen.SaleOrder.SaleOrderDate = currDate;
    if (screen.SaleOrder.DocumentNo == undefined || screen.SaleOrder.DocumentNo == null) {

        myapp.activeDataWorkspace.ApplicationData.QueryMaxSONumber().execute().then(function (results) {
            var docNo = results;
            if (docNo.results.length == 0) {
                screen.SaleOrder.DocumentNo = 'SO' + (new Date().getFullYear().toString().substring(2, 4)) + '00001';
            }
            else {
                //SOYYNNNNN
                var latestNo = docNo.results[docNo.results.length - 1].DocumentNo.toString();
                var latestYear = docNo.results[docNo.results.length - 1].DocumentNo.toString().substring(2, 4);
                var latestRunningNo = docNo.results[docNo.results.length - 1].DocumentNo.toString().substring(4, 10);
                var curentYear = new Date().getFullYear().toString().substring(2, 4);
                var runningNo = 'SO' + (latestYear == curentYear ? latestYear : curentYear) + String('00000' + (parseInt(latestRunningNo) + 1)).slice(-5);
                screen.SaleOrder.DocumentNo = runningNo;
            }
        });
    }
};
myapp.AddEditSaleOrder.ShowCustomerPopup_execute = function (screen) {
    // Write code here.
};
myapp.AddEditSaleOrder.CustomersActiveQuery_ItemTap_execute = function (screen) {
    // Write code here.
    //var CustomerActiveQuery = screen.findContentItem("CustomersActiveQuery");
    //var Customer = CustomerActiveQuery.value.selectedItem;
    //var paymentTerm = Customer.CreditTerm;
    //var Route = Customer.TransportRoute;
    ////var xx = Location.Id;
    //screen.SaleOrder.setCustomer(Customer);
    //screen.SaleOrder.TransportRoute = Route;
    //screen.SaleOrder.CreditTerm = paymentTerm;
    //screen.closePopup();
};

myapp.AddEditSaleOrder.CustomersPopup_Tap_execute = function (screen) {
    // Write code here.
    var Query = screen.findContentItem("CustomersActiveQuery");
    var Customer = Query.value.selectedItem;

    screen.SaleOrder.setCustomer(Customer);
    screen.SaleOrder.PaymentTerm = Customer.CreditTerm;
    //screen.ProductDescription = Products.ProductCode + ": " + Products.ProductName;
    screen.closePopup();
};

myapp.AddEditSaleOrder.RowTemplate1_postRender = function (element, contentItem) {
    // Write code here.
    var desc = "";
    if (contentItem.value.RequisitionFlag)
        desc = "จัดส่งเรียบร้อยแล้ว";
    else
        desc = "รอจัดส่ง";

    element.cells[8].innerText = desc;
};