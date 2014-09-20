/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditOrderRequisition.created = function (screen) {
    // Write code here.
    var currDate = new Date();
    screen.OrderRequisition.OrderRequisitionDate = currDate;

    if (screen.OrderRequisition.OrderRequisitionNo == undefined || screen.OrderRequisition.OrderRequisitionNo == null) {

        screen.OrderRequisition.Status = false;
        myapp.activeDataWorkspace.ApplicationData.GetMaxOrderRequisitionNo().execute().then(function (results) {
            var docNo = results;
            if (docNo.results.length == 0)
                screen.OrderRequisition.OrderRequisitionNo = 'OR' + (currDate.getFullYear().toString().substring(2, 4)) + (currDate.getMonth().toString().length == 1 ? '0' + currDate.getMonth().toString() : currDate.getMonth().toString()) + '001';
            else {
                //POYYMMNNN
                var latestNo = docNo.results[0].OrderRequisitionNo.toString();
                var latestYear = docNo.results[0].OrderRequisitionNo.toString().substring(2, 4);
                var latestRunningNo = docNo.results[0].OrderRequisitionNo.toString().substring(4, 10);
                var curentYear = new Date().getFullYear().toString().substring(2, 4);
                var runningNo = 'OR' + (latestYear == curentYear ? latestYear : curentYear) + String('00000' + (parseInt(latestRunningNo) + 1)).slice(-5);
                screen.OrderRequisition.OrderRequisitionNo = runningNo;
            }
        });
    }
};
myapp.AddEditOrderRequisition.QueryCustomerGroupByTransportRoute_ItemTap_execute = function (screen) {
    // Write code here.
    var Query = screen.findContentItem("QueryCustomerGroupByTransportRoute");
    var Customer = Query.value.selectedItem;

    screen.OrderRequisition.setCustomer(Customer);
    //screen.ProductDescription = Products.ProductCode + ": " + Products.ProductName;
    screen.closePopup();
};