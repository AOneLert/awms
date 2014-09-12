/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditProductReceiveBalanceForwardWithDetails.deleteSelectedItem_execute = function (screen) {
    screen.ProductReceiveBalanceForwardDetail.deleteEntity();

    return myapp.commitChanges().then(null, function fail(e) {

        myapp.cancelChanges();

        throw e;

    });
};
myapp.AddEditProductReceiveBalanceForwardWithDetails.DocumentNo_postRender = function (element, contentItem) {
    myapp.activeDataWorkspace.ApplicationData.QueryLatestProductReceiveBalanceForwardDocumentNo().execute().then(function (results) {
        var docNo = results;
        if (docNo.results.length == 0)
            contentItem.value = 'BF' + (new Date().getFullYear().toString().substring(2, 4)) + '0001';
        else {
            //BFYYMMNNN
            var latestNo = docNo.results[0].DocumentNo.toString();
            var latestYear = latestNo.toString().substring(2, 4);
            //var latestMonth = docNo.results[0].DocumentNo.toString().substring(4, 6);
            var latestRunningNo = latestNo.toString().substring(6, 9);

            var curentYear = new Date().getFullYear().toString().substring(2, 4);
            //var curentMonth = new Date().getMonth().toString().length == 1 ? '0' + new Date().getMonth().toString() : new Date().getMonth().toString();

            var runningNo = '';
            if(latestYear != curentYear)
            {
                runningNo = 'BF' + curentYear + "0001";
            } else {
                runningNo = 'BF' + curentYear + String('0000' + (parseInt(latestRunningNo) + 1)).slice(-4);
            }
            
            contentItem.value = runningNo;
        }
    });
};