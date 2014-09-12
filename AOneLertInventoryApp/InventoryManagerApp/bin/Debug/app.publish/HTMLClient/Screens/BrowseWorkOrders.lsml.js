/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseWorkOrders.EmployeeFullName_postRender = function (element, contentItem) {
    // Write code here.
    //contentItem.value = contentItem.screen.findContentItem("FirstName") + "  " + contentItem.screen.findContentItem("LastName").value
};
myapp.BrowseWorkOrders.RowTemplate_postRender = function (element, contentItem) {
    // Write code here.
    var desc = "";
    if (contentItem.value.IsReceiveComplete)
        desc = "ผลิตเรียบร้อยแล้ว";
    else
        desc = "สั่งผลิต";

    element.cells[8].innerText = desc;
};
myapp.BrowseWorkOrders.WorkOrderDate_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.dataBind("value", function (value) {
        if (value) {
            $(element).text(moment(value).format("DD/MM/YYYY"));
        }
    });
};
myapp.BrowseWorkOrders.WorkOrder_ItemTap_execute = function (screen) {
    // Write code here.
    if (screen.WorkOrders.selectedItem.IsReceiveComplete) {
        myapp.showViewWorkOrder(null, {
            beforeShown: function (addNewScreen) {
                addNewScreen.WorkOrder = screen.WorkOrders.selectedItem;
            }, afterClosed: function (addEditScreen, navigationAction) {
                if (navigationAction === msls.NavigateBackAction.commit) {
                    screen.WorkOrders.refresh();
                }
            }
        });
    } else {
        myapp.showAddEditWorkOrder(null, {
            beforeShown: function (addNewScreen) {
                addNewScreen.WorkOrder = screen.WorkOrders.selectedItem;
            }, afterClosed: function (addEditScreen, navigationAction) {
                if (navigationAction === msls.NavigateBackAction.commit) {
                    screen.WorkOrders.refresh();
                }
            }
        });
    }
};