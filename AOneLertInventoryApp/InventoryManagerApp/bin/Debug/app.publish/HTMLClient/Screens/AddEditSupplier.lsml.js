/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditSupplier.created = function (screen) {
    var supplierName;

    if (screen.Supplier.SupplierName !== undefined) {
        supplierName = screen.Supplier.SupplierName;
        screen.details.displayName = "แก้ไข -> " + supplierName;
    }
    else {
        screen.details.displayName = "เพิ่มผู้จำหน่าย";
    }

    //if (myapp.permissions["LightSwitchApplication:CanEditSuppliers"]) {
    //    screen.findContentItem("DetailsTab").isReadOnly = false;
    //}
    //else {
    //    screen.findContentItem("DetailsTab").isReadOnly = true;
    //}
};