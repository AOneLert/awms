/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditProductReceiveBalanceForward.created = function (screen) {
    //alert('create');
};
myapp.AddEditProductReceiveBalanceForward.deleteSelectedItem_execute = function (screen) {
    screen.ProductReceive.deleteEntity();

    return myapp.commitChanges().then(null, function fail(e) {

        myapp.cancelChanges();

        throw e;

    });
};
myapp.AddEditProductReceiveBalanceForward.DocumentNo_postRender = function (element, contentItem) {
    // Write code here.
    myapp.activeDataWorkspace.ApplicationData.QueryLatestProductReceiveBalanceForwardDocumentNo().execute().then(function (results) {
        var docNo = results;
        if (docNo.results.length == 0)
            contentItem.value = 'BF' + (new Date().getFullYear().toString().substring(2, 4)) + (new Date().getMonth().toString().length == 1 ? '0' + new Date().getMonth().toString() : new Date().getMonth().toString()) + '001';
        else {
            //BFYYMMNNN
            var latestNo = docNo.results[0].DocumentNo.toString();
            var latestYear = docNo.results[0].DocumentNo.toString().substring(2, 4);
            var latestMonth = docNo.results[0].DocumentNo.toString().substring(4, 6);
            var latestRunningNo = docNo.results[0].DocumentNo.toString().substring(6, 9);
            
            var curentYear = new Date().getFullYear().toString().substring(2, 4);
            var curentMonth = new Date().getMonth().toString().length == 1 ? '0' + new Date().getMonth().toString() : new Date().getMonth().toString();

            var runningNo = 'BF' + (latestYear == curentYear ? latestYear : curentYear) + String('000' + (parseInt(latestRunningNo) + 1)).slice(-3);
            contentItem.value = runningNo;
        }
    });
};