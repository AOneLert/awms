/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowsePO.PurchaseOrderStatus_postRender = function (element, contentItem) {
    // Write code here.
};


myapp.BrowsePO.RowTemplate_postRender = function (element, contentItem) {
    var desc = "";
    if (contentItem.value.PurchaseOrderStatus)
        desc = "ปิดการรับ";
    else
        desc = "รอรับสินค้า";

    element.cells[5].innerText = desc;
};

//var count = 0;


myapp.BrowsePO.PurchaseOrderDate_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.dataBind("value", function (value) {
        if (value) {
            $(element).text(moment(value).format("DD/MM/YYYY"));
        }
    });
};

myapp.BrowsePO.PurchaseOrder_ItemTap_execute = function (screen) {
    // Write code here.
    if (screen.PurchaseOrders.selectedItem.PurchaseOrderStatus) {
        myapp.showViewPurchaseOrder(null, {
            beforeShown: function (addNewScreen) {
                var selectPO = screen.PurchaseOrders.selectedItem;              
                addNewScreen.PurchaseOrder = selectPO;
            },afterClosed: function (addEditScreen, navigationAction) {
            if (navigationAction === msls.NavigateBackAction.commit) {
                //screen.details.dataWorkspace.ApplicationData.PurchaseOrders._loadedEntities = {};
                screen.PurchaseOrders.refresh();
            }
        }
        });
    } else {
        myapp.showAddEditPO(null, {
            beforeShown: function (addNewScreen) {
                var selectPO = screen.PurchaseOrders.selectedItem;
                addNewScreen.PurchaseOrder = selectPO;
            }, afterClosed: function (addEditScreen, navigationAction) {
                if (navigationAction === msls.NavigateBackAction.commit) {
                    //screen.details.dataWorkspace.ApplicationData.PurchaseOrders._loadedEntities = {};
                    screen.PurchaseOrders.refresh();
                }
            }
        });
    }
};

//myapp.BrowsePO.ShowAddEditPO_Tap_execute = function (screen) {
//    // Write code here.
//    //var newPO = new myapp.activeDataWorkspace.ApplicationData.PurchaseOrders;
//    myapp.showAddEditPO(null, {
//        beforeShown: function (addNewScreen) {
//            var selectPO = screen.PurchaseOrders.selectedItem;
//            addNewScreen.PurchaseOrder = selectPO;
//        }, afterClosed: function (addEditScreen, navigationAction) {
//            if (navigationAction === msls.NavigateBackAction.commit) {
//                //screen.details.dataWorkspace.ApplicationData.PurchaseOrders._loadedEntities = {};
//                screen.PurchaseOrders.refresh();
//            }
//        }
//    });
//};
myapp.BrowsePO.PurchaseOrderNotCloseTemplate_postRender = function (element, contentItem) {
    // Write code here.
    var desc = "";
    if (contentItem.value.PurchaseOrderStatus)
        desc = "ปิดการรับ";
    else
        desc = "รอรับสินค้า";

    element.cells[5].innerText = desc;
};

myapp.BrowsePO.PurchaseOrderNotClose_ItemTap_execute = function (screen) {
    // Write code here.
    var temp = screen.PurchaseOrderNotClose.selectedItem.POStatusPending;
    if (screen.PurchaseOrderNotClose.selectedItem.POStatusPending) {
        myapp.showViewPurchaseOrder(null, {
            beforeShown: function (addNewScreen) {
                var selectPO = screen.PurchaseOrderNotClose.selectedItem;
                addNewScreen.PurchaseOrder = selectPO;
            }, afterClosed: function (addEditScreen, navigationAction) {
                if (navigationAction === msls.NavigateBackAction.commit) {
                    //screen.details.dataWorkspace.ApplicationData.PurchaseOrders._loadedEntities = {};
                    screen.PurchaseOrderNotClose.refresh();
                }
            }
        });
    } else {
        myapp.showAddEditPO(null, {
            beforeShown: function (addNewScreen) {
                var selectPO = screen.PurchaseOrderNotClose.selectedItem;
                addNewScreen.PurchaseOrder = selectPO;
            }, afterClosed: function (addEditScreen, navigationAction) {
                if (navigationAction === msls.NavigateBackAction.commit) {
                    //screen.details.dataWorkspace.ApplicationData.PurchaseOrders._loadedEntities = {};
                    screen.PurchaseOrderNotClose.refresh();
                }
            }
        });
    }
};
myapp.BrowsePO.PurchaseOrderClosed_ItemTap_execute = function (screen) {
    // Write code here.
    //var temp = screen.PurchaseOrderClosed.selectedItem.POStatusClosed;
    //if (screen.PurchaseOrderClosed.selectedItem.POStatusClosed) {
        myapp.showViewPurchaseOrder(null, {
            beforeShown: function (addNewScreen) {
                var selectPO = screen.PurchaseOrderClosed.selectedItem;
                addNewScreen.PurchaseOrder = selectPO;
            }, afterClosed: function (addEditScreen, navigationAction) {
                if (navigationAction === msls.NavigateBackAction.commit) {
                    //screen.details.dataWorkspace.ApplicationData.PurchaseOrders._loadedEntities = {};
                    screen.PurchaseOrderClosed.refresh();
                }
            }
        });
    //} else {
    //    myapp.showAddEditPO(null, {
    //        beforeShown: function (addNewScreen) {
    //            var selectPO = screen.PurchaseOrderClosed.selectedItem;
    //            addNewScreen.PurchaseOrder = selectPO;
    //        }, afterClosed: function (addEditScreen, navigationAction) {
    //            if (navigationAction === msls.NavigateBackAction.commit) {
    //                //screen.details.dataWorkspace.ApplicationData.PurchaseOrders._loadedEntities = {};
    //                screen.PurchaseOrderClosed.refresh();
    //            }
    //        }
    //    });
    //}
};

myapp.BrowsePO.PurchaseOrderClosedTemplate_postRender = function (element, contentItem) {
    // Write code here.
    var desc = "";
    if (contentItem.value.PurchaseOrderStatus)
        desc = "ปิดการรับ";
    else
        desc = "รอรับสินค้า";

    element.cells[5].innerText = desc;
};
myapp.BrowsePO.ShowBrowsePOReceive_Tap_execute = function (screen) {
    // Write code here.
    myapp.showBrowsePOReceive(null, {
        beforeShown: function (addNewScreen) {
            //var selectPO = screen.PurchaseOrders.selectedItem;
            //addNewScreen.PurchaseOrder = selectPO;
        }, afterClosed: function (addEditScreen, navigationAction) {
            if (navigationAction === msls.NavigateBackAction.commit) {
                //screen.details.dataWorkspace.ApplicationData.PurchaseOrders._loadedEntities = {};
                screen.PurchaseOrders.refresh();
                screen.PurchaseOrderNotClose.refresh();
                screen.PurchaseOrderClosed.refresh();
            }
        }
    });
};