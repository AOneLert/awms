/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Product, {
        /// <field>
        /// Called when a new product is created.
        /// <br/>created(msls.application.Product entity)
        /// </field>
        created: [lightSwitchApplication.Product]
    });

    msls._addEntryPoints(lightSwitchApplication.ProductCategory, {
        /// <field>
        /// Called when a new productCategory is created.
        /// <br/>created(msls.application.ProductCategory entity)
        /// </field>
        created: [lightSwitchApplication.ProductCategory]
    });

    msls._addEntryPoints(lightSwitchApplication.Customer, {
        /// <field>
        /// Called when a new customer is created.
        /// <br/>created(msls.application.Customer entity)
        /// </field>
        created: [lightSwitchApplication.Customer]
    });

    msls._addEntryPoints(lightSwitchApplication.Supplier, {
        /// <field>
        /// Called when a new supplier is created.
        /// <br/>created(msls.application.Supplier entity)
        /// </field>
        created: [lightSwitchApplication.Supplier]
    });

    msls._addEntryPoints(lightSwitchApplication.StockCheckDetail, {
        /// <field>
        /// Called when a new stockCheckDetail is created.
        /// <br/>created(msls.application.StockCheckDetail entity)
        /// </field>
        created: [lightSwitchApplication.StockCheckDetail]
    });

    msls._addEntryPoints(lightSwitchApplication.StockCheck, {
        /// <field>
        /// Called when a new stockCheck is created.
        /// <br/>created(msls.application.StockCheck entity)
        /// </field>
        created: [lightSwitchApplication.StockCheck]
    });

    msls._addEntryPoints(lightSwitchApplication.Location, {
        /// <field>
        /// Called when a new location is created.
        /// <br/>created(msls.application.Location entity)
        /// </field>
        created: [lightSwitchApplication.Location]
    });

    msls._addEntryPoints(lightSwitchApplication.ProductGroup, {
        /// <field>
        /// Called when a new productGroup is created.
        /// <br/>created(msls.application.ProductGroup entity)
        /// </field>
        created: [lightSwitchApplication.ProductGroup]
    });

    msls._addEntryPoints(lightSwitchApplication.UnitOfMeasure, {
        /// <field>
        /// Called when a new unitOfMeasure is created.
        /// <br/>created(msls.application.UnitOfMeasure entity)
        /// </field>
        created: [lightSwitchApplication.UnitOfMeasure]
    });

    msls._addEntryPoints(lightSwitchApplication.SupplierGroup, {
        /// <field>
        /// Called when a new supplierGroup is created.
        /// <br/>created(msls.application.SupplierGroup entity)
        /// </field>
        created: [lightSwitchApplication.SupplierGroup]
    });

    msls._addEntryPoints(lightSwitchApplication.CustomerGroup, {
        /// <field>
        /// Called when a new customerGroup is created.
        /// <br/>created(msls.application.CustomerGroup entity)
        /// </field>
        created: [lightSwitchApplication.CustomerGroup]
    });

    msls._addEntryPoints(lightSwitchApplication.TransportRoute, {
        /// <field>
        /// Called when a new transportRoute is created.
        /// <br/>created(msls.application.TransportRoute entity)
        /// </field>
        created: [lightSwitchApplication.TransportRoute]
    });

    msls._addEntryPoints(lightSwitchApplication.PaymentType, {
        /// <field>
        /// Called when a new paymentType is created.
        /// <br/>created(msls.application.PaymentType entity)
        /// </field>
        created: [lightSwitchApplication.PaymentType]
    });

    msls._addEntryPoints(lightSwitchApplication.Bank, {
        /// <field>
        /// Called when a new bank is created.
        /// <br/>created(msls.application.Bank entity)
        /// </field>
        created: [lightSwitchApplication.Bank]
    });

    msls._addEntryPoints(lightSwitchApplication.Machine, {
        /// <field>
        /// Called when a new machine is created.
        /// <br/>created(msls.application.Machine entity)
        /// </field>
        created: [lightSwitchApplication.Machine]
    });

    msls._addEntryPoints(lightSwitchApplication.Worker, {
        /// <field>
        /// Called when a new worker is created.
        /// <br/>created(msls.application.Worker entity)
        /// </field>
        created: [lightSwitchApplication.Worker]
    });

    msls._addEntryPoints(lightSwitchApplication.Package, {
        /// <field>
        /// Called when a new package is created.
        /// <br/>created(msls.application.Package entity)
        /// </field>
        created: [lightSwitchApplication.Package]
    });

    msls._addEntryPoints(lightSwitchApplication.Company, {
        /// <field>
        /// Called when a new company is created.
        /// <br/>created(msls.application.Company entity)
        /// </field>
        created: [lightSwitchApplication.Company]
    });

    msls._addEntryPoints(lightSwitchApplication.ProductReceiveBalanceForward, {
        /// <field>
        /// Called when a new productReceiveBalanceForward is created.
        /// <br/>created(msls.application.ProductReceiveBalanceForward entity)
        /// </field>
        created: [lightSwitchApplication.ProductReceiveBalanceForward]
    });

    msls._addEntryPoints(lightSwitchApplication.ProductReceiveBalanceForwardDetail, {
        /// <field>
        /// Called when a new productReceiveBalanceForwardDetail is created.
        /// <br/>created(msls.application.ProductReceiveBalanceForwardDetail entity)
        /// </field>
        created: [lightSwitchApplication.ProductReceiveBalanceForwardDetail]
    });

    msls._addEntryPoints(lightSwitchApplication.StockOnHand, {
        /// <field>
        /// Called when a new stockOnHand is created.
        /// <br/>created(msls.application.StockOnHand entity)
        /// </field>
        created: [lightSwitchApplication.StockOnHand]
    });

    msls._addEntryPoints(lightSwitchApplication.StockTransaction, {
        /// <field>
        /// Called when a new stockTransaction is created.
        /// <br/>created(msls.application.StockTransaction entity)
        /// </field>
        created: [lightSwitchApplication.StockTransaction]
    });

    msls._addEntryPoints(lightSwitchApplication.StockTransfer, {
        /// <field>
        /// Called when a new stockTransfer is created.
        /// <br/>created(msls.application.StockTransfer entity)
        /// </field>
        created: [lightSwitchApplication.StockTransfer]
    });

    msls._addEntryPoints(lightSwitchApplication.StockAdjustDetail, {
        /// <field>
        /// Called when a new stockAdjustDetail is created.
        /// <br/>created(msls.application.StockAdjustDetail entity)
        /// </field>
        created: [lightSwitchApplication.StockAdjustDetail]
    });

    msls._addEntryPoints(lightSwitchApplication.StockAdjust, {
        /// <field>
        /// Called when a new stockAdjust is created.
        /// <br/>created(msls.application.StockAdjust entity)
        /// </field>
        created: [lightSwitchApplication.StockAdjust]
    });

    msls._addEntryPoints(lightSwitchApplication.SaleOrder, {
        /// <field>
        /// Called when a new saleOrder is created.
        /// <br/>created(msls.application.SaleOrder entity)
        /// </field>
        created: [lightSwitchApplication.SaleOrder]
    });

    msls._addEntryPoints(lightSwitchApplication.SaleOrderDetail, {
        /// <field>
        /// Called when a new saleOrderDetail is created.
        /// <br/>created(msls.application.SaleOrderDetail entity)
        /// </field>
        created: [lightSwitchApplication.SaleOrderDetail]
    });

    msls._addEntryPoints(lightSwitchApplication.PurchaseOrder, {
        /// <field>
        /// Called when a new purchaseOrder is created.
        /// <br/>created(msls.application.PurchaseOrder entity)
        /// </field>
        created: [lightSwitchApplication.PurchaseOrder]
    });

    msls._addEntryPoints(lightSwitchApplication.PurchaseOrderDetail, {
        /// <field>
        /// Called when a new purchaseOrderDetail is created.
        /// <br/>created(msls.application.PurchaseOrderDetail entity)
        /// </field>
        created: [lightSwitchApplication.PurchaseOrderDetail]
    });

    msls._addEntryPoints(lightSwitchApplication.WorkOrder, {
        /// <field>
        /// Called when a new workOrder is created.
        /// <br/>created(msls.application.WorkOrder entity)
        /// </field>
        created: [lightSwitchApplication.WorkOrder]
    });

    msls._addEntryPoints(lightSwitchApplication.WorkOrderIssueDetail, {
        /// <field>
        /// Called when a new workOrderIssueDetail is created.
        /// <br/>created(msls.application.WorkOrderIssueDetail entity)
        /// </field>
        created: [lightSwitchApplication.WorkOrderIssueDetail]
    });

    msls._addEntryPoints(lightSwitchApplication.WorkOrderProduce, {
        /// <field>
        /// Called when a new workOrderProduce is created.
        /// <br/>created(msls.application.WorkOrderProduce entity)
        /// </field>
        created: [lightSwitchApplication.WorkOrderProduce]
    });

    msls._addEntryPoints(lightSwitchApplication.Transaction, {
        /// <field>
        /// Called when a new transaction is created.
        /// <br/>created(msls.application.Transaction entity)
        /// </field>
        created: [lightSwitchApplication.Transaction]
    });

    msls._addEntryPoints(lightSwitchApplication.StockOnHandHistory, {
        /// <field>
        /// Called when a new stockOnHandHistory is created.
        /// <br/>created(msls.application.StockOnHandHistory entity)
        /// </field>
        created: [lightSwitchApplication.StockOnHandHistory]
    });

}(msls.application));
