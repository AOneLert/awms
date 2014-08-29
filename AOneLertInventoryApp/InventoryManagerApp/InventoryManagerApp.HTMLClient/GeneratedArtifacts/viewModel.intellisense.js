/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditBank.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditBank
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditBank,
            data: lightSwitchApplication.AddEditBank,
            value: lightSwitchApplication.AddEditBank
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditBank,
            data: lightSwitchApplication.AddEditBank,
            value: lightSwitchApplication.Bank
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditBank,
            data: lightSwitchApplication.Bank,
            value: lightSwitchApplication.Bank
        },
        BankCode: {
            _$class: msls.ContentItem,
            _$name: "BankCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBank,
            data: lightSwitchApplication.Bank,
            value: String
        },
        BankName: {
            _$class: msls.ContentItem,
            _$name: "BankName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBank,
            data: lightSwitchApplication.Bank,
            value: String
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBank,
            data: lightSwitchApplication.Bank,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditBank
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditBank, {
        /// <field>
        /// Called when a new AddEditBank screen is created.
        /// <br/>created(msls.application.AddEditBank screen)
        /// </field>
        created: [lightSwitchApplication.AddEditBank],
        /// <field>
        /// Called before changes on an active AddEditBank screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditBank screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditBank],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditBank().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditBank().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditBank().findContentItem("left"); }],
        /// <field>
        /// Called after the BankCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BankCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditBank().findContentItem("BankCode"); }],
        /// <field>
        /// Called after the BankName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BankName_postRender: [$element, function () { return new lightSwitchApplication.AddEditBank().findContentItem("BankName"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.AddEditBank().findContentItem("Discontinued"); }]
    });

    lightSwitchApplication.AddEditCompany.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCompany
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditCompany,
            data: lightSwitchApplication.AddEditCompany,
            value: lightSwitchApplication.AddEditCompany
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditCompany,
            data: lightSwitchApplication.AddEditCompany,
            value: lightSwitchApplication.Company
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCompany,
            data: lightSwitchApplication.Company,
            value: lightSwitchApplication.Company
        },
        CompanyNameTH: {
            _$class: msls.ContentItem,
            _$name: "CompanyNameTH",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCompany,
            data: lightSwitchApplication.Company,
            value: String
        },
        AddressTH1: {
            _$class: msls.ContentItem,
            _$name: "AddressTH1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCompany,
            data: lightSwitchApplication.Company,
            value: String
        },
        AddressTH2: {
            _$class: msls.ContentItem,
            _$name: "AddressTH2",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCompany,
            data: lightSwitchApplication.Company,
            value: String
        },
        TaxID: {
            _$class: msls.ContentItem,
            _$name: "TaxID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCompany,
            data: lightSwitchApplication.Company,
            value: String
        },
        Phone: {
            _$class: msls.ContentItem,
            _$name: "Phone",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCompany,
            data: lightSwitchApplication.Company,
            value: String
        },
        Fax: {
            _$class: msls.ContentItem,
            _$name: "Fax",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCompany,
            data: lightSwitchApplication.Company,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCompany,
            data: lightSwitchApplication.Company,
            value: lightSwitchApplication.Company
        },
        CompanyNameEN: {
            _$class: msls.ContentItem,
            _$name: "CompanyNameEN",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCompany,
            data: lightSwitchApplication.Company,
            value: String
        },
        AddressEN2: {
            _$class: msls.ContentItem,
            _$name: "AddressEN2",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCompany,
            data: lightSwitchApplication.Company,
            value: String
        },
        AddressEN1: {
            _$class: msls.ContentItem,
            _$name: "AddressEN1",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCompany,
            data: lightSwitchApplication.Company,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCompany
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditCompany, {
        /// <field>
        /// Called when a new AddEditCompany screen is created.
        /// <br/>created(msls.application.AddEditCompany screen)
        /// </field>
        created: [lightSwitchApplication.AddEditCompany],
        /// <field>
        /// Called before changes on an active AddEditCompany screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditCompany screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditCompany],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditCompany().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditCompany().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditCompany().findContentItem("left"); }],
        /// <field>
        /// Called after the CompanyNameTH content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CompanyNameTH_postRender: [$element, function () { return new lightSwitchApplication.AddEditCompany().findContentItem("CompanyNameTH"); }],
        /// <field>
        /// Called after the AddressTH1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressTH1_postRender: [$element, function () { return new lightSwitchApplication.AddEditCompany().findContentItem("AddressTH1"); }],
        /// <field>
        /// Called after the AddressTH2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressTH2_postRender: [$element, function () { return new lightSwitchApplication.AddEditCompany().findContentItem("AddressTH2"); }],
        /// <field>
        /// Called after the TaxID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TaxID_postRender: [$element, function () { return new lightSwitchApplication.AddEditCompany().findContentItem("TaxID"); }],
        /// <field>
        /// Called after the Phone content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone_postRender: [$element, function () { return new lightSwitchApplication.AddEditCompany().findContentItem("Phone"); }],
        /// <field>
        /// Called after the Fax content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Fax_postRender: [$element, function () { return new lightSwitchApplication.AddEditCompany().findContentItem("Fax"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditCompany().findContentItem("right"); }],
        /// <field>
        /// Called after the CompanyNameEN content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CompanyNameEN_postRender: [$element, function () { return new lightSwitchApplication.AddEditCompany().findContentItem("CompanyNameEN"); }],
        /// <field>
        /// Called after the AddressEN2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressEN2_postRender: [$element, function () { return new lightSwitchApplication.AddEditCompany().findContentItem("AddressEN2"); }],
        /// <field>
        /// Called after the AddressEN1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressEN1_postRender: [$element, function () { return new lightSwitchApplication.AddEditCompany().findContentItem("AddressEN1"); }]
    });

    lightSwitchApplication.AddEditCustomer.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCustomer
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.AddEditCustomer,
            value: lightSwitchApplication.AddEditCustomer
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.AddEditCustomer,
            value: lightSwitchApplication.Customer
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: lightSwitchApplication.Customer
        },
        CustomerGroup: {
            _$class: msls.ContentItem,
            _$name: "CustomerGroup",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: lightSwitchApplication.CustomerGroup
        },
        CustomerGroup1: {
            _$class: msls.ContentItem,
            _$name: "CustomerGroup1",
            _$parentName: "CustomerGroup",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.CustomerGroup,
            value: lightSwitchApplication.CustomerGroup
        },
        CustomerName: {
            _$class: msls.ContentItem,
            _$name: "CustomerName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        TaxID: {
            _$class: msls.ContentItem,
            _$name: "TaxID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Address1: {
            _$class: msls.ContentItem,
            _$name: "Address1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Address2: {
            _$class: msls.ContentItem,
            _$name: "Address2",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        ContactName: {
            _$class: msls.ContentItem,
            _$name: "ContactName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        PostCode: {
            _$class: msls.ContentItem,
            _$name: "PostCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: Number
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: Boolean
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: lightSwitchApplication.Customer
        },
        RegisterDate: {
            _$class: msls.ContentItem,
            _$name: "RegisterDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: Date
        },
        TransportRoute: {
            _$class: msls.ContentItem,
            _$name: "TransportRoute",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: lightSwitchApplication.TransportRoute
        },
        TransportRoute1: {
            _$class: msls.ContentItem,
            _$name: "TransportRoute1",
            _$parentName: "TransportRoute",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.TransportRoute,
            value: lightSwitchApplication.TransportRoute
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Phone: {
            _$class: msls.ContentItem,
            _$name: "Phone",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Fax: {
            _$class: msls.ContentItem,
            _$name: "Fax",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Website: {
            _$class: msls.ContentItem,
            _$name: "Website",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Latitude: {
            _$class: msls.ContentItem,
            _$name: "Latitude",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: Number
        },
        Longitude: {
            _$class: msls.ContentItem,
            _$name: "Longitude",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCustomer
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditCustomer, {
        /// <field>
        /// Called when a new AddEditCustomer screen is created.
        /// <br/>created(msls.application.AddEditCustomer screen)
        /// </field>
        created: [lightSwitchApplication.AddEditCustomer],
        /// <field>
        /// Called before changes on an active AddEditCustomer screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditCustomer screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditCustomer],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("left"); }],
        /// <field>
        /// Called after the CustomerGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("CustomerGroup"); }],
        /// <field>
        /// Called after the CustomerGroup1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerGroup1_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("CustomerGroup1"); }],
        /// <field>
        /// Called after the CustomerName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerName_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("CustomerName"); }],
        /// <field>
        /// Called after the TaxID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TaxID_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("TaxID"); }],
        /// <field>
        /// Called after the Address1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address1_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("Address1"); }],
        /// <field>
        /// Called after the Address2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address2_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("Address2"); }],
        /// <field>
        /// Called after the ContactName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContactName_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("ContactName"); }],
        /// <field>
        /// Called after the PostCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PostCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("PostCode"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("Discontinued"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("right"); }],
        /// <field>
        /// Called after the RegisterDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RegisterDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("RegisterDate"); }],
        /// <field>
        /// Called after the TransportRoute content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TransportRoute_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("TransportRoute"); }],
        /// <field>
        /// Called after the TransportRoute1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TransportRoute1_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("TransportRoute1"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("Email"); }],
        /// <field>
        /// Called after the Phone content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("Phone"); }],
        /// <field>
        /// Called after the Fax content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Fax_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("Fax"); }],
        /// <field>
        /// Called after the Website content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Website_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("Website"); }],
        /// <field>
        /// Called after the Latitude content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Latitude_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("Latitude"); }],
        /// <field>
        /// Called after the Longitude content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Longitude_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("Longitude"); }]
    });

    lightSwitchApplication.AddEditCustomerGroup.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCustomerGroup
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditCustomerGroup,
            data: lightSwitchApplication.AddEditCustomerGroup,
            value: lightSwitchApplication.AddEditCustomerGroup
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditCustomerGroup,
            data: lightSwitchApplication.AddEditCustomerGroup,
            value: lightSwitchApplication.CustomerGroup
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCustomerGroup,
            data: lightSwitchApplication.CustomerGroup,
            value: lightSwitchApplication.CustomerGroup
        },
        CustomerGroupName: {
            _$class: msls.ContentItem,
            _$name: "CustomerGroupName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCustomerGroup,
            data: lightSwitchApplication.CustomerGroup,
            value: String
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCustomerGroup,
            data: lightSwitchApplication.CustomerGroup,
            value: Boolean
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCustomerGroup,
            data: lightSwitchApplication.CustomerGroup,
            value: lightSwitchApplication.CustomerGroup
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCustomerGroup
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditCustomerGroup, {
        /// <field>
        /// Called when a new AddEditCustomerGroup screen is created.
        /// <br/>created(msls.application.AddEditCustomerGroup screen)
        /// </field>
        created: [lightSwitchApplication.AddEditCustomerGroup],
        /// <field>
        /// Called before changes on an active AddEditCustomerGroup screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditCustomerGroup screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditCustomerGroup],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomerGroup().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomerGroup().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomerGroup().findContentItem("left"); }],
        /// <field>
        /// Called after the CustomerGroupName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerGroupName_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomerGroup().findContentItem("CustomerGroupName"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomerGroup().findContentItem("Discontinued"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomerGroup().findContentItem("right"); }]
    });

    lightSwitchApplication.AddEditEmployee.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.AddEditEmployee
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployee, {
        /// <field>
        /// Called when a new AddEditEmployee screen is created.
        /// <br/>created(msls.application.AddEditEmployee screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called before changes on an active AddEditEmployee screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployee screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("DetailsTab"); }]
    });

    lightSwitchApplication.AddEditMachine.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditMachine
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditMachine,
            data: lightSwitchApplication.AddEditMachine,
            value: lightSwitchApplication.AddEditMachine
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditMachine,
            data: lightSwitchApplication.AddEditMachine,
            value: lightSwitchApplication.Machine
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditMachine,
            data: lightSwitchApplication.Machine,
            value: lightSwitchApplication.Machine
        },
        MachineName: {
            _$class: msls.ContentItem,
            _$name: "MachineName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMachine,
            data: lightSwitchApplication.Machine,
            value: String
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMachine,
            data: lightSwitchApplication.Machine,
            value: Boolean
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditMachine,
            data: lightSwitchApplication.Machine,
            value: lightSwitchApplication.Machine
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditMachine
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditMachine, {
        /// <field>
        /// Called when a new AddEditMachine screen is created.
        /// <br/>created(msls.application.AddEditMachine screen)
        /// </field>
        created: [lightSwitchApplication.AddEditMachine],
        /// <field>
        /// Called before changes on an active AddEditMachine screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditMachine screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditMachine],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditMachine().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditMachine().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditMachine().findContentItem("left"); }],
        /// <field>
        /// Called after the MachineName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MachineName_postRender: [$element, function () { return new lightSwitchApplication.AddEditMachine().findContentItem("MachineName"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.AddEditMachine().findContentItem("Discontinued"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditMachine().findContentItem("right"); }]
    });

    lightSwitchApplication.AddEditOrder.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditOrder
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.AddEditOrder,
            value: lightSwitchApplication.AddEditOrder
        },
        OrderDetails: {
            _$class: msls.ContentItem,
            _$name: "OrderDetails",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.AddEditOrder,
            value: lightSwitchApplication.AddEditOrder
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditOrder
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditOrder, {
        /// <field>
        /// Called when a new AddEditOrder screen is created.
        /// <br/>created(msls.application.AddEditOrder screen)
        /// </field>
        created: [lightSwitchApplication.AddEditOrder],
        /// <field>
        /// Called before changes on an active AddEditOrder screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditOrder screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditOrder],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the OrderDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("OrderDetails"); }]
    });

    lightSwitchApplication.AddEditOrderDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditOrderDetail
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditOrderDetail,
            data: lightSwitchApplication.AddEditOrderDetail,
            value: lightSwitchApplication.AddEditOrderDetail
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditOrderDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditOrderDetail, {
        /// <field>
        /// Called when a new AddEditOrderDetail screen is created.
        /// <br/>created(msls.application.AddEditOrderDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditOrderDetail],
        /// <field>
        /// Called before changes on an active AddEditOrderDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditOrderDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditOrderDetail],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrderDetail().findContentItem("DetailsTab"); }]
    });

    lightSwitchApplication.AddEditPackage.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPackage
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPackage,
            data: lightSwitchApplication.AddEditPackage,
            value: lightSwitchApplication.AddEditPackage
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPackage,
            data: lightSwitchApplication.AddEditPackage,
            value: lightSwitchApplication.Package
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPackage,
            data: lightSwitchApplication.Package,
            value: lightSwitchApplication.Package
        },
        PackageName: {
            _$class: msls.ContentItem,
            _$name: "PackageName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPackage,
            data: lightSwitchApplication.Package,
            value: String
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPackage,
            data: lightSwitchApplication.Package,
            value: Boolean
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPackage,
            data: lightSwitchApplication.Package,
            value: lightSwitchApplication.Package
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPackage
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPackage, {
        /// <field>
        /// Called when a new AddEditPackage screen is created.
        /// <br/>created(msls.application.AddEditPackage screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPackage],
        /// <field>
        /// Called before changes on an active AddEditPackage screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPackage screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPackage],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditPackage().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPackage().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPackage().findContentItem("left"); }],
        /// <field>
        /// Called after the PackageName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PackageName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPackage().findContentItem("PackageName"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.AddEditPackage().findContentItem("Discontinued"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditPackage().findContentItem("right"); }]
    });

    lightSwitchApplication.AddEditPaymentType.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPaymentType
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPaymentType,
            data: lightSwitchApplication.AddEditPaymentType,
            value: lightSwitchApplication.AddEditPaymentType
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPaymentType,
            data: lightSwitchApplication.AddEditPaymentType,
            value: lightSwitchApplication.PaymentType
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPaymentType,
            data: lightSwitchApplication.PaymentType,
            value: lightSwitchApplication.PaymentType
        },
        PaymentTypeName: {
            _$class: msls.ContentItem,
            _$name: "PaymentTypeName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPaymentType,
            data: lightSwitchApplication.PaymentType,
            value: String
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPaymentType,
            data: lightSwitchApplication.PaymentType,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPaymentType
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPaymentType, {
        /// <field>
        /// Called when a new AddEditPaymentType screen is created.
        /// <br/>created(msls.application.AddEditPaymentType screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPaymentType],
        /// <field>
        /// Called before changes on an active AddEditPaymentType screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPaymentType screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPaymentType],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentType().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentType().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentType().findContentItem("left"); }],
        /// <field>
        /// Called after the PaymentTypeName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaymentTypeName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentType().findContentItem("PaymentTypeName"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentType().findContentItem("Discontinued"); }]
    });

    lightSwitchApplication.AddEditPO.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPO
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.AddEditPO,
            value: lightSwitchApplication.AddEditPO
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.AddEditPO,
            value: lightSwitchApplication.PurchaseOrder
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        PurchaseOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderNumber",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        Supplier: {
            _$class: msls.ContentItem,
            _$name: "Supplier",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.Supplier
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Supplier",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.Supplier,
            value: lightSwitchApplication.Supplier
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        PurchaseOrderDate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.PurchaseOrder,
            value: Date
        },
        PurchaseOrderStatus: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderStatus",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.PurchaseOrder,
            value: Boolean
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        POStatusDescription: {
            _$class: msls.ContentItem,
            _$name: "POStatusDescription",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        PurchaseOrderDetails: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetails",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.AddEditPO,
            value: lightSwitchApplication.AddEditPO
        },
        PurchaseOrderDetails1: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetails1",
            _$parentName: "PurchaseOrderDetails",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.AddEditPO,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditPO,
                _$entry: {
                    elementType: lightSwitchApplication.PurchaseOrderDetail
                }
            }
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "PurchaseOrderDetails1",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        RequireQuantity: {
            _$class: msls.ContentItem,
            _$name: "RequireQuantity",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        RequireDate: {
            _$class: msls.ContentItem,
            _$name: "RequireDate",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        IsReceiveComplete: {
            _$class: msls.ContentItem,
            _$name: "IsReceiveComplete",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Boolean
        },
        ItemIsReceiveComplete: {
            _$class: msls.ContentItem,
            _$name: "ItemIsReceiveComplete",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPO
        },
        SupplierPopup: {
            _$class: msls.ContentItem,
            _$name: "SupplierPopup",
            _$parentName: "Popups",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.AddEditPO,
            value: lightSwitchApplication.AddEditPO
        },
        SearchSupplier: {
            _$class: msls.ContentItem,
            _$name: "SearchSupplier",
            _$parentName: "SupplierPopup",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.AddEditPO,
            value: String
        },
        SupplierActiveQuery: {
            _$class: msls.ContentItem,
            _$name: "SupplierActiveQuery",
            _$parentName: "SupplierPopup",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.AddEditPO,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditPO,
                _$entry: {
                    elementType: lightSwitchApplication.Supplier
                }
            }
        },
        SupplierActiveQueryTemplate: {
            _$class: msls.ContentItem,
            _$name: "SupplierActiveQueryTemplate",
            _$parentName: "SupplierActiveQuery",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.Supplier,
            value: lightSwitchApplication.Supplier
        },
        SupplierName: {
            _$class: msls.ContentItem,
            _$name: "SupplierName",
            _$parentName: "SupplierActiveQueryTemplate",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        SupplierGroupName: {
            _$class: msls.ContentItem,
            _$name: "SupplierGroupName",
            _$parentName: "SupplierActiveQueryTemplate",
            screen: lightSwitchApplication.AddEditPO,
            data: lightSwitchApplication.Supplier,
            value: String
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPO, {
        /// <field>
        /// Called when a new AddEditPO screen is created.
        /// <br/>created(msls.application.AddEditPO screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPO],
        /// <field>
        /// Called before changes on an active AddEditPO screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPO screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPO],
        /// <field>
        /// Called to determine if the SupplierActiveQuery_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.AddEditPO screen)
        /// </field>
        SupplierActiveQuery_ItemTap_canExecute: [lightSwitchApplication.AddEditPO],
        /// <field>
        /// Called to execute the SupplierActiveQuery_ItemTap method.
        /// <br/>execute(msls.application.AddEditPO screen)
        /// </field>
        SupplierActiveQuery_ItemTap_execute: [lightSwitchApplication.AddEditPO],
        /// <field>
        /// Called to determine if the PurchaseOrderDetails_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.AddEditPO screen)
        /// </field>
        PurchaseOrderDetails_ItemTap_canExecute: [lightSwitchApplication.AddEditPO],
        /// <field>
        /// Called to execute the PurchaseOrderDetails_ItemTap method.
        /// <br/>execute(msls.application.AddEditPO screen)
        /// </field>
        PurchaseOrderDetails_ItemTap_execute: [lightSwitchApplication.AddEditPO],
        /// <field>
        /// Called to determine if the ShowAddEditPODetail_Tap method can be executed.
        /// <br/>canExecute(msls.application.AddEditPO screen)
        /// </field>
        ShowAddEditPODetail_Tap_canExecute: [lightSwitchApplication.AddEditPO],
        /// <field>
        /// Called to execute the ShowAddEditPODetail_Tap method.
        /// <br/>execute(msls.application.AddEditPO screen)
        /// </field>
        ShowAddEditPODetail_Tap_execute: [lightSwitchApplication.AddEditPO],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("left"); }],
        /// <field>
        /// Called after the PurchaseOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("PurchaseOrderNumber"); }],
        /// <field>
        /// Called after the Supplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Supplier_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("Supplier"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("right"); }],
        /// <field>
        /// Called after the PurchaseOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("PurchaseOrderDate"); }],
        /// <field>
        /// Called after the PurchaseOrderStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("PurchaseOrderStatus"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("Group"); }],
        /// <field>
        /// Called after the POStatusDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        POStatusDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("POStatusDescription"); }],
        /// <field>
        /// Called after the PurchaseOrderDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("PurchaseOrderDetails"); }],
        /// <field>
        /// Called after the PurchaseOrderDetails1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetails1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("PurchaseOrderDetails1"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the RequireQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("RequireQuantity"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the RequireDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("RequireDate"); }],
        /// <field>
        /// Called after the IsReceiveComplete content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsReceiveComplete_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("IsReceiveComplete"); }],
        /// <field>
        /// Called after the ItemIsReceiveComplete content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ItemIsReceiveComplete_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("ItemIsReceiveComplete"); }],
        /// <field>
        /// Called after the SupplierPopup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierPopup_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("SupplierPopup"); }],
        /// <field>
        /// Called after the SearchSupplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchSupplier_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("SearchSupplier"); }],
        /// <field>
        /// Called after the SupplierActiveQuery content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierActiveQuery_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("SupplierActiveQuery"); }],
        /// <field>
        /// Called after the SupplierActiveQueryTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierActiveQueryTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("SupplierActiveQueryTemplate"); }],
        /// <field>
        /// Called after the SupplierName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("SupplierName"); }],
        /// <field>
        /// Called after the SupplierGroupName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierGroupName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPO().findContentItem("SupplierGroupName"); }]
    });

    lightSwitchApplication.AddEditPODetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPODetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.AddEditPODetail,
            value: lightSwitchApplication.AddEditPODetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.AddEditPODetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        RequireDate: {
            _$class: msls.ContentItem,
            _$name: "RequireDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        Group4: {
            _$class: msls.ContentItem,
            _$name: "Group4",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "Group4",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "Group4",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "Group2",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        RequireQuantity: {
            _$class: msls.ContentItem,
            _$name: "RequireQuantity",
            _$parentName: "Group3",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "Group3",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        IsReceiveComplete: {
            _$class: msls.ContentItem,
            _$name: "IsReceiveComplete",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Boolean
        },
        Location: {
            _$class: msls.ContentItem,
            _$name: "Location",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.Location
        },
        Location1: {
            _$class: msls.ContentItem,
            _$name: "Location1",
            _$parentName: "Location",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.Location,
            value: lightSwitchApplication.Location
        },
        RequireUnitCost: {
            _$class: msls.ContentItem,
            _$name: "RequireUnitCost",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        RequireTotalCost: {
            _$class: msls.ContentItem,
            _$name: "RequireTotalCost",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPODetail
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Popups",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.AddEditPODetail,
            value: lightSwitchApplication.AddEditPODetail
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.AddEditPODetail,
            value: lightSwitchApplication.AddEditPODetail
        },
        SearchProduct: {
            _$class: msls.ContentItem,
            _$name: "SearchProduct",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.AddEditPODetail,
            value: String
        },
        ProductsActiveQuery: {
            _$class: msls.ContentItem,
            _$name: "ProductsActiveQuery",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.AddEditPODetail,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditPODetail,
                _$entry: {
                    elementType: lightSwitchApplication.Product
                }
            }
        },
        ProductsActiveQueryTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProductsActiveQueryTemplate",
            _$parentName: "ProductsActiveQuery",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        ProductGroup2: {
            _$class: msls.ContentItem,
            _$name: "ProductGroup2",
            _$parentName: "ProductsActiveQueryTemplate",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.ProductGroup
        },
        ProductCode1: {
            _$class: msls.ContentItem,
            _$name: "ProductCode1",
            _$parentName: "ProductsActiveQueryTemplate",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.Product,
            value: String
        },
        ProductName1: {
            _$class: msls.ContentItem,
            _$name: "ProductName1",
            _$parentName: "ProductsActiveQueryTemplate",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.Product,
            value: String
        },
        Location2: {
            _$class: msls.ContentItem,
            _$name: "Location2",
            _$parentName: "ProductsActiveQueryTemplate",
            screen: lightSwitchApplication.AddEditPODetail,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Location
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPODetail, {
        /// <field>
        /// Called when a new AddEditPODetail screen is created.
        /// <br/>created(msls.application.AddEditPODetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPODetail],
        /// <field>
        /// Called before changes on an active AddEditPODetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPODetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPODetail],
        /// <field>
        /// Called to determine if the deleteSelectedPODetail method can be executed.
        /// <br/>canExecute(msls.application.AddEditPODetail screen)
        /// </field>
        deleteSelectedPODetail_canExecute: [lightSwitchApplication.AddEditPODetail],
        /// <field>
        /// Called to execute the deleteSelectedPODetail method.
        /// <br/>execute(msls.application.AddEditPODetail screen)
        /// </field>
        deleteSelectedPODetail_execute: [lightSwitchApplication.AddEditPODetail],
        /// <field>
        /// Called to determine if the ProductsActiveQuery_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.AddEditPODetail screen)
        /// </field>
        ProductsActiveQuery_ItemTap_canExecute: [lightSwitchApplication.AddEditPODetail],
        /// <field>
        /// Called to execute the ProductsActiveQuery_ItemTap method.
        /// <br/>execute(msls.application.AddEditPODetail screen)
        /// </field>
        ProductsActiveQuery_ItemTap_execute: [lightSwitchApplication.AddEditPODetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("left"); }],
        /// <field>
        /// Called after the RequireDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("RequireDate"); }],
        /// <field>
        /// Called after the Group4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group4_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("Group4"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("Group2"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("Group3"); }],
        /// <field>
        /// Called after the RequireQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("RequireQuantity"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the IsReceiveComplete content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsReceiveComplete_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("IsReceiveComplete"); }],
        /// <field>
        /// Called after the Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("Location"); }],
        /// <field>
        /// Called after the Location1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("Location1"); }],
        /// <field>
        /// Called after the RequireUnitCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireUnitCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("RequireUnitCost"); }],
        /// <field>
        /// Called after the RequireTotalCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireTotalCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("RequireTotalCost"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("Group"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("Group1"); }],
        /// <field>
        /// Called after the SearchProduct content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchProduct_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("SearchProduct"); }],
        /// <field>
        /// Called after the ProductsActiveQuery content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductsActiveQuery_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("ProductsActiveQuery"); }],
        /// <field>
        /// Called after the ProductsActiveQueryTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductsActiveQueryTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("ProductsActiveQueryTemplate"); }],
        /// <field>
        /// Called after the ProductGroup2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductGroup2_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("ProductGroup2"); }],
        /// <field>
        /// Called after the ProductCode1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("ProductCode1"); }],
        /// <field>
        /// Called after the ProductName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("ProductName1"); }],
        /// <field>
        /// Called after the Location2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location2_postRender: [$element, function () { return new lightSwitchApplication.AddEditPODetail().findContentItem("Location2"); }]
    });

    lightSwitchApplication.AddEditPOReceive.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPOReceive
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.AddEditPOReceive,
            value: lightSwitchApplication.AddEditPOReceive
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.AddEditPOReceive,
            value: lightSwitchApplication.PurchaseOrder
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        PurchaseOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderNumber",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        Supplier: {
            _$class: msls.ContentItem,
            _$name: "Supplier",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.Supplier
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Supplier",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.Supplier,
            value: lightSwitchApplication.Supplier
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        PurchaseOrderDate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrder,
            value: Date
        },
        PurchaseOrderStatus: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderStatus",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrder,
            value: Boolean
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.AddEditPOReceive,
            value: lightSwitchApplication.AddEditPOReceive
        },
        PurchaseOrderDetails: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetails",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.AddEditPOReceive,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditPOReceive,
                _$entry: {
                    elementType: lightSwitchApplication.PurchaseOrderDetail
                }
            }
        },
        PurchaseOrderDetailsTemplate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetailsTemplate",
            _$parentName: "PurchaseOrderDetails",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        RequireDate: {
            _$class: msls.ContentItem,
            _$name: "RequireDate",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        ReceiveDate: {
            _$class: msls.ContentItem,
            _$name: "ReceiveDate",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        LocationName: {
            _$class: msls.ContentItem,
            _$name: "LocationName",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        LotNo: {
            _$class: msls.ContentItem,
            _$name: "LotNo",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        RequireQuantity: {
            _$class: msls.ContentItem,
            _$name: "RequireQuantity",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        ReceiveQuantity: {
            _$class: msls.ContentItem,
            _$name: "ReceiveQuantity",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        ReceiveUnitCost: {
            _$class: msls.ContentItem,
            _$name: "ReceiveUnitCost",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        ReceiveTotalCost: {
            _$class: msls.ContentItem,
            _$name: "ReceiveTotalCost",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        Remark: {
            _$class: msls.ContentItem,
            _$name: "Remark",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        IsReceiveComplete: {
            _$class: msls.ContentItem,
            _$name: "IsReceiveComplete",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Boolean
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditPOReceive,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPOReceive
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPOReceive, {
        /// <field>
        /// Called when a new AddEditPOReceive screen is created.
        /// <br/>created(msls.application.AddEditPOReceive screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPOReceive],
        /// <field>
        /// Called before changes on an active AddEditPOReceive screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPOReceive screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPOReceive],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("left"); }],
        /// <field>
        /// Called after the PurchaseOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("PurchaseOrderNumber"); }],
        /// <field>
        /// Called after the Supplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Supplier_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("Supplier"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("right"); }],
        /// <field>
        /// Called after the PurchaseOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("PurchaseOrderDate"); }],
        /// <field>
        /// Called after the PurchaseOrderStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("PurchaseOrderStatus"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("Group"); }],
        /// <field>
        /// Called after the PurchaseOrderDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("PurchaseOrderDetails"); }],
        /// <field>
        /// Called after the PurchaseOrderDetailsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetailsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("PurchaseOrderDetailsTemplate"); }],
        /// <field>
        /// Called after the RequireDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("RequireDate"); }],
        /// <field>
        /// Called after the ReceiveDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("ReceiveDate"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the LocationName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("LocationName"); }],
        /// <field>
        /// Called after the LotNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("LotNo"); }],
        /// <field>
        /// Called after the RequireQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("RequireQuantity"); }],
        /// <field>
        /// Called after the ReceiveQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("ReceiveQuantity"); }],
        /// <field>
        /// Called after the ReceiveUnitCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveUnitCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("ReceiveUnitCost"); }],
        /// <field>
        /// Called after the ReceiveTotalCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveTotalCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("ReceiveTotalCost"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the Remark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remark_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("Remark"); }],
        /// <field>
        /// Called after the IsReceiveComplete content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsReceiveComplete_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("IsReceiveComplete"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceive().findContentItem("ModifiedBy"); }]
    });

    lightSwitchApplication.AddEditPOReceiveDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPOReceiveDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.AddEditPOReceiveDetail,
            value: lightSwitchApplication.AddEditPOReceiveDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.AddEditPOReceiveDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        RequireDate: {
            _$class: msls.ContentItem,
            _$name: "RequireDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        ReceiveDate: {
            _$class: msls.ContentItem,
            _$name: "ReceiveDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        Location: {
            _$class: msls.ContentItem,
            _$name: "Location",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.Location
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Location",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.Location,
            value: lightSwitchApplication.Location
        },
        LotNo: {
            _$class: msls.ContentItem,
            _$name: "LotNo",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        ModifiedBy1: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        RequireQuantity: {
            _$class: msls.ContentItem,
            _$name: "RequireQuantity",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        ReceiveQuantity: {
            _$class: msls.ContentItem,
            _$name: "ReceiveQuantity",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        RequireUnitCost: {
            _$class: msls.ContentItem,
            _$name: "RequireUnitCost",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        RequireTotalCost: {
            _$class: msls.ContentItem,
            _$name: "RequireTotalCost",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        ReceiveUnitCost: {
            _$class: msls.ContentItem,
            _$name: "ReceiveUnitCost",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        ReceiveTotalCost: {
            _$class: msls.ContentItem,
            _$name: "ReceiveTotalCost",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        Remark: {
            _$class: msls.ContentItem,
            _$name: "Remark",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        IsReceiveComplete: {
            _$class: msls.ContentItem,
            _$name: "IsReceiveComplete",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPOReceiveDetail
        },
        LocationPopup: {
            _$class: msls.ContentItem,
            _$name: "LocationPopup",
            _$parentName: "Popups",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.AddEditPOReceiveDetail,
            value: lightSwitchApplication.AddEditPOReceiveDetail
        },
        SearchLocation: {
            _$class: msls.ContentItem,
            _$name: "SearchLocation",
            _$parentName: "LocationPopup",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.AddEditPOReceiveDetail,
            value: String
        },
        LocationActiveQuery: {
            _$class: msls.ContentItem,
            _$name: "LocationActiveQuery",
            _$parentName: "LocationPopup",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.AddEditPOReceiveDetail,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditPOReceiveDetail,
                _$entry: {
                    elementType: lightSwitchApplication.Location
                }
            }
        },
        LocationActiveQueryTemplate: {
            _$class: msls.ContentItem,
            _$name: "LocationActiveQueryTemplate",
            _$parentName: "LocationActiveQuery",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.Location,
            value: lightSwitchApplication.Location
        },
        LocationName: {
            _$class: msls.ContentItem,
            _$name: "LocationName",
            _$parentName: "LocationActiveQueryTemplate",
            screen: lightSwitchApplication.AddEditPOReceiveDetail,
            data: lightSwitchApplication.Location,
            value: String
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPOReceiveDetail, {
        /// <field>
        /// Called when a new AddEditPOReceiveDetail screen is created.
        /// <br/>created(msls.application.AddEditPOReceiveDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPOReceiveDetail],
        /// <field>
        /// Called before changes on an active AddEditPOReceiveDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPOReceiveDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPOReceiveDetail],
        /// <field>
        /// Called to determine if the LocationActiveQuery_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.AddEditPOReceiveDetail screen)
        /// </field>
        LocationActiveQuery_ItemTap_canExecute: [lightSwitchApplication.AddEditPOReceiveDetail],
        /// <field>
        /// Called to execute the LocationActiveQuery_ItemTap method.
        /// <br/>execute(msls.application.AddEditPOReceiveDetail screen)
        /// </field>
        LocationActiveQuery_ItemTap_execute: [lightSwitchApplication.AddEditPOReceiveDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("left"); }],
        /// <field>
        /// Called after the RequireDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("RequireDate"); }],
        /// <field>
        /// Called after the ReceiveDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("ReceiveDate"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("Location"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the LotNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("LotNo"); }],
        /// <field>
        /// Called after the ModifiedBy1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("ModifiedBy1"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("right"); }],
        /// <field>
        /// Called after the RequireQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("RequireQuantity"); }],
        /// <field>
        /// Called after the ReceiveQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("ReceiveQuantity"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the RequireUnitCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireUnitCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("RequireUnitCost"); }],
        /// <field>
        /// Called after the RequireTotalCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireTotalCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("RequireTotalCost"); }],
        /// <field>
        /// Called after the ReceiveUnitCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveUnitCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("ReceiveUnitCost"); }],
        /// <field>
        /// Called after the ReceiveTotalCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveTotalCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("ReceiveTotalCost"); }],
        /// <field>
        /// Called after the Remark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remark_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("Remark"); }],
        /// <field>
        /// Called after the IsReceiveComplete content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsReceiveComplete_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("IsReceiveComplete"); }],
        /// <field>
        /// Called after the LocationPopup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationPopup_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("LocationPopup"); }],
        /// <field>
        /// Called after the SearchLocation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchLocation_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("SearchLocation"); }],
        /// <field>
        /// Called after the LocationActiveQuery content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationActiveQuery_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("LocationActiveQuery"); }],
        /// <field>
        /// Called after the LocationActiveQueryTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationActiveQueryTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("LocationActiveQueryTemplate"); }],
        /// <field>
        /// Called after the LocationName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPOReceiveDetail().findContentItem("LocationName"); }]
    });

    lightSwitchApplication.AddEditProduct.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProduct
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.AddEditProduct,
            value: lightSwitchApplication.AddEditProduct
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.AddEditProduct,
            value: lightSwitchApplication.Product
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        ProductCategory: {
            _$class: msls.ContentItem,
            _$name: "ProductCategory",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.ProductCategory
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ProductCategory",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.ProductCategory,
            value: lightSwitchApplication.ProductCategory
        },
        ProductGroup: {
            _$class: msls.ContentItem,
            _$name: "ProductGroup",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.ProductGroup
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "ProductGroup",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.ProductGroup,
            value: lightSwitchApplication.ProductGroup
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: String
        },
        ProductLocation: {
            _$class: msls.ContentItem,
            _$name: "ProductLocation",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Location
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "ProductLocation",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Location,
            value: lightSwitchApplication.Location
        },
        UnitOfMeasure: {
            _$class: msls.ContentItem,
            _$name: "UnitOfMeasure",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.UnitOfMeasure
        },
        RowTemplate3: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate3",
            _$parentName: "UnitOfMeasure",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.UnitOfMeasure,
            value: lightSwitchApplication.UnitOfMeasure
        },
        PackageCode: {
            _$class: msls.ContentItem,
            _$name: "PackageCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: Number
        },
        UnitPrice: {
            _$class: msls.ContentItem,
            _$name: "UnitPrice",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: String
        },
        ProductionCostFlag: {
            _$class: msls.ContentItem,
            _$name: "ProductionCostFlag",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: Boolean
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: Boolean
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        ReorderLevelFlag: {
            _$class: msls.ContentItem,
            _$name: "ReorderLevelFlag",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: Boolean
        },
        ReorderLevel: {
            _$class: msls.ContentItem,
            _$name: "ReorderLevel",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: Number
        },
        AgingControlFlag: {
            _$class: msls.ContentItem,
            _$name: "AgingControlFlag",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: Boolean
        },
        AgingControlDays: {
            _$class: msls.ContentItem,
            _$name: "AgingControlDays",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: Number
        },
        LotControlFlag: {
            _$class: msls.ContentItem,
            _$name: "LotControlFlag",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: Boolean
        },
        LotType: {
            _$class: msls.ContentItem,
            _$name: "LotType",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: String
        },
        CarryingCostFlag: {
            _$class: msls.ContentItem,
            _$name: "CarryingCostFlag",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: Boolean
        },
        CarryingCost: {
            _$class: msls.ContentItem,
            _$name: "CarryingCost",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProduct
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProduct, {
        /// <field>
        /// Called when a new AddEditProduct screen is created.
        /// <br/>created(msls.application.AddEditProduct screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProduct],
        /// <field>
        /// Called before changes on an active AddEditProduct screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProduct screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProduct],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("left"); }],
        /// <field>
        /// Called after the ProductCategory content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCategory_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ProductCategory"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ProductGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ProductGroup"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the ProductLocation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductLocation_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ProductLocation"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the UnitOfMeasure content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitOfMeasure_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("UnitOfMeasure"); }],
        /// <field>
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("RowTemplate3"); }],
        /// <field>
        /// Called after the PackageCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PackageCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("PackageCode"); }],
        /// <field>
        /// Called after the UnitPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitPrice_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("UnitPrice"); }],
        /// <field>
        /// Called after the ProductionCostFlag content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductionCostFlag_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ProductionCostFlag"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("Discontinued"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("right"); }],
        /// <field>
        /// Called after the ReorderLevelFlag content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReorderLevelFlag_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ReorderLevelFlag"); }],
        /// <field>
        /// Called after the ReorderLevel content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReorderLevel_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ReorderLevel"); }],
        /// <field>
        /// Called after the AgingControlFlag content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AgingControlFlag_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("AgingControlFlag"); }],
        /// <field>
        /// Called after the AgingControlDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AgingControlDays_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("AgingControlDays"); }],
        /// <field>
        /// Called after the LotControlFlag content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotControlFlag_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("LotControlFlag"); }],
        /// <field>
        /// Called after the LotType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotType_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("LotType"); }],
        /// <field>
        /// Called after the CarryingCostFlag content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CarryingCostFlag_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("CarryingCostFlag"); }],
        /// <field>
        /// Called after the CarryingCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CarryingCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("CarryingCost"); }]
    });

    lightSwitchApplication.AddEditProductReceiveBalanceForward.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForward
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            value: lightSwitchApplication.AddEditProductReceiveBalanceForward
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            value: lightSwitchApplication.ProductReceiveBalanceForward
        },
        DocumentNo: {
            _$class: msls.ContentItem,
            _$name: "DocumentNo",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            data: lightSwitchApplication.ProductReceiveBalanceForward,
            value: String
        },
        ReceiveDate: {
            _$class: msls.ContentItem,
            _$name: "ReceiveDate",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            data: lightSwitchApplication.ProductReceiveBalanceForward,
            value: Date
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            value: lightSwitchApplication.AddEditProductReceiveBalanceForward
        },
        Remarks: {
            _$class: msls.ContentItem,
            _$name: "Remarks",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            value: String
        },
        ProductReceive_CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "ProductReceive_CreatedBy",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            value: String
        },
        ProductReceiveDetails: {
            _$class: msls.ContentItem,
            _$name: "ProductReceiveDetails",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            value: lightSwitchApplication.AddEditProductReceiveBalanceForward
        },
        ProductReceiveDetails1: {
            _$class: msls.ContentItem,
            _$name: "ProductReceiveDetails1",
            _$parentName: "ProductReceiveDetails",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditProductReceiveBalanceForward,
                _$entry: {
                    elementType: lightSwitchApplication.ProductReceiveBalanceForwardDetail
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ProductReceiveDetails1",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: lightSwitchApplication.ProductReceiveBalanceForwardDetail
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: lightSwitchApplication.Product
        },
        LotNo: {
            _$class: msls.ContentItem,
            _$name: "LotNo",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: String
        },
        Location: {
            _$class: msls.ContentItem,
            _$name: "Location",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: lightSwitchApplication.Location
        },
        ReceivedQuantity: {
            _$class: msls.ContentItem,
            _$name: "ReceivedQuantity",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForward,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForward
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProductReceiveBalanceForward, {
        /// <field>
        /// Called when a new AddEditProductReceiveBalanceForward screen is created.
        /// <br/>created(msls.application.AddEditProductReceiveBalanceForward screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProductReceiveBalanceForward],
        /// <field>
        /// Called before changes on an active AddEditProductReceiveBalanceForward screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProductReceiveBalanceForward screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProductReceiveBalanceForward],
        /// <field>
        /// Called to determine if the deleteSelectedItem method can be executed.
        /// <br/>canExecute(msls.application.AddEditProductReceiveBalanceForward screen)
        /// </field>
        deleteSelectedItem_canExecute: [lightSwitchApplication.AddEditProductReceiveBalanceForward],
        /// <field>
        /// Called to execute the deleteSelectedItem method.
        /// <br/>execute(msls.application.AddEditProductReceiveBalanceForward screen)
        /// </field>
        deleteSelectedItem_execute: [lightSwitchApplication.AddEditProductReceiveBalanceForward],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForward().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForward().findContentItem("columns"); }],
        /// <field>
        /// Called after the DocumentNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForward().findContentItem("DocumentNo"); }],
        /// <field>
        /// Called after the ReceiveDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForward().findContentItem("ReceiveDate"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForward().findContentItem("Group"); }],
        /// <field>
        /// Called after the Remarks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remarks_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForward().findContentItem("Remarks"); }],
        /// <field>
        /// Called after the ProductReceive_CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductReceive_CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForward().findContentItem("ProductReceive_CreatedBy"); }],
        /// <field>
        /// Called after the ProductReceiveDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductReceiveDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForward().findContentItem("ProductReceiveDetails"); }],
        /// <field>
        /// Called after the ProductReceiveDetails1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductReceiveDetails1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForward().findContentItem("ProductReceiveDetails1"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForward().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForward().findContentItem("Product"); }],
        /// <field>
        /// Called after the LotNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForward().findContentItem("LotNo"); }],
        /// <field>
        /// Called after the Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForward().findContentItem("Location"); }],
        /// <field>
        /// Called after the ReceivedQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceivedQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForward().findContentItem("ReceivedQuantity"); }]
    });

    lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            value: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            value: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail
        },
        ShowGroup: {
            _$class: msls.ContentItem,
            _$name: "ShowGroup",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail
        },
        ProductReceiveDetail_Product: {
            _$class: msls.ContentItem,
            _$name: "ProductReceiveDetail_Product",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            value: lightSwitchApplication.Product
        },
        ProductCode1: {
            _$class: msls.ContentItem,
            _$name: "ProductCode1",
            _$parentName: "ProductReceiveDetail_Product",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.Product,
            value: String
        },
        ProductName1: {
            _$class: msls.ContentItem,
            _$name: "ProductName1",
            _$parentName: "ProductReceiveDetail_Product",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.Product,
            value: String
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            value: lightSwitchApplication.ProductReceiveBalanceForwardDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: lightSwitchApplication.ProductReceiveBalanceForwardDetail
        },
        Location: {
            _$class: msls.ContentItem,
            _$name: "Location",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: lightSwitchApplication.Location
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Location",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.Location,
            value: lightSwitchApplication.Location
        },
        CostPrice: {
            _$class: msls.ContentItem,
            _$name: "CostPrice",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: lightSwitchApplication.ProductReceiveBalanceForwardDetail
        },
        LotNo: {
            _$class: msls.ContentItem,
            _$name: "LotNo",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: String
        },
        ReceivedQuantity: {
            _$class: msls.ContentItem,
            _$name: "ReceivedQuantity",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: Number
        },
        CostAmountReadOnly: {
            _$class: msls.ContentItem,
            _$name: "CostAmountReadOnly",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: String
        },
        ProductReceive: {
            _$class: msls.ContentItem,
            _$name: "ProductReceive",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: lightSwitchApplication.ProductReceiveBalanceForward
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "ProductReceive",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.ProductReceiveBalanceForward,
            value: lightSwitchApplication.ProductReceiveBalanceForward
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Popups",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            value: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail
        },
        SearchProduct: {
            _$class: msls.ContentItem,
            _$name: "SearchProduct",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            value: String
        },
        ProductsActiveQuery: {
            _$class: msls.ContentItem,
            _$name: "ProductsActiveQuery",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
                _$entry: {
                    elementType: lightSwitchApplication.Product
                }
            }
        },
        ProductsActiveQueryTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProductsActiveQueryTemplate",
            _$parentName: "ProductsActiveQuery",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        ProductCategory: {
            _$class: msls.ContentItem,
            _$name: "ProductCategory",
            _$parentName: "ProductsActiveQueryTemplate",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.ProductCategory
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "ProductsActiveQueryTemplate",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.Product,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "ProductsActiveQueryTemplate",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail,
            data: lightSwitchApplication.Product,
            value: String
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail, {
        /// <field>
        /// Called when a new AddEditProductReceiveBalanceForwardDetail screen is created.
        /// <br/>created(msls.application.AddEditProductReceiveBalanceForwardDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail],
        /// <field>
        /// Called before changes on an active AddEditProductReceiveBalanceForwardDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProductReceiveBalanceForwardDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail],
        /// <field>
        /// Called to determine if the deleteSelectedItem method can be executed.
        /// <br/>canExecute(msls.application.AddEditProductReceiveBalanceForwardDetail screen)
        /// </field>
        deleteSelectedItem_canExecute: [lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail],
        /// <field>
        /// Called to execute the deleteSelectedItem method.
        /// <br/>execute(msls.application.AddEditProductReceiveBalanceForwardDetail screen)
        /// </field>
        deleteSelectedItem_execute: [lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail],
        /// <field>
        /// Called to determine if the ProductsActiveQuery_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.AddEditProductReceiveBalanceForwardDetail screen)
        /// </field>
        ProductsActiveQuery_ItemTap_canExecute: [lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail],
        /// <field>
        /// Called to execute the ProductsActiveQuery_ItemTap method.
        /// <br/>execute(msls.application.AddEditProductReceiveBalanceForwardDetail screen)
        /// </field>
        ProductsActiveQuery_ItemTap_execute: [lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("Group1"); }],
        /// <field>
        /// Called after the ShowGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("ShowGroup"); }],
        /// <field>
        /// Called after the ProductReceiveDetail_Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductReceiveDetail_Product_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("ProductReceiveDetail_Product"); }],
        /// <field>
        /// Called after the ProductCode1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("ProductCode1"); }],
        /// <field>
        /// Called after the ProductName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("ProductName1"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("left"); }],
        /// <field>
        /// Called after the Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("Location"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the CostPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CostPrice_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("CostPrice"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("right"); }],
        /// <field>
        /// Called after the LotNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("LotNo"); }],
        /// <field>
        /// Called after the ReceivedQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceivedQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("ReceivedQuantity"); }],
        /// <field>
        /// Called after the CostAmountReadOnly content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CostAmountReadOnly_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("CostAmountReadOnly"); }],
        /// <field>
        /// Called after the ProductReceive content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductReceive_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("ProductReceive"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("Group"); }],
        /// <field>
        /// Called after the SearchProduct content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchProduct_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("SearchProduct"); }],
        /// <field>
        /// Called after the ProductsActiveQuery content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductsActiveQuery_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("ProductsActiveQuery"); }],
        /// <field>
        /// Called after the ProductsActiveQueryTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductsActiveQueryTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("ProductsActiveQueryTemplate"); }],
        /// <field>
        /// Called after the ProductCategory content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCategory_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("ProductCategory"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardDetail().findContentItem("ProductName"); }]
    });

    lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            value: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            value: lightSwitchApplication.ProductReceiveBalanceForward
        },
        DocumentNo: {
            _$class: msls.ContentItem,
            _$name: "DocumentNo",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            data: lightSwitchApplication.ProductReceiveBalanceForward,
            value: String
        },
        DocumentDate: {
            _$class: msls.ContentItem,
            _$name: "DocumentDate",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            data: lightSwitchApplication.ProductReceiveBalanceForward,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            value: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails
        },
        Remarks: {
            _$class: msls.ContentItem,
            _$name: "Remarks",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            value: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails
        },
        ProductReceiveBalanceForwardDetail1: {
            _$class: msls.ContentItem,
            _$name: "ProductReceiveBalanceForwardDetail1",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            data: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
                _$entry: {
                    elementType: lightSwitchApplication.ProductReceiveBalanceForwardDetail
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ProductReceiveBalanceForwardDetail1",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: lightSwitchApplication.ProductReceiveBalanceForwardDetail
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: lightSwitchApplication.Product
        },
        LotNo: {
            _$class: msls.ContentItem,
            _$name: "LotNo",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: String
        },
        Location: {
            _$class: msls.ContentItem,
            _$name: "Location",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: lightSwitchApplication.Location
        },
        ReceivedQuantity: {
            _$class: msls.ContentItem,
            _$name: "ReceivedQuantity",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails,
            data: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails, {
        /// <field>
        /// Called when a new AddEditProductReceiveBalanceForwardWithDetails screen is created.
        /// <br/>created(msls.application.AddEditProductReceiveBalanceForwardWithDetails screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails],
        /// <field>
        /// Called before changes on an active AddEditProductReceiveBalanceForwardWithDetails screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProductReceiveBalanceForwardWithDetails screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails],
        /// <field>
        /// Called to determine if the deleteSelectedItem method can be executed.
        /// <br/>canExecute(msls.application.AddEditProductReceiveBalanceForwardWithDetails screen)
        /// </field>
        deleteSelectedItem_canExecute: [lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails],
        /// <field>
        /// Called to execute the deleteSelectedItem method.
        /// <br/>execute(msls.application.AddEditProductReceiveBalanceForwardWithDetails screen)
        /// </field>
        deleteSelectedItem_execute: [lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails().findContentItem("columns"); }],
        /// <field>
        /// Called after the DocumentNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails().findContentItem("DocumentNo"); }],
        /// <field>
        /// Called after the DocumentDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails().findContentItem("DocumentDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails().findContentItem("right"); }],
        /// <field>
        /// Called after the Remarks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remarks_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails().findContentItem("Remarks"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails().findContentItem("Group"); }],
        /// <field>
        /// Called after the ProductReceiveBalanceForwardDetail1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductReceiveBalanceForwardDetail1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails().findContentItem("ProductReceiveBalanceForwardDetail1"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails().findContentItem("Product"); }],
        /// <field>
        /// Called after the LotNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails().findContentItem("LotNo"); }],
        /// <field>
        /// Called after the Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails().findContentItem("Location"); }],
        /// <field>
        /// Called after the ReceivedQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceivedQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductReceiveBalanceForwardWithDetails().findContentItem("ReceivedQuantity"); }]
    });

    lightSwitchApplication.AddEditProduct_bk.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProduct_bk
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.AddEditProduct_bk,
            value: lightSwitchApplication.AddEditProduct_bk
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.AddEditProduct_bk,
            value: lightSwitchApplication.Product
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: String
        },
        ProductCategory: {
            _$class: msls.ContentItem,
            _$name: "ProductCategory",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.ProductCategory
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ProductCategory",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.ProductCategory,
            value: lightSwitchApplication.ProductCategory
        },
        ProductGroup: {
            _$class: msls.ContentItem,
            _$name: "ProductGroup",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.ProductGroup
        },
        ProductGroup1: {
            _$class: msls.ContentItem,
            _$name: "ProductGroup1",
            _$parentName: "ProductGroup",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.ProductGroup,
            value: lightSwitchApplication.ProductGroup
        },
        UnitOfMeasure: {
            _$class: msls.ContentItem,
            _$name: "UnitOfMeasure",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.UnitOfMeasure
        },
        UnitOfMeasure1: {
            _$class: msls.ContentItem,
            _$name: "UnitOfMeasure1",
            _$parentName: "UnitOfMeasure",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.UnitOfMeasure,
            value: lightSwitchApplication.UnitOfMeasure
        },
        ProductLocation: {
            _$class: msls.ContentItem,
            _$name: "ProductLocation",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Location
        },
        ProductLocation1: {
            _$class: msls.ContentItem,
            _$name: "ProductLocation1",
            _$parentName: "ProductLocation",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Location,
            value: lightSwitchApplication.Location
        },
        CarryingCostFlag: {
            _$class: msls.ContentItem,
            _$name: "CarryingCostFlag",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: Boolean
        },
        ProductionCostFlag: {
            _$class: msls.ContentItem,
            _$name: "ProductionCostFlag",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: Boolean
        },
        AgingControlFlag: {
            _$class: msls.ContentItem,
            _$name: "AgingControlFlag",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: Boolean
        },
        LotControlFlag: {
            _$class: msls.ContentItem,
            _$name: "LotControlFlag",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: Boolean
        },
        UnitsOnHand: {
            _$class: msls.ContentItem,
            _$name: "UnitsOnHand",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        LotType: {
            _$class: msls.ContentItem,
            _$name: "LotType",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: String
        },
        ReorderLevelFlag: {
            _$class: msls.ContentItem,
            _$name: "ReorderLevelFlag",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: Boolean
        },
        ReorderLevel: {
            _$class: msls.ContentItem,
            _$name: "ReorderLevel",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: Number
        },
        PackageCode: {
            _$class: msls.ContentItem,
            _$name: "PackageCode",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: Number
        },
        UnitPrice: {
            _$class: msls.ContentItem,
            _$name: "UnitPrice",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: String
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: Boolean
        },
        UnitsOnOrder: {
            _$class: msls.ContentItem,
            _$name: "UnitsOnOrder",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.Product,
            value: String
        },
        PurchaseOrders: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrders",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.AddEditProduct_bk,
            value: lightSwitchApplication.AddEditProduct_bk
        },
        Orders: {
            _$class: msls.ContentItem,
            _$name: "Orders",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.AddEditProduct_bk,
            value: lightSwitchApplication.AddEditProduct_bk
        },
        StockChecks: {
            _$class: msls.ContentItem,
            _$name: "StockChecks",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.AddEditProduct_bk,
            value: lightSwitchApplication.AddEditProduct_bk
        },
        ProductSubscribersGroup: {
            _$class: msls.ContentItem,
            _$name: "ProductSubscribersGroup",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProduct_bk,
            data: lightSwitchApplication.AddEditProduct_bk,
            value: lightSwitchApplication.AddEditProduct_bk
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProduct_bk
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProduct_bk, {
        /// <field>
        /// Called when a new AddEditProduct_bk screen is created.
        /// <br/>created(msls.application.AddEditProduct_bk screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProduct_bk],
        /// <field>
        /// Called before changes on an active AddEditProduct_bk screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProduct_bk screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProduct_bk],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("left"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the ProductCategory content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCategory_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("ProductCategory"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ProductGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("ProductGroup"); }],
        /// <field>
        /// Called after the ProductGroup1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductGroup1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("ProductGroup1"); }],
        /// <field>
        /// Called after the UnitOfMeasure content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitOfMeasure_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("UnitOfMeasure"); }],
        /// <field>
        /// Called after the UnitOfMeasure1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitOfMeasure1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("UnitOfMeasure1"); }],
        /// <field>
        /// Called after the ProductLocation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductLocation_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("ProductLocation"); }],
        /// <field>
        /// Called after the ProductLocation1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductLocation1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("ProductLocation1"); }],
        /// <field>
        /// Called after the CarryingCostFlag content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CarryingCostFlag_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("CarryingCostFlag"); }],
        /// <field>
        /// Called after the ProductionCostFlag content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductionCostFlag_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("ProductionCostFlag"); }],
        /// <field>
        /// Called after the AgingControlFlag content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AgingControlFlag_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("AgingControlFlag"); }],
        /// <field>
        /// Called after the LotControlFlag content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotControlFlag_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("LotControlFlag"); }],
        /// <field>
        /// Called after the UnitsOnHand content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsOnHand_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("UnitsOnHand"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("right"); }],
        /// <field>
        /// Called after the LotType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotType_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("LotType"); }],
        /// <field>
        /// Called after the ReorderLevelFlag content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReorderLevelFlag_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("ReorderLevelFlag"); }],
        /// <field>
        /// Called after the ReorderLevel content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReorderLevel_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("ReorderLevel"); }],
        /// <field>
        /// Called after the PackageCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PackageCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("PackageCode"); }],
        /// <field>
        /// Called after the UnitPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitPrice_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("UnitPrice"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("Discontinued"); }],
        /// <field>
        /// Called after the UnitsOnOrder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsOnOrder_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("UnitsOnOrder"); }],
        /// <field>
        /// Called after the PurchaseOrders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrders_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("PurchaseOrders"); }],
        /// <field>
        /// Called after the Orders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Orders_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("Orders"); }],
        /// <field>
        /// Called after the StockChecks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockChecks_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("StockChecks"); }],
        /// <field>
        /// Called after the ProductSubscribersGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductSubscribersGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct_bk().findContentItem("ProductSubscribersGroup"); }]
    });

    lightSwitchApplication.AddEditProductCategory.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductCategory
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProductCategory,
            data: lightSwitchApplication.AddEditProductCategory,
            value: lightSwitchApplication.AddEditProductCategory
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditProductCategory,
            data: lightSwitchApplication.AddEditProductCategory,
            value: lightSwitchApplication.ProductCategory
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProductCategory,
            data: lightSwitchApplication.ProductCategory,
            value: lightSwitchApplication.ProductCategory
        },
        Category: {
            _$class: msls.ContentItem,
            _$name: "Category",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProductCategory,
            data: lightSwitchApplication.ProductCategory,
            value: String
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProductCategory,
            data: lightSwitchApplication.ProductCategory,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductCategory
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProductCategory, {
        /// <field>
        /// Called when a new AddEditProductCategory screen is created.
        /// <br/>created(msls.application.AddEditProductCategory screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProductCategory],
        /// <field>
        /// Called before changes on an active AddEditProductCategory screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProductCategory screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProductCategory],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductCategory().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductCategory().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductCategory().findContentItem("left"); }],
        /// <field>
        /// Called after the Category content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Category_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductCategory().findContentItem("Category"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductCategory().findContentItem("Discontinued"); }]
    });

    lightSwitchApplication.AddEditProductGroup.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductGroup
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProductGroup,
            data: lightSwitchApplication.AddEditProductGroup,
            value: lightSwitchApplication.AddEditProductGroup
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditProductGroup,
            data: lightSwitchApplication.AddEditProductGroup,
            value: lightSwitchApplication.ProductGroup
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProductGroup,
            data: lightSwitchApplication.ProductGroup,
            value: lightSwitchApplication.ProductGroup
        },
        ProductGroupName: {
            _$class: msls.ContentItem,
            _$name: "ProductGroupName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProductGroup,
            data: lightSwitchApplication.ProductGroup,
            value: String
        },
        Discontinued1: {
            _$class: msls.ContentItem,
            _$name: "Discontinued1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProductGroup,
            data: lightSwitchApplication.ProductGroup,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductGroup
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProductGroup, {
        /// <field>
        /// Called when a new AddEditProductGroup screen is created.
        /// <br/>created(msls.application.AddEditProductGroup screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProductGroup],
        /// <field>
        /// Called before changes on an active AddEditProductGroup screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProductGroup screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProductGroup],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductGroup().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductGroup().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductGroup().findContentItem("left"); }],
        /// <field>
        /// Called after the ProductGroupName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductGroupName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductGroup().findContentItem("ProductGroupName"); }],
        /// <field>
        /// Called after the Discontinued1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductGroup().findContentItem("Discontinued1"); }]
    });

    lightSwitchApplication.AddEditLocation.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditLocation
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditLocation,
            data: lightSwitchApplication.AddEditLocation,
            value: lightSwitchApplication.AddEditLocation
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditLocation,
            data: lightSwitchApplication.AddEditLocation,
            value: lightSwitchApplication.Location
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditLocation,
            data: lightSwitchApplication.Location,
            value: lightSwitchApplication.Location
        },
        LocationName: {
            _$class: msls.ContentItem,
            _$name: "LocationName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditLocation,
            data: lightSwitchApplication.Location,
            value: String
        },
        Width: {
            _$class: msls.ContentItem,
            _$name: "Width",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditLocation,
            data: lightSwitchApplication.Location,
            value: Number
        },
        Height: {
            _$class: msls.ContentItem,
            _$name: "Height",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditLocation,
            data: lightSwitchApplication.Location,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditLocation,
            data: lightSwitchApplication.Location,
            value: lightSwitchApplication.Location
        },
        Length: {
            _$class: msls.ContentItem,
            _$name: "Length",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditLocation,
            data: lightSwitchApplication.Location,
            value: Number
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditLocation,
            data: lightSwitchApplication.Location,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditLocation
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditLocation, {
        /// <field>
        /// Called when a new AddEditLocation screen is created.
        /// <br/>created(msls.application.AddEditLocation screen)
        /// </field>
        created: [lightSwitchApplication.AddEditLocation],
        /// <field>
        /// Called before changes on an active AddEditLocation screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditLocation screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditLocation],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditLocation().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditLocation().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditLocation().findContentItem("left"); }],
        /// <field>
        /// Called after the LocationName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationName_postRender: [$element, function () { return new lightSwitchApplication.AddEditLocation().findContentItem("LocationName"); }],
        /// <field>
        /// Called after the Width content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Width_postRender: [$element, function () { return new lightSwitchApplication.AddEditLocation().findContentItem("Width"); }],
        /// <field>
        /// Called after the Height content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Height_postRender: [$element, function () { return new lightSwitchApplication.AddEditLocation().findContentItem("Height"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditLocation().findContentItem("right"); }],
        /// <field>
        /// Called after the Length content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Length_postRender: [$element, function () { return new lightSwitchApplication.AddEditLocation().findContentItem("Length"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.AddEditLocation().findContentItem("Discontinued"); }]
    });

    lightSwitchApplication.AddEditProductSubscriber.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductSubscriber
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProductSubscriber,
            data: lightSwitchApplication.AddEditProductSubscriber,
            value: lightSwitchApplication.AddEditProductSubscriber
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductSubscriber
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProductSubscriber, {
        /// <field>
        /// Called when a new AddEditProductSubscriber screen is created.
        /// <br/>created(msls.application.AddEditProductSubscriber screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProductSubscriber],
        /// <field>
        /// Called before changes on an active AddEditProductSubscriber screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProductSubscriber screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProductSubscriber],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductSubscriber().findContentItem("DetailsTab"); }]
    });

    lightSwitchApplication.AddEditPurchaseOrderDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.AddEditPurchaseOrderDetail,
            value: lightSwitchApplication.AddEditPurchaseOrderDetail
        },
        SelectPONumber: {
            _$class: msls.ContentItem,
            _$name: "SelectPONumber",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.AddEditPurchaseOrderDetail,
            value: String
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.AddEditPurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        RequireDate: {
            _$class: msls.ContentItem,
            _$name: "RequireDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.Product
        },
        Product1: {
            _$class: msls.ContentItem,
            _$name: "Product1",
            _$parentName: "Product",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        RequireQuantity: {
            _$class: msls.ContentItem,
            _$name: "RequireQuantity",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        UnitWeight: {
            _$class: msls.ContentItem,
            _$name: "UnitWeight",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPurchaseOrderDetail, {
        /// <field>
        /// Called when a new AddEditPurchaseOrderDetail screen is created.
        /// <br/>created(msls.application.AddEditPurchaseOrderDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPurchaseOrderDetail],
        /// <field>
        /// Called before changes on an active AddEditPurchaseOrderDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPurchaseOrderDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPurchaseOrderDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the SelectPONumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SelectPONumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("SelectPONumber"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("left"); }],
        /// <field>
        /// Called after the RequireDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("RequireDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("right"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("Product"); }],
        /// <field>
        /// Called after the Product1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("Product1"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the RequireQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("RequireQuantity"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the UnitWeight content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitWeight_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("UnitWeight"); }]
    });

    lightSwitchApplication.AddEditPurchaseOrderDetailTest.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetailTest
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            data: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            value: lightSwitchApplication.AddEditPurchaseOrderDetailTest
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            data: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            value: lightSwitchApplication.AddEditPurchaseOrderDetailTest
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            data: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        PurchaseOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderNumber",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        PurchaseOrderDate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDate",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        SupplierName: {
            _$class: msls.ContentItem,
            _$name: "SupplierName",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            data: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            value: lightSwitchApplication.AddEditPurchaseOrderDetailTest
        },
        RequireDate: {
            _$class: msls.ContentItem,
            _$name: "RequireDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            data: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            value: Date
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            data: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            value: lightSwitchApplication.Product
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Product",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        RequireQuantity: {
            _$class: msls.ContentItem,
            _$name: "RequireQuantity",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            data: lightSwitchApplication.AddEditPurchaseOrderDetailTest,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetailTest
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPurchaseOrderDetailTest, {
        /// <field>
        /// Called when a new AddEditPurchaseOrderDetailTest screen is created.
        /// <br/>created(msls.application.AddEditPurchaseOrderDetailTest screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPurchaseOrderDetailTest],
        /// <field>
        /// Called before changes on an active AddEditPurchaseOrderDetailTest screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPurchaseOrderDetailTest screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPurchaseOrderDetailTest],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetailTest().findContentItem("Details"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetailTest().findContentItem("Group"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetailTest().findContentItem("columns"); }],
        /// <field>
        /// Called after the PurchaseOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetailTest().findContentItem("PurchaseOrderNumber"); }],
        /// <field>
        /// Called after the PurchaseOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetailTest().findContentItem("PurchaseOrderDate"); }],
        /// <field>
        /// Called after the SupplierName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetailTest().findContentItem("SupplierName"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetailTest().findContentItem("left"); }],
        /// <field>
        /// Called after the RequireDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetailTest().findContentItem("RequireDate"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetailTest().findContentItem("Product"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetailTest().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the RequireQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetailTest().findContentItem("RequireQuantity"); }]
    });

    lightSwitchApplication.AddEditPurchaseOrderTest.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.AddEditPurchaseOrderTest,
            value: lightSwitchApplication.AddEditPurchaseOrderTest
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.AddEditPurchaseOrderTest,
            value: lightSwitchApplication.PurchaseOrder
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        PurchaseOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderNumber",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        PurchaseOrderDate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.PurchaseOrder,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        PurchaseOrderStatus: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderStatus",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.PurchaseOrder,
            value: Boolean
        },
        Supplier: {
            _$class: msls.ContentItem,
            _$name: "Supplier",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.Supplier
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Supplier",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.Supplier,
            value: lightSwitchApplication.Supplier
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.AddEditPurchaseOrderTest,
            value: lightSwitchApplication.AddEditPurchaseOrderTest
        },
        PurchaseOrderDetails1: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetails1",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.AddEditPurchaseOrderTest,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditPurchaseOrderTest,
                _$entry: {
                    elementType: lightSwitchApplication.PurchaseOrderDetail
                }
            }
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "PurchaseOrderDetails1",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        RequireDate: {
            _$class: msls.ContentItem,
            _$name: "RequireDate",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        RequireQuantity: {
            _$class: msls.ContentItem,
            _$name: "RequireQuantity",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        UnitWeight: {
            _$class: msls.ContentItem,
            _$name: "UnitWeight",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest,
            data: lightSwitchApplication.AddEditPurchaseOrderTest,
            value: lightSwitchApplication.AddEditPurchaseOrderTest
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPurchaseOrderTest
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPurchaseOrderTest, {
        /// <field>
        /// Called when a new AddEditPurchaseOrderTest screen is created.
        /// <br/>created(msls.application.AddEditPurchaseOrderTest screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPurchaseOrderTest],
        /// <field>
        /// Called before changes on an active AddEditPurchaseOrderTest screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPurchaseOrderTest screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPurchaseOrderTest],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("left"); }],
        /// <field>
        /// Called after the PurchaseOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("PurchaseOrderNumber"); }],
        /// <field>
        /// Called after the PurchaseOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("PurchaseOrderDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("right"); }],
        /// <field>
        /// Called after the PurchaseOrderStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("PurchaseOrderStatus"); }],
        /// <field>
        /// Called after the Supplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Supplier_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("Supplier"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("Group"); }],
        /// <field>
        /// Called after the PurchaseOrderDetails1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetails1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("PurchaseOrderDetails1"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the RequireDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("RequireDate"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the RequireQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("RequireQuantity"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the UnitWeight content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitWeight_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("UnitWeight"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderTest().findContentItem("Group1"); }]
    });

    lightSwitchApplication.AddEditPurchaseOrder_Old.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPurchaseOrder_Old
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPurchaseOrder_Old,
            data: lightSwitchApplication.AddEditPurchaseOrder_Old,
            value: lightSwitchApplication.AddEditPurchaseOrder_Old
        },
        PurchaseOrderDetails: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetails",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPurchaseOrder_Old,
            data: lightSwitchApplication.AddEditPurchaseOrder_Old,
            value: lightSwitchApplication.AddEditPurchaseOrder_Old
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPurchaseOrder_Old
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPurchaseOrder_Old, {
        /// <field>
        /// Called when a new AddEditPurchaseOrder_Old screen is created.
        /// <br/>created(msls.application.AddEditPurchaseOrder_Old screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPurchaseOrder_Old],
        /// <field>
        /// Called before changes on an active AddEditPurchaseOrder_Old screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPurchaseOrder_Old screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPurchaseOrder_Old],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder_Old().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the PurchaseOrderDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder_Old().findContentItem("PurchaseOrderDetails"); }]
    });

    lightSwitchApplication.AddEditPurchaseOrder.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPurchaseOrder
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.AddEditPurchaseOrder,
            value: lightSwitchApplication.AddEditPurchaseOrder
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.AddEditPurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        PurchaseOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderNumber",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        PurchaseOrderDate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrder,
            value: Date
        },
        Supplier: {
            _$class: msls.ContentItem,
            _$name: "Supplier",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.Supplier
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Supplier",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.Supplier,
            value: lightSwitchApplication.Supplier
        },
        PurchaseOrderStatus: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderStatus",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrder,
            value: Boolean
        },
        POStatusDescription: {
            _$class: msls.ContentItem,
            _$name: "POStatusDescription",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.AddEditPurchaseOrder,
            value: lightSwitchApplication.AddEditPurchaseOrder
        },
        PurchaseOrderDetails: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetails",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.AddEditPurchaseOrder,
            value: lightSwitchApplication.AddEditPurchaseOrder
        },
        AddPurchaseOrderDetail: {
            _$class: msls.ContentItem,
            _$name: "AddPurchaseOrderDetail",
            _$parentName: "PurchaseOrderDetails",
            screen: lightSwitchApplication.AddEditPurchaseOrder
        },
        PurchaseOrderDetails1: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetails1",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.AddEditPurchaseOrder,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditPurchaseOrder,
                _$entry: {
                    elementType: lightSwitchApplication.PurchaseOrderDetail
                }
            }
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "PurchaseOrderDetails1",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        RequireDate: {
            _$class: msls.ContentItem,
            _$name: "RequireDate",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        RequireQuantity: {
            _$class: msls.ContentItem,
            _$name: "RequireQuantity",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        UnitWeight: {
            _$class: msls.ContentItem,
            _$name: "UnitWeight",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPurchaseOrder
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPurchaseOrder, {
        /// <field>
        /// Called when a new AddEditPurchaseOrder screen is created.
        /// <br/>created(msls.application.AddEditPurchaseOrder screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPurchaseOrder],
        /// <field>
        /// Called before changes on an active AddEditPurchaseOrder screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPurchaseOrder screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPurchaseOrder],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("left"); }],
        /// <field>
        /// Called after the PurchaseOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("PurchaseOrderNumber"); }],
        /// <field>
        /// Called after the PurchaseOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("PurchaseOrderDate"); }],
        /// <field>
        /// Called after the Supplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Supplier_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("Supplier"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the PurchaseOrderStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("PurchaseOrderStatus"); }],
        /// <field>
        /// Called after the POStatusDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        POStatusDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("POStatusDescription"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("right"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("Group"); }],
        /// <field>
        /// Called after the PurchaseOrderDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("PurchaseOrderDetails"); }],
        /// <field>
        /// Called after the AddPurchaseOrderDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddPurchaseOrderDetail_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("AddPurchaseOrderDetail"); }],
        /// <field>
        /// Called after the PurchaseOrderDetails1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetails1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("PurchaseOrderDetails1"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the RequireDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("RequireDate"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the RequireQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("RequireQuantity"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the UnitWeight content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitWeight_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("UnitWeight"); }]
    });

    lightSwitchApplication.AddEditPurchaseOrderDetail_Old.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail_Old
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail_Old,
            data: lightSwitchApplication.AddEditPurchaseOrderDetail_Old,
            value: lightSwitchApplication.AddEditPurchaseOrderDetail_Old
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail_Old
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPurchaseOrderDetail_Old, {
        /// <field>
        /// Called when a new AddEditPurchaseOrderDetail_Old screen is created.
        /// <br/>created(msls.application.AddEditPurchaseOrderDetail_Old screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPurchaseOrderDetail_Old],
        /// <field>
        /// Called before changes on an active AddEditPurchaseOrderDetail_Old screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPurchaseOrderDetail_Old screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPurchaseOrderDetail_Old],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail_Old().findContentItem("DetailsTab"); }]
    });

    lightSwitchApplication.AddEditReceiveFromPurchaseOrder.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrder
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            data: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            value: lightSwitchApplication.AddEditReceiveFromPurchaseOrder
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            data: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            value: lightSwitchApplication.AddEditReceiveFromPurchaseOrder
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            data: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            value: lightSwitchApplication.AddEditReceiveFromPurchaseOrder
        },
        SelectPO_selectedItem_PurchaseOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "SelectPO_selectedItem_PurchaseOrderNumber",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            data: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            value: String
        },
        SupplierName: {
            _$class: msls.ContentItem,
            _$name: "SupplierName",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            data: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            value: String
        },
        SelectPO_selectedItem_PurchaseOrderStatus: {
            _$class: msls.ContentItem,
            _$name: "SelectPO_selectedItem_PurchaseOrderStatus",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            data: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            value: Boolean
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            data: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            value: lightSwitchApplication.AddEditReceiveFromPurchaseOrder
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            data: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            value: lightSwitchApplication.AddEditReceiveFromPurchaseOrder
        },
        PurchaseOrderDetails_selectedItem_RequireDate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetails_selectedItem_RequireDate",
            _$parentName: "Group2",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            data: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            value: Date
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "Group2",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            data: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            value: String
        },
        PurchaseOrderDetails_selectedItem_RequireQuantity: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetails_selectedItem_RequireQuantity",
            _$parentName: "Group2",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            data: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            value: Number
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "Group2",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            data: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            data: lightSwitchApplication.AddEditReceiveFromPurchaseOrder,
            value: lightSwitchApplication.AddEditReceiveFromPurchaseOrder
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrder
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditReceiveFromPurchaseOrder, {
        /// <field>
        /// Called when a new AddEditReceiveFromPurchaseOrder screen is created.
        /// <br/>created(msls.application.AddEditReceiveFromPurchaseOrder screen)
        /// </field>
        created: [lightSwitchApplication.AddEditReceiveFromPurchaseOrder],
        /// <field>
        /// Called before changes on an active AddEditReceiveFromPurchaseOrder screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditReceiveFromPurchaseOrder screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditReceiveFromPurchaseOrder],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditReceiveFromPurchaseOrder().findContentItem("Details"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditReceiveFromPurchaseOrder().findContentItem("Group"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.AddEditReceiveFromPurchaseOrder().findContentItem("Group1"); }],
        /// <field>
        /// Called after the SelectPO_selectedItem_PurchaseOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SelectPO_selectedItem_PurchaseOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditReceiveFromPurchaseOrder().findContentItem("SelectPO_selectedItem_PurchaseOrderNumber"); }],
        /// <field>
        /// Called after the SupplierName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierName_postRender: [$element, function () { return new lightSwitchApplication.AddEditReceiveFromPurchaseOrder().findContentItem("SupplierName"); }],
        /// <field>
        /// Called after the SelectPO_selectedItem_PurchaseOrderStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SelectPO_selectedItem_PurchaseOrderStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditReceiveFromPurchaseOrder().findContentItem("SelectPO_selectedItem_PurchaseOrderStatus"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditReceiveFromPurchaseOrder().findContentItem("left"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.AddEditReceiveFromPurchaseOrder().findContentItem("Group2"); }],
        /// <field>
        /// Called after the PurchaseOrderDetails_selectedItem_RequireDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetails_selectedItem_RequireDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditReceiveFromPurchaseOrder().findContentItem("PurchaseOrderDetails_selectedItem_RequireDate"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.AddEditReceiveFromPurchaseOrder().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the PurchaseOrderDetails_selectedItem_RequireQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetails_selectedItem_RequireQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditReceiveFromPurchaseOrder().findContentItem("PurchaseOrderDetails_selectedItem_RequireQuantity"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.AddEditReceiveFromPurchaseOrder().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditReceiveFromPurchaseOrder().findContentItem("right"); }]
    });

    lightSwitchApplication.AddEditReceiveFromPurchaseOrderDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrderDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrderDetail,
            data: lightSwitchApplication.AddEditReceiveFromPurchaseOrderDetail,
            value: lightSwitchApplication.AddEditReceiveFromPurchaseOrderDetail
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditReceiveFromPurchaseOrderDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditReceiveFromPurchaseOrderDetail, {
        /// <field>
        /// Called when a new AddEditReceiveFromPurchaseOrderDetail screen is created.
        /// <br/>created(msls.application.AddEditReceiveFromPurchaseOrderDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditReceiveFromPurchaseOrderDetail],
        /// <field>
        /// Called before changes on an active AddEditReceiveFromPurchaseOrderDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditReceiveFromPurchaseOrderDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditReceiveFromPurchaseOrderDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditReceiveFromPurchaseOrderDetail().findContentItem("Details"); }]
    });

    lightSwitchApplication.AddEditSaleOrder.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditSaleOrder
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.AddEditSaleOrder,
            value: lightSwitchApplication.AddEditSaleOrder
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.AddEditSaleOrder,
            value: lightSwitchApplication.SaleOrder
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: lightSwitchApplication.SaleOrder
        },
        DocumentNo: {
            _$class: msls.ContentItem,
            _$name: "DocumentNo",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: String
        },
        Customer: {
            _$class: msls.ContentItem,
            _$name: "Customer",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: lightSwitchApplication.Customer
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Customer",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.Customer,
            value: lightSwitchApplication.Customer
        },
        PaymentStatus: {
            _$class: msls.ContentItem,
            _$name: "PaymentStatus",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: lightSwitchApplication.SaleOrder
        },
        ReferenceNo: {
            _$class: msls.ContentItem,
            _$name: "ReferenceNo",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: String
        },
        SaleOrderDate: {
            _$class: msls.ContentItem,
            _$name: "SaleOrderDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: Date
        },
        SaleOrderDetails: {
            _$class: msls.ContentItem,
            _$name: "SaleOrderDetails",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.AddEditSaleOrder,
            value: lightSwitchApplication.AddEditSaleOrder
        },
        SaleOrderDetails1: {
            _$class: msls.ContentItem,
            _$name: "SaleOrderDetails1",
            _$parentName: "SaleOrderDetails",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.AddEditSaleOrder,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditSaleOrder,
                _$entry: {
                    elementType: lightSwitchApplication.SaleOrderDetail
                }
            }
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "SaleOrderDetails1",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.SaleOrderDetail,
            value: lightSwitchApplication.SaleOrderDetail
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.SaleOrderDetail,
            value: lightSwitchApplication.Product
        },
        Location: {
            _$class: msls.ContentItem,
            _$name: "Location",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.SaleOrderDetail,
            value: lightSwitchApplication.Location
        },
        LotNo: {
            _$class: msls.ContentItem,
            _$name: "LotNo",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        OrderQuantity: {
            _$class: msls.ContentItem,
            _$name: "OrderQuantity",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.SaleOrderDetail,
            value: Number
        },
        SalePrice: {
            _$class: msls.ContentItem,
            _$name: "SalePrice",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.AddEditSaleOrder,
            value: lightSwitchApplication.AddEditSaleOrder
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.AddEditSaleOrder,
            value: lightSwitchApplication.AddEditSaleOrder
        },
        Remarks: {
            _$class: msls.ContentItem,
            _$name: "Remarks",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.AddEditSaleOrder,
            value: String
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.AddEditSaleOrder,
            value: lightSwitchApplication.AddEditSaleOrder
        },
        SaleOrderTotalAmount: {
            _$class: msls.ContentItem,
            _$name: "SaleOrderTotalAmount",
            _$parentName: "Group2",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.AddEditSaleOrder,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditSaleOrder
        },
        CustomersPopup: {
            _$class: msls.ContentItem,
            _$name: "CustomersPopup",
            _$parentName: "Popups",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.AddEditSaleOrder,
            value: lightSwitchApplication.AddEditSaleOrder
        },
        SearchCustomer: {
            _$class: msls.ContentItem,
            _$name: "SearchCustomer",
            _$parentName: "CustomersPopup",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.AddEditSaleOrder,
            value: String
        },
        CustomersActiveQuery: {
            _$class: msls.ContentItem,
            _$name: "CustomersActiveQuery",
            _$parentName: "CustomersPopup",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.AddEditSaleOrder,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditSaleOrder,
                _$entry: {
                    elementType: lightSwitchApplication.Customer
                }
            }
        },
        CustomersActiveQueryTemplate: {
            _$class: msls.ContentItem,
            _$name: "CustomersActiveQueryTemplate",
            _$parentName: "CustomersActiveQuery",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.Customer,
            value: lightSwitchApplication.Customer
        },
        CustomerName: {
            _$class: msls.ContentItem,
            _$name: "CustomerName",
            _$parentName: "CustomersActiveQueryTemplate",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.Customer,
            value: String
        },
        CustomerGroupName: {
            _$class: msls.ContentItem,
            _$name: "CustomerGroupName",
            _$parentName: "CustomersActiveQueryTemplate",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.Customer,
            value: String
        },
        CreditTerm: {
            _$class: msls.ContentItem,
            _$name: "CreditTerm",
            _$parentName: "CustomersActiveQueryTemplate",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.Customer,
            value: Number
        },
        TransportRoute: {
            _$class: msls.ContentItem,
            _$name: "TransportRoute",
            _$parentName: "CustomersActiveQueryTemplate",
            screen: lightSwitchApplication.AddEditSaleOrder,
            data: lightSwitchApplication.Customer,
            value: lightSwitchApplication.TransportRoute
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditSaleOrder, {
        /// <field>
        /// Called when a new AddEditSaleOrder screen is created.
        /// <br/>created(msls.application.AddEditSaleOrder screen)
        /// </field>
        created: [lightSwitchApplication.AddEditSaleOrder],
        /// <field>
        /// Called before changes on an active AddEditSaleOrder screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditSaleOrder screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditSaleOrder],
        /// <field>
        /// Called to determine if the CustomersPopup_Tap method can be executed.
        /// <br/>canExecute(msls.application.AddEditSaleOrder screen)
        /// </field>
        CustomersPopup_Tap_canExecute: [lightSwitchApplication.AddEditSaleOrder],
        /// <field>
        /// Called to execute the CustomersPopup_Tap method.
        /// <br/>execute(msls.application.AddEditSaleOrder screen)
        /// </field>
        CustomersPopup_Tap_execute: [lightSwitchApplication.AddEditSaleOrder],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("left"); }],
        /// <field>
        /// Called after the DocumentNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("DocumentNo"); }],
        /// <field>
        /// Called after the Customer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Customer_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("Customer"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the PaymentStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaymentStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("PaymentStatus"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("right"); }],
        /// <field>
        /// Called after the ReferenceNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReferenceNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("ReferenceNo"); }],
        /// <field>
        /// Called after the SaleOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SaleOrderDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("SaleOrderDate"); }],
        /// <field>
        /// Called after the SaleOrderDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SaleOrderDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("SaleOrderDetails"); }],
        /// <field>
        /// Called after the SaleOrderDetails1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SaleOrderDetails1_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("SaleOrderDetails1"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("Product"); }],
        /// <field>
        /// Called after the Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("Location"); }],
        /// <field>
        /// Called after the LotNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("LotNo"); }],
        /// <field>
        /// Called after the OrderQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("OrderQuantity"); }],
        /// <field>
        /// Called after the SalePrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SalePrice_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("SalePrice"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("Group"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("Group1"); }],
        /// <field>
        /// Called after the Remarks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remarks_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("Remarks"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("Group2"); }],
        /// <field>
        /// Called after the SaleOrderTotalAmount content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SaleOrderTotalAmount_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("SaleOrderTotalAmount"); }],
        /// <field>
        /// Called after the CustomersPopup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomersPopup_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("CustomersPopup"); }],
        /// <field>
        /// Called after the SearchCustomer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchCustomer_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("SearchCustomer"); }],
        /// <field>
        /// Called after the CustomersActiveQuery content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomersActiveQuery_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("CustomersActiveQuery"); }],
        /// <field>
        /// Called after the CustomersActiveQueryTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomersActiveQueryTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("CustomersActiveQueryTemplate"); }],
        /// <field>
        /// Called after the CustomerName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerName_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("CustomerName"); }],
        /// <field>
        /// Called after the CustomerGroupName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerGroupName_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("CustomerGroupName"); }],
        /// <field>
        /// Called after the CreditTerm content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreditTerm_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("CreditTerm"); }],
        /// <field>
        /// Called after the TransportRoute content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TransportRoute_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrder().findContentItem("TransportRoute"); }]
    });

    lightSwitchApplication.AddEditSaleOrderDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditSaleOrderDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.AddEditSaleOrderDetail,
            value: lightSwitchApplication.AddEditSaleOrderDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.AddEditSaleOrderDetail,
            value: lightSwitchApplication.SaleOrderDetail
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.SaleOrderDetail,
            value: lightSwitchApplication.SaleOrderDetail
        },
        ProductCode1: {
            _$class: msls.ContentItem,
            _$name: "ProductCode1",
            _$parentName: "Group3",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        ProductName1: {
            _$class: msls.ContentItem,
            _$name: "ProductName1",
            _$parentName: "Group3",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.SaleOrderDetail,
            value: lightSwitchApplication.SaleOrderDetail
        },
        LocationName1: {
            _$class: msls.ContentItem,
            _$name: "LocationName1",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        LotNo: {
            _$class: msls.ContentItem,
            _$name: "LotNo",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.SaleOrderDetail,
            value: lightSwitchApplication.SaleOrderDetail
        },
        AvailableQuantity: {
            _$class: msls.ContentItem,
            _$name: "AvailableQuantity",
            _$parentName: "Group2",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.SaleOrderDetail,
            value: Number
        },
        UOMName1: {
            _$class: msls.ContentItem,
            _$name: "UOMName1",
            _$parentName: "Group2",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.SaleOrderDetail,
            value: lightSwitchApplication.SaleOrderDetail
        },
        UnitCost: {
            _$class: msls.ContentItem,
            _$name: "UnitCost",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        MasterSalePrice: {
            _$class: msls.ContentItem,
            _$name: "MasterSalePrice",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        OrderQuantity: {
            _$class: msls.ContentItem,
            _$name: "OrderQuantity",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.SaleOrderDetail,
            value: Number
        },
        SalePrice: {
            _$class: msls.ContentItem,
            _$name: "SalePrice",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditSaleOrderDetail
        },
        PopupStockOnHand: {
            _$class: msls.ContentItem,
            _$name: "PopupStockOnHand",
            _$parentName: "Popups",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.AddEditSaleOrderDetail,
            value: lightSwitchApplication.AddEditSaleOrderDetail
        },
        SearchProduct: {
            _$class: msls.ContentItem,
            _$name: "SearchProduct",
            _$parentName: "PopupStockOnHand",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.AddEditSaleOrderDetail,
            value: String
        },
        SearchLocation: {
            _$class: msls.ContentItem,
            _$name: "SearchLocation",
            _$parentName: "PopupStockOnHand",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.AddEditSaleOrderDetail,
            value: String
        },
        SearchLot: {
            _$class: msls.ContentItem,
            _$name: "SearchLot",
            _$parentName: "PopupStockOnHand",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.AddEditSaleOrderDetail,
            value: String
        },
        StockOnHandForSale: {
            _$class: msls.ContentItem,
            _$name: "StockOnHandForSale",
            _$parentName: "PopupStockOnHand",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.AddEditSaleOrderDetail,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditSaleOrderDetail,
                _$entry: {
                    elementType: lightSwitchApplication.StockOnHand
                }
            }
        },
        StockOnHandForSaleTemplate: {
            _$class: msls.ContentItem,
            _$name: "StockOnHandForSaleTemplate",
            _$parentName: "StockOnHandForSale",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.StockOnHand
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "StockOnHandForSaleTemplate",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "StockOnHandForSaleTemplate",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        LocationName: {
            _$class: msls.ContentItem,
            _$name: "LocationName",
            _$parentName: "StockOnHandForSaleTemplate",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        LotNo1: {
            _$class: msls.ContentItem,
            _$name: "LotNo1",
            _$parentName: "StockOnHandForSaleTemplate",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        QuantityOnHand: {
            _$class: msls.ContentItem,
            _$name: "QuantityOnHand",
            _$parentName: "StockOnHandForSaleTemplate",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.StockOnHand,
            value: Number
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "StockOnHandForSaleTemplate",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        SellingPrice: {
            _$class: msls.ContentItem,
            _$name: "SellingPrice",
            _$parentName: "StockOnHandForSaleTemplate",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        CostPrice: {
            _$class: msls.ContentItem,
            _$name: "CostPrice",
            _$parentName: "StockOnHandForSaleTemplate",
            screen: lightSwitchApplication.AddEditSaleOrderDetail,
            data: lightSwitchApplication.StockOnHand,
            value: String
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditSaleOrderDetail, {
        /// <field>
        /// Called when a new AddEditSaleOrderDetail screen is created.
        /// <br/>created(msls.application.AddEditSaleOrderDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditSaleOrderDetail],
        /// <field>
        /// Called before changes on an active AddEditSaleOrderDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditSaleOrderDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditSaleOrderDetail],
        /// <field>
        /// Called to determine if the deleteSelected method can be executed.
        /// <br/>canExecute(msls.application.AddEditSaleOrderDetail screen)
        /// </field>
        deleteSelected_canExecute: [lightSwitchApplication.AddEditSaleOrderDetail],
        /// <field>
        /// Called to execute the deleteSelected method.
        /// <br/>execute(msls.application.AddEditSaleOrderDetail screen)
        /// </field>
        deleteSelected_execute: [lightSwitchApplication.AddEditSaleOrderDetail],
        /// <field>
        /// Called to determine if the StockOnHandForSale_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.AddEditSaleOrderDetail screen)
        /// </field>
        StockOnHandForSale_ItemTap_canExecute: [lightSwitchApplication.AddEditSaleOrderDetail],
        /// <field>
        /// Called to execute the StockOnHandForSale_ItemTap method.
        /// <br/>execute(msls.application.AddEditSaleOrderDetail screen)
        /// </field>
        StockOnHandForSale_ItemTap_execute: [lightSwitchApplication.AddEditSaleOrderDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("Group3"); }],
        /// <field>
        /// Called after the ProductCode1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode1_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("ProductCode1"); }],
        /// <field>
        /// Called after the ProductName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("ProductName1"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("Group1"); }],
        /// <field>
        /// Called after the LocationName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("LocationName1"); }],
        /// <field>
        /// Called after the LotNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("LotNo"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("Group2"); }],
        /// <field>
        /// Called after the AvailableQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AvailableQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("AvailableQuantity"); }],
        /// <field>
        /// Called after the UOMName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("UOMName1"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("Group"); }],
        /// <field>
        /// Called after the UnitCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("UnitCost"); }],
        /// <field>
        /// Called after the MasterSalePrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MasterSalePrice_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("MasterSalePrice"); }],
        /// <field>
        /// Called after the OrderQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("OrderQuantity"); }],
        /// <field>
        /// Called after the SalePrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SalePrice_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("SalePrice"); }],
        /// <field>
        /// Called after the PopupStockOnHand content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PopupStockOnHand_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("PopupStockOnHand"); }],
        /// <field>
        /// Called after the SearchProduct content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchProduct_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("SearchProduct"); }],
        /// <field>
        /// Called after the SearchLocation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchLocation_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("SearchLocation"); }],
        /// <field>
        /// Called after the SearchLot content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchLot_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("SearchLot"); }],
        /// <field>
        /// Called after the StockOnHandForSale content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockOnHandForSale_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("StockOnHandForSale"); }],
        /// <field>
        /// Called after the StockOnHandForSaleTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockOnHandForSaleTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("StockOnHandForSaleTemplate"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the LocationName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationName_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("LocationName"); }],
        /// <field>
        /// Called after the LotNo1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo1_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("LotNo1"); }],
        /// <field>
        /// Called after the QuantityOnHand content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QuantityOnHand_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("QuantityOnHand"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the SellingPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SellingPrice_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("SellingPrice"); }],
        /// <field>
        /// Called after the CostPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CostPrice_postRender: [$element, function () { return new lightSwitchApplication.AddEditSaleOrderDetail().findContentItem("CostPrice"); }]
    });

    lightSwitchApplication.AddEditShippingMethod.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditShippingMethod
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditShippingMethod,
            data: lightSwitchApplication.AddEditShippingMethod,
            value: lightSwitchApplication.AddEditShippingMethod
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditShippingMethod
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditShippingMethod, {
        /// <field>
        /// Called when a new AddEditShippingMethod screen is created.
        /// <br/>created(msls.application.AddEditShippingMethod screen)
        /// </field>
        created: [lightSwitchApplication.AddEditShippingMethod],
        /// <field>
        /// Called before changes on an active AddEditShippingMethod screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditShippingMethod screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditShippingMethod],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditShippingMethod().findContentItem("DetailsTab"); }]
    });

    lightSwitchApplication.AddEditStockAdjust.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditStockAdjust
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.AddEditStockAdjust,
            value: lightSwitchApplication.AddEditStockAdjust
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.AddEditStockAdjust,
            value: lightSwitchApplication.StockAdjust
        },
        DocumentNo: {
            _$class: msls.ContentItem,
            _$name: "DocumentNo",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.StockAdjust,
            value: String
        },
        DocumentDate: {
            _$class: msls.ContentItem,
            _$name: "DocumentDate",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.StockAdjust,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.AddEditStockAdjust,
            value: lightSwitchApplication.AddEditStockAdjust
        },
        Remarks: {
            _$class: msls.ContentItem,
            _$name: "Remarks",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.AddEditStockAdjust,
            value: String
        },
        StockAdjustDetails: {
            _$class: msls.ContentItem,
            _$name: "StockAdjustDetails",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.AddEditStockAdjust,
            value: lightSwitchApplication.AddEditStockAdjust
        },
        StockAdjustDetails1: {
            _$class: msls.ContentItem,
            _$name: "StockAdjustDetails1",
            _$parentName: "StockAdjustDetails",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.AddEditStockAdjust,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditStockAdjust,
                _$entry: {
                    elementType: lightSwitchApplication.StockAdjustDetail
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "StockAdjustDetails1",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.StockAdjustDetail,
            value: lightSwitchApplication.StockAdjustDetail
        },
        Location: {
            _$class: msls.ContentItem,
            _$name: "Location",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.StockAdjustDetail,
            value: lightSwitchApplication.Location
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.StockAdjustDetail,
            value: lightSwitchApplication.Product
        },
        LotNo: {
            _$class: msls.ContentItem,
            _$name: "LotNo",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.StockAdjustDetail,
            value: String
        },
        UnitOfMeasure: {
            _$class: msls.ContentItem,
            _$name: "UnitOfMeasure",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.StockAdjustDetail,
            value: lightSwitchApplication.UnitOfMeasure
        },
        CurrentQuantity: {
            _$class: msls.ContentItem,
            _$name: "CurrentQuantity",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.StockAdjustDetail,
            value: Number
        },
        NewQuantity: {
            _$class: msls.ContentItem,
            _$name: "NewQuantity",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.StockAdjustDetail,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditStockAdjust
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Popups",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.AddEditStockAdjust,
            value: lightSwitchApplication.AddEditStockAdjust
        },
        SearchProductForAdjust: {
            _$class: msls.ContentItem,
            _$name: "SearchProductForAdjust",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.AddEditStockAdjust,
            value: String
        },
        StockOnHands: {
            _$class: msls.ContentItem,
            _$name: "StockOnHands",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.AddEditStockAdjust,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditStockAdjust,
                _$entry: {
                    elementType: lightSwitchApplication.StockOnHand
                }
            }
        },
        StockOnHandsTemplate: {
            _$class: msls.ContentItem,
            _$name: "StockOnHandsTemplate",
            _$parentName: "StockOnHands",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.StockOnHand
        },
        Location2: {
            _$class: msls.ContentItem,
            _$name: "Location2",
            _$parentName: "StockOnHandsTemplate",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.Location
        },
        Product1: {
            _$class: msls.ContentItem,
            _$name: "Product1",
            _$parentName: "StockOnHandsTemplate",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.Product
        },
        LotNo1: {
            _$class: msls.ContentItem,
            _$name: "LotNo1",
            _$parentName: "StockOnHandsTemplate",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        QuantityOnHand: {
            _$class: msls.ContentItem,
            _$name: "QuantityOnHand",
            _$parentName: "StockOnHandsTemplate",
            screen: lightSwitchApplication.AddEditStockAdjust,
            data: lightSwitchApplication.StockOnHand,
            value: Number
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditStockAdjust, {
        /// <field>
        /// Called when a new AddEditStockAdjust screen is created.
        /// <br/>created(msls.application.AddEditStockAdjust screen)
        /// </field>
        created: [lightSwitchApplication.AddEditStockAdjust],
        /// <field>
        /// Called before changes on an active AddEditStockAdjust screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditStockAdjust screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditStockAdjust],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("columns"); }],
        /// <field>
        /// Called after the DocumentNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("DocumentNo"); }],
        /// <field>
        /// Called after the DocumentDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("DocumentDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("right"); }],
        /// <field>
        /// Called after the Remarks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remarks_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("Remarks"); }],
        /// <field>
        /// Called after the StockAdjustDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockAdjustDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("StockAdjustDetails"); }],
        /// <field>
        /// Called after the StockAdjustDetails1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockAdjustDetails1_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("StockAdjustDetails1"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("Location"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("Product"); }],
        /// <field>
        /// Called after the LotNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("LotNo"); }],
        /// <field>
        /// Called after the UnitOfMeasure content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitOfMeasure_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("UnitOfMeasure"); }],
        /// <field>
        /// Called after the CurrentQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CurrentQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("CurrentQuantity"); }],
        /// <field>
        /// Called after the NewQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NewQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("NewQuantity"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("Group"); }],
        /// <field>
        /// Called after the SearchProductForAdjust content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchProductForAdjust_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("SearchProductForAdjust"); }],
        /// <field>
        /// Called after the StockOnHands content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockOnHands_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("StockOnHands"); }],
        /// <field>
        /// Called after the StockOnHandsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockOnHandsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("StockOnHandsTemplate"); }],
        /// <field>
        /// Called after the Location2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location2_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("Location2"); }],
        /// <field>
        /// Called after the Product1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product1_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("Product1"); }],
        /// <field>
        /// Called after the LotNo1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo1_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("LotNo1"); }],
        /// <field>
        /// Called after the QuantityOnHand content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QuantityOnHand_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjust().findContentItem("QuantityOnHand"); }]
    });

    lightSwitchApplication.AddEditStockAdjustDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditStockAdjustDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditStockAdjustDetail,
            data: lightSwitchApplication.AddEditStockAdjustDetail,
            value: lightSwitchApplication.AddEditStockAdjustDetail
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditStockAdjustDetail,
            data: lightSwitchApplication.AddEditStockAdjustDetail,
            value: lightSwitchApplication.AddEditStockAdjustDetail
        },
        ShowGroup: {
            _$class: msls.ContentItem,
            _$name: "ShowGroup",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditStockAdjustDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditStockAdjustDetail,
            data: lightSwitchApplication.AddEditStockAdjustDetail,
            value: lightSwitchApplication.StockAdjustDetail
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditStockAdjustDetail,
            data: lightSwitchApplication.StockAdjustDetail,
            value: lightSwitchApplication.Product
        },
        Location: {
            _$class: msls.ContentItem,
            _$name: "Location",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditStockAdjustDetail,
            data: lightSwitchApplication.StockAdjustDetail,
            value: lightSwitchApplication.Location
        },
        LotNo: {
            _$class: msls.ContentItem,
            _$name: "LotNo",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditStockAdjustDetail,
            data: lightSwitchApplication.StockAdjustDetail,
            value: String
        },
        CurrentQuantity: {
            _$class: msls.ContentItem,
            _$name: "CurrentQuantity",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditStockAdjustDetail,
            data: lightSwitchApplication.StockAdjustDetail,
            value: Number
        },
        NewQuantity: {
            _$class: msls.ContentItem,
            _$name: "NewQuantity",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditStockAdjustDetail,
            data: lightSwitchApplication.StockAdjustDetail,
            value: Number
        },
        DiferenceQuantity: {
            _$class: msls.ContentItem,
            _$name: "DiferenceQuantity",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditStockAdjustDetail,
            data: lightSwitchApplication.StockAdjustDetail,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditStockAdjustDetail
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Popups",
            screen: lightSwitchApplication.AddEditStockAdjustDetail,
            data: lightSwitchApplication.AddEditStockAdjustDetail,
            value: lightSwitchApplication.AddEditStockAdjustDetail
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditStockAdjustDetail,
            data: lightSwitchApplication.AddEditStockAdjustDetail,
            value: String
        },
        StockOnHandsQuery: {
            _$class: msls.ContentItem,
            _$name: "StockOnHandsQuery",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditStockAdjustDetail,
            data: lightSwitchApplication.AddEditStockAdjustDetail,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditStockAdjustDetail,
                _$entry: {
                    elementType: lightSwitchApplication.StockOnHand
                }
            }
        },
        StockOnHandsTemplate: {
            _$class: msls.ContentItem,
            _$name: "StockOnHandsTemplate",
            _$parentName: "StockOnHandsQuery",
            screen: lightSwitchApplication.AddEditStockAdjustDetail,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.StockOnHand
        },
        ProductPopup: {
            _$class: msls.ContentItem,
            _$name: "ProductPopup",
            _$parentName: "StockOnHandsTemplate",
            screen: lightSwitchApplication.AddEditStockAdjustDetail,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.Product
        },
        LotNoPopup: {
            _$class: msls.ContentItem,
            _$name: "LotNoPopup",
            _$parentName: "StockOnHandsTemplate",
            screen: lightSwitchApplication.AddEditStockAdjustDetail,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        LocationPopup: {
            _$class: msls.ContentItem,
            _$name: "LocationPopup",
            _$parentName: "StockOnHandsTemplate",
            screen: lightSwitchApplication.AddEditStockAdjustDetail,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.Location
        },
        QuantityOnHandPopup: {
            _$class: msls.ContentItem,
            _$name: "QuantityOnHandPopup",
            _$parentName: "StockOnHandsTemplate",
            screen: lightSwitchApplication.AddEditStockAdjustDetail,
            data: lightSwitchApplication.StockOnHand,
            value: Number
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditStockAdjustDetail, {
        /// <field>
        /// Called when a new AddEditStockAdjustDetail screen is created.
        /// <br/>created(msls.application.AddEditStockAdjustDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditStockAdjustDetail],
        /// <field>
        /// Called before changes on an active AddEditStockAdjustDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditStockAdjustDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditStockAdjustDetail],
        /// <field>
        /// Called to determine if the StockOnHandsQuery_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.AddEditStockAdjustDetail screen)
        /// </field>
        StockOnHandsQuery_ItemTap_canExecute: [lightSwitchApplication.AddEditStockAdjustDetail],
        /// <field>
        /// Called to execute the StockOnHandsQuery_ItemTap method.
        /// <br/>execute(msls.application.AddEditStockAdjustDetail screen)
        /// </field>
        StockOnHandsQuery_ItemTap_execute: [lightSwitchApplication.AddEditStockAdjustDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("Group1"); }],
        /// <field>
        /// Called after the ShowGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("ShowGroup"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("Product"); }],
        /// <field>
        /// Called after the Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("Location"); }],
        /// <field>
        /// Called after the LotNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("LotNo"); }],
        /// <field>
        /// Called after the CurrentQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CurrentQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("CurrentQuantity"); }],
        /// <field>
        /// Called after the NewQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NewQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("NewQuantity"); }],
        /// <field>
        /// Called after the DiferenceQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DiferenceQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("DiferenceQuantity"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("Group"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("Search"); }],
        /// <field>
        /// Called after the StockOnHandsQuery content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockOnHandsQuery_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("StockOnHandsQuery"); }],
        /// <field>
        /// Called after the StockOnHandsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockOnHandsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("StockOnHandsTemplate"); }],
        /// <field>
        /// Called after the ProductPopup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductPopup_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("ProductPopup"); }],
        /// <field>
        /// Called after the LotNoPopup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNoPopup_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("LotNoPopup"); }],
        /// <field>
        /// Called after the LocationPopup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationPopup_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("LocationPopup"); }],
        /// <field>
        /// Called after the QuantityOnHandPopup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QuantityOnHandPopup_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockAdjustDetail().findContentItem("QuantityOnHandPopup"); }]
    });

    lightSwitchApplication.AddEditStockCheck.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditStockCheck
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.AddEditStockCheck,
            value: lightSwitchApplication.AddEditStockCheck
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.AddEditStockCheck,
            value: lightSwitchApplication.StockCheck
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.StockCheck,
            value: lightSwitchApplication.StockCheck
        },
        StockCheckDate: {
            _$class: msls.ContentItem,
            _$name: "StockCheckDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.StockCheck,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.StockCheck,
            value: lightSwitchApplication.StockCheck
        },
        StockCheckDetails: {
            _$class: msls.ContentItem,
            _$name: "StockCheckDetails",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.AddEditStockCheck,
            value: lightSwitchApplication.AddEditStockCheck
        },
        StockCheckDetailsCollection: {
            _$class: msls.ContentItem,
            _$name: "StockCheckDetailsCollection",
            _$parentName: "StockCheckDetails",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.AddEditStockCheck,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditStockCheck,
                _$entry: {
                    elementType: lightSwitchApplication.StockCheckDetail
                }
            }
        },
        StockCheckDetailsCollectionTemplate: {
            _$class: msls.ContentItem,
            _$name: "StockCheckDetailsCollectionTemplate",
            _$parentName: "StockCheckDetailsCollection",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.StockCheckDetail,
            value: lightSwitchApplication.StockCheckDetail
        },
        UnitsExpected: {
            _$class: msls.ContentItem,
            _$name: "UnitsExpected",
            _$parentName: "StockCheckDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.StockCheckDetail,
            value: Number
        },
        UnitsFound: {
            _$class: msls.ContentItem,
            _$name: "UnitsFound",
            _$parentName: "StockCheckDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.StockCheckDetail,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditStockCheck
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditStockCheck, {
        /// <field>
        /// Called when a new AddEditStockCheck screen is created.
        /// <br/>created(msls.application.AddEditStockCheck screen)
        /// </field>
        created: [lightSwitchApplication.AddEditStockCheck],
        /// <field>
        /// Called before changes on an active AddEditStockCheck screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditStockCheck screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditStockCheck],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("left"); }],
        /// <field>
        /// Called after the StockCheckDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheckDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("StockCheckDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("right"); }],
        /// <field>
        /// Called after the StockCheckDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheckDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("StockCheckDetails"); }],
        /// <field>
        /// Called after the StockCheckDetailsCollection content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheckDetailsCollection_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("StockCheckDetailsCollection"); }],
        /// <field>
        /// Called after the StockCheckDetailsCollectionTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheckDetailsCollectionTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("StockCheckDetailsCollectionTemplate"); }],
        /// <field>
        /// Called after the UnitsExpected content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsExpected_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("UnitsExpected"); }],
        /// <field>
        /// Called after the UnitsFound content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsFound_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("UnitsFound"); }]
    });

    lightSwitchApplication.AddEditStockCheckDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditStockCheckDetail
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditStockCheckDetail,
            data: lightSwitchApplication.AddEditStockCheckDetail,
            value: lightSwitchApplication.AddEditStockCheckDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditStockCheckDetail,
            data: lightSwitchApplication.AddEditStockCheckDetail,
            value: lightSwitchApplication.AddEditStockCheckDetail
        },
        UnitsExpected: {
            _$class: msls.ContentItem,
            _$name: "UnitsExpected",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditStockCheckDetail,
            data: lightSwitchApplication.AddEditStockCheckDetail,
            value: Number
        },
        UnitsFound: {
            _$class: msls.ContentItem,
            _$name: "UnitsFound",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditStockCheckDetail,
            data: lightSwitchApplication.AddEditStockCheckDetail,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditStockCheckDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditStockCheckDetail, {
        /// <field>
        /// Called when a new AddEditStockCheckDetail screen is created.
        /// <br/>created(msls.application.AddEditStockCheckDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditStockCheckDetail],
        /// <field>
        /// Called before changes on an active AddEditStockCheckDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditStockCheckDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditStockCheckDetail],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheckDetail().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheckDetail().findContentItem("left"); }],
        /// <field>
        /// Called after the UnitsExpected content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsExpected_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheckDetail().findContentItem("UnitsExpected"); }],
        /// <field>
        /// Called after the UnitsFound content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsFound_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheckDetail().findContentItem("UnitsFound"); }]
    });

    lightSwitchApplication.AddEditProductPricing.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductPricing
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProductPricing,
            data: lightSwitchApplication.AddEditProductPricing,
            value: lightSwitchApplication.AddEditProductPricing
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditProductPricing,
            data: lightSwitchApplication.AddEditProductPricing,
            value: lightSwitchApplication.StockOnHand
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProductPricing,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.Product
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "Product",
            screen: lightSwitchApplication.AddEditProductPricing,
            data: lightSwitchApplication.Product,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "Product",
            screen: lightSwitchApplication.AddEditProductPricing,
            data: lightSwitchApplication.Product,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProductPricing,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.StockOnHand
        },
        LocationName: {
            _$class: msls.ContentItem,
            _$name: "LocationName",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProductPricing,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        LotNo: {
            _$class: msls.ContentItem,
            _$name: "LotNo",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProductPricing,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProductPricing,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.StockOnHand
        },
        QuantityOnHand: {
            _$class: msls.ContentItem,
            _$name: "QuantityOnHand",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditProductPricing,
            data: lightSwitchApplication.StockOnHand,
            value: Number
        },
        CostPrice: {
            _$class: msls.ContentItem,
            _$name: "CostPrice",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditProductPricing,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProductPricing,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.StockOnHand
        },
        UnitCost: {
            _$class: msls.ContentItem,
            _$name: "UnitCost",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProductPricing,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        SellingPrice: {
            _$class: msls.ContentItem,
            _$name: "SellingPrice",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProductPricing,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        IsAvailableForSale: {
            _$class: msls.ContentItem,
            _$name: "IsAvailableForSale",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProductPricing,
            data: lightSwitchApplication.StockOnHand,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductPricing
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProductPricing, {
        /// <field>
        /// Called when a new AddEditProductPricing screen is created.
        /// <br/>created(msls.application.AddEditProductPricing screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProductPricing],
        /// <field>
        /// Called before changes on an active AddEditProductPricing screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProductPricing screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProductPricing],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductPricing().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductPricing().findContentItem("columns"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductPricing().findContentItem("Product"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductPricing().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductPricing().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductPricing().findContentItem("right"); }],
        /// <field>
        /// Called after the LocationName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductPricing().findContentItem("LocationName"); }],
        /// <field>
        /// Called after the LotNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductPricing().findContentItem("LotNo"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductPricing().findContentItem("Group"); }],
        /// <field>
        /// Called after the QuantityOnHand content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QuantityOnHand_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductPricing().findContentItem("QuantityOnHand"); }],
        /// <field>
        /// Called after the CostPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CostPrice_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductPricing().findContentItem("CostPrice"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductPricing().findContentItem("left"); }],
        /// <field>
        /// Called after the UnitCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductPricing().findContentItem("UnitCost"); }],
        /// <field>
        /// Called after the SellingPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SellingPrice_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductPricing().findContentItem("SellingPrice"); }],
        /// <field>
        /// Called after the IsAvailableForSale content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsAvailableForSale_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductPricing().findContentItem("IsAvailableForSale"); }]
    });

    lightSwitchApplication.AddEditSupplier.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditSupplier
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.AddEditSupplier,
            value: lightSwitchApplication.AddEditSupplier
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.AddEditSupplier,
            value: lightSwitchApplication.Supplier
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: lightSwitchApplication.Supplier
        },
        SupplierGroup: {
            _$class: msls.ContentItem,
            _$name: "SupplierGroup",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: lightSwitchApplication.SupplierGroup
        },
        SupplierGroup1: {
            _$class: msls.ContentItem,
            _$name: "SupplierGroup1",
            _$parentName: "SupplierGroup",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.SupplierGroup,
            value: lightSwitchApplication.SupplierGroup
        },
        SupplierName: {
            _$class: msls.ContentItem,
            _$name: "SupplierName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Address1: {
            _$class: msls.ContentItem,
            _$name: "Address1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Address2: {
            _$class: msls.ContentItem,
            _$name: "Address2",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        ContactName: {
            _$class: msls.ContentItem,
            _$name: "ContactName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        TaxID: {
            _$class: msls.ContentItem,
            _$name: "TaxID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        PostCode: {
            _$class: msls.ContentItem,
            _$name: "PostCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: Number
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: Boolean
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: lightSwitchApplication.Supplier
        },
        RegisterDate: {
            _$class: msls.ContentItem,
            _$name: "RegisterDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: Date
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Phone: {
            _$class: msls.ContentItem,
            _$name: "Phone",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Fax: {
            _$class: msls.ContentItem,
            _$name: "Fax",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Website: {
            _$class: msls.ContentItem,
            _$name: "Website",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Latitude: {
            _$class: msls.ContentItem,
            _$name: "Latitude",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: Number
        },
        Longitude: {
            _$class: msls.ContentItem,
            _$name: "Longitude",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditSupplier
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditSupplier, {
        /// <field>
        /// Called when a new AddEditSupplier screen is created.
        /// <br/>created(msls.application.AddEditSupplier screen)
        /// </field>
        created: [lightSwitchApplication.AddEditSupplier],
        /// <field>
        /// Called before changes on an active AddEditSupplier screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditSupplier screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditSupplier],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("left"); }],
        /// <field>
        /// Called after the SupplierGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("SupplierGroup"); }],
        /// <field>
        /// Called after the SupplierGroup1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierGroup1_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("SupplierGroup1"); }],
        /// <field>
        /// Called after the SupplierName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierName_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("SupplierName"); }],
        /// <field>
        /// Called after the Address1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address1_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("Address1"); }],
        /// <field>
        /// Called after the Address2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address2_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("Address2"); }],
        /// <field>
        /// Called after the ContactName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContactName_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("ContactName"); }],
        /// <field>
        /// Called after the TaxID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TaxID_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("TaxID"); }],
        /// <field>
        /// Called after the PostCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PostCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("PostCode"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("Discontinued"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("right"); }],
        /// <field>
        /// Called after the RegisterDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RegisterDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("RegisterDate"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("Email"); }],
        /// <field>
        /// Called after the Phone content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("Phone"); }],
        /// <field>
        /// Called after the Fax content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Fax_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("Fax"); }],
        /// <field>
        /// Called after the Website content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Website_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("Website"); }],
        /// <field>
        /// Called after the Latitude content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Latitude_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("Latitude"); }],
        /// <field>
        /// Called after the Longitude content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Longitude_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("Longitude"); }]
    });

    lightSwitchApplication.AddEditSupplierGroup.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditSupplierGroup
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditSupplierGroup,
            data: lightSwitchApplication.AddEditSupplierGroup,
            value: lightSwitchApplication.AddEditSupplierGroup
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditSupplierGroup,
            data: lightSwitchApplication.AddEditSupplierGroup,
            value: lightSwitchApplication.SupplierGroup
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSupplierGroup,
            data: lightSwitchApplication.SupplierGroup,
            value: lightSwitchApplication.SupplierGroup
        },
        SupplierGroupName: {
            _$class: msls.ContentItem,
            _$name: "SupplierGroupName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSupplierGroup,
            data: lightSwitchApplication.SupplierGroup,
            value: String
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSupplierGroup,
            data: lightSwitchApplication.SupplierGroup,
            value: Boolean
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSupplierGroup,
            data: lightSwitchApplication.SupplierGroup,
            value: lightSwitchApplication.SupplierGroup
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditSupplierGroup
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditSupplierGroup, {
        /// <field>
        /// Called when a new AddEditSupplierGroup screen is created.
        /// <br/>created(msls.application.AddEditSupplierGroup screen)
        /// </field>
        created: [lightSwitchApplication.AddEditSupplierGroup],
        /// <field>
        /// Called before changes on an active AddEditSupplierGroup screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditSupplierGroup screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditSupplierGroup],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplierGroup().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplierGroup().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplierGroup().findContentItem("left"); }],
        /// <field>
        /// Called after the SupplierGroupName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierGroupName_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplierGroup().findContentItem("SupplierGroupName"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplierGroup().findContentItem("Discontinued"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplierGroup().findContentItem("right"); }]
    });

    lightSwitchApplication.AddEditTransportRoute.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTransportRoute
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTransportRoute,
            data: lightSwitchApplication.AddEditTransportRoute,
            value: lightSwitchApplication.AddEditTransportRoute
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTransportRoute,
            data: lightSwitchApplication.AddEditTransportRoute,
            value: lightSwitchApplication.TransportRoute
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTransportRoute,
            data: lightSwitchApplication.TransportRoute,
            value: lightSwitchApplication.TransportRoute
        },
        TransportRouteName: {
            _$class: msls.ContentItem,
            _$name: "TransportRouteName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTransportRoute,
            data: lightSwitchApplication.TransportRoute,
            value: String
        },
        Distance: {
            _$class: msls.ContentItem,
            _$name: "Distance",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTransportRoute,
            data: lightSwitchApplication.TransportRoute,
            value: Number
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTransportRoute,
            data: lightSwitchApplication.TransportRoute,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTransportRoute
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTransportRoute, {
        /// <field>
        /// Called when a new AddEditTransportRoute screen is created.
        /// <br/>created(msls.application.AddEditTransportRoute screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTransportRoute],
        /// <field>
        /// Called before changes on an active AddEditTransportRoute screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTransportRoute screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTransportRoute],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTransportRoute().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTransportRoute().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditTransportRoute().findContentItem("left"); }],
        /// <field>
        /// Called after the TransportRouteName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TransportRouteName_postRender: [$element, function () { return new lightSwitchApplication.AddEditTransportRoute().findContentItem("TransportRouteName"); }],
        /// <field>
        /// Called after the Distance content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Distance_postRender: [$element, function () { return new lightSwitchApplication.AddEditTransportRoute().findContentItem("Distance"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.AddEditTransportRoute().findContentItem("Discontinued"); }]
    });

    lightSwitchApplication.AddEditUnitOfMeasure.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditUnitOfMeasure
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditUnitOfMeasure,
            data: lightSwitchApplication.AddEditUnitOfMeasure,
            value: lightSwitchApplication.AddEditUnitOfMeasure
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditUnitOfMeasure,
            data: lightSwitchApplication.AddEditUnitOfMeasure,
            value: lightSwitchApplication.UnitOfMeasure
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditUnitOfMeasure,
            data: lightSwitchApplication.UnitOfMeasure,
            value: lightSwitchApplication.UnitOfMeasure
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditUnitOfMeasure,
            data: lightSwitchApplication.UnitOfMeasure,
            value: String
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditUnitOfMeasure,
            data: lightSwitchApplication.UnitOfMeasure,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditUnitOfMeasure
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditUnitOfMeasure, {
        /// <field>
        /// Called when a new AddEditUnitOfMeasure screen is created.
        /// <br/>created(msls.application.AddEditUnitOfMeasure screen)
        /// </field>
        created: [lightSwitchApplication.AddEditUnitOfMeasure],
        /// <field>
        /// Called before changes on an active AddEditUnitOfMeasure screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditUnitOfMeasure screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditUnitOfMeasure],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditUnitOfMeasure().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditUnitOfMeasure().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditUnitOfMeasure().findContentItem("left"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.AddEditUnitOfMeasure().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.AddEditUnitOfMeasure().findContentItem("Discontinued"); }]
    });

    lightSwitchApplication.AddEditWorker.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditWorker
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditWorker,
            data: lightSwitchApplication.AddEditWorker,
            value: lightSwitchApplication.AddEditWorker
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditWorker,
            data: lightSwitchApplication.AddEditWorker,
            value: lightSwitchApplication.Worker
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditWorker,
            data: lightSwitchApplication.Worker,
            value: lightSwitchApplication.Worker
        },
        WorkerName: {
            _$class: msls.ContentItem,
            _$name: "WorkerName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorker,
            data: lightSwitchApplication.Worker,
            value: String
        },
        HireDate: {
            _$class: msls.ContentItem,
            _$name: "HireDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorker,
            data: lightSwitchApplication.Worker,
            value: Date
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorker,
            data: lightSwitchApplication.Worker,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditWorker
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditWorker, {
        /// <field>
        /// Called when a new AddEditWorker screen is created.
        /// <br/>created(msls.application.AddEditWorker screen)
        /// </field>
        created: [lightSwitchApplication.AddEditWorker],
        /// <field>
        /// Called before changes on an active AddEditWorker screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditWorker screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditWorker],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorker().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorker().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorker().findContentItem("left"); }],
        /// <field>
        /// Called after the WorkerName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkerName_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorker().findContentItem("WorkerName"); }],
        /// <field>
        /// Called after the HireDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HireDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorker().findContentItem("HireDate"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorker().findContentItem("Discontinued"); }]
    });

    lightSwitchApplication.AddEditWorkOrder.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditWorkOrder
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.AddEditWorkOrder,
            value: lightSwitchApplication.AddEditWorkOrder
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.AddEditWorkOrder,
            value: lightSwitchApplication.WorkOrder
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrder,
            value: lightSwitchApplication.WorkOrder
        },
        WorkOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderNumber",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrder,
            value: String
        },
        WorkOrderDate: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrder,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrder,
            value: lightSwitchApplication.WorkOrder
        },
        Machine: {
            _$class: msls.ContentItem,
            _$name: "Machine",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrder,
            value: lightSwitchApplication.Machine
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Machine",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.Machine,
            value: lightSwitchApplication.Machine
        },
        WorkOrderStatus: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderStatus",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrder,
            value: Boolean
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrder,
            value: lightSwitchApplication.WorkOrder
        },
        Remark: {
            _$class: msls.ContentItem,
            _$name: "Remark",
            _$parentName: "Group2",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrder,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.AddEditWorkOrder,
            value: lightSwitchApplication.AddEditWorkOrder
        },
        WorkOrderIssueDetails1: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderIssueDetails1",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.AddEditWorkOrder,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditWorkOrder,
                _$entry: {
                    elementType: lightSwitchApplication.WorkOrderIssueDetail
                }
            }
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "WorkOrderIssueDetails1",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: lightSwitchApplication.WorkOrderIssueDetail
        },
        ProductCode1: {
            _$class: msls.ContentItem,
            _$name: "ProductCode1",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        ProductName1: {
            _$class: msls.ContentItem,
            _$name: "ProductName1",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        LocationName: {
            _$class: msls.ContentItem,
            _$name: "LocationName",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        IssueLot: {
            _$class: msls.ContentItem,
            _$name: "IssueLot",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        IssueQuantity: {
            _$class: msls.ContentItem,
            _$name: "IssueQuantity",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: Number
        },
        UOMName1: {
            _$class: msls.ContentItem,
            _$name: "UOMName1",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        IssueUnitCost: {
            _$class: msls.ContentItem,
            _$name: "IssueUnitCost",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.AddEditWorkOrder,
            value: lightSwitchApplication.AddEditWorkOrder
        },
        WorkOrderProduces1: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderProduces1",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.AddEditWorkOrder,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditWorkOrder,
                _$entry: {
                    elementType: lightSwitchApplication.WorkOrderProduce
                }
            }
        },
        RowTemplate5: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate5",
            _$parentName: "WorkOrderProduces1",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: lightSwitchApplication.WorkOrderProduce
        },
        ReceiveDate: {
            _$class: msls.ContentItem,
            _$name: "ReceiveDate",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: Date
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        OrderQuantity: {
            _$class: msls.ContentItem,
            _$name: "OrderQuantity",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: Number
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        UnitWeight: {
            _$class: msls.ContentItem,
            _$name: "UnitWeight",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: Number
        },
        ProduceLocation: {
            _$class: msls.ContentItem,
            _$name: "ProduceLocation",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: lightSwitchApplication.Location
        },
        ProduceLot: {
            _$class: msls.ContentItem,
            _$name: "ProduceLot",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        ReceiveQuantity: {
            _$class: msls.ContentItem,
            _$name: "ReceiveQuantity",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: Number
        },
        ProduceCost: {
            _$class: msls.ContentItem,
            _$name: "ProduceCost",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        ReceiveCost: {
            _$class: msls.ContentItem,
            _$name: "ReceiveCost",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        isReceiveComplete: {
            _$class: msls.ContentItem,
            _$name: "isReceiveComplete",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditWorkOrder
        },
        PopupEmployee: {
            _$class: msls.ContentItem,
            _$name: "PopupEmployee",
            _$parentName: "Popups",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.AddEditWorkOrder,
            value: lightSwitchApplication.AddEditWorkOrder
        },
        SearchEmployee: {
            _$class: msls.ContentItem,
            _$name: "SearchEmployee",
            _$parentName: "PopupEmployee",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.AddEditWorkOrder,
            value: String
        },
        PopupMachine: {
            _$class: msls.ContentItem,
            _$name: "PopupMachine",
            _$parentName: "Popups",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.AddEditWorkOrder,
            value: lightSwitchApplication.AddEditWorkOrder
        },
        SearchMachine: {
            _$class: msls.ContentItem,
            _$name: "SearchMachine",
            _$parentName: "PopupMachine",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.AddEditWorkOrder,
            value: String
        },
        MachineActiveQuery: {
            _$class: msls.ContentItem,
            _$name: "MachineActiveQuery",
            _$parentName: "PopupMachine",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.AddEditWorkOrder,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditWorkOrder,
                _$entry: {
                    elementType: lightSwitchApplication.Machine
                }
            }
        },
        MachineActiveQueryTemplate: {
            _$class: msls.ContentItem,
            _$name: "MachineActiveQueryTemplate",
            _$parentName: "MachineActiveQuery",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.Machine,
            value: lightSwitchApplication.Machine
        },
        MachineName: {
            _$class: msls.ContentItem,
            _$name: "MachineName",
            _$parentName: "MachineActiveQueryTemplate",
            screen: lightSwitchApplication.AddEditWorkOrder,
            data: lightSwitchApplication.Machine,
            value: String
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditWorkOrder, {
        /// <field>
        /// Called when a new AddEditWorkOrder screen is created.
        /// <br/>created(msls.application.AddEditWorkOrder screen)
        /// </field>
        created: [lightSwitchApplication.AddEditWorkOrder],
        /// <field>
        /// Called before changes on an active AddEditWorkOrder screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditWorkOrder screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditWorkOrder],
        /// <field>
        /// Called to determine if the EmployeeActiveQuery_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.AddEditWorkOrder screen)
        /// </field>
        EmployeeActiveQuery_ItemTap_canExecute: [lightSwitchApplication.AddEditWorkOrder],
        /// <field>
        /// Called to execute the EmployeeActiveQuery_ItemTap method.
        /// <br/>execute(msls.application.AddEditWorkOrder screen)
        /// </field>
        EmployeeActiveQuery_ItemTap_execute: [lightSwitchApplication.AddEditWorkOrder],
        /// <field>
        /// Called to determine if the MachineActiveQuery_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.AddEditWorkOrder screen)
        /// </field>
        MachineActiveQuery_ItemTap_canExecute: [lightSwitchApplication.AddEditWorkOrder],
        /// <field>
        /// Called to execute the MachineActiveQuery_ItemTap method.
        /// <br/>execute(msls.application.AddEditWorkOrder screen)
        /// </field>
        MachineActiveQuery_ItemTap_execute: [lightSwitchApplication.AddEditWorkOrder],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("left"); }],
        /// <field>
        /// Called after the WorkOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("WorkOrderNumber"); }],
        /// <field>
        /// Called after the WorkOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("WorkOrderDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("right"); }],
        /// <field>
        /// Called after the Machine content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Machine_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("Machine"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the WorkOrderStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("WorkOrderStatus"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("Group2"); }],
        /// <field>
        /// Called after the Remark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remark_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("Remark"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("Group"); }],
        /// <field>
        /// Called after the WorkOrderIssueDetails1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderIssueDetails1_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("WorkOrderIssueDetails1"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the ProductCode1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode1_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("ProductCode1"); }],
        /// <field>
        /// Called after the ProductName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("ProductName1"); }],
        /// <field>
        /// Called after the LocationName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationName_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("LocationName"); }],
        /// <field>
        /// Called after the IssueLot content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueLot_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("IssueLot"); }],
        /// <field>
        /// Called after the IssueQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("IssueQuantity"); }],
        /// <field>
        /// Called after the UOMName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("UOMName1"); }],
        /// <field>
        /// Called after the IssueUnitCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueUnitCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("IssueUnitCost"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("Group1"); }],
        /// <field>
        /// Called after the WorkOrderProduces1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderProduces1_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("WorkOrderProduces1"); }],
        /// <field>
        /// Called after the RowTemplate5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate5_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("RowTemplate5"); }],
        /// <field>
        /// Called after the ReceiveDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("ReceiveDate"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the OrderQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("OrderQuantity"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the UnitWeight content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitWeight_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("UnitWeight"); }],
        /// <field>
        /// Called after the ProduceLocation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProduceLocation_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("ProduceLocation"); }],
        /// <field>
        /// Called after the ProduceLot content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProduceLot_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("ProduceLot"); }],
        /// <field>
        /// Called after the ReceiveQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("ReceiveQuantity"); }],
        /// <field>
        /// Called after the ProduceCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProduceCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("ProduceCost"); }],
        /// <field>
        /// Called after the ReceiveCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("ReceiveCost"); }],
        /// <field>
        /// Called after the isReceiveComplete content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        isReceiveComplete_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("isReceiveComplete"); }],
        /// <field>
        /// Called after the PopupEmployee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PopupEmployee_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("PopupEmployee"); }],
        /// <field>
        /// Called after the SearchEmployee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchEmployee_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("SearchEmployee"); }],
        /// <field>
        /// Called after the PopupMachine content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PopupMachine_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("PopupMachine"); }],
        /// <field>
        /// Called after the SearchMachine content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchMachine_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("SearchMachine"); }],
        /// <field>
        /// Called after the MachineActiveQuery content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MachineActiveQuery_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("MachineActiveQuery"); }],
        /// <field>
        /// Called after the MachineActiveQueryTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MachineActiveQueryTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("MachineActiveQueryTemplate"); }],
        /// <field>
        /// Called after the MachineName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MachineName_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrder().findContentItem("MachineName"); }]
    });

    lightSwitchApplication.AddEditWorkOrderIssueDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            value: lightSwitchApplication.AddEditWorkOrderIssueDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            value: lightSwitchApplication.WorkOrderIssueDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: lightSwitchApplication.WorkOrderIssueDetail
        },
        WorkOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderNumber",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        WorkOrderDate: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: Date
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        LocationName: {
            _$class: msls.ContentItem,
            _$name: "LocationName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        IssueLot: {
            _$class: msls.ContentItem,
            _$name: "IssueLot",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        AvailableQuantity: {
            _$class: msls.ContentItem,
            _$name: "AvailableQuantity",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: Number
        },
        IssueQuantity: {
            _$class: msls.ContentItem,
            _$name: "IssueQuantity",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: Number
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        UnitWeight: {
            _$class: msls.ContentItem,
            _$name: "UnitWeight",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: Number
        },
        IssueUnitCost: {
            _$class: msls.ContentItem,
            _$name: "IssueUnitCost",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail
        },
        PopupStockOnhand: {
            _$class: msls.ContentItem,
            _$name: "PopupStockOnhand",
            _$parentName: "Popups",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            value: lightSwitchApplication.AddEditWorkOrderIssueDetail
        },
        SearchStock: {
            _$class: msls.ContentItem,
            _$name: "SearchStock",
            _$parentName: "PopupStockOnhand",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            value: String
        },
        QueryStockOnHandForIssue: {
            _$class: msls.ContentItem,
            _$name: "QueryStockOnHandForIssue",
            _$parentName: "PopupStockOnhand",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
                _$entry: {
                    elementType: lightSwitchApplication.StockOnHand
                }
            }
        },
        QueryStockOnHandForIssueTemplate: {
            _$class: msls.ContentItem,
            _$name: "QueryStockOnHandForIssueTemplate",
            _$parentName: "QueryStockOnHandForIssue",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.StockOnHand
        },
        ProductName1: {
            _$class: msls.ContentItem,
            _$name: "ProductName1",
            _$parentName: "QueryStockOnHandForIssueTemplate",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        QuantityOnHand: {
            _$class: msls.ContentItem,
            _$name: "QuantityOnHand",
            _$parentName: "QueryStockOnHandForIssueTemplate",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.StockOnHand,
            value: Number
        },
        UOMName1: {
            _$class: msls.ContentItem,
            _$name: "UOMName1",
            _$parentName: "QueryStockOnHandForIssueTemplate",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        Location: {
            _$class: msls.ContentItem,
            _$name: "Location",
            _$parentName: "QueryStockOnHandForIssueTemplate",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.Location
        },
        LotNo: {
            _$class: msls.ContentItem,
            _$name: "LotNo",
            _$parentName: "QueryStockOnHandForIssueTemplate",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        SellingPrice: {
            _$class: msls.ContentItem,
            _$name: "SellingPrice",
            _$parentName: "QueryStockOnHandForIssueTemplate",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        CostPrice: {
            _$class: msls.ContentItem,
            _$name: "CostPrice",
            _$parentName: "QueryStockOnHandForIssueTemplate",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        IsAvailableForSale: {
            _$class: msls.ContentItem,
            _$name: "IsAvailableForSale",
            _$parentName: "QueryStockOnHandForIssueTemplate",
            screen: lightSwitchApplication.AddEditWorkOrderIssueDetail,
            data: lightSwitchApplication.StockOnHand,
            value: Boolean
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditWorkOrderIssueDetail, {
        /// <field>
        /// Called when a new AddEditWorkOrderIssueDetail screen is created.
        /// <br/>created(msls.application.AddEditWorkOrderIssueDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditWorkOrderIssueDetail],
        /// <field>
        /// Called before changes on an active AddEditWorkOrderIssueDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditWorkOrderIssueDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditWorkOrderIssueDetail],
        /// <field>
        /// Called to determine if the QueryStockOnHandForIssue_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.AddEditWorkOrderIssueDetail screen)
        /// </field>
        QueryStockOnHandForIssue_ItemTap_canExecute: [lightSwitchApplication.AddEditWorkOrderIssueDetail],
        /// <field>
        /// Called to execute the QueryStockOnHandForIssue_ItemTap method.
        /// <br/>execute(msls.application.AddEditWorkOrderIssueDetail screen)
        /// </field>
        QueryStockOnHandForIssue_ItemTap_execute: [lightSwitchApplication.AddEditWorkOrderIssueDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("left"); }],
        /// <field>
        /// Called after the WorkOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("WorkOrderNumber"); }],
        /// <field>
        /// Called after the WorkOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("WorkOrderDate"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the LocationName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationName_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("LocationName"); }],
        /// <field>
        /// Called after the IssueLot content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueLot_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("IssueLot"); }],
        /// <field>
        /// Called after the AvailableQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AvailableQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("AvailableQuantity"); }],
        /// <field>
        /// Called after the IssueQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("IssueQuantity"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the UnitWeight content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitWeight_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("UnitWeight"); }],
        /// <field>
        /// Called after the IssueUnitCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueUnitCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("IssueUnitCost"); }],
        /// <field>
        /// Called after the PopupStockOnhand content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PopupStockOnhand_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("PopupStockOnhand"); }],
        /// <field>
        /// Called after the SearchStock content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchStock_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("SearchStock"); }],
        /// <field>
        /// Called after the QueryStockOnHandForIssue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QueryStockOnHandForIssue_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("QueryStockOnHandForIssue"); }],
        /// <field>
        /// Called after the QueryStockOnHandForIssueTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QueryStockOnHandForIssueTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("QueryStockOnHandForIssueTemplate"); }],
        /// <field>
        /// Called after the ProductName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("ProductName1"); }],
        /// <field>
        /// Called after the QuantityOnHand content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QuantityOnHand_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("QuantityOnHand"); }],
        /// <field>
        /// Called after the UOMName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("UOMName1"); }],
        /// <field>
        /// Called after the Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("Location"); }],
        /// <field>
        /// Called after the LotNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("LotNo"); }],
        /// <field>
        /// Called after the SellingPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SellingPrice_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("SellingPrice"); }],
        /// <field>
        /// Called after the CostPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CostPrice_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("CostPrice"); }],
        /// <field>
        /// Called after the IsAvailableForSale content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsAvailableForSale_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderIssueDetail().findContentItem("IsAvailableForSale"); }]
    });

    lightSwitchApplication.AddEditWorkOrderProduce.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditWorkOrderProduce
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.AddEditWorkOrderProduce,
            value: lightSwitchApplication.AddEditWorkOrderProduce
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.AddEditWorkOrderProduce,
            value: lightSwitchApplication.WorkOrderProduce
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.WorkOrderProduce,
            value: lightSwitchApplication.WorkOrderProduce
        },
        WorkOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderNumber",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        WorkOrderDate: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.WorkOrderProduce,
            value: Date
        },
        ReceiveDate: {
            _$class: msls.ContentItem,
            _$name: "ReceiveDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.WorkOrderProduce,
            value: Date
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        ProduceLocation: {
            _$class: msls.ContentItem,
            _$name: "ProduceLocation",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.WorkOrderProduce,
            value: lightSwitchApplication.Location
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "ProduceLocation",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.Location,
            value: lightSwitchApplication.Location
        },
        ProduceLot: {
            _$class: msls.ContentItem,
            _$name: "ProduceLot",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        OrderQuantity: {
            _$class: msls.ContentItem,
            _$name: "OrderQuantity",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.WorkOrderProduce,
            value: Number
        },
        ReceiveQuantity: {
            _$class: msls.ContentItem,
            _$name: "ReceiveQuantity",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.WorkOrderProduce,
            value: Number
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        ProduceCost: {
            _$class: msls.ContentItem,
            _$name: "ProduceCost",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        ReceiveCost: {
            _$class: msls.ContentItem,
            _$name: "ReceiveCost",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        isReceiveComplete: {
            _$class: msls.ContentItem,
            _$name: "isReceiveComplete",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.WorkOrderProduce,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditWorkOrderProduce
        },
        PopupProduct: {
            _$class: msls.ContentItem,
            _$name: "PopupProduct",
            _$parentName: "Popups",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.AddEditWorkOrderProduce,
            value: lightSwitchApplication.AddEditWorkOrderProduce
        },
        SearchProduct: {
            _$class: msls.ContentItem,
            _$name: "SearchProduct",
            _$parentName: "PopupProduct",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.AddEditWorkOrderProduce,
            value: String
        },
        ProductsActiveQuery: {
            _$class: msls.ContentItem,
            _$name: "ProductsActiveQuery",
            _$parentName: "PopupProduct",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.AddEditWorkOrderProduce,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditWorkOrderProduce,
                _$entry: {
                    elementType: lightSwitchApplication.Product
                }
            }
        },
        ProductsActiveQueryTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProductsActiveQueryTemplate",
            _$parentName: "ProductsActiveQuery",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        ProductCode1: {
            _$class: msls.ContentItem,
            _$name: "ProductCode1",
            _$parentName: "ProductsActiveQueryTemplate",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.Product,
            value: String
        },
        ProductName1: {
            _$class: msls.ContentItem,
            _$name: "ProductName1",
            _$parentName: "ProductsActiveQueryTemplate",
            screen: lightSwitchApplication.AddEditWorkOrderProduce,
            data: lightSwitchApplication.Product,
            value: String
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditWorkOrderProduce, {
        /// <field>
        /// Called when a new AddEditWorkOrderProduce screen is created.
        /// <br/>created(msls.application.AddEditWorkOrderProduce screen)
        /// </field>
        created: [lightSwitchApplication.AddEditWorkOrderProduce],
        /// <field>
        /// Called before changes on an active AddEditWorkOrderProduce screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditWorkOrderProduce screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditWorkOrderProduce],
        /// <field>
        /// Called to determine if the ProductsActiveQuery_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.AddEditWorkOrderProduce screen)
        /// </field>
        ProductsActiveQuery_ItemTap_canExecute: [lightSwitchApplication.AddEditWorkOrderProduce],
        /// <field>
        /// Called to execute the ProductsActiveQuery_ItemTap method.
        /// <br/>execute(msls.application.AddEditWorkOrderProduce screen)
        /// </field>
        ProductsActiveQuery_ItemTap_execute: [lightSwitchApplication.AddEditWorkOrderProduce],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("left"); }],
        /// <field>
        /// Called after the WorkOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("WorkOrderNumber"); }],
        /// <field>
        /// Called after the WorkOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("WorkOrderDate"); }],
        /// <field>
        /// Called after the ReceiveDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("ReceiveDate"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the ProduceLocation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProduceLocation_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("ProduceLocation"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the ProduceLot content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProduceLot_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("ProduceLot"); }],
        /// <field>
        /// Called after the OrderQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("OrderQuantity"); }],
        /// <field>
        /// Called after the ReceiveQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveQuantity_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("ReceiveQuantity"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the ProduceCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProduceCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("ProduceCost"); }],
        /// <field>
        /// Called after the ReceiveCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("ReceiveCost"); }],
        /// <field>
        /// Called after the isReceiveComplete content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        isReceiveComplete_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("isReceiveComplete"); }],
        /// <field>
        /// Called after the PopupProduct content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PopupProduct_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("PopupProduct"); }],
        /// <field>
        /// Called after the SearchProduct content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchProduct_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("SearchProduct"); }],
        /// <field>
        /// Called after the ProductsActiveQuery content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductsActiveQuery_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("ProductsActiveQuery"); }],
        /// <field>
        /// Called after the ProductsActiveQueryTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductsActiveQueryTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("ProductsActiveQueryTemplate"); }],
        /// <field>
        /// Called after the ProductCode1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode1_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("ProductCode1"); }],
        /// <field>
        /// Called after the ProductName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditWorkOrderProduce().findContentItem("ProductName1"); }]
    });

    lightSwitchApplication.BrowseBanks.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseBanks
        },
        BankList: {
            _$class: msls.ContentItem,
            _$name: "BankList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseBanks,
            data: lightSwitchApplication.BrowseBanks,
            value: lightSwitchApplication.BrowseBanks
        },
        Bank: {
            _$class: msls.ContentItem,
            _$name: "Bank",
            _$parentName: "BankList",
            screen: lightSwitchApplication.BrowseBanks,
            data: lightSwitchApplication.BrowseBanks,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseBanks,
                _$entry: {
                    elementType: lightSwitchApplication.Bank
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Bank",
            screen: lightSwitchApplication.BrowseBanks,
            data: lightSwitchApplication.Bank,
            value: lightSwitchApplication.Bank
        },
        BankName: {
            _$class: msls.ContentItem,
            _$name: "BankName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseBanks,
            data: lightSwitchApplication.Bank,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseBanks
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseBanks, {
        /// <field>
        /// Called when a new BrowseBanks screen is created.
        /// <br/>created(msls.application.BrowseBanks screen)
        /// </field>
        created: [lightSwitchApplication.BrowseBanks],
        /// <field>
        /// Called before changes on an active BrowseBanks screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseBanks screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseBanks],
        /// <field>
        /// Called after the BankList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BankList_postRender: [$element, function () { return new lightSwitchApplication.BrowseBanks().findContentItem("BankList"); }],
        /// <field>
        /// Called after the Bank content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Bank_postRender: [$element, function () { return new lightSwitchApplication.BrowseBanks().findContentItem("Bank"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseBanks().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the BankName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BankName_postRender: [$element, function () { return new lightSwitchApplication.BrowseBanks().findContentItem("BankName"); }]
    });

    lightSwitchApplication.BrowseCompanies.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCompanies
        },
        CompanyList: {
            _$class: msls.ContentItem,
            _$name: "CompanyList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseCompanies,
            data: lightSwitchApplication.BrowseCompanies,
            value: lightSwitchApplication.BrowseCompanies
        },
        Company: {
            _$class: msls.ContentItem,
            _$name: "Company",
            _$parentName: "CompanyList",
            screen: lightSwitchApplication.BrowseCompanies,
            data: lightSwitchApplication.BrowseCompanies,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseCompanies,
                _$entry: {
                    elementType: lightSwitchApplication.Company
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Company",
            screen: lightSwitchApplication.BrowseCompanies,
            data: lightSwitchApplication.Company,
            value: lightSwitchApplication.Company
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCompanies
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseCompanies, {
        /// <field>
        /// Called when a new BrowseCompanies screen is created.
        /// <br/>created(msls.application.BrowseCompanies screen)
        /// </field>
        created: [lightSwitchApplication.BrowseCompanies],
        /// <field>
        /// Called before changes on an active BrowseCompanies screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseCompanies screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseCompanies],
        /// <field>
        /// Called after the CompanyList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CompanyList_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanies().findContentItem("CompanyList"); }],
        /// <field>
        /// Called after the Company content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Company_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanies().findContentItem("Company"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanies().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseCustomerGroups.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCustomerGroups
        },
        CustomerGroupList: {
            _$class: msls.ContentItem,
            _$name: "CustomerGroupList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseCustomerGroups,
            data: lightSwitchApplication.BrowseCustomerGroups,
            value: lightSwitchApplication.BrowseCustomerGroups
        },
        CustomerGroup: {
            _$class: msls.ContentItem,
            _$name: "CustomerGroup",
            _$parentName: "CustomerGroupList",
            screen: lightSwitchApplication.BrowseCustomerGroups,
            data: lightSwitchApplication.BrowseCustomerGroups,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseCustomerGroups,
                _$entry: {
                    elementType: lightSwitchApplication.CustomerGroup
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "CustomerGroup",
            screen: lightSwitchApplication.BrowseCustomerGroups,
            data: lightSwitchApplication.CustomerGroup,
            value: lightSwitchApplication.CustomerGroup
        },
        CustomerGroupName: {
            _$class: msls.ContentItem,
            _$name: "CustomerGroupName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCustomerGroups,
            data: lightSwitchApplication.CustomerGroup,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCustomerGroups
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseCustomerGroups, {
        /// <field>
        /// Called when a new BrowseCustomerGroups screen is created.
        /// <br/>created(msls.application.BrowseCustomerGroups screen)
        /// </field>
        created: [lightSwitchApplication.BrowseCustomerGroups],
        /// <field>
        /// Called before changes on an active BrowseCustomerGroups screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseCustomerGroups screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseCustomerGroups],
        /// <field>
        /// Called after the CustomerGroupList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerGroupList_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomerGroups().findContentItem("CustomerGroupList"); }],
        /// <field>
        /// Called after the CustomerGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerGroup_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomerGroups().findContentItem("CustomerGroup"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomerGroups().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the CustomerGroupName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerGroupName_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomerGroups().findContentItem("CustomerGroupName"); }]
    });

    lightSwitchApplication.BrowseCustomers.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCustomers
        },
        CustomerList: {
            _$class: msls.ContentItem,
            _$name: "CustomerList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.BrowseCustomers,
            value: lightSwitchApplication.BrowseCustomers
        },
        SearchCustomer: {
            _$class: msls.ContentItem,
            _$name: "SearchCustomer",
            _$parentName: "CustomerList",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.BrowseCustomers,
            value: String
        },
        Customer: {
            _$class: msls.ContentItem,
            _$name: "Customer",
            _$parentName: "CustomerList",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.BrowseCustomers,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseCustomers,
                _$entry: {
                    elementType: lightSwitchApplication.Customer
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Customer",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: lightSwitchApplication.Customer
        },
        CustomerGroup: {
            _$class: msls.ContentItem,
            _$name: "CustomerGroup",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: lightSwitchApplication.CustomerGroup
        },
        CustomerName: {
            _$class: msls.ContentItem,
            _$name: "CustomerName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: String
        },
        ContactName: {
            _$class: msls.ContentItem,
            _$name: "ContactName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Phone1: {
            _$class: msls.ContentItem,
            _$name: "Phone1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: String
        },
        TransportRoute: {
            _$class: msls.ContentItem,
            _$name: "TransportRoute",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: lightSwitchApplication.TransportRoute
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.BrowseCustomers,
            value: lightSwitchApplication.BrowseCustomers
        },
        SearchCustomerGroup: {
            _$class: msls.ContentItem,
            _$name: "SearchCustomerGroup",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.BrowseCustomers,
            value: String
        },
        CustomerGroups: {
            _$class: msls.ContentItem,
            _$name: "CustomerGroups",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.BrowseCustomers,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseCustomers,
                _$entry: {
                    elementType: lightSwitchApplication.CustomerGroup
                }
            }
        },
        CustomerGroupsTemplate: {
            _$class: msls.ContentItem,
            _$name: "CustomerGroupsTemplate",
            _$parentName: "CustomerGroups",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.CustomerGroup,
            value: lightSwitchApplication.CustomerGroup
        },
        CustomerGroupName: {
            _$class: msls.ContentItem,
            _$name: "CustomerGroupName",
            _$parentName: "CustomerGroupsTemplate",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.CustomerGroup,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCustomers
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseCustomers, {
        /// <field>
        /// Called when a new BrowseCustomers screen is created.
        /// <br/>created(msls.application.BrowseCustomers screen)
        /// </field>
        created: [lightSwitchApplication.BrowseCustomers],
        /// <field>
        /// Called before changes on an active BrowseCustomers screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseCustomers screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseCustomers],
        /// <field>
        /// Called after the CustomerList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerList_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("CustomerList"); }],
        /// <field>
        /// Called after the SearchCustomer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchCustomer_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("SearchCustomer"); }],
        /// <field>
        /// Called after the Customer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Customer_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("Customer"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the CustomerGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerGroup_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("CustomerGroup"); }],
        /// <field>
        /// Called after the CustomerName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerName_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("CustomerName"); }],
        /// <field>
        /// Called after the ContactName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContactName_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("ContactName"); }],
        /// <field>
        /// Called after the Phone1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone1_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("Phone1"); }],
        /// <field>
        /// Called after the TransportRoute content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TransportRoute_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("TransportRoute"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("Group"); }],
        /// <field>
        /// Called after the SearchCustomerGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchCustomerGroup_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("SearchCustomerGroup"); }],
        /// <field>
        /// Called after the CustomerGroups content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerGroups_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("CustomerGroups"); }],
        /// <field>
        /// Called after the CustomerGroupsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerGroupsTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("CustomerGroupsTemplate"); }],
        /// <field>
        /// Called after the CustomerGroupName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerGroupName_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("CustomerGroupName"); }]
    });

    lightSwitchApplication.BrowseEmployees.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        },
        EmployeeList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: lightSwitchApplication.BrowseEmployees
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployees, {
        /// <field>
        /// Called when a new BrowseEmployees screen is created.
        /// <br/>created(msls.application.BrowseEmployees screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called before changes on an active BrowseEmployees screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployees screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called after the EmployeeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("EmployeeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Search"); }]
    });

    lightSwitchApplication.BrowseMachines.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMachines
        },
        MachineList: {
            _$class: msls.ContentItem,
            _$name: "MachineList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMachines,
            data: lightSwitchApplication.BrowseMachines,
            value: lightSwitchApplication.BrowseMachines
        },
        Machine: {
            _$class: msls.ContentItem,
            _$name: "Machine",
            _$parentName: "MachineList",
            screen: lightSwitchApplication.BrowseMachines,
            data: lightSwitchApplication.BrowseMachines,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMachines,
                _$entry: {
                    elementType: lightSwitchApplication.Machine
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Machine",
            screen: lightSwitchApplication.BrowseMachines,
            data: lightSwitchApplication.Machine,
            value: lightSwitchApplication.Machine
        },
        MachineName: {
            _$class: msls.ContentItem,
            _$name: "MachineName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMachines,
            data: lightSwitchApplication.Machine,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMachines
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMachines, {
        /// <field>
        /// Called when a new BrowseMachines screen is created.
        /// <br/>created(msls.application.BrowseMachines screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMachines],
        /// <field>
        /// Called before changes on an active BrowseMachines screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMachines screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMachines],
        /// <field>
        /// Called after the MachineList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MachineList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMachines().findContentItem("MachineList"); }],
        /// <field>
        /// Called after the Machine content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Machine_postRender: [$element, function () { return new lightSwitchApplication.BrowseMachines().findContentItem("Machine"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMachines().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the MachineName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MachineName_postRender: [$element, function () { return new lightSwitchApplication.BrowseMachines().findContentItem("MachineName"); }]
    });

    lightSwitchApplication.BrowseMenuReceiveProduct.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMenuReceiveProduct
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMenuReceiveProduct,
            data: lightSwitchApplication.BrowseMenuReceiveProduct,
            value: lightSwitchApplication.BrowseMenuReceiveProduct
        },
        ManageReceiveBalance: {
            _$class: msls.ContentItem,
            _$name: "ManageReceiveBalance",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseMenuReceiveProduct
        },
        ManageReceivePurchase: {
            _$class: msls.ContentItem,
            _$name: "ManageReceivePurchase",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseMenuReceiveProduct
        },
        ManageReceiveReturn: {
            _$class: msls.ContentItem,
            _$name: "ManageReceiveReturn",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseMenuReceiveProduct
        },
        ManageReceiveProduce: {
            _$class: msls.ContentItem,
            _$name: "ManageReceiveProduce",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseMenuReceiveProduct
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMenuReceiveProduct
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMenuReceiveProduct, {
        /// <field>
        /// Called when a new BrowseMenuReceiveProduct screen is created.
        /// <br/>created(msls.application.BrowseMenuReceiveProduct screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMenuReceiveProduct],
        /// <field>
        /// Called before changes on an active BrowseMenuReceiveProduct screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMenuReceiveProduct screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMenuReceiveProduct],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseMenuReceiveProduct().findContentItem("Group"); }],
        /// <field>
        /// Called after the ManageReceiveBalance content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageReceiveBalance_postRender: [$element, function () { return new lightSwitchApplication.BrowseMenuReceiveProduct().findContentItem("ManageReceiveBalance"); }],
        /// <field>
        /// Called after the ManageReceivePurchase content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageReceivePurchase_postRender: [$element, function () { return new lightSwitchApplication.BrowseMenuReceiveProduct().findContentItem("ManageReceivePurchase"); }],
        /// <field>
        /// Called after the ManageReceiveReturn content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageReceiveReturn_postRender: [$element, function () { return new lightSwitchApplication.BrowseMenuReceiveProduct().findContentItem("ManageReceiveReturn"); }],
        /// <field>
        /// Called after the ManageReceiveProduce content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageReceiveProduce_postRender: [$element, function () { return new lightSwitchApplication.BrowseMenuReceiveProduct().findContentItem("ManageReceiveProduce"); }]
    });

    lightSwitchApplication.BrowseMenuSales.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMenuSales
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMenuSales,
            data: lightSwitchApplication.BrowseMenuSales,
            value: lightSwitchApplication.BrowseMenuSales
        },
        ManageProductPrice: {
            _$class: msls.ContentItem,
            _$name: "ManageProductPrice",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseMenuSales
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMenuSales
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMenuSales, {
        /// <field>
        /// Called when a new BrowseMenuSales screen is created.
        /// <br/>created(msls.application.BrowseMenuSales screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMenuSales],
        /// <field>
        /// Called before changes on an active BrowseMenuSales screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMenuSales screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMenuSales],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseMenuSales().findContentItem("Group"); }],
        /// <field>
        /// Called after the ManageProductPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageProductPrice_postRender: [$element, function () { return new lightSwitchApplication.BrowseMenuSales().findContentItem("ManageProductPrice"); }]
    });

    lightSwitchApplication.BrowseOrders.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseOrders
        },
        OrderList: {
            _$class: msls.ContentItem,
            _$name: "OrderList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseOrders,
            data: lightSwitchApplication.BrowseOrders,
            value: lightSwitchApplication.BrowseOrders
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "OrderList",
            screen: lightSwitchApplication.BrowseOrders,
            data: lightSwitchApplication.BrowseOrders,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseOrders
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseOrders, {
        /// <field>
        /// Called when a new BrowseOrders screen is created.
        /// <br/>created(msls.application.BrowseOrders screen)
        /// </field>
        created: [lightSwitchApplication.BrowseOrders],
        /// <field>
        /// Called before changes on an active BrowseOrders screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseOrders screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseOrders],
        /// <field>
        /// Called after the OrderList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderList_postRender: [$element, function () { return new lightSwitchApplication.BrowseOrders().findContentItem("OrderList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseOrders().findContentItem("Search"); }]
    });

    lightSwitchApplication.BrowsePackages.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePackages
        },
        PackageList: {
            _$class: msls.ContentItem,
            _$name: "PackageList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePackages,
            data: lightSwitchApplication.BrowsePackages,
            value: lightSwitchApplication.BrowsePackages
        },
        Package: {
            _$class: msls.ContentItem,
            _$name: "Package",
            _$parentName: "PackageList",
            screen: lightSwitchApplication.BrowsePackages,
            data: lightSwitchApplication.BrowsePackages,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowsePackages,
                _$entry: {
                    elementType: lightSwitchApplication.Package
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Package",
            screen: lightSwitchApplication.BrowsePackages,
            data: lightSwitchApplication.Package,
            value: lightSwitchApplication.Package
        },
        PackageName: {
            _$class: msls.ContentItem,
            _$name: "PackageName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePackages,
            data: lightSwitchApplication.Package,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePackages
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowsePackages, {
        /// <field>
        /// Called when a new BrowsePackages screen is created.
        /// <br/>created(msls.application.BrowsePackages screen)
        /// </field>
        created: [lightSwitchApplication.BrowsePackages],
        /// <field>
        /// Called before changes on an active BrowsePackages screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsePackages screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsePackages],
        /// <field>
        /// Called after the PackageList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PackageList_postRender: [$element, function () { return new lightSwitchApplication.BrowsePackages().findContentItem("PackageList"); }],
        /// <field>
        /// Called after the Package content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Package_postRender: [$element, function () { return new lightSwitchApplication.BrowsePackages().findContentItem("Package"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePackages().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the PackageName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PackageName_postRender: [$element, function () { return new lightSwitchApplication.BrowsePackages().findContentItem("PackageName"); }]
    });

    lightSwitchApplication.BrowsePaymentTypes.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePaymentTypes
        },
        PaymentTypeList: {
            _$class: msls.ContentItem,
            _$name: "PaymentTypeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePaymentTypes,
            data: lightSwitchApplication.BrowsePaymentTypes,
            value: lightSwitchApplication.BrowsePaymentTypes
        },
        PaymentType: {
            _$class: msls.ContentItem,
            _$name: "PaymentType",
            _$parentName: "PaymentTypeList",
            screen: lightSwitchApplication.BrowsePaymentTypes,
            data: lightSwitchApplication.BrowsePaymentTypes,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowsePaymentTypes,
                _$entry: {
                    elementType: lightSwitchApplication.PaymentType
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "PaymentType",
            screen: lightSwitchApplication.BrowsePaymentTypes,
            data: lightSwitchApplication.PaymentType,
            value: lightSwitchApplication.PaymentType
        },
        PaymentTypeName: {
            _$class: msls.ContentItem,
            _$name: "PaymentTypeName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePaymentTypes,
            data: lightSwitchApplication.PaymentType,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePaymentTypes
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowsePaymentTypes, {
        /// <field>
        /// Called when a new BrowsePaymentTypes screen is created.
        /// <br/>created(msls.application.BrowsePaymentTypes screen)
        /// </field>
        created: [lightSwitchApplication.BrowsePaymentTypes],
        /// <field>
        /// Called before changes on an active BrowsePaymentTypes screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsePaymentTypes screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsePaymentTypes],
        /// <field>
        /// Called after the PaymentTypeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaymentTypeList_postRender: [$element, function () { return new lightSwitchApplication.BrowsePaymentTypes().findContentItem("PaymentTypeList"); }],
        /// <field>
        /// Called after the PaymentType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaymentType_postRender: [$element, function () { return new lightSwitchApplication.BrowsePaymentTypes().findContentItem("PaymentType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePaymentTypes().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the PaymentTypeName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaymentTypeName_postRender: [$element, function () { return new lightSwitchApplication.BrowsePaymentTypes().findContentItem("PaymentTypeName"); }]
    });

    lightSwitchApplication.BrowsePO.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePO
        },
        PurchaseOrderList: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePO,
            data: lightSwitchApplication.BrowsePO,
            value: lightSwitchApplication.BrowsePO
        },
        SearchParameter: {
            _$class: msls.ContentItem,
            _$name: "SearchParameter",
            _$parentName: "PurchaseOrderList",
            screen: lightSwitchApplication.BrowsePO,
            data: lightSwitchApplication.BrowsePO,
            value: String
        },
        PurchaseOrder: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrder",
            _$parentName: "PurchaseOrderList",
            screen: lightSwitchApplication.BrowsePO,
            data: lightSwitchApplication.BrowsePO,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowsePO,
                _$entry: {
                    elementType: lightSwitchApplication.PurchaseOrder
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "PurchaseOrder",
            screen: lightSwitchApplication.BrowsePO,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        PurchaseOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePO,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        PurchaseOrderDate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePO,
            data: lightSwitchApplication.PurchaseOrder,
            value: Date
        },
        SupplierName: {
            _$class: msls.ContentItem,
            _$name: "SupplierName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePO,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePO,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        PurchaseOrderStatus: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePO,
            data: lightSwitchApplication.PurchaseOrder,
            value: Boolean
        },
        POStatusDescription: {
            _$class: msls.ContentItem,
            _$name: "POStatusDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePO,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePO
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowsePO, {
        /// <field>
        /// Called when a new BrowsePO screen is created.
        /// <br/>created(msls.application.BrowsePO screen)
        /// </field>
        created: [lightSwitchApplication.BrowsePO],
        /// <field>
        /// Called before changes on an active BrowsePO screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsePO screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsePO],
        /// <field>
        /// Called to determine if the PurchaseOrder_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.BrowsePO screen)
        /// </field>
        PurchaseOrder_ItemTap_canExecute: [lightSwitchApplication.BrowsePO],
        /// <field>
        /// Called to execute the PurchaseOrder_ItemTap method.
        /// <br/>execute(msls.application.BrowsePO screen)
        /// </field>
        PurchaseOrder_ItemTap_execute: [lightSwitchApplication.BrowsePO],
        /// <field>
        /// Called to determine if the ShowAddEditPO_Tap method can be executed.
        /// <br/>canExecute(msls.application.BrowsePO screen)
        /// </field>
        ShowAddEditPO_Tap_canExecute: [lightSwitchApplication.BrowsePO],
        /// <field>
        /// Called to execute the ShowAddEditPO_Tap method.
        /// <br/>execute(msls.application.BrowsePO screen)
        /// </field>
        ShowAddEditPO_Tap_execute: [lightSwitchApplication.BrowsePO],
        /// <field>
        /// Called after the PurchaseOrderList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderList_postRender: [$element, function () { return new lightSwitchApplication.BrowsePO().findContentItem("PurchaseOrderList"); }],
        /// <field>
        /// Called after the SearchParameter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchParameter_postRender: [$element, function () { return new lightSwitchApplication.BrowsePO().findContentItem("SearchParameter"); }],
        /// <field>
        /// Called after the PurchaseOrder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrder_postRender: [$element, function () { return new lightSwitchApplication.BrowsePO().findContentItem("PurchaseOrder"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePO().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the PurchaseOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowsePO().findContentItem("PurchaseOrderNumber"); }],
        /// <field>
        /// Called after the PurchaseOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePO().findContentItem("PurchaseOrderDate"); }],
        /// <field>
        /// Called after the SupplierName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierName_postRender: [$element, function () { return new lightSwitchApplication.BrowsePO().findContentItem("SupplierName"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowsePO().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the PurchaseOrderStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowsePO().findContentItem("PurchaseOrderStatus"); }],
        /// <field>
        /// Called after the POStatusDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        POStatusDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowsePO().findContentItem("POStatusDescription"); }]
    });

    lightSwitchApplication.BrowsePOReceive.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePOReceive
        },
        PurchaseOrderList: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePOReceive,
            data: lightSwitchApplication.BrowsePOReceive,
            value: lightSwitchApplication.BrowsePOReceive
        },
        PurchaseOrder: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrder",
            _$parentName: "PurchaseOrderList",
            screen: lightSwitchApplication.BrowsePOReceive,
            data: lightSwitchApplication.BrowsePOReceive,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowsePOReceive,
                _$entry: {
                    elementType: lightSwitchApplication.PurchaseOrder
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "PurchaseOrder",
            screen: lightSwitchApplication.BrowsePOReceive,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        PurchaseOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePOReceive,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        PurchaseOrderDate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePOReceive,
            data: lightSwitchApplication.PurchaseOrder,
            value: Date
        },
        SupplierName: {
            _$class: msls.ContentItem,
            _$name: "SupplierName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePOReceive,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePOReceive,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        PurchaseOrderStatus: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePOReceive,
            data: lightSwitchApplication.PurchaseOrder,
            value: Boolean
        },
        POStatusDescription: {
            _$class: msls.ContentItem,
            _$name: "POStatusDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePOReceive,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePOReceive
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowsePOReceive, {
        /// <field>
        /// Called when a new BrowsePOReceive screen is created.
        /// <br/>created(msls.application.BrowsePOReceive screen)
        /// </field>
        created: [lightSwitchApplication.BrowsePOReceive],
        /// <field>
        /// Called before changes on an active BrowsePOReceive screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsePOReceive screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsePOReceive],
        /// <field>
        /// Called to determine if the PurchaseOrder_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.BrowsePOReceive screen)
        /// </field>
        PurchaseOrder_ItemTap_canExecute: [lightSwitchApplication.BrowsePOReceive],
        /// <field>
        /// Called to execute the PurchaseOrder_ItemTap method.
        /// <br/>execute(msls.application.BrowsePOReceive screen)
        /// </field>
        PurchaseOrder_ItemTap_execute: [lightSwitchApplication.BrowsePOReceive],
        /// <field>
        /// Called after the PurchaseOrderList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderList_postRender: [$element, function () { return new lightSwitchApplication.BrowsePOReceive().findContentItem("PurchaseOrderList"); }],
        /// <field>
        /// Called after the PurchaseOrder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrder_postRender: [$element, function () { return new lightSwitchApplication.BrowsePOReceive().findContentItem("PurchaseOrder"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePOReceive().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the PurchaseOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowsePOReceive().findContentItem("PurchaseOrderNumber"); }],
        /// <field>
        /// Called after the PurchaseOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePOReceive().findContentItem("PurchaseOrderDate"); }],
        /// <field>
        /// Called after the SupplierName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierName_postRender: [$element, function () { return new lightSwitchApplication.BrowsePOReceive().findContentItem("SupplierName"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowsePOReceive().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the PurchaseOrderStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowsePOReceive().findContentItem("PurchaseOrderStatus"); }],
        /// <field>
        /// Called after the POStatusDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        POStatusDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowsePOReceive().findContentItem("POStatusDescription"); }]
    });

    lightSwitchApplication.BrowseProductCategories.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProductCategories
        },
        ProductCategoryList: {
            _$class: msls.ContentItem,
            _$name: "ProductCategoryList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProductCategories,
            data: lightSwitchApplication.BrowseProductCategories,
            value: lightSwitchApplication.BrowseProductCategories
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ProductCategoryList",
            screen: lightSwitchApplication.BrowseProductCategories,
            data: lightSwitchApplication.BrowseProductCategories,
            value: String
        },
        ProductCategory: {
            _$class: msls.ContentItem,
            _$name: "ProductCategory",
            _$parentName: "ProductCategoryList",
            screen: lightSwitchApplication.BrowseProductCategories,
            data: lightSwitchApplication.BrowseProductCategories,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProductCategories,
                _$entry: {
                    elementType: lightSwitchApplication.ProductCategory
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ProductCategory",
            screen: lightSwitchApplication.BrowseProductCategories,
            data: lightSwitchApplication.ProductCategory,
            value: lightSwitchApplication.ProductCategory
        },
        Category: {
            _$class: msls.ContentItem,
            _$name: "Category",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProductCategories,
            data: lightSwitchApplication.ProductCategory,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProductCategories
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseProductCategories, {
        /// <field>
        /// Called when a new BrowseProductCategories screen is created.
        /// <br/>created(msls.application.BrowseProductCategories screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProductCategories],
        /// <field>
        /// Called before changes on an active BrowseProductCategories screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseProductCategories screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProductCategories],
        /// <field>
        /// Called after the ProductCategoryList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCategoryList_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductCategories().findContentItem("ProductCategoryList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductCategories().findContentItem("Search"); }],
        /// <field>
        /// Called after the ProductCategory content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCategory_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductCategories().findContentItem("ProductCategory"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductCategories().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Category content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Category_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductCategories().findContentItem("Category"); }]
    });

    lightSwitchApplication.BrowseProductGroups.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProductGroups
        },
        ProductGroupList: {
            _$class: msls.ContentItem,
            _$name: "ProductGroupList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProductGroups,
            data: lightSwitchApplication.BrowseProductGroups,
            value: lightSwitchApplication.BrowseProductGroups
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ProductGroupList",
            screen: lightSwitchApplication.BrowseProductGroups,
            data: lightSwitchApplication.BrowseProductGroups,
            value: String
        },
        ProductGroup: {
            _$class: msls.ContentItem,
            _$name: "ProductGroup",
            _$parentName: "ProductGroupList",
            screen: lightSwitchApplication.BrowseProductGroups,
            data: lightSwitchApplication.BrowseProductGroups,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProductGroups,
                _$entry: {
                    elementType: lightSwitchApplication.ProductGroup
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ProductGroup",
            screen: lightSwitchApplication.BrowseProductGroups,
            data: lightSwitchApplication.ProductGroup,
            value: lightSwitchApplication.ProductGroup
        },
        ProductGroupName: {
            _$class: msls.ContentItem,
            _$name: "ProductGroupName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProductGroups,
            data: lightSwitchApplication.ProductGroup,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProductGroups
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseProductGroups, {
        /// <field>
        /// Called when a new BrowseProductGroups screen is created.
        /// <br/>created(msls.application.BrowseProductGroups screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProductGroups],
        /// <field>
        /// Called before changes on an active BrowseProductGroups screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseProductGroups screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProductGroups],
        /// <field>
        /// Called after the ProductGroupList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductGroupList_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductGroups().findContentItem("ProductGroupList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductGroups().findContentItem("Search"); }],
        /// <field>
        /// Called after the ProductGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductGroup_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductGroups().findContentItem("ProductGroup"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductGroups().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ProductGroupName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductGroupName_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductGroups().findContentItem("ProductGroupName"); }]
    });

    lightSwitchApplication.BrowseLocations.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseLocations
        },
        ProductLocationList: {
            _$class: msls.ContentItem,
            _$name: "ProductLocationList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseLocations,
            data: lightSwitchApplication.BrowseLocations,
            value: lightSwitchApplication.BrowseLocations
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ProductLocationList",
            screen: lightSwitchApplication.BrowseLocations,
            data: lightSwitchApplication.BrowseLocations,
            value: String
        },
        ProductLocation: {
            _$class: msls.ContentItem,
            _$name: "ProductLocation",
            _$parentName: "ProductLocationList",
            screen: lightSwitchApplication.BrowseLocations,
            data: lightSwitchApplication.BrowseLocations,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseLocations,
                _$entry: {
                    elementType: lightSwitchApplication.Location
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ProductLocation",
            screen: lightSwitchApplication.BrowseLocations,
            data: lightSwitchApplication.Location,
            value: lightSwitchApplication.Location
        },
        LocationName: {
            _$class: msls.ContentItem,
            _$name: "LocationName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseLocations,
            data: lightSwitchApplication.Location,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseLocations
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseLocations, {
        /// <field>
        /// Called when a new BrowseLocations screen is created.
        /// <br/>created(msls.application.BrowseLocations screen)
        /// </field>
        created: [lightSwitchApplication.BrowseLocations],
        /// <field>
        /// Called before changes on an active BrowseLocations screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseLocations screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseLocations],
        /// <field>
        /// Called after the ProductLocationList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductLocationList_postRender: [$element, function () { return new lightSwitchApplication.BrowseLocations().findContentItem("ProductLocationList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseLocations().findContentItem("Search"); }],
        /// <field>
        /// Called after the ProductLocation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductLocation_postRender: [$element, function () { return new lightSwitchApplication.BrowseLocations().findContentItem("ProductLocation"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseLocations().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the LocationName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationName_postRender: [$element, function () { return new lightSwitchApplication.BrowseLocations().findContentItem("LocationName"); }]
    });

    lightSwitchApplication.BrowseProductPricings.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProductPricings
        },
        StockOnHandList: {
            _$class: msls.ContentItem,
            _$name: "StockOnHandList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProductPricings,
            data: lightSwitchApplication.BrowseProductPricings,
            value: lightSwitchApplication.BrowseProductPricings
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "StockOnHandList",
            screen: lightSwitchApplication.BrowseProductPricings,
            data: lightSwitchApplication.BrowseProductPricings,
            value: String
        },
        StockOnHand: {
            _$class: msls.ContentItem,
            _$name: "StockOnHand",
            _$parentName: "StockOnHandList",
            screen: lightSwitchApplication.BrowseProductPricings,
            data: lightSwitchApplication.BrowseProductPricings,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProductPricings,
                _$entry: {
                    elementType: lightSwitchApplication.StockOnHand
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "StockOnHand",
            screen: lightSwitchApplication.BrowseProductPricings,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.StockOnHand
        },
        Location: {
            _$class: msls.ContentItem,
            _$name: "Location",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProductPricings,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.Location
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProductPricings,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.Product
        },
        LotNo: {
            _$class: msls.ContentItem,
            _$name: "LotNo",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProductPricings,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        QuantityOnHand: {
            _$class: msls.ContentItem,
            _$name: "QuantityOnHand",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProductPricings,
            data: lightSwitchApplication.StockOnHand,
            value: Number
        },
        SellingPrice: {
            _$class: msls.ContentItem,
            _$name: "SellingPrice",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProductPricings,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        CostPrice: {
            _$class: msls.ContentItem,
            _$name: "CostPrice",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProductPricings,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        IsAvailableForSale: {
            _$class: msls.ContentItem,
            _$name: "IsAvailableForSale",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProductPricings,
            data: lightSwitchApplication.StockOnHand,
            value: Boolean
        },
        AvailableForSaleDescription: {
            _$class: msls.ContentItem,
            _$name: "AvailableForSaleDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProductPricings,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProductPricings
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseProductPricings, {
        /// <field>
        /// Called when a new BrowseProductPricings screen is created.
        /// <br/>created(msls.application.BrowseProductPricings screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProductPricings],
        /// <field>
        /// Called before changes on an active BrowseProductPricings screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseProductPricings screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProductPricings],
        /// <field>
        /// Called to determine if the StockOnHand_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.BrowseProductPricings screen)
        /// </field>
        StockOnHand_ItemTap_canExecute: [lightSwitchApplication.BrowseProductPricings],
        /// <field>
        /// Called to execute the StockOnHand_ItemTap method.
        /// <br/>execute(msls.application.BrowseProductPricings screen)
        /// </field>
        StockOnHand_ItemTap_execute: [lightSwitchApplication.BrowseProductPricings],
        /// <field>
        /// Called after the StockOnHandList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockOnHandList_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductPricings().findContentItem("StockOnHandList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductPricings().findContentItem("Search"); }],
        /// <field>
        /// Called after the StockOnHand content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockOnHand_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductPricings().findContentItem("StockOnHand"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductPricings().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductPricings().findContentItem("Location"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductPricings().findContentItem("Product"); }],
        /// <field>
        /// Called after the LotNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductPricings().findContentItem("LotNo"); }],
        /// <field>
        /// Called after the QuantityOnHand content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QuantityOnHand_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductPricings().findContentItem("QuantityOnHand"); }],
        /// <field>
        /// Called after the SellingPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SellingPrice_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductPricings().findContentItem("SellingPrice"); }],
        /// <field>
        /// Called after the CostPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CostPrice_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductPricings().findContentItem("CostPrice"); }],
        /// <field>
        /// Called after the IsAvailableForSale content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsAvailableForSale_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductPricings().findContentItem("IsAvailableForSale"); }],
        /// <field>
        /// Called after the AvailableForSaleDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AvailableForSaleDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductPricings().findContentItem("AvailableForSaleDescription"); }]
    });

    lightSwitchApplication.BrowseProductReceiveBalanceForwards.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProductReceiveBalanceForwards
        },
        Manage: {
            _$class: msls.ContentItem,
            _$name: "Manage",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProductReceiveBalanceForwards,
            data: lightSwitchApplication.BrowseProductReceiveBalanceForwards,
            value: lightSwitchApplication.BrowseProductReceiveBalanceForwards
        },
        ProductReceive: {
            _$class: msls.ContentItem,
            _$name: "ProductReceive",
            _$parentName: "Manage",
            screen: lightSwitchApplication.BrowseProductReceiveBalanceForwards,
            data: lightSwitchApplication.BrowseProductReceiveBalanceForwards,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProductReceiveBalanceForwards,
                _$entry: {
                    elementType: lightSwitchApplication.ProductReceiveBalanceForward
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ProductReceive",
            screen: lightSwitchApplication.BrowseProductReceiveBalanceForwards,
            data: lightSwitchApplication.ProductReceiveBalanceForward,
            value: lightSwitchApplication.ProductReceiveBalanceForward
        },
        DocumentNo: {
            _$class: msls.ContentItem,
            _$name: "DocumentNo",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProductReceiveBalanceForwards,
            data: lightSwitchApplication.ProductReceiveBalanceForward,
            value: String
        },
        ReceiveDate: {
            _$class: msls.ContentItem,
            _$name: "ReceiveDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProductReceiveBalanceForwards,
            data: lightSwitchApplication.ProductReceiveBalanceForward,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProductReceiveBalanceForwards,
            data: lightSwitchApplication.ProductReceiveBalanceForward,
            value: String
        },
        Remarks: {
            _$class: msls.ContentItem,
            _$name: "Remarks",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProductReceiveBalanceForwards,
            data: lightSwitchApplication.ProductReceiveBalanceForward,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProductReceiveBalanceForwards
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseProductReceiveBalanceForwards, {
        /// <field>
        /// Called when a new BrowseProductReceiveBalanceForwards screen is created.
        /// <br/>created(msls.application.BrowseProductReceiveBalanceForwards screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProductReceiveBalanceForwards],
        /// <field>
        /// Called before changes on an active BrowseProductReceiveBalanceForwards screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseProductReceiveBalanceForwards screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProductReceiveBalanceForwards],
        /// <field>
        /// Called after the Manage content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Manage_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductReceiveBalanceForwards().findContentItem("Manage"); }],
        /// <field>
        /// Called after the ProductReceive content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductReceive_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductReceiveBalanceForwards().findContentItem("ProductReceive"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductReceiveBalanceForwards().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the DocumentNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentNo_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductReceiveBalanceForwards().findContentItem("DocumentNo"); }],
        /// <field>
        /// Called after the ReceiveDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductReceiveBalanceForwards().findContentItem("ReceiveDate"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductReceiveBalanceForwards().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Remarks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remarks_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductReceiveBalanceForwards().findContentItem("Remarks"); }]
    });

    lightSwitchApplication.BrowseProducts.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProducts
        },
        ProductList: {
            _$class: msls.ContentItem,
            _$name: "ProductList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.BrowseProducts,
            value: lightSwitchApplication.BrowseProducts
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ProductList",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.BrowseProducts,
            value: String
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "ProductList",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.BrowseProducts,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProducts,
                _$entry: {
                    elementType: lightSwitchApplication.Product
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Product",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        ProductCategory: {
            _$class: msls.ContentItem,
            _$name: "ProductCategory",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.ProductCategory
        },
        ProductGroup: {
            _$class: msls.ContentItem,
            _$name: "ProductGroup",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.ProductGroup
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.Product,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.Product,
            value: String
        },
        ProductLocation: {
            _$class: msls.ContentItem,
            _$name: "ProductLocation",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Location
        },
        UnitOfMeasure: {
            _$class: msls.ContentItem,
            _$name: "UnitOfMeasure",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.UnitOfMeasure
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.BrowseProducts,
            value: lightSwitchApplication.BrowseProducts
        },
        ProductGroups: {
            _$class: msls.ContentItem,
            _$name: "ProductGroups",
            _$parentName: "Group1",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.BrowseProducts,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProducts,
                _$entry: {
                    elementType: lightSwitchApplication.ProductGroup
                }
            }
        },
        ProductGroupsTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProductGroupsTemplate",
            _$parentName: "ProductGroups",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.ProductGroup,
            value: lightSwitchApplication.ProductGroup
        },
        ProductGroupName: {
            _$class: msls.ContentItem,
            _$name: "ProductGroupName",
            _$parentName: "ProductGroupsTemplate",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.ProductGroup,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.BrowseProducts,
            value: lightSwitchApplication.BrowseProducts
        },
        ProductCategories: {
            _$class: msls.ContentItem,
            _$name: "ProductCategories",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.BrowseProducts,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProducts,
                _$entry: {
                    elementType: lightSwitchApplication.ProductCategory
                }
            }
        },
        ProductCategoriesTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProductCategoriesTemplate",
            _$parentName: "ProductCategories",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.ProductCategory,
            value: lightSwitchApplication.ProductCategory
        },
        Category: {
            _$class: msls.ContentItem,
            _$name: "Category",
            _$parentName: "ProductCategoriesTemplate",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.ProductCategory,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProducts
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseProducts, {
        /// <field>
        /// Called when a new BrowseProducts screen is created.
        /// <br/>created(msls.application.BrowseProducts screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProducts],
        /// <field>
        /// Called before changes on an active BrowseProducts screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseProducts screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProducts],
        /// <field>
        /// Called after the ProductList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductList_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("ProductList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("Search"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("Product"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ProductCategory content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCategory_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("ProductCategory"); }],
        /// <field>
        /// Called after the ProductGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductGroup_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("ProductGroup"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the ProductLocation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductLocation_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("ProductLocation"); }],
        /// <field>
        /// Called after the UnitOfMeasure content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitOfMeasure_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("UnitOfMeasure"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("Group1"); }],
        /// <field>
        /// Called after the ProductGroups content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductGroups_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("ProductGroups"); }],
        /// <field>
        /// Called after the ProductGroupsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductGroupsTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("ProductGroupsTemplate"); }],
        /// <field>
        /// Called after the ProductGroupName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductGroupName_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("ProductGroupName"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("Group"); }],
        /// <field>
        /// Called after the ProductCategories content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCategories_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("ProductCategories"); }],
        /// <field>
        /// Called after the ProductCategoriesTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCategoriesTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("ProductCategoriesTemplate"); }],
        /// <field>
        /// Called after the Category content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Category_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("Category"); }]
    });

    lightSwitchApplication.BrowseProducts_bk.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProducts_bk
        },
        ProductList: {
            _$class: msls.ContentItem,
            _$name: "ProductList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProducts_bk,
            data: lightSwitchApplication.BrowseProducts_bk,
            value: lightSwitchApplication.BrowseProducts_bk
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ProductList",
            screen: lightSwitchApplication.BrowseProducts_bk,
            data: lightSwitchApplication.BrowseProducts_bk,
            value: String
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "ProductList",
            screen: lightSwitchApplication.BrowseProducts_bk,
            data: lightSwitchApplication.BrowseProducts_bk,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProducts_bk,
                _$entry: {
                    elementType: lightSwitchApplication.Product
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Product",
            screen: lightSwitchApplication.BrowseProducts_bk,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts_bk,
            data: lightSwitchApplication.Product,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts_bk,
            data: lightSwitchApplication.Product,
            value: String
        },
        ProductCategory: {
            _$class: msls.ContentItem,
            _$name: "ProductCategory",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts_bk,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.ProductCategory
        },
        ProductGroup: {
            _$class: msls.ContentItem,
            _$name: "ProductGroup",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts_bk,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.ProductGroup
        },
        ProductLocation: {
            _$class: msls.ContentItem,
            _$name: "ProductLocation",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts_bk,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Location
        },
        UnitOfMeasure: {
            _$class: msls.ContentItem,
            _$name: "UnitOfMeasure",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts_bk,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.UnitOfMeasure
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts_bk,
            data: lightSwitchApplication.Product,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProducts_bk
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseProducts_bk, {
        /// <field>
        /// Called when a new BrowseProducts_bk screen is created.
        /// <br/>created(msls.application.BrowseProducts_bk screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProducts_bk],
        /// <field>
        /// Called before changes on an active BrowseProducts_bk screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseProducts_bk screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProducts_bk],
        /// <field>
        /// Called after the ProductList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductList_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts_bk().findContentItem("ProductList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts_bk().findContentItem("Search"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts_bk().findContentItem("Product"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts_bk().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts_bk().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts_bk().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the ProductCategory content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCategory_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts_bk().findContentItem("ProductCategory"); }],
        /// <field>
        /// Called after the ProductGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductGroup_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts_bk().findContentItem("ProductGroup"); }],
        /// <field>
        /// Called after the ProductLocation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductLocation_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts_bk().findContentItem("ProductLocation"); }],
        /// <field>
        /// Called after the UnitOfMeasure content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitOfMeasure_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts_bk().findContentItem("UnitOfMeasure"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts_bk().findContentItem("Discontinued"); }]
    });

    lightSwitchApplication.BrowsePurchaseOrderNotClose.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose
        },
        PurchaseOrderList: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            value: lightSwitchApplication.BrowsePurchaseOrderNotClose
        },
        PurchaseOrder: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrder",
            _$parentName: "PurchaseOrderList",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
                _$entry: {
                    elementType: lightSwitchApplication.PurchaseOrder
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "PurchaseOrder",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        PurchaseOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        PurchaseOrderDate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.PurchaseOrder,
            value: Date
        },
        PurchaseOrderStatus: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.PurchaseOrder,
            value: Boolean
        },
        Supplier: {
            _$class: msls.ContentItem,
            _$name: "Supplier",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.Supplier
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.PurchaseOrder,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.PurchaseOrder,
            value: Date
        },
        PurchaseOrderDetailByPO: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetailByPO",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            value: lightSwitchApplication.BrowsePurchaseOrderNotClose
        },
        PurchaseOrderDetailByPOId: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetailByPOId",
            _$parentName: "PurchaseOrderDetailByPO",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
                _$entry: {
                    elementType: lightSwitchApplication.PurchaseOrderDetail
                }
            }
        },
        PurchaseOrderDetailByPOIdTemplate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetailByPOIdTemplate",
            _$parentName: "PurchaseOrderDetailByPOId",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        RequireDate: {
            _$class: msls.ContentItem,
            _$name: "RequireDate",
            _$parentName: "PurchaseOrderDetailByPOIdTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        ProductName1: {
            _$class: msls.ContentItem,
            _$name: "ProductName1",
            _$parentName: "PurchaseOrderDetailByPOIdTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        RequireQuantity: {
            _$class: msls.ContentItem,
            _$name: "RequireQuantity",
            _$parentName: "PurchaseOrderDetailByPOIdTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        UOMName1: {
            _$class: msls.ContentItem,
            _$name: "UOMName1",
            _$parentName: "PurchaseOrderDetailByPOIdTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        PurchaseOrder1: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrder1",
            _$parentName: "PurchaseOrderDetailByPOIdTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrder
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "PurchaseOrderDetailByPO",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            value: lightSwitchApplication.BrowsePurchaseOrderNotClose
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            value: lightSwitchApplication.BrowsePurchaseOrderNotClose
        },
        PurchaseOrderDetailByPOId_selectedItem_RequireDate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetailByPOId_selectedItem_RequireDate",
            _$parentName: "Group2",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            value: Date
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "Group2",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            value: String
        },
        PurchaseOrderDetailByPOId_selectedItem_RequireQuantity: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetailByPOId_selectedItem_RequireQuantity",
            _$parentName: "Group2",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            value: Number
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "Group2",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            value: String
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            value: lightSwitchApplication.BrowsePurchaseOrderNotClose
        },
        ReceiveFromPO: {
            _$class: msls.ContentItem,
            _$name: "ReceiveFromPO",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            data: lightSwitchApplication.BrowsePurchaseOrderNotClose,
            value: lightSwitchApplication.BrowsePurchaseOrderNotClose
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePurchaseOrderNotClose
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowsePurchaseOrderNotClose, {
        /// <field>
        /// Called when a new BrowsePurchaseOrderNotClose screen is created.
        /// <br/>created(msls.application.BrowsePurchaseOrderNotClose screen)
        /// </field>
        created: [lightSwitchApplication.BrowsePurchaseOrderNotClose],
        /// <field>
        /// Called before changes on an active BrowsePurchaseOrderNotClose screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsePurchaseOrderNotClose screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsePurchaseOrderNotClose],
        /// <field>
        /// Called after the PurchaseOrderList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderList_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("PurchaseOrderList"); }],
        /// <field>
        /// Called after the PurchaseOrder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrder_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("PurchaseOrder"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the PurchaseOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("PurchaseOrderNumber"); }],
        /// <field>
        /// Called after the PurchaseOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("PurchaseOrderDate"); }],
        /// <field>
        /// Called after the PurchaseOrderStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("PurchaseOrderStatus"); }],
        /// <field>
        /// Called after the Supplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Supplier_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("Supplier"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("Modified"); }],
        /// <field>
        /// Called after the PurchaseOrderDetailByPO content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetailByPO_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("PurchaseOrderDetailByPO"); }],
        /// <field>
        /// Called after the PurchaseOrderDetailByPOId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetailByPOId_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("PurchaseOrderDetailByPOId"); }],
        /// <field>
        /// Called after the PurchaseOrderDetailByPOIdTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetailByPOIdTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("PurchaseOrderDetailByPOIdTemplate"); }],
        /// <field>
        /// Called after the RequireDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireDate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("RequireDate"); }],
        /// <field>
        /// Called after the ProductName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName1_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("ProductName1"); }],
        /// <field>
        /// Called after the RequireQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireQuantity_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("RequireQuantity"); }],
        /// <field>
        /// Called after the UOMName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName1_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("UOMName1"); }],
        /// <field>
        /// Called after the PurchaseOrder1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrder1_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("PurchaseOrder1"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("Group"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("Group2"); }],
        /// <field>
        /// Called after the PurchaseOrderDetailByPOId_selectedItem_RequireDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetailByPOId_selectedItem_RequireDate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("PurchaseOrderDetailByPOId_selectedItem_RequireDate"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the PurchaseOrderDetailByPOId_selectedItem_RequireQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetailByPOId_selectedItem_RequireQuantity_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("PurchaseOrderDetailByPOId_selectedItem_RequireQuantity"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("Group1"); }],
        /// <field>
        /// Called after the ReceiveFromPO content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveFromPO_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrderNotClose().findContentItem("ReceiveFromPO"); }]
    });

    lightSwitchApplication.BrowsePurchaseOrders.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePurchaseOrders
        },
        PurchaseOrderList: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePurchaseOrders,
            data: lightSwitchApplication.BrowsePurchaseOrders,
            value: lightSwitchApplication.BrowsePurchaseOrders
        },
        PurchaseOrder: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrder",
            _$parentName: "PurchaseOrderList",
            screen: lightSwitchApplication.BrowsePurchaseOrders,
            data: lightSwitchApplication.BrowsePurchaseOrders,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowsePurchaseOrders,
                _$entry: {
                    elementType: lightSwitchApplication.PurchaseOrder
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "PurchaseOrder",
            screen: lightSwitchApplication.BrowsePurchaseOrders,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        PurchaseOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrders,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        PurchaseOrderDate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrders,
            data: lightSwitchApplication.PurchaseOrder,
            value: Date
        },
        SupplierName: {
            _$class: msls.ContentItem,
            _$name: "SupplierName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrders,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        POStatusDescription: {
            _$class: msls.ContentItem,
            _$name: "POStatusDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrders,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePurchaseOrders
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowsePurchaseOrders, {
        /// <field>
        /// Called when a new BrowsePurchaseOrders screen is created.
        /// <br/>created(msls.application.BrowsePurchaseOrders screen)
        /// </field>
        created: [lightSwitchApplication.BrowsePurchaseOrders],
        /// <field>
        /// Called before changes on an active BrowsePurchaseOrders screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsePurchaseOrders screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsePurchaseOrders],
        /// <field>
        /// Called to determine if the AddPurchaseOrder method can be executed.
        /// <br/>canExecute(msls.application.BrowsePurchaseOrders screen)
        /// </field>
        AddPurchaseOrder_canExecute: [lightSwitchApplication.BrowsePurchaseOrders],
        /// <field>
        /// Called to execute the AddPurchaseOrder method.
        /// <br/>execute(msls.application.BrowsePurchaseOrders screen)
        /// </field>
        AddPurchaseOrder_execute: [lightSwitchApplication.BrowsePurchaseOrders],
        /// <field>
        /// Called after the PurchaseOrderList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderList_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders().findContentItem("PurchaseOrderList"); }],
        /// <field>
        /// Called after the PurchaseOrder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrder_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders().findContentItem("PurchaseOrder"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the PurchaseOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders().findContentItem("PurchaseOrderNumber"); }],
        /// <field>
        /// Called after the PurchaseOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders().findContentItem("PurchaseOrderDate"); }],
        /// <field>
        /// Called after the SupplierName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierName_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders().findContentItem("SupplierName"); }],
        /// <field>
        /// Called after the POStatusDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        POStatusDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders().findContentItem("POStatusDescription"); }]
    });

    lightSwitchApplication.BrowsePurchaseOrders_Old.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePurchaseOrders_Old
        },
        PurchaseOrderList: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePurchaseOrders_Old,
            data: lightSwitchApplication.BrowsePurchaseOrders_Old,
            value: lightSwitchApplication.BrowsePurchaseOrders_Old
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "PurchaseOrderList",
            screen: lightSwitchApplication.BrowsePurchaseOrders_Old,
            data: lightSwitchApplication.BrowsePurchaseOrders_Old,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePurchaseOrders_Old
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowsePurchaseOrders_Old, {
        /// <field>
        /// Called when a new BrowsePurchaseOrders_Old screen is created.
        /// <br/>created(msls.application.BrowsePurchaseOrders_Old screen)
        /// </field>
        created: [lightSwitchApplication.BrowsePurchaseOrders_Old],
        /// <field>
        /// Called before changes on an active BrowsePurchaseOrders_Old screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsePurchaseOrders_Old screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsePurchaseOrders_Old],
        /// <field>
        /// Called after the PurchaseOrderList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderList_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders_Old().findContentItem("PurchaseOrderList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders_Old().findContentItem("Search"); }]
    });

    lightSwitchApplication.BrowseSaleOrders.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseSaleOrders
        },
        SaleOrderList: {
            _$class: msls.ContentItem,
            _$name: "SaleOrderList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseSaleOrders,
            data: lightSwitchApplication.BrowseSaleOrders,
            value: lightSwitchApplication.BrowseSaleOrders
        },
        SearchSO: {
            _$class: msls.ContentItem,
            _$name: "SearchSO",
            _$parentName: "SaleOrderList",
            screen: lightSwitchApplication.BrowseSaleOrders,
            data: lightSwitchApplication.BrowseSaleOrders,
            value: String
        },
        SaleOrder: {
            _$class: msls.ContentItem,
            _$name: "SaleOrder",
            _$parentName: "SaleOrderList",
            screen: lightSwitchApplication.BrowseSaleOrders,
            data: lightSwitchApplication.BrowseSaleOrders,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseSaleOrders,
                _$entry: {
                    elementType: lightSwitchApplication.SaleOrder
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "SaleOrder",
            screen: lightSwitchApplication.BrowseSaleOrders,
            data: lightSwitchApplication.SaleOrder,
            value: lightSwitchApplication.SaleOrder
        },
        DocumentNo: {
            _$class: msls.ContentItem,
            _$name: "DocumentNo",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSaleOrders,
            data: lightSwitchApplication.SaleOrder,
            value: String
        },
        SaleOrderDate: {
            _$class: msls.ContentItem,
            _$name: "SaleOrderDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSaleOrders,
            data: lightSwitchApplication.SaleOrder,
            value: Date
        },
        ReferenceNo: {
            _$class: msls.ContentItem,
            _$name: "ReferenceNo",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSaleOrders,
            data: lightSwitchApplication.SaleOrder,
            value: String
        },
        CustomerName: {
            _$class: msls.ContentItem,
            _$name: "CustomerName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSaleOrders,
            data: lightSwitchApplication.SaleOrder,
            value: String
        },
        TransportRouteName: {
            _$class: msls.ContentItem,
            _$name: "TransportRouteName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSaleOrders,
            data: lightSwitchApplication.SaleOrder,
            value: String
        },
        Distance: {
            _$class: msls.ContentItem,
            _$name: "Distance",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSaleOrders,
            data: lightSwitchApplication.SaleOrder,
            value: Number
        },
        PaymentTerm: {
            _$class: msls.ContentItem,
            _$name: "PaymentTerm",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSaleOrders,
            data: lightSwitchApplication.SaleOrder,
            value: Number
        },
        PaymentStatus: {
            _$class: msls.ContentItem,
            _$name: "PaymentStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSaleOrders,
            data: lightSwitchApplication.SaleOrder,
            value: String
        },
        Remarks: {
            _$class: msls.ContentItem,
            _$name: "Remarks",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSaleOrders,
            data: lightSwitchApplication.SaleOrder,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseSaleOrders
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseSaleOrders, {
        /// <field>
        /// Called when a new BrowseSaleOrders screen is created.
        /// <br/>created(msls.application.BrowseSaleOrders screen)
        /// </field>
        created: [lightSwitchApplication.BrowseSaleOrders],
        /// <field>
        /// Called before changes on an active BrowseSaleOrders screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseSaleOrders screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseSaleOrders],
        /// <field>
        /// Called after the SaleOrderList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SaleOrderList_postRender: [$element, function () { return new lightSwitchApplication.BrowseSaleOrders().findContentItem("SaleOrderList"); }],
        /// <field>
        /// Called after the SearchSO content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchSO_postRender: [$element, function () { return new lightSwitchApplication.BrowseSaleOrders().findContentItem("SearchSO"); }],
        /// <field>
        /// Called after the SaleOrder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SaleOrder_postRender: [$element, function () { return new lightSwitchApplication.BrowseSaleOrders().findContentItem("SaleOrder"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseSaleOrders().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the DocumentNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentNo_postRender: [$element, function () { return new lightSwitchApplication.BrowseSaleOrders().findContentItem("DocumentNo"); }],
        /// <field>
        /// Called after the SaleOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SaleOrderDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseSaleOrders().findContentItem("SaleOrderDate"); }],
        /// <field>
        /// Called after the ReferenceNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReferenceNo_postRender: [$element, function () { return new lightSwitchApplication.BrowseSaleOrders().findContentItem("ReferenceNo"); }],
        /// <field>
        /// Called after the CustomerName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerName_postRender: [$element, function () { return new lightSwitchApplication.BrowseSaleOrders().findContentItem("CustomerName"); }],
        /// <field>
        /// Called after the TransportRouteName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TransportRouteName_postRender: [$element, function () { return new lightSwitchApplication.BrowseSaleOrders().findContentItem("TransportRouteName"); }],
        /// <field>
        /// Called after the Distance content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Distance_postRender: [$element, function () { return new lightSwitchApplication.BrowseSaleOrders().findContentItem("Distance"); }],
        /// <field>
        /// Called after the PaymentTerm content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaymentTerm_postRender: [$element, function () { return new lightSwitchApplication.BrowseSaleOrders().findContentItem("PaymentTerm"); }],
        /// <field>
        /// Called after the PaymentStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaymentStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseSaleOrders().findContentItem("PaymentStatus"); }],
        /// <field>
        /// Called after the Remarks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remarks_postRender: [$element, function () { return new lightSwitchApplication.BrowseSaleOrders().findContentItem("Remarks"); }]
    });

    lightSwitchApplication.BrowseShippingMethods.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseShippingMethods
        },
        ShippingMethodList: {
            _$class: msls.ContentItem,
            _$name: "ShippingMethodList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseShippingMethods,
            data: lightSwitchApplication.BrowseShippingMethods,
            value: lightSwitchApplication.BrowseShippingMethods
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ShippingMethodList",
            screen: lightSwitchApplication.BrowseShippingMethods,
            data: lightSwitchApplication.BrowseShippingMethods,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseShippingMethods
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseShippingMethods, {
        /// <field>
        /// Called when a new BrowseShippingMethods screen is created.
        /// <br/>created(msls.application.BrowseShippingMethods screen)
        /// </field>
        created: [lightSwitchApplication.BrowseShippingMethods],
        /// <field>
        /// Called before changes on an active BrowseShippingMethods screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseShippingMethods screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseShippingMethods],
        /// <field>
        /// Called after the ShippingMethodList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShippingMethodList_postRender: [$element, function () { return new lightSwitchApplication.BrowseShippingMethods().findContentItem("ShippingMethodList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseShippingMethods().findContentItem("Search"); }]
    });

    lightSwitchApplication.BrowseStockAdjusts.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseStockAdjusts
        },
        StockAdjustList: {
            _$class: msls.ContentItem,
            _$name: "StockAdjustList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseStockAdjusts,
            data: lightSwitchApplication.BrowseStockAdjusts,
            value: lightSwitchApplication.BrowseStockAdjusts
        },
        StockAdjust: {
            _$class: msls.ContentItem,
            _$name: "StockAdjust",
            _$parentName: "StockAdjustList",
            screen: lightSwitchApplication.BrowseStockAdjusts,
            data: lightSwitchApplication.BrowseStockAdjusts,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseStockAdjusts,
                _$entry: {
                    elementType: lightSwitchApplication.StockAdjust
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "StockAdjust",
            screen: lightSwitchApplication.BrowseStockAdjusts,
            data: lightSwitchApplication.StockAdjust,
            value: lightSwitchApplication.StockAdjust
        },
        DocumentNo: {
            _$class: msls.ContentItem,
            _$name: "DocumentNo",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseStockAdjusts,
            data: lightSwitchApplication.StockAdjust,
            value: String
        },
        DocumentDate: {
            _$class: msls.ContentItem,
            _$name: "DocumentDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseStockAdjusts,
            data: lightSwitchApplication.StockAdjust,
            value: Date
        },
        Remarks: {
            _$class: msls.ContentItem,
            _$name: "Remarks",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseStockAdjusts,
            data: lightSwitchApplication.StockAdjust,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseStockAdjusts,
            data: lightSwitchApplication.StockAdjust,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseStockAdjusts
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseStockAdjusts, {
        /// <field>
        /// Called when a new BrowseStockAdjusts screen is created.
        /// <br/>created(msls.application.BrowseStockAdjusts screen)
        /// </field>
        created: [lightSwitchApplication.BrowseStockAdjusts],
        /// <field>
        /// Called before changes on an active BrowseStockAdjusts screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseStockAdjusts screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseStockAdjusts],
        /// <field>
        /// Called after the StockAdjustList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockAdjustList_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockAdjusts().findContentItem("StockAdjustList"); }],
        /// <field>
        /// Called after the StockAdjust content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockAdjust_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockAdjusts().findContentItem("StockAdjust"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockAdjusts().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the DocumentNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentNo_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockAdjusts().findContentItem("DocumentNo"); }],
        /// <field>
        /// Called after the DocumentDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockAdjusts().findContentItem("DocumentDate"); }],
        /// <field>
        /// Called after the Remarks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remarks_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockAdjusts().findContentItem("Remarks"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockAdjusts().findContentItem("CreatedBy"); }]
    });

    lightSwitchApplication.BrowseStockOnHands.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseStockOnHands
        },
        StockOnHandList: {
            _$class: msls.ContentItem,
            _$name: "StockOnHandList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseStockOnHands,
            data: lightSwitchApplication.BrowseStockOnHands,
            value: lightSwitchApplication.BrowseStockOnHands
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "StockOnHandList",
            screen: lightSwitchApplication.BrowseStockOnHands,
            data: lightSwitchApplication.BrowseStockOnHands,
            value: String
        },
        StockOnHand: {
            _$class: msls.ContentItem,
            _$name: "StockOnHand",
            _$parentName: "StockOnHandList",
            screen: lightSwitchApplication.BrowseStockOnHands,
            data: lightSwitchApplication.BrowseStockOnHands,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseStockOnHands,
                _$entry: {
                    elementType: lightSwitchApplication.StockOnHand
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "StockOnHand",
            screen: lightSwitchApplication.BrowseStockOnHands,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.StockOnHand
        },
        Location: {
            _$class: msls.ContentItem,
            _$name: "Location",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseStockOnHands,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.Location
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseStockOnHands,
            data: lightSwitchApplication.StockOnHand,
            value: lightSwitchApplication.Product
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "Product",
            screen: lightSwitchApplication.BrowseStockOnHands,
            data: lightSwitchApplication.Product,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "Product",
            screen: lightSwitchApplication.BrowseStockOnHands,
            data: lightSwitchApplication.Product,
            value: String
        },
        LotNo: {
            _$class: msls.ContentItem,
            _$name: "LotNo",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseStockOnHands,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        QuantityOnHand: {
            _$class: msls.ContentItem,
            _$name: "QuantityOnHand",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseStockOnHands,
            data: lightSwitchApplication.StockOnHand,
            value: Number
        },
        SellingPrice: {
            _$class: msls.ContentItem,
            _$name: "SellingPrice",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseStockOnHands,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        CostPrice: {
            _$class: msls.ContentItem,
            _$name: "CostPrice",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseStockOnHands,
            data: lightSwitchApplication.StockOnHand,
            value: String
        },
        IsAvailableForSale: {
            _$class: msls.ContentItem,
            _$name: "IsAvailableForSale",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseStockOnHands,
            data: lightSwitchApplication.StockOnHand,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseStockOnHands
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseStockOnHands, {
        /// <field>
        /// Called when a new BrowseStockOnHands screen is created.
        /// <br/>created(msls.application.BrowseStockOnHands screen)
        /// </field>
        created: [lightSwitchApplication.BrowseStockOnHands],
        /// <field>
        /// Called before changes on an active BrowseStockOnHands screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseStockOnHands screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseStockOnHands],
        /// <field>
        /// Called after the StockOnHandList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockOnHandList_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockOnHands().findContentItem("StockOnHandList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockOnHands().findContentItem("Search"); }],
        /// <field>
        /// Called after the StockOnHand content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockOnHand_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockOnHands().findContentItem("StockOnHand"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockOnHands().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockOnHands().findContentItem("Location"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockOnHands().findContentItem("Product"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockOnHands().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockOnHands().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the LotNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockOnHands().findContentItem("LotNo"); }],
        /// <field>
        /// Called after the QuantityOnHand content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QuantityOnHand_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockOnHands().findContentItem("QuantityOnHand"); }],
        /// <field>
        /// Called after the SellingPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SellingPrice_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockOnHands().findContentItem("SellingPrice"); }],
        /// <field>
        /// Called after the CostPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CostPrice_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockOnHands().findContentItem("CostPrice"); }],
        /// <field>
        /// Called after the IsAvailableForSale content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsAvailableForSale_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockOnHands().findContentItem("IsAvailableForSale"); }]
    });

    lightSwitchApplication.BrowseStockTransfers.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseStockTransfers
        },
        StockTransferList: {
            _$class: msls.ContentItem,
            _$name: "StockTransferList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseStockTransfers,
            data: lightSwitchApplication.BrowseStockTransfers,
            value: lightSwitchApplication.BrowseStockTransfers
        },
        StockTransfer: {
            _$class: msls.ContentItem,
            _$name: "StockTransfer",
            _$parentName: "StockTransferList",
            screen: lightSwitchApplication.BrowseStockTransfers,
            data: lightSwitchApplication.BrowseStockTransfers,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseStockTransfers,
                _$entry: {
                    elementType: lightSwitchApplication.StockTransfer
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "StockTransfer",
            screen: lightSwitchApplication.BrowseStockTransfers,
            data: lightSwitchApplication.StockTransfer,
            value: lightSwitchApplication.StockTransfer
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseStockTransfers
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseStockTransfers, {
        /// <field>
        /// Called when a new BrowseStockTransfers screen is created.
        /// <br/>created(msls.application.BrowseStockTransfers screen)
        /// </field>
        created: [lightSwitchApplication.BrowseStockTransfers],
        /// <field>
        /// Called before changes on an active BrowseStockTransfers screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseStockTransfers screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseStockTransfers],
        /// <field>
        /// Called after the StockTransferList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockTransferList_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockTransfers().findContentItem("StockTransferList"); }],
        /// <field>
        /// Called after the StockTransfer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockTransfer_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockTransfers().findContentItem("StockTransfer"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockTransfers().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseSupplierGroups.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseSupplierGroups
        },
        SupplierGroupList: {
            _$class: msls.ContentItem,
            _$name: "SupplierGroupList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseSupplierGroups,
            data: lightSwitchApplication.BrowseSupplierGroups,
            value: lightSwitchApplication.BrowseSupplierGroups
        },
        SupplierGroup: {
            _$class: msls.ContentItem,
            _$name: "SupplierGroup",
            _$parentName: "SupplierGroupList",
            screen: lightSwitchApplication.BrowseSupplierGroups,
            data: lightSwitchApplication.BrowseSupplierGroups,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseSupplierGroups,
                _$entry: {
                    elementType: lightSwitchApplication.SupplierGroup
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "SupplierGroup",
            screen: lightSwitchApplication.BrowseSupplierGroups,
            data: lightSwitchApplication.SupplierGroup,
            value: lightSwitchApplication.SupplierGroup
        },
        SupplierGroupName: {
            _$class: msls.ContentItem,
            _$name: "SupplierGroupName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSupplierGroups,
            data: lightSwitchApplication.SupplierGroup,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseSupplierGroups
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseSupplierGroups, {
        /// <field>
        /// Called when a new BrowseSupplierGroups screen is created.
        /// <br/>created(msls.application.BrowseSupplierGroups screen)
        /// </field>
        created: [lightSwitchApplication.BrowseSupplierGroups],
        /// <field>
        /// Called before changes on an active BrowseSupplierGroups screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseSupplierGroups screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseSupplierGroups],
        /// <field>
        /// Called after the SupplierGroupList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierGroupList_postRender: [$element, function () { return new lightSwitchApplication.BrowseSupplierGroups().findContentItem("SupplierGroupList"); }],
        /// <field>
        /// Called after the SupplierGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierGroup_postRender: [$element, function () { return new lightSwitchApplication.BrowseSupplierGroups().findContentItem("SupplierGroup"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseSupplierGroups().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the SupplierGroupName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierGroupName_postRender: [$element, function () { return new lightSwitchApplication.BrowseSupplierGroups().findContentItem("SupplierGroupName"); }]
    });

    lightSwitchApplication.BrowseSuppliers.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseSuppliers
        },
        SupplierList: {
            _$class: msls.ContentItem,
            _$name: "SupplierList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.BrowseSuppliers,
            value: lightSwitchApplication.BrowseSuppliers
        },
        SearchSupplier: {
            _$class: msls.ContentItem,
            _$name: "SearchSupplier",
            _$parentName: "SupplierList",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.BrowseSuppliers,
            value: String
        },
        Supplier: {
            _$class: msls.ContentItem,
            _$name: "Supplier",
            _$parentName: "SupplierList",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.BrowseSuppliers,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseSuppliers,
                _$entry: {
                    elementType: lightSwitchApplication.Supplier
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Supplier",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.Supplier,
            value: lightSwitchApplication.Supplier
        },
        SupplierGroup: {
            _$class: msls.ContentItem,
            _$name: "SupplierGroup",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.Supplier,
            value: lightSwitchApplication.SupplierGroup
        },
        SupplierName: {
            _$class: msls.ContentItem,
            _$name: "SupplierName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Address1: {
            _$class: msls.ContentItem,
            _$name: "Address1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Phone1: {
            _$class: msls.ContentItem,
            _$name: "Phone1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        ContactName: {
            _$class: msls.ContentItem,
            _$name: "ContactName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.BrowseSuppliers,
            value: lightSwitchApplication.BrowseSuppliers
        },
        SearchSupplierGroup: {
            _$class: msls.ContentItem,
            _$name: "SearchSupplierGroup",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.BrowseSuppliers,
            value: String
        },
        SupplierGroups: {
            _$class: msls.ContentItem,
            _$name: "SupplierGroups",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.BrowseSuppliers,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseSuppliers,
                _$entry: {
                    elementType: lightSwitchApplication.SupplierGroup
                }
            }
        },
        SupplierGroupsTemplate: {
            _$class: msls.ContentItem,
            _$name: "SupplierGroupsTemplate",
            _$parentName: "SupplierGroups",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.SupplierGroup,
            value: lightSwitchApplication.SupplierGroup
        },
        SupplierGroupName: {
            _$class: msls.ContentItem,
            _$name: "SupplierGroupName",
            _$parentName: "SupplierGroupsTemplate",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.SupplierGroup,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseSuppliers
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseSuppliers, {
        /// <field>
        /// Called when a new BrowseSuppliers screen is created.
        /// <br/>created(msls.application.BrowseSuppliers screen)
        /// </field>
        created: [lightSwitchApplication.BrowseSuppliers],
        /// <field>
        /// Called before changes on an active BrowseSuppliers screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseSuppliers screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseSuppliers],
        /// <field>
        /// Called after the SupplierList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierList_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("SupplierList"); }],
        /// <field>
        /// Called after the SearchSupplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchSupplier_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("SearchSupplier"); }],
        /// <field>
        /// Called after the Supplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Supplier_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("Supplier"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the SupplierGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierGroup_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("SupplierGroup"); }],
        /// <field>
        /// Called after the SupplierName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierName_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("SupplierName"); }],
        /// <field>
        /// Called after the Address1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address1_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("Address1"); }],
        /// <field>
        /// Called after the Phone1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone1_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("Phone1"); }],
        /// <field>
        /// Called after the ContactName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContactName_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("ContactName"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("Group"); }],
        /// <field>
        /// Called after the SearchSupplierGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchSupplierGroup_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("SearchSupplierGroup"); }],
        /// <field>
        /// Called after the SupplierGroups content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierGroups_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("SupplierGroups"); }],
        /// <field>
        /// Called after the SupplierGroupsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierGroupsTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("SupplierGroupsTemplate"); }],
        /// <field>
        /// Called after the SupplierGroupName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierGroupName_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("SupplierGroupName"); }]
    });

    lightSwitchApplication.BrowseTransportRoutes.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTransportRoutes
        },
        TransportRouteList: {
            _$class: msls.ContentItem,
            _$name: "TransportRouteList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTransportRoutes,
            data: lightSwitchApplication.BrowseTransportRoutes,
            value: lightSwitchApplication.BrowseTransportRoutes
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "TransportRouteList",
            screen: lightSwitchApplication.BrowseTransportRoutes,
            data: lightSwitchApplication.BrowseTransportRoutes,
            value: String
        },
        TransportRoute: {
            _$class: msls.ContentItem,
            _$name: "TransportRoute",
            _$parentName: "TransportRouteList",
            screen: lightSwitchApplication.BrowseTransportRoutes,
            data: lightSwitchApplication.BrowseTransportRoutes,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTransportRoutes,
                _$entry: {
                    elementType: lightSwitchApplication.TransportRoute
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "TransportRoute",
            screen: lightSwitchApplication.BrowseTransportRoutes,
            data: lightSwitchApplication.TransportRoute,
            value: lightSwitchApplication.TransportRoute
        },
        TransportRouteName: {
            _$class: msls.ContentItem,
            _$name: "TransportRouteName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseTransportRoutes,
            data: lightSwitchApplication.TransportRoute,
            value: String
        },
        Distance: {
            _$class: msls.ContentItem,
            _$name: "Distance",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseTransportRoutes,
            data: lightSwitchApplication.TransportRoute,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTransportRoutes
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTransportRoutes, {
        /// <field>
        /// Called when a new BrowseTransportRoutes screen is created.
        /// <br/>created(msls.application.BrowseTransportRoutes screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTransportRoutes],
        /// <field>
        /// Called before changes on an active BrowseTransportRoutes screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTransportRoutes screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTransportRoutes],
        /// <field>
        /// Called after the TransportRouteList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TransportRouteList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTransportRoutes().findContentItem("TransportRouteList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseTransportRoutes().findContentItem("Search"); }],
        /// <field>
        /// Called after the TransportRoute content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TransportRoute_postRender: [$element, function () { return new lightSwitchApplication.BrowseTransportRoutes().findContentItem("TransportRoute"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTransportRoutes().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the TransportRouteName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TransportRouteName_postRender: [$element, function () { return new lightSwitchApplication.BrowseTransportRoutes().findContentItem("TransportRouteName"); }],
        /// <field>
        /// Called after the Distance content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Distance_postRender: [$element, function () { return new lightSwitchApplication.BrowseTransportRoutes().findContentItem("Distance"); }]
    });

    lightSwitchApplication.BrowseUnitOfMeasures.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseUnitOfMeasures
        },
        UnitOfMeasureList: {
            _$class: msls.ContentItem,
            _$name: "UnitOfMeasureList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseUnitOfMeasures,
            data: lightSwitchApplication.BrowseUnitOfMeasures,
            value: lightSwitchApplication.BrowseUnitOfMeasures
        },
        UnitOfMeasure: {
            _$class: msls.ContentItem,
            _$name: "UnitOfMeasure",
            _$parentName: "UnitOfMeasureList",
            screen: lightSwitchApplication.BrowseUnitOfMeasures,
            data: lightSwitchApplication.BrowseUnitOfMeasures,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseUnitOfMeasures,
                _$entry: {
                    elementType: lightSwitchApplication.UnitOfMeasure
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "UnitOfMeasure",
            screen: lightSwitchApplication.BrowseUnitOfMeasures,
            data: lightSwitchApplication.UnitOfMeasure,
            value: lightSwitchApplication.UnitOfMeasure
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseUnitOfMeasures,
            data: lightSwitchApplication.UnitOfMeasure,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseUnitOfMeasures
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseUnitOfMeasures, {
        /// <field>
        /// Called when a new BrowseUnitOfMeasures screen is created.
        /// <br/>created(msls.application.BrowseUnitOfMeasures screen)
        /// </field>
        created: [lightSwitchApplication.BrowseUnitOfMeasures],
        /// <field>
        /// Called before changes on an active BrowseUnitOfMeasures screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseUnitOfMeasures screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseUnitOfMeasures],
        /// <field>
        /// Called after the UnitOfMeasureList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitOfMeasureList_postRender: [$element, function () { return new lightSwitchApplication.BrowseUnitOfMeasures().findContentItem("UnitOfMeasureList"); }],
        /// <field>
        /// Called after the UnitOfMeasure content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitOfMeasure_postRender: [$element, function () { return new lightSwitchApplication.BrowseUnitOfMeasures().findContentItem("UnitOfMeasure"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseUnitOfMeasures().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.BrowseUnitOfMeasures().findContentItem("UOMName"); }]
    });

    lightSwitchApplication.BrowseWorkers.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseWorkers
        },
        WorkerList: {
            _$class: msls.ContentItem,
            _$name: "WorkerList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseWorkers,
            data: lightSwitchApplication.BrowseWorkers,
            value: lightSwitchApplication.BrowseWorkers
        },
        Worker: {
            _$class: msls.ContentItem,
            _$name: "Worker",
            _$parentName: "WorkerList",
            screen: lightSwitchApplication.BrowseWorkers,
            data: lightSwitchApplication.BrowseWorkers,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseWorkers,
                _$entry: {
                    elementType: lightSwitchApplication.Worker
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Worker",
            screen: lightSwitchApplication.BrowseWorkers,
            data: lightSwitchApplication.Worker,
            value: lightSwitchApplication.Worker
        },
        WorkerName: {
            _$class: msls.ContentItem,
            _$name: "WorkerName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseWorkers,
            data: lightSwitchApplication.Worker,
            value: String
        },
        HireDate: {
            _$class: msls.ContentItem,
            _$name: "HireDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseWorkers,
            data: lightSwitchApplication.Worker,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseWorkers
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseWorkers, {
        /// <field>
        /// Called when a new BrowseWorkers screen is created.
        /// <br/>created(msls.application.BrowseWorkers screen)
        /// </field>
        created: [lightSwitchApplication.BrowseWorkers],
        /// <field>
        /// Called before changes on an active BrowseWorkers screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseWorkers screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseWorkers],
        /// <field>
        /// Called after the WorkerList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkerList_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkers().findContentItem("WorkerList"); }],
        /// <field>
        /// Called after the Worker content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Worker_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkers().findContentItem("Worker"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkers().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the WorkerName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkerName_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkers().findContentItem("WorkerName"); }],
        /// <field>
        /// Called after the HireDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HireDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkers().findContentItem("HireDate"); }]
    });

    lightSwitchApplication.BrowseWorkOrderIsNotReceive.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseWorkOrderIsNotReceive
        },
        WorkOrderList: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseWorkOrderIsNotReceive,
            data: lightSwitchApplication.BrowseWorkOrderIsNotReceive,
            value: lightSwitchApplication.BrowseWorkOrderIsNotReceive
        },
        WorkOrder: {
            _$class: msls.ContentItem,
            _$name: "WorkOrder",
            _$parentName: "WorkOrderList",
            screen: lightSwitchApplication.BrowseWorkOrderIsNotReceive,
            data: lightSwitchApplication.BrowseWorkOrderIsNotReceive,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseWorkOrderIsNotReceive,
                _$entry: {
                    elementType: lightSwitchApplication.WorkOrder
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "WorkOrder",
            screen: lightSwitchApplication.BrowseWorkOrderIsNotReceive,
            data: lightSwitchApplication.WorkOrder,
            value: lightSwitchApplication.WorkOrder
        },
        WorkOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseWorkOrderIsNotReceive,
            data: lightSwitchApplication.WorkOrder,
            value: String
        },
        WorkOrderDate: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseWorkOrderIsNotReceive,
            data: lightSwitchApplication.WorkOrder,
            value: Date
        },
        MachineName: {
            _$class: msls.ContentItem,
            _$name: "MachineName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseWorkOrderIsNotReceive,
            data: lightSwitchApplication.WorkOrder,
            value: String
        },
        WorkOrderStatus: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseWorkOrderIsNotReceive,
            data: lightSwitchApplication.WorkOrder,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseWorkOrderIsNotReceive
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseWorkOrderIsNotReceive, {
        /// <field>
        /// Called when a new BrowseWorkOrderIsNotReceive screen is created.
        /// <br/>created(msls.application.BrowseWorkOrderIsNotReceive screen)
        /// </field>
        created: [lightSwitchApplication.BrowseWorkOrderIsNotReceive],
        /// <field>
        /// Called before changes on an active BrowseWorkOrderIsNotReceive screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseWorkOrderIsNotReceive screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseWorkOrderIsNotReceive],
        /// <field>
        /// Called after the WorkOrderList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderList_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkOrderIsNotReceive().findContentItem("WorkOrderList"); }],
        /// <field>
        /// Called after the WorkOrder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrder_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkOrderIsNotReceive().findContentItem("WorkOrder"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkOrderIsNotReceive().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the WorkOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkOrderIsNotReceive().findContentItem("WorkOrderNumber"); }],
        /// <field>
        /// Called after the WorkOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkOrderIsNotReceive().findContentItem("WorkOrderDate"); }],
        /// <field>
        /// Called after the MachineName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MachineName_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkOrderIsNotReceive().findContentItem("MachineName"); }],
        /// <field>
        /// Called after the WorkOrderStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkOrderIsNotReceive().findContentItem("WorkOrderStatus"); }]
    });

    lightSwitchApplication.BrowseWorkOrders.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseWorkOrders
        },
        WorkOrderList: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseWorkOrders,
            data: lightSwitchApplication.BrowseWorkOrders,
            value: lightSwitchApplication.BrowseWorkOrders
        },
        WorkOrder: {
            _$class: msls.ContentItem,
            _$name: "WorkOrder",
            _$parentName: "WorkOrderList",
            screen: lightSwitchApplication.BrowseWorkOrders,
            data: lightSwitchApplication.BrowseWorkOrders,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseWorkOrders,
                _$entry: {
                    elementType: lightSwitchApplication.WorkOrder
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "WorkOrder",
            screen: lightSwitchApplication.BrowseWorkOrders,
            data: lightSwitchApplication.WorkOrder,
            value: lightSwitchApplication.WorkOrder
        },
        WorkOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseWorkOrders,
            data: lightSwitchApplication.WorkOrder,
            value: String
        },
        WorkOrderDate: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseWorkOrders,
            data: lightSwitchApplication.WorkOrder,
            value: Date
        },
        Remark: {
            _$class: msls.ContentItem,
            _$name: "Remark",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseWorkOrders,
            data: lightSwitchApplication.WorkOrder,
            value: String
        },
        EmployeeFullName: {
            _$class: msls.ContentItem,
            _$name: "EmployeeFullName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseWorkOrders,
            data: lightSwitchApplication.WorkOrder,
            value: String
        },
        MachineName: {
            _$class: msls.ContentItem,
            _$name: "MachineName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseWorkOrders,
            data: lightSwitchApplication.WorkOrder,
            value: String
        },
        WorkOrderStatus: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseWorkOrders,
            data: lightSwitchApplication.WorkOrder,
            value: Boolean
        },
        WorkOrderStatusDescription: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderStatusDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseWorkOrders,
            data: lightSwitchApplication.WorkOrder,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseWorkOrders
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseWorkOrders, {
        /// <field>
        /// Called when a new BrowseWorkOrders screen is created.
        /// <br/>created(msls.application.BrowseWorkOrders screen)
        /// </field>
        created: [lightSwitchApplication.BrowseWorkOrders],
        /// <field>
        /// Called before changes on an active BrowseWorkOrders screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseWorkOrders screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseWorkOrders],
        /// <field>
        /// Called to determine if the WorkOrder_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.BrowseWorkOrders screen)
        /// </field>
        WorkOrder_ItemTap_canExecute: [lightSwitchApplication.BrowseWorkOrders],
        /// <field>
        /// Called to execute the WorkOrder_ItemTap method.
        /// <br/>execute(msls.application.BrowseWorkOrders screen)
        /// </field>
        WorkOrder_ItemTap_execute: [lightSwitchApplication.BrowseWorkOrders],
        /// <field>
        /// Called after the WorkOrderList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderList_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkOrders().findContentItem("WorkOrderList"); }],
        /// <field>
        /// Called after the WorkOrder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrder_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkOrders().findContentItem("WorkOrder"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkOrders().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the WorkOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkOrders().findContentItem("WorkOrderNumber"); }],
        /// <field>
        /// Called after the WorkOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkOrders().findContentItem("WorkOrderDate"); }],
        /// <field>
        /// Called after the Remark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remark_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkOrders().findContentItem("Remark"); }],
        /// <field>
        /// Called after the EmployeeFullName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeFullName_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkOrders().findContentItem("EmployeeFullName"); }],
        /// <field>
        /// Called after the MachineName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MachineName_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkOrders().findContentItem("MachineName"); }],
        /// <field>
        /// Called after the WorkOrderStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkOrders().findContentItem("WorkOrderStatus"); }],
        /// <field>
        /// Called after the WorkOrderStatusDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderStatusDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseWorkOrders().findContentItem("WorkOrderStatusDescription"); }]
    });

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        ManageProducts: {
            _$class: msls.ContentItem,
            _$name: "ManageProducts",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        ManageOrders: {
            _$class: msls.ContentItem,
            _$name: "ManageOrders",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        StockCheck: {
            _$class: msls.ContentItem,
            _$name: "StockCheck",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        ManageAccounting: {
            _$class: msls.ContentItem,
            _$name: "ManageAccounting",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        ManageReports: {
            _$class: msls.ContentItem,
            _$name: "ManageReports",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        PurchaseOrders: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrders",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        ShowBrowsePOReceive: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowsePOReceive",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        ManageReceiveProduct: {
            _$class: msls.ContentItem,
            _$name: "ManageReceiveProduct",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseWorkOrders: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseWorkOrders",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseWorkOrderIsNotReceive: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseWorkOrderIsNotReceive",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseProductPricings: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseProductPricings",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseStockAdjusts: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseStockAdjusts",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseStockTransfers: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseStockTransfers",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseSaleOrder: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseSaleOrder",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        SettingsGroup: {
            _$class: msls.ContentItem,
            _$name: "SettingsGroup",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        ManageEmployees: {
            _$class: msls.ContentItem,
            _$name: "ManageEmployees",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManageSuppliers: {
            _$class: msls.ContentItem,
            _$name: "ManageSuppliers",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManageCustomers: {
            _$class: msls.ContentItem,
            _$name: "ManageCustomers",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManageProductCategories: {
            _$class: msls.ContentItem,
            _$name: "ManageProductCategories",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManageTransportRoutes: {
            _$class: msls.ContentItem,
            _$name: "ManageTransportRoutes",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManageLocations: {
            _$class: msls.ContentItem,
            _$name: "ManageLocations",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManageProductGroups: {
            _$class: msls.ContentItem,
            _$name: "ManageProductGroups",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManageItems: {
            _$class: msls.ContentItem,
            _$name: "ManageItems",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManageUnitOfMeasures: {
            _$class: msls.ContentItem,
            _$name: "ManageUnitOfMeasures",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManageCompany: {
            _$class: msls.ContentItem,
            _$name: "ManageCompany",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManageBanks: {
            _$class: msls.ContentItem,
            _$name: "ManageBanks",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManageMachines: {
            _$class: msls.ContentItem,
            _$name: "ManageMachines",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManagePackages: {
            _$class: msls.ContentItem,
            _$name: "ManagePackages",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManageWorkers: {
            _$class: msls.ContentItem,
            _$name: "ManageWorkers",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManagePaymentTypes: {
            _$class: msls.ContentItem,
            _$name: "ManagePaymentTypes",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group"); }],
        /// <field>
        /// Called after the ManageProducts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageProducts_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageProducts"); }],
        /// <field>
        /// Called after the ManageOrders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageOrders_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageOrders"); }],
        /// <field>
        /// Called after the StockCheck content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheck_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("StockCheck"); }],
        /// <field>
        /// Called after the ManageAccounting content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageAccounting_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageAccounting"); }],
        /// <field>
        /// Called after the ManageReports content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageReports_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageReports"); }],
        /// <field>
        /// Called after the PurchaseOrders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrders_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("PurchaseOrders"); }],
        /// <field>
        /// Called after the ShowBrowsePOReceive content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowsePOReceive_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowsePOReceive"); }],
        /// <field>
        /// Called after the ManageReceiveProduct content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageReceiveProduct_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageReceiveProduct"); }],
        /// <field>
        /// Called after the ShowBrowseWorkOrders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseWorkOrders_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseWorkOrders"); }],
        /// <field>
        /// Called after the ShowBrowseWorkOrderIsNotReceive content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseWorkOrderIsNotReceive_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseWorkOrderIsNotReceive"); }],
        /// <field>
        /// Called after the ShowBrowseProductPricings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseProductPricings_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseProductPricings"); }],
        /// <field>
        /// Called after the ShowBrowseStockAdjusts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseStockAdjusts_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseStockAdjusts"); }],
        /// <field>
        /// Called after the ShowBrowseStockTransfers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseStockTransfers_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseStockTransfers"); }],
        /// <field>
        /// Called after the ShowBrowseSaleOrder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseSaleOrder_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseSaleOrder"); }],
        /// <field>
        /// Called after the SettingsGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SettingsGroup_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("SettingsGroup"); }],
        /// <field>
        /// Called after the ManageEmployees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageEmployees_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageEmployees"); }],
        /// <field>
        /// Called after the ManageSuppliers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageSuppliers_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageSuppliers"); }],
        /// <field>
        /// Called after the ManageCustomers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageCustomers_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageCustomers"); }],
        /// <field>
        /// Called after the ManageProductCategories content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageProductCategories_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageProductCategories"); }],
        /// <field>
        /// Called after the ManageTransportRoutes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageTransportRoutes_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageTransportRoutes"); }],
        /// <field>
        /// Called after the ManageLocations content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageLocations_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageLocations"); }],
        /// <field>
        /// Called after the ManageProductGroups content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageProductGroups_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageProductGroups"); }],
        /// <field>
        /// Called after the ManageItems content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageItems_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageItems"); }],
        /// <field>
        /// Called after the ManageUnitOfMeasures content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageUnitOfMeasures_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageUnitOfMeasures"); }],
        /// <field>
        /// Called after the ManageCompany content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageCompany_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageCompany"); }],
        /// <field>
        /// Called after the ManageBanks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageBanks_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageBanks"); }],
        /// <field>
        /// Called after the ManageMachines content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageMachines_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageMachines"); }],
        /// <field>
        /// Called after the ManagePackages content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagePackages_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManagePackages"); }],
        /// <field>
        /// Called after the ManageWorkers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageWorkers_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageWorkers"); }],
        /// <field>
        /// Called after the ManagePaymentTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagePaymentTypes_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManagePaymentTypes"); }]
    });

    lightSwitchApplication.MobileHome.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        },
        Menu: {
            _$class: msls.ContentItem,
            _$name: "Menu",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        ManageProducts: {
            _$class: msls.ContentItem,
            _$name: "ManageProducts",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MobileHome
        },
        PurchaseOrders: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrders",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MobileHome
        },
        ManageOrders: {
            _$class: msls.ContentItem,
            _$name: "ManageOrders",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MobileHome
        },
        StockCheck: {
            _$class: msls.ContentItem,
            _$name: "StockCheck",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MobileHome
        },
        Settings: {
            _$class: msls.ContentItem,
            _$name: "Settings",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        Employees: {
            _$class: msls.ContentItem,
            _$name: "Employees",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        Suppliers: {
            _$class: msls.ContentItem,
            _$name: "Suppliers",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        Customers: {
            _$class: msls.ContentItem,
            _$name: "Customers",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        ProductCategories: {
            _$class: msls.ContentItem,
            _$name: "ProductCategories",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        ShippingMethods: {
            _$class: msls.ContentItem,
            _$name: "ShippingMethods",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MobileHome, {
        /// <field>
        /// Called when a new MobileHome screen is created.
        /// <br/>created(msls.application.MobileHome screen)
        /// </field>
        created: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called before changes on an active MobileHome screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MobileHome screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called after the Menu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Menu_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Menu"); }],
        /// <field>
        /// Called after the ManageProducts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageProducts_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ManageProducts"); }],
        /// <field>
        /// Called after the PurchaseOrders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrders_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("PurchaseOrders"); }],
        /// <field>
        /// Called after the ManageOrders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageOrders_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ManageOrders"); }],
        /// <field>
        /// Called after the StockCheck content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheck_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("StockCheck"); }],
        /// <field>
        /// Called after the Settings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Settings_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Settings"); }],
        /// <field>
        /// Called after the Employees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employees_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Employees"); }],
        /// <field>
        /// Called after the Suppliers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Suppliers_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Suppliers"); }],
        /// <field>
        /// Called after the Customers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Customers_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Customers"); }],
        /// <field>
        /// Called after the ProductCategories content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCategories_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ProductCategories"); }],
        /// <field>
        /// Called after the ShippingMethods content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShippingMethods_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShippingMethods"); }]
    });

    lightSwitchApplication.SearchActiveProducts.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.SearchActiveProducts
        },
        ProductList: {
            _$class: msls.ContentItem,
            _$name: "ProductList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.SearchActiveProducts,
            data: lightSwitchApplication.SearchActiveProducts,
            value: lightSwitchApplication.SearchActiveProducts
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "ProductList",
            screen: lightSwitchApplication.SearchActiveProducts,
            data: lightSwitchApplication.SearchActiveProducts,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.SearchActiveProducts,
                _$entry: {
                    elementType: lightSwitchApplication.Product
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Product",
            screen: lightSwitchApplication.SearchActiveProducts,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.SearchActiveProducts
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Popups",
            screen: lightSwitchApplication.SearchActiveProducts,
            data: lightSwitchApplication.SearchActiveProducts,
            value: lightSwitchApplication.SearchActiveProducts
        }
    };

    msls._addEntryPoints(lightSwitchApplication.SearchActiveProducts, {
        /// <field>
        /// Called when a new SearchActiveProducts screen is created.
        /// <br/>created(msls.application.SearchActiveProducts screen)
        /// </field>
        created: [lightSwitchApplication.SearchActiveProducts],
        /// <field>
        /// Called before changes on an active SearchActiveProducts screen are applied.
        /// <br/>beforeApplyChanges(msls.application.SearchActiveProducts screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.SearchActiveProducts],
        /// <field>
        /// Called after the ProductList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductList_postRender: [$element, function () { return new lightSwitchApplication.SearchActiveProducts().findContentItem("ProductList"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.SearchActiveProducts().findContentItem("Product"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.SearchActiveProducts().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.SearchActiveProducts().findContentItem("Group"); }]
    });

    lightSwitchApplication.ViewPOReceivedDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewPOReceivedDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: lightSwitchApplication.ViewPOReceivedDetail
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: lightSwitchApplication.ViewPOReceivedDetail
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: lightSwitchApplication.ViewPOReceivedDetail
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "Group2",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "Group2",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: String
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: lightSwitchApplication.ViewPOReceivedDetail
        },
        Group4: {
            _$class: msls.ContentItem,
            _$name: "Group4",
            _$parentName: "Group3",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: lightSwitchApplication.ViewPOReceivedDetail
        },
        RequireDate: {
            _$class: msls.ContentItem,
            _$name: "RequireDate",
            _$parentName: "Group4",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: Date
        },
        ReceiveDate: {
            _$class: msls.ContentItem,
            _$name: "ReceiveDate",
            _$parentName: "Group4",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: Date
        },
        Location: {
            _$class: msls.ContentItem,
            _$name: "Location",
            _$parentName: "Group4",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: lightSwitchApplication.Location
        },
        LotNo: {
            _$class: msls.ContentItem,
            _$name: "LotNo",
            _$parentName: "Group4",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: String
        },
        RequireQuantity: {
            _$class: msls.ContentItem,
            _$name: "RequireQuantity",
            _$parentName: "Group4",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: Number
        },
        ReceiveQuantity: {
            _$class: msls.ContentItem,
            _$name: "ReceiveQuantity",
            _$parentName: "Group4",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: Number
        },
        RequireTotalCost: {
            _$class: msls.ContentItem,
            _$name: "RequireTotalCost",
            _$parentName: "Group4",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "Group3",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: lightSwitchApplication.ViewPOReceivedDetail
        },
        ReceiveTotalCost: {
            _$class: msls.ContentItem,
            _$name: "ReceiveTotalCost",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: String
        },
        IsReceiveCompleteDescription: {
            _$class: msls.ContentItem,
            _$name: "IsReceiveCompleteDescription",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: String
        },
        IsReceiveComplete: {
            _$class: msls.ContentItem,
            _$name: "IsReceiveComplete",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: Boolean
        },
        PurchaseOrder: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrder",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: lightSwitchApplication.PurchaseOrder
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: Date
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: lightSwitchApplication.ViewPOReceivedDetail
        },
        Remark: {
            _$class: msls.ContentItem,
            _$name: "Remark",
            _$parentName: "Group",
            screen: lightSwitchApplication.ViewPOReceivedDetail,
            data: lightSwitchApplication.ViewPOReceivedDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewPOReceivedDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewPOReceivedDetail, {
        /// <field>
        /// Called when a new ViewPOReceivedDetail screen is created.
        /// <br/>created(msls.application.ViewPOReceivedDetail screen)
        /// </field>
        created: [lightSwitchApplication.ViewPOReceivedDetail],
        /// <field>
        /// Called before changes on an active ViewPOReceivedDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewPOReceivedDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewPOReceivedDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("Group1"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("Group2"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("Group3"); }],
        /// <field>
        /// Called after the Group4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group4_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("Group4"); }],
        /// <field>
        /// Called after the RequireDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireDate_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("RequireDate"); }],
        /// <field>
        /// Called after the ReceiveDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveDate_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("ReceiveDate"); }],
        /// <field>
        /// Called after the Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("Location"); }],
        /// <field>
        /// Called after the LotNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("LotNo"); }],
        /// <field>
        /// Called after the RequireQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireQuantity_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("RequireQuantity"); }],
        /// <field>
        /// Called after the ReceiveQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveQuantity_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("ReceiveQuantity"); }],
        /// <field>
        /// Called after the RequireTotalCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireTotalCost_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("RequireTotalCost"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("right"); }],
        /// <field>
        /// Called after the ReceiveTotalCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveTotalCost_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("ReceiveTotalCost"); }],
        /// <field>
        /// Called after the IsReceiveCompleteDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsReceiveCompleteDescription_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("IsReceiveCompleteDescription"); }],
        /// <field>
        /// Called after the IsReceiveComplete content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsReceiveComplete_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("IsReceiveComplete"); }],
        /// <field>
        /// Called after the PurchaseOrder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrder_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("PurchaseOrder"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("Modified"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("Group"); }],
        /// <field>
        /// Called after the Remark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remark_postRender: [$element, function () { return new lightSwitchApplication.ViewPOReceivedDetail().findContentItem("Remark"); }]
    });

    lightSwitchApplication.ViewPurchaseOrder.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewPurchaseOrder
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.ViewPurchaseOrder,
            value: lightSwitchApplication.ViewPurchaseOrder
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.ViewPurchaseOrder,
            value: lightSwitchApplication.ViewPurchaseOrder
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.ViewPurchaseOrder,
            value: lightSwitchApplication.ViewPurchaseOrder
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Group3",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.ViewPurchaseOrder,
            value: lightSwitchApplication.ViewPurchaseOrder
        },
        PurchaseOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderNumber",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.ViewPurchaseOrder,
            value: String
        },
        PurchaseOrderDate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDate",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.ViewPurchaseOrder,
            value: Date
        },
        PurchaseOrderStatus: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderStatus",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.ViewPurchaseOrder,
            value: Boolean
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.ViewPurchaseOrder,
            value: lightSwitchApplication.ViewPurchaseOrder
        },
        Group4: {
            _$class: msls.ContentItem,
            _$name: "Group4",
            _$parentName: "Group2",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.ViewPurchaseOrder,
            value: lightSwitchApplication.ViewPurchaseOrder
        },
        SupplierName: {
            _$class: msls.ContentItem,
            _$name: "SupplierName",
            _$parentName: "Group4",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.ViewPurchaseOrder,
            value: String
        },
        POStatusDescription: {
            _$class: msls.ContentItem,
            _$name: "POStatusDescription",
            _$parentName: "Group4",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.ViewPurchaseOrder,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.ViewPurchaseOrder,
            value: lightSwitchApplication.ViewPurchaseOrder
        },
        PurchaseOrderDetails: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetails",
            _$parentName: "Group",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.ViewPurchaseOrder,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewPurchaseOrder,
                _$entry: {
                    elementType: lightSwitchApplication.PurchaseOrderDetail
                }
            }
        },
        PurchaseOrderDetailsTemplate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetailsTemplate",
            _$parentName: "PurchaseOrderDetails",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        RequireDate: {
            _$class: msls.ContentItem,
            _$name: "RequireDate",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        UnitWeight: {
            _$class: msls.ContentItem,
            _$name: "UnitWeight",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        LocationName: {
            _$class: msls.ContentItem,
            _$name: "LocationName",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        LotNo: {
            _$class: msls.ContentItem,
            _$name: "LotNo",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        RequireQuantity: {
            _$class: msls.ContentItem,
            _$name: "RequireQuantity",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        ReceiveQuantity: {
            _$class: msls.ContentItem,
            _$name: "ReceiveQuantity",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        RequireTotalCost: {
            _$class: msls.ContentItem,
            _$name: "RequireTotalCost",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        ReceiveTotalCost: {
            _$class: msls.ContentItem,
            _$name: "ReceiveTotalCost",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        Remark: {
            _$class: msls.ContentItem,
            _$name: "Remark",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        IsReceiveComplete: {
            _$class: msls.ContentItem,
            _$name: "IsReceiveComplete",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Boolean
        },
        ReceiveDate: {
            _$class: msls.ContentItem,
            _$name: "ReceiveDate",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "PurchaseOrderDetailsTemplate",
            screen: lightSwitchApplication.ViewPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewPurchaseOrder
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewPurchaseOrder, {
        /// <field>
        /// Called when a new ViewPurchaseOrder screen is created.
        /// <br/>created(msls.application.ViewPurchaseOrder screen)
        /// </field>
        created: [lightSwitchApplication.ViewPurchaseOrder],
        /// <field>
        /// Called before changes on an active ViewPurchaseOrder screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewPurchaseOrder screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewPurchaseOrder],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("Details"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("left"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("Group3"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("Group1"); }],
        /// <field>
        /// Called after the PurchaseOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("PurchaseOrderNumber"); }],
        /// <field>
        /// Called after the PurchaseOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDate_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("PurchaseOrderDate"); }],
        /// <field>
        /// Called after the PurchaseOrderStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderStatus_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("PurchaseOrderStatus"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("Group2"); }],
        /// <field>
        /// Called after the Group4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group4_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("Group4"); }],
        /// <field>
        /// Called after the SupplierName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierName_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("SupplierName"); }],
        /// <field>
        /// Called after the POStatusDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        POStatusDescription_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("POStatusDescription"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("Group"); }],
        /// <field>
        /// Called after the PurchaseOrderDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetails_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("PurchaseOrderDetails"); }],
        /// <field>
        /// Called after the PurchaseOrderDetailsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetailsTemplate_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("PurchaseOrderDetailsTemplate"); }],
        /// <field>
        /// Called after the RequireDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireDate_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("RequireDate"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the UnitWeight content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitWeight_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("UnitWeight"); }],
        /// <field>
        /// Called after the LocationName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationName_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("LocationName"); }],
        /// <field>
        /// Called after the LotNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("LotNo"); }],
        /// <field>
        /// Called after the RequireQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireQuantity_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("RequireQuantity"); }],
        /// <field>
        /// Called after the ReceiveQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveQuantity_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("ReceiveQuantity"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the RequireTotalCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireTotalCost_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("RequireTotalCost"); }],
        /// <field>
        /// Called after the ReceiveTotalCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveTotalCost_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("ReceiveTotalCost"); }],
        /// <field>
        /// Called after the Remark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remark_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("Remark"); }],
        /// <field>
        /// Called after the IsReceiveComplete content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsReceiveComplete_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("IsReceiveComplete"); }],
        /// <field>
        /// Called after the ReceiveDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveDate_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("ReceiveDate"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrder().findContentItem("ModifiedBy"); }]
    });

    lightSwitchApplication.ViewPurchaseOrderDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: lightSwitchApplication.ViewPurchaseOrderDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        PurchaseOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderNumber",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        PurchaseOrderDate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDate",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        SupplierName: {
            _$class: msls.ContentItem,
            _$name: "SupplierName",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        PurchaseOrderStatus: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderStatus",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Boolean
        },
        POStatusDescription: {
            _$class: msls.ContentItem,
            _$name: "POStatusDescription",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: lightSwitchApplication.ViewPurchaseOrderDetail
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Group",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: lightSwitchApplication.ViewPurchaseOrderDetail
        },
        RequireDate: {
            _$class: msls.ContentItem,
            _$name: "RequireDate",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: Date
        },
        ReceiveDate: {
            _$class: msls.ContentItem,
            _$name: "ReceiveDate",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: Date
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: String
        },
        LocationName: {
            _$class: msls.ContentItem,
            _$name: "LocationName",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: String
        },
        LotNo: {
            _$class: msls.ContentItem,
            _$name: "LotNo",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: String
        },
        UnitWeight: {
            _$class: msls.ContentItem,
            _$name: "UnitWeight",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: Number
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: lightSwitchApplication.ViewPurchaseOrderDetail
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Group3",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: lightSwitchApplication.ViewPurchaseOrderDetail
        },
        RequireQuantity: {
            _$class: msls.ContentItem,
            _$name: "RequireQuantity",
            _$parentName: "Group2",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: Number
        },
        ReceiveQuantity: {
            _$class: msls.ContentItem,
            _$name: "ReceiveQuantity",
            _$parentName: "Group2",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: Number
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "Group2",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: String
        },
        RequireTotalCost: {
            _$class: msls.ContentItem,
            _$name: "RequireTotalCost",
            _$parentName: "Group2",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: String
        },
        ReceiveTotalCost: {
            _$class: msls.ContentItem,
            _$name: "ReceiveTotalCost",
            _$parentName: "Group2",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: String
        },
        IsReceiveComplete: {
            _$class: msls.ContentItem,
            _$name: "IsReceiveComplete",
            _$parentName: "Group2",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: Boolean
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "Group2",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: String
        },
        Remark: {
            _$class: msls.ContentItem,
            _$name: "Remark",
            _$parentName: "Group2",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail,
            data: lightSwitchApplication.ViewPurchaseOrderDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewPurchaseOrderDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewPurchaseOrderDetail, {
        /// <field>
        /// Called when a new ViewPurchaseOrderDetail screen is created.
        /// <br/>created(msls.application.ViewPurchaseOrderDetail screen)
        /// </field>
        created: [lightSwitchApplication.ViewPurchaseOrderDetail],
        /// <field>
        /// Called before changes on an active ViewPurchaseOrderDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewPurchaseOrderDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewPurchaseOrderDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the PurchaseOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("PurchaseOrderNumber"); }],
        /// <field>
        /// Called after the PurchaseOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDate_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("PurchaseOrderDate"); }],
        /// <field>
        /// Called after the SupplierName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierName_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("SupplierName"); }],
        /// <field>
        /// Called after the PurchaseOrderStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderStatus_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("PurchaseOrderStatus"); }],
        /// <field>
        /// Called after the POStatusDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        POStatusDescription_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("POStatusDescription"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("Group"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("Group1"); }],
        /// <field>
        /// Called after the RequireDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireDate_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("RequireDate"); }],
        /// <field>
        /// Called after the ReceiveDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveDate_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("ReceiveDate"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the LocationName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationName_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("LocationName"); }],
        /// <field>
        /// Called after the LotNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("LotNo"); }],
        /// <field>
        /// Called after the UnitWeight content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitWeight_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("UnitWeight"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("Group3"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("Group2"); }],
        /// <field>
        /// Called after the RequireQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireQuantity_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("RequireQuantity"); }],
        /// <field>
        /// Called after the ReceiveQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveQuantity_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("ReceiveQuantity"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the RequireTotalCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RequireTotalCost_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("RequireTotalCost"); }],
        /// <field>
        /// Called after the ReceiveTotalCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveTotalCost_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("ReceiveTotalCost"); }],
        /// <field>
        /// Called after the IsReceiveComplete content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsReceiveComplete_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("IsReceiveComplete"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Remark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remark_postRender: [$element, function () { return new lightSwitchApplication.ViewPurchaseOrderDetail().findContentItem("Remark"); }]
    });

    lightSwitchApplication.ViewReceiveFromPurchaseOrder.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewReceiveFromPurchaseOrder
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewReceiveFromPurchaseOrder,
            data: lightSwitchApplication.ViewReceiveFromPurchaseOrder,
            value: lightSwitchApplication.ViewReceiveFromPurchaseOrder
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewReceiveFromPurchaseOrder,
            data: lightSwitchApplication.ViewReceiveFromPurchaseOrder,
            value: lightSwitchApplication.ViewReceiveFromPurchaseOrder
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewReceiveFromPurchaseOrder,
            data: lightSwitchApplication.ViewReceiveFromPurchaseOrder,
            value: lightSwitchApplication.ViewReceiveFromPurchaseOrder
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewReceiveFromPurchaseOrder,
            data: lightSwitchApplication.ViewReceiveFromPurchaseOrder,
            value: lightSwitchApplication.ViewReceiveFromPurchaseOrder
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ViewReceiveFromPurchaseOrder,
            data: lightSwitchApplication.ViewReceiveFromPurchaseOrder,
            value: lightSwitchApplication.ViewReceiveFromPurchaseOrder
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewReceiveFromPurchaseOrder,
            data: lightSwitchApplication.ViewReceiveFromPurchaseOrder,
            value: lightSwitchApplication.ViewReceiveFromPurchaseOrder
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewReceiveFromPurchaseOrder
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewReceiveFromPurchaseOrder, {
        /// <field>
        /// Called when a new ViewReceiveFromPurchaseOrder screen is created.
        /// <br/>created(msls.application.ViewReceiveFromPurchaseOrder screen)
        /// </field>
        created: [lightSwitchApplication.ViewReceiveFromPurchaseOrder],
        /// <field>
        /// Called before changes on an active ViewReceiveFromPurchaseOrder screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewReceiveFromPurchaseOrder screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewReceiveFromPurchaseOrder],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewReceiveFromPurchaseOrder().findContentItem("Details"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.ViewReceiveFromPurchaseOrder().findContentItem("Group"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewReceiveFromPurchaseOrder().findContentItem("left"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.ViewReceiveFromPurchaseOrder().findContentItem("Group1"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.ViewReceiveFromPurchaseOrder().findContentItem("Group2"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.ViewReceiveFromPurchaseOrder().findContentItem("Group3"); }]
    });

    lightSwitchApplication.ViewSaleOrder.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewSaleOrder
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.ViewSaleOrder,
            value: lightSwitchApplication.ViewSaleOrder
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.ViewSaleOrder,
            value: lightSwitchApplication.SaleOrder
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: lightSwitchApplication.SaleOrder
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: lightSwitchApplication.SaleOrder
        },
        DocumentNo: {
            _$class: msls.ContentItem,
            _$name: "DocumentNo",
            _$parentName: "Group",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: String
        },
        SaleOrderDate: {
            _$class: msls.ContentItem,
            _$name: "SaleOrderDate",
            _$parentName: "Group",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: Date
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: lightSwitchApplication.SaleOrder
        },
        CustomerName: {
            _$class: msls.ContentItem,
            _$name: "CustomerName",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: String
        },
        ReferenceNo: {
            _$class: msls.ContentItem,
            _$name: "ReferenceNo",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: String
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: lightSwitchApplication.SaleOrder
        },
        TransportRouteName: {
            _$class: msls.ContentItem,
            _$name: "TransportRouteName",
            _$parentName: "Group3",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: String
        },
        Distance: {
            _$class: msls.ContentItem,
            _$name: "Distance",
            _$parentName: "Group3",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: Number
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: lightSwitchApplication.SaleOrder
        },
        Remarks: {
            _$class: msls.ContentItem,
            _$name: "Remarks",
            _$parentName: "Group2",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: String
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "Group2",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: String
        },
        PaymentTerm: {
            _$class: msls.ContentItem,
            _$name: "PaymentTerm",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: Number
        },
        PaymentStatus: {
            _$class: msls.ContentItem,
            _$name: "PaymentStatus",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrder,
            value: String
        },
        Group4: {
            _$class: msls.ContentItem,
            _$name: "Group4",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.ViewSaleOrder,
            value: lightSwitchApplication.ViewSaleOrder
        },
        SaleOrderDetails1: {
            _$class: msls.ContentItem,
            _$name: "SaleOrderDetails1",
            _$parentName: "Group4",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.ViewSaleOrder,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewSaleOrder,
                _$entry: {
                    elementType: lightSwitchApplication.SaleOrderDetail
                }
            }
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "SaleOrderDetails1",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrderDetail,
            value: lightSwitchApplication.SaleOrderDetail
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        LocationName: {
            _$class: msls.ContentItem,
            _$name: "LocationName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        LotNo: {
            _$class: msls.ContentItem,
            _$name: "LotNo",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        OrderQuantity: {
            _$class: msls.ContentItem,
            _$name: "OrderQuantity",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrderDetail,
            value: Number
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        MasterSalePrice: {
            _$class: msls.ContentItem,
            _$name: "MasterSalePrice",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        UnitCost: {
            _$class: msls.ContentItem,
            _$name: "UnitCost",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        SalePrice: {
            _$class: msls.ContentItem,
            _$name: "SalePrice",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ViewSaleOrder,
            data: lightSwitchApplication.SaleOrderDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewSaleOrder
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewSaleOrder, {
        /// <field>
        /// Called when a new ViewSaleOrder screen is created.
        /// <br/>created(msls.application.ViewSaleOrder screen)
        /// </field>
        created: [lightSwitchApplication.ViewSaleOrder],
        /// <field>
        /// Called before changes on an active ViewSaleOrder screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewSaleOrder screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewSaleOrder],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("left"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("Group"); }],
        /// <field>
        /// Called after the DocumentNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentNo_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("DocumentNo"); }],
        /// <field>
        /// Called after the SaleOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SaleOrderDate_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("SaleOrderDate"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("Group1"); }],
        /// <field>
        /// Called after the CustomerName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerName_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("CustomerName"); }],
        /// <field>
        /// Called after the ReferenceNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReferenceNo_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("ReferenceNo"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("Group3"); }],
        /// <field>
        /// Called after the TransportRouteName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TransportRouteName_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("TransportRouteName"); }],
        /// <field>
        /// Called after the Distance content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Distance_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("Distance"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("Group2"); }],
        /// <field>
        /// Called after the Remarks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remarks_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("Remarks"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the PaymentTerm content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaymentTerm_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("PaymentTerm"); }],
        /// <field>
        /// Called after the PaymentStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaymentStatus_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("PaymentStatus"); }],
        /// <field>
        /// Called after the Group4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group4_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("Group4"); }],
        /// <field>
        /// Called after the SaleOrderDetails1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SaleOrderDetails1_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("SaleOrderDetails1"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the LocationName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationName_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("LocationName"); }],
        /// <field>
        /// Called after the LotNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotNo_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("LotNo"); }],
        /// <field>
        /// Called after the OrderQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderQuantity_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("OrderQuantity"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the MasterSalePrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MasterSalePrice_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("MasterSalePrice"); }],
        /// <field>
        /// Called after the UnitCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitCost_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("UnitCost"); }],
        /// <field>
        /// Called after the SalePrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SalePrice_postRender: [$element, function () { return new lightSwitchApplication.ViewSaleOrder().findContentItem("SalePrice"); }]
    });

    lightSwitchApplication.ViewWorkOrder.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewWorkOrder
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.ViewWorkOrder,
            value: lightSwitchApplication.ViewWorkOrder
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.ViewWorkOrder,
            value: lightSwitchApplication.WorkOrder
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrder,
            value: lightSwitchApplication.WorkOrder
        },
        WorkOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderNumber",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrder,
            value: String
        },
        WorkOrderDate: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrder,
            value: Date
        },
        WorkOrderStatus: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderStatus",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrder,
            value: Boolean
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrder,
            value: lightSwitchApplication.WorkOrder
        },
        Machine: {
            _$class: msls.ContentItem,
            _$name: "Machine",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrder,
            value: lightSwitchApplication.Machine
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrder,
            value: String
        },
        WorkOrderIssueDetails1: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderIssueDetails1",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.ViewWorkOrder,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewWorkOrder,
                _$entry: {
                    elementType: lightSwitchApplication.WorkOrderIssueDetail
                }
            }
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "WorkOrderIssueDetails1",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: lightSwitchApplication.WorkOrderIssueDetail
        },
        ProductCode: {
            _$class: msls.ContentItem,
            _$name: "ProductCode",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        LocationName: {
            _$class: msls.ContentItem,
            _$name: "LocationName",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        IssueLot: {
            _$class: msls.ContentItem,
            _$name: "IssueLot",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        IssueQuantity: {
            _$class: msls.ContentItem,
            _$name: "IssueQuantity",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: Number
        },
        UOMName: {
            _$class: msls.ContentItem,
            _$name: "UOMName",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        IssueUnitCost: {
            _$class: msls.ContentItem,
            _$name: "IssueUnitCost",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderIssueDetail,
            value: String
        },
        WorkOrderProduces1: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderProduces1",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.ViewWorkOrder,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewWorkOrder,
                _$entry: {
                    elementType: lightSwitchApplication.WorkOrderProduce
                }
            }
        },
        RowTemplate5: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate5",
            _$parentName: "WorkOrderProduces1",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: lightSwitchApplication.WorkOrderProduce
        },
        ReceiveDate: {
            _$class: msls.ContentItem,
            _$name: "ReceiveDate",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: Date
        },
        ProductCode1: {
            _$class: msls.ContentItem,
            _$name: "ProductCode1",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        ProductName1: {
            _$class: msls.ContentItem,
            _$name: "ProductName1",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        LocationName1: {
            _$class: msls.ContentItem,
            _$name: "LocationName1",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        ProduceLot: {
            _$class: msls.ContentItem,
            _$name: "ProduceLot",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        OrderQuantity: {
            _$class: msls.ContentItem,
            _$name: "OrderQuantity",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: Number
        },
        ReceiveQuantity: {
            _$class: msls.ContentItem,
            _$name: "ReceiveQuantity",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: Number
        },
        UOMName1: {
            _$class: msls.ContentItem,
            _$name: "UOMName1",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        LotType: {
            _$class: msls.ContentItem,
            _$name: "LotType",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        ProductionCostFlag: {
            _$class: msls.ContentItem,
            _$name: "ProductionCostFlag",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: Boolean
        },
        UnitWeight: {
            _$class: msls.ContentItem,
            _$name: "UnitWeight",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: Number
        },
        ProduceCost: {
            _$class: msls.ContentItem,
            _$name: "ProduceCost",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        ReceiveCost: {
            _$class: msls.ContentItem,
            _$name: "ReceiveCost",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: String
        },
        isReceiveComplete: {
            _$class: msls.ContentItem,
            _$name: "isReceiveComplete",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.ViewWorkOrder,
            data: lightSwitchApplication.WorkOrderProduce,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewWorkOrder
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewWorkOrder, {
        /// <field>
        /// Called when a new ViewWorkOrder screen is created.
        /// <br/>created(msls.application.ViewWorkOrder screen)
        /// </field>
        created: [lightSwitchApplication.ViewWorkOrder],
        /// <field>
        /// Called before changes on an active ViewWorkOrder screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewWorkOrder screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewWorkOrder],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("left"); }],
        /// <field>
        /// Called after the WorkOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("WorkOrderNumber"); }],
        /// <field>
        /// Called after the WorkOrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderDate_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("WorkOrderDate"); }],
        /// <field>
        /// Called after the WorkOrderStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderStatus_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("WorkOrderStatus"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("right"); }],
        /// <field>
        /// Called after the Machine content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Machine_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("Machine"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the WorkOrderIssueDetails1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderIssueDetails1_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("WorkOrderIssueDetails1"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the ProductCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("ProductCode"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the LocationName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationName_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("LocationName"); }],
        /// <field>
        /// Called after the IssueLot content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueLot_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("IssueLot"); }],
        /// <field>
        /// Called after the IssueQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueQuantity_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("IssueQuantity"); }],
        /// <field>
        /// Called after the UOMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("UOMName"); }],
        /// <field>
        /// Called after the IssueUnitCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueUnitCost_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("IssueUnitCost"); }],
        /// <field>
        /// Called after the WorkOrderProduces1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderProduces1_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("WorkOrderProduces1"); }],
        /// <field>
        /// Called after the RowTemplate5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate5_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("RowTemplate5"); }],
        /// <field>
        /// Called after the ReceiveDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveDate_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("ReceiveDate"); }],
        /// <field>
        /// Called after the ProductCode1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCode1_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("ProductCode1"); }],
        /// <field>
        /// Called after the ProductName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName1_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("ProductName1"); }],
        /// <field>
        /// Called after the LocationName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationName1_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("LocationName1"); }],
        /// <field>
        /// Called after the ProduceLot content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProduceLot_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("ProduceLot"); }],
        /// <field>
        /// Called after the OrderQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderQuantity_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("OrderQuantity"); }],
        /// <field>
        /// Called after the ReceiveQuantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveQuantity_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("ReceiveQuantity"); }],
        /// <field>
        /// Called after the UOMName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UOMName1_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("UOMName1"); }],
        /// <field>
        /// Called after the LotType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LotType_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("LotType"); }],
        /// <field>
        /// Called after the ProductionCostFlag content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductionCostFlag_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("ProductionCostFlag"); }],
        /// <field>
        /// Called after the UnitWeight content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitWeight_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("UnitWeight"); }],
        /// <field>
        /// Called after the ProduceCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProduceCost_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("ProduceCost"); }],
        /// <field>
        /// Called after the ReceiveCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReceiveCost_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("ReceiveCost"); }],
        /// <field>
        /// Called after the isReceiveComplete content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        isReceiveComplete_postRender: [$element, function () { return new lightSwitchApplication.ViewWorkOrder().findContentItem("isReceiveComplete"); }]
    });

}(msls.application));