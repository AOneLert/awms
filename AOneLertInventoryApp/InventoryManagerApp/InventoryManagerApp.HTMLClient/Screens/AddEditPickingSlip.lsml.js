/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditPickingSlip.created = function (screen) {
    // Write code here.
    var currDate = new Date();
    screen.PickingSlip.PickingDate = currDate;

    if (screen.PickingSlip.PickingNo == undefined || screen.PickingSlip.PickingNo == null) {

        myapp.activeDataWorkspace.ApplicationData.QueryMaxPickingNumber().execute().then(function (results) {
            var docNo = results;
            if (docNo.results.length == 0)
                screen.PickingSlip.PickingNo = 'PS' + (new Date().getFullYear().toString().substring(2, 4)) + (new Date().getMonth().toString().length == 1 ? '0' + new Date().getMonth().toString() : new Date().getMonth().toString()) + '001';
            else {
                //POYYMMNNN
                var latestNo = docNo.results[0].PickingNo.toString();
                var latestYear = docNo.results[0].PickingNo.toString().substring(2, 4);
                //var latestMonth = docNo.results[0].PurchaseOrderNumber.toString().substring(4, 6);
                var latestRunningNo = docNo.results[0].PickingNo.toString().substring(4, 10);

                var curentYear = new Date().getFullYear().toString().substring(2, 4);
                //var curentMonth = new Date().getMonth().toString().length == 1 ? '0' + new Date().getMonth().toString() : new Date().getMonth().toString();

                var runningNo = 'PS' + (latestYear == curentYear ? latestYear : curentYear) + String('00000' + (parseInt(latestRunningNo) + 1)).slice(-5);
                screen.PickingSlip.PickingNo = runningNo;
                screen.PickingSlip.Status = false;
            }
        });
    }
    if (screen.SelectedTransportRoute)
        screen.PickingSlip.setTransportRoute(screen.SelectedTransportRoute);
        
};
myapp.AddEditPickingSlip.QueryRequisitionDetailPicking_ItemTap_execute = function (screen) {
    // Write code here.
    myapp.showAddEditPickingSlipDetail(null, {
        beforeShown: function (addEditScreen) {
            var selectPickingSlip = screen.PickingSlip;
            var selectOrderDetail = screen.QueryRequisitionDetailPicking.selectedItem;            
            var newPickingSlipDetail = new myapp.PickingSlipDetail();
            newPickingSlipDetail.PickingSlip = selectPickingSlip;
            newPickingSlipDetail.OrderRequisitionDetail = selectOrderDetail;
            var OrDetailTd = newPickingSlipDetail.OrderRequisitionDetail.Id;
            addEditScreen.PickingSlipDetail = newPickingSlipDetail;
        }, afterClosed: function (addEditScreen, navigationAction) {
            if (navigationAction === msls.NavigateBackAction.commit) {
                screen.PickingSlip.refresh();
                screen.PickingSlipDetails.refresh();
                screen.QueryRequisitionDetailPicking.refresh();
            }
        }
    });
};