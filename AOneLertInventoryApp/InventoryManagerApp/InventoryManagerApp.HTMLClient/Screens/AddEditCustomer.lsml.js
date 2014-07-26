/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditCustomer.created = function (screen) {
    var customerName;

    if (screen.Customer.CustomerName !== undefined) {
        customerName = screen.Customer.CustomerName;
        screen.details.displayName = "แก้ไข -> " + customerName;
    }
    else {
        screen.details.displayName = "เพิ่มลูกค้า";
    }

    //if (myapp.permissions["LightSwitchApplication:CanEditCustomers"]) {
    //    screen.findContentItem("DetailsTab").isReadOnly = false;
    //}
    //else {
    //    screen.findContentItem("DetailsTab").isReadOnly = true;
    //}
};