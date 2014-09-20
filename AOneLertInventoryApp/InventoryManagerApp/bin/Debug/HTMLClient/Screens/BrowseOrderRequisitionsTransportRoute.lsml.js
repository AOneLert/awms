/// <reference path="../GeneratedArtifacts/viewModel.js" />

//myapp.BrowseOrderRequisitionsTransportRoute.QueryOrderRequisitionTransportRoute_ItemTap_execute = function (screen) {
//    // Write code here.
//    myapp.showAddEditPickingSlip(null, {
//        beforeShown: function (addNewScreen) {
//            var selectTransportRoute = screen.QueryOrderRequisitionTransportRoute.selectedItem.Customer.TransportRoute;
//            addNewScreen.SelectedTransportRoute
//            var newPicking = new myapp.PickingSlip();
//            newPicking.TransportRoute = selectTransportRoute;

//            screen.QueryOrderRequisitionTransportRoute.selectedItem.Customer.TransportRoute.Id
            
//            //var newPO = new myapp.PurchaseOrder();
//            //        var crrDate = new Date();
//            //        var docYear = crrDate.format("yy")
//            //var filter = selectTransportRoute.Id + ",OrderRequisition.Customer.TransportRoute.Id)";
//            var filter = "(OrderRequisition.Customer.TransportRoute.Id eq " + msls._toODataString(selectTransportRoute.Id, ":Int32") + ")";
//            myapp.activeDataWorkspace.ApplicationData.OrderRequisitionDetails.filter(filter).execute()
//                .then(function (result) {
//                    if (results.results.length >= 0) {
//                        for (rqDetail in results.results) {
//                            var newPickingDetail = new myapp.PickingSlipDetail();
//                            var selectRQDetail = rqDetail;
//                            newPickingDetail.OrderRequisitionDetail.Id = selectRQDetail.Id;
//                            newPicking.PickingSlipDetails.Add(newPickingDetail);
//                        }
//                    }
//                });
//            //                var LastPONo = result.results[result.results.length - 1];
//            //                var newNumber = parseInt(LastPONo.PONumber.substring(4)) + 1;
//            //                var tempDoc = "000000";
//            //                var NewPONo = 'PO' + docYear + tempDoc.substring(0, tempDoc.length - newNumber.toString().length) + newNumber.toString();
//            //                newPO.PurchaseOrderNumber = NewPONo;
//            //            }, function () {
//            //                newPO.PurchaseOrderNumber = 'PO' + docYear + '000001';
//            //            });


//            addNewScreen.PickingSlip = newPicking;
//        }, afterClosed: function (addEditScreen, navigationAction) {
//            if (navigationAction === msls.NavigateBackAction.commit) {
//                //screen.details.dataWorkspace.ApplicationData.PurchaseOrders._loadedEntities = {};
//                screen.QueryOrderRequisitionTransportRoute.refresh();
//            }
//        }
//    });
//};