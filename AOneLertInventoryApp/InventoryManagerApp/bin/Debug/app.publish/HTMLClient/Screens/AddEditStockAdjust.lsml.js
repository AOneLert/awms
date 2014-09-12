/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditStockAdjust.RowTemplate_postRender = function (element, contentItem) {
    contentItem.value.DiferenceQuantity = 2;
};
myapp.AddEditStockAdjust.DocumentNo_postRender = function (element, contentItem) {
    myapp.activeDataWorkspace.ApplicationData.QueryLatestProductReceiveBalanceForwardDocumentNo().execute().then(function (results) {
        var docNo = results;
        if (docNo.results.length == 0)
            contentItem.value = 'AD' + (new Date().getFullYear().toString().substring(2, 4)) + '0001';
        else {
            //ADYYMMNNN
            var latestNo = docNo.results[0].DocumentNo.toString();
            var latestYear = latestNo.toString().substring(2, 4);
            var latestRunningNo = latestNo.toString().substring(6, 9);
            var curentYear = new Date().getFullYear().toString().substring(2, 4);

            var runningNo = '';
            if (latestYear != curentYear) {
                runningNo = 'AD' + curentYear + "0001";
            } else {
                runningNo = 'AD' + curentYear + String('0000' + (parseInt(latestRunningNo) + 1)).slice(-4);
            }

            contentItem.value = runningNo;
        }
    });
};
myapp.AddEditStockAdjust.created = function (screen) {
    screen.StockAdjust.DocumentDate = new Date();
};