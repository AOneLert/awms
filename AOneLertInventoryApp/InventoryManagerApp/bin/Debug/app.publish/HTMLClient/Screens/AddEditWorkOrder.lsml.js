/// <reference path="../GeneratedArtifacts/viewModel.js" />




myapp.AddEditWorkOrder.EmployeeActiveQuery_ItemTap_execute = function (screen) {
    // Write code here.
    var Query = screen.findContentItem("EmployeeActiveQuery");
    var SelectEmployee = Query.value.selectedItem;
    screen.WorkOrder.setEmployee(SelectEmployee);
    //screen.ProductDescription = Products.ProductCode + ": " + Products.ProductName;
    screen.closePopup();
};
myapp.AddEditWorkOrder.MachineActiveQuery_ItemTap_execute = function (screen) {
    // Write code here.
    var Query = screen.findContentItem("MachineActiveQuery");
    var Machine = Query.value.selectedItem;
    screen.WorkOrder.setMachine(Machine);
    //screen.ProductDescription = Products.ProductCode + ": " + Products.ProductName;
    screen.closePopup();
};
myapp.AddEditWorkOrder.created = function (screen) {
    // Write code here.
    var currDate = new Date();
    screen.WorkOrder.WorkOrderDate = currDate;
    screen.WorkOrder.WorkOrderStatus = true;

    if (screen.WorkOrder.WorkOrderNumber == undefined || screen.WorkOrder.WorkOrderNumber == null) {

        myapp.activeDataWorkspace.ApplicationData.QueryMaxWONumber().execute().then(function (results) {
            var docNo = results;
            if (docNo.results.length == 0) {
                screen.WorkOrder.WorkOrderNumber = 'WO' + (new Date().getFullYear().toString().substring(2, 4)) + '00001';
            }
            else {
                //POYYMMNNN
                var latestNo = docNo.results[docNo.results.length - 1].WorkOrderNumber.toString();
                var latestYear = docNo.results[docNo.results.length - 1].WorkOrderNumber.toString().substring(2, 4);
                var latestRunningNo = docNo.results[docNo.results.length - 1].WorkOrderNumber.toString().substring(4, 10);
                var curentYear = new Date().getFullYear().toString().substring(2, 4);              
                var runningNo = 'WO' + (latestYear == curentYear ? latestYear : curentYear) + String('00000' + (parseInt(latestRunningNo) + 1)).slice(-5);
                screen.WorkOrder.WorkOrderNumber = runningNo;
            }
        });
    } else {
        screen.findContentItem("WorkOrderDate").isEnabled = false;
        screen.findContentItem("Employee").isEnabled = false;
        screen.findContentItem("Machine").isEnabled = false;
        //screen.findContentItem("WorkOrderStatus").isEnabled = false;
        //screen.findContentItem("AddWorkOrderIssueDetail").isEnabled = false;
        screen.findContentItem("ShowPopupEmployee").isEnabled = false;
        screen.findContentItem("ShowPopupMachine").isEnabled = false;
    }
};
myapp.AddEditWorkOrder.UnitWeight_postRender = function (element, contentItem) {
    // Write code here.
    if (contentItem) {
        var OrderQty = contentItem.screen.findContentItem("OrderQuantity");
        var TotalOrderWeight = contentItem * OrderQty;
    }
};