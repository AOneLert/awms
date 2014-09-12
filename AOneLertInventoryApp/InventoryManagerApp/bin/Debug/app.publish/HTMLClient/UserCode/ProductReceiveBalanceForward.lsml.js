/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.ProductReceiveBalanceForward.created = function (entity) {
    entity.DocumentDate = new Date();
    
    // Using a Promise object we can call the CallGetUserName function
    ////msls.promiseOperation(CallGetDocumentNo).then(function PromiseSuccess(PromiseResult) {
    ////    // Set the result of the CallGetUserName function to the 
    ////    // UserName of the entity
    ////    entity.DocumentNo = PromiseResult;
    ////});
};

function CallGetDocumentNo(operation) {
    $.ajax({
        type: 'post',
        data: {},
        url: '../GetReceiveProductBalanceForwardDocumentNo.ashx',
        success: operation.code(function AjaxSuccess(AjaxResult) {
            operation.complete(AjaxResult);
        })
    });
}