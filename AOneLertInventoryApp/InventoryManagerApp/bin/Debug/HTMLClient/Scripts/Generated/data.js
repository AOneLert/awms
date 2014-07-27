/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Product(entitySet) {
        /// <summary>
        /// Represents the Product entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this product.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this product.
        /// </field>
        /// <field name="ProductCode" type="String">
        /// Gets or sets the productCode for this product.
        /// </field>
        /// <field name="ProductName" type="String">
        /// Gets or sets the productName for this product.
        /// </field>
        /// <field name="ProductCategory" type="msls.application.ProductCategory">
        /// Gets or sets the productCategory for this product.
        /// </field>
        /// <field name="UnitPrice" type="String">
        /// Gets or sets the unitPrice for this product.
        /// </field>
        /// <field name="ReorderLevelFlag" type="Boolean">
        /// Gets or sets the reorderLevelFlag for this product.
        /// </field>
        /// <field name="ReorderLevel" type="Number">
        /// Gets or sets the reorderLevel for this product.
        /// </field>
        /// <field name="Discontinued" type="Boolean">
        /// Gets or sets the discontinued for this product.
        /// </field>
        /// <field name="ProductGroup" type="msls.application.ProductGroup">
        /// Gets or sets the productGroup for this product.
        /// </field>
        /// <field name="Location" type="msls.application.Location">
        /// Gets or sets the location for this product.
        /// </field>
        /// <field name="UnitOfMeasure" type="msls.application.UnitOfMeasure">
        /// Gets or sets the unitOfMeasure for this product.
        /// </field>
        /// <field name="AgingControlFlag" type="Boolean">
        /// Gets or sets the agingControlFlag for this product.
        /// </field>
        /// <field name="AgingControlDays" type="Number">
        /// Gets or sets the agingControlDays for this product.
        /// </field>
        /// <field name="LotControlFlag" type="Boolean">
        /// Gets or sets the lotControlFlag for this product.
        /// </field>
        /// <field name="LotType" type="String">
        /// Gets or sets the lotType for this product.
        /// </field>
        /// <field name="CarryingCostFlag" type="Boolean">
        /// Gets or sets the carryingCostFlag for this product.
        /// </field>
        /// <field name="CarryingCost" type="String">
        /// Gets or sets the carryingCost for this product.
        /// </field>
        /// <field name="ProductionCostFlag" type="Boolean">
        /// Gets or sets the productionCostFlag for this product.
        /// </field>
        /// <field name="UnitWeight" type="Number">
        /// Gets or sets the unitWeight for this product.
        /// </field>
        /// <field name="ProductReceiveBalanceForwardDetail" type="msls.EntityCollection" elementType="msls.application.ProductReceiveBalanceForwardDetail">
        /// Gets the productReceiveBalanceForwardDetail for this product.
        /// </field>
        /// <field name="StockOnHands" type="msls.EntityCollection" elementType="msls.application.StockOnHand">
        /// Gets the stockOnHands for this product.
        /// </field>
        /// <field name="StockAdjustDetail" type="msls.EntityCollection" elementType="msls.application.StockAdjustDetail">
        /// Gets the stockAdjustDetail for this product.
        /// </field>
        /// <field name="SaleOrderDetails" type="msls.EntityCollection" elementType="msls.application.SaleOrderDetail">
        /// Gets the saleOrderDetails for this product.
        /// </field>
        /// <field name="PurchaseOrderDetails" type="msls.EntityCollection" elementType="msls.application.PurchaseOrderDetail">
        /// Gets the purchaseOrderDetails for this product.
        /// </field>
        /// <field name="ReceiveFromPurchaseOrderDetails" type="msls.EntityCollection" elementType="msls.application.ReceiveFromPurchaseOrderDetail">
        /// Gets the receiveFromPurchaseOrderDetails for this product.
        /// </field>
        /// <field name="WorkOrderIssueDetail" type="msls.EntityCollection" elementType="msls.application.WorkOrderIssueDetail">
        /// Gets the workOrderIssueDetail for this product.
        /// </field>
        /// <field name="WorkOrderProduces" type="msls.EntityCollection" elementType="msls.application.WorkOrderProduce">
        /// Gets the workOrderProduces for this product.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this product.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this product.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this product.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this product.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this product.
        /// </field>
        /// <field name="details" type="msls.application.Product.Details">
        /// Gets the details for this product.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProductCategory(entitySet) {
        /// <summary>
        /// Represents the ProductCategory entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this productCategory.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this productCategory.
        /// </field>
        /// <field name="ProductCategoryName" type="String">
        /// Gets or sets the productCategoryName for this productCategory.
        /// </field>
        /// <field name="Products" type="msls.EntityCollection" elementType="msls.application.Product">
        /// Gets the products for this productCategory.
        /// </field>
        /// <field name="Discontinued" type="Boolean">
        /// Gets or sets the discontinued for this productCategory.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this productCategory.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this productCategory.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this productCategory.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this productCategory.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this productCategory.
        /// </field>
        /// <field name="details" type="msls.application.ProductCategory.Details">
        /// Gets the details for this productCategory.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Employee(entitySet) {
        /// <summary>
        /// Represents the Employee entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employee.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this employee.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this employee.
        /// </field>
        /// <field name="FirstName" type="String">
        /// Gets or sets the firstName for this employee.
        /// </field>
        /// <field name="UserName" type="String">
        /// This is the user name of the 
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this employee.
        /// </field>
        /// <field name="Current" type="Boolean">
        /// Gets or sets the current for this employee.
        /// </field>
        /// <field name="Orders" type="msls.EntityCollection" elementType="msls.application.Order">
        /// Gets the orders for this employee.
        /// </field>
        /// <field name="StockChecks" type="msls.EntityCollection" elementType="msls.application.StockCheck">
        /// Gets the stockChecks for this employee.
        /// </field>
        /// <field name="ProductSubscribers" type="msls.EntityCollection" elementType="msls.application.ProductSubscriber">
        /// Gets the productSubscribers for this employee.
        /// </field>
        /// <field name="WorkOrders" type="msls.EntityCollection" elementType="msls.application.WorkOrder">
        /// Gets the workOrders for this employee.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this employee.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this employee.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this employee.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this employee.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this employee.
        /// </field>
        /// <field name="details" type="msls.application.Employee.Details">
        /// Gets the details for this employee.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Order(entitySet) {
        /// <summary>
        /// Represents the Order entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this order.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this order.
        /// </field>
        /// <field name="OrderReference" type="String">
        /// Gets or sets the orderReference for this order.
        /// </field>
        /// <field name="OrderDate" type="Date">
        /// Gets or sets the orderDate for this order.
        /// </field>
        /// <field name="Customer" type="msls.application.Customer">
        /// Gets or sets the customer for this order.
        /// </field>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this order.
        /// </field>
        /// <field name="OrderPaidFor" type="Boolean">
        /// Gets or sets the orderPaidFor for this order.
        /// </field>
        /// <field name="DatePaid" type="Date">
        /// Gets or sets the datePaid for this order.
        /// </field>
        /// <field name="OrderDetails" type="msls.EntityCollection" elementType="msls.application.OrderDetail">
        /// Gets the orderDetails for this order.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this order.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this order.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this order.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this order.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this order.
        /// </field>
        /// <field name="details" type="msls.application.Order.Details">
        /// Gets the details for this order.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function OrderDetail(entitySet) {
        /// <summary>
        /// Represents the OrderDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this orderDetail.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this orderDetail.
        /// </field>
        /// <field name="Order" type="msls.application.Order">
        /// Gets or sets the order for this orderDetail.
        /// </field>
        /// <field name="UnitsOrdered" type="Number">
        /// Gets or sets the unitsOrdered for this orderDetail.
        /// </field>
        /// <field name="UnitsShipped" type="Number">
        /// Gets or sets the unitsShipped for this orderDetail.
        /// </field>
        /// <field name="DateOrderShipped" type="Date">
        /// Gets or sets the dateOrderShipped for this orderDetail.
        /// </field>
        /// <field name="ShippingMethod" type="msls.application.ShippingMethod">
        /// Gets or sets the shippingMethod for this orderDetail.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this orderDetail.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this orderDetail.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this orderDetail.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this orderDetail.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this orderDetail.
        /// </field>
        /// <field name="details" type="msls.application.OrderDetail.Details">
        /// Gets the details for this orderDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Customer(entitySet) {
        /// <summary>
        /// Represents the Customer entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this customer.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this customer.
        /// </field>
        /// <field name="CustomerName" type="String">
        /// Gets or sets the customerName for this customer.
        /// </field>
        /// <field name="Address1" type="String">
        /// Gets or sets the address1 for this customer.
        /// </field>
        /// <field name="Address2" type="String">
        /// Gets or sets the address2 for this customer.
        /// </field>
        /// <field name="ContactName" type="String">
        /// Gets or sets the contactName for this customer.
        /// </field>
        /// <field name="TaxID" type="String">
        /// Gets or sets the taxID for this customer.
        /// </field>
        /// <field name="CreditTerm" type="Number">
        /// Gets or sets the creditTerm for this customer.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this customer.
        /// </field>
        /// <field name="Phone" type="String">
        /// Gets or sets the phone for this customer.
        /// </field>
        /// <field name="Fax" type="String">
        /// Gets or sets the fax for this customer.
        /// </field>
        /// <field name="Website" type="String">
        /// Gets or sets the website for this customer.
        /// </field>
        /// <field name="RegisterDate" type="Date">
        /// Gets or sets the registerDate for this customer.
        /// </field>
        /// <field name="Orders" type="msls.EntityCollection" elementType="msls.application.Order">
        /// Gets the orders for this customer.
        /// </field>
        /// <field name="CustomerGroup" type="msls.application.CustomerGroup">
        /// Gets or sets the customerGroup for this customer.
        /// </field>
        /// <field name="Latitude" type="Number">
        /// Gets or sets the latitude for this customer.
        /// </field>
        /// <field name="Longitude" type="Number">
        /// Gets or sets the longitude for this customer.
        /// </field>
        /// <field name="TransportRoute" type="msls.application.TransportRoute">
        /// Gets or sets the transportRoute for this customer.
        /// </field>
        /// <field name="Discontinued" type="Boolean">
        /// Gets or sets the discontinued for this customer.
        /// </field>
        /// <field name="SaleOrders" type="msls.EntityCollection" elementType="msls.application.SaleOrder">
        /// Gets the saleOrders for this customer.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this customer.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this customer.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this customer.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this customer.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this customer.
        /// </field>
        /// <field name="details" type="msls.application.Customer.Details">
        /// Gets the details for this customer.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Supplier(entitySet) {
        /// <summary>
        /// Represents the Supplier entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this supplier.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this supplier.
        /// </field>
        /// <field name="SupplierName" type="String">
        /// Gets or sets the supplierName for this supplier.
        /// </field>
        /// <field name="Address1" type="String">
        /// Gets or sets the address1 for this supplier.
        /// </field>
        /// <field name="Address2" type="String">
        /// Gets or sets the address2 for this supplier.
        /// </field>
        /// <field name="ContactName" type="String">
        /// Gets or sets the contactName for this supplier.
        /// </field>
        /// <field name="TaxID" type="String">
        /// Gets or sets the taxID for this supplier.
        /// </field>
        /// <field name="CreditTerm" type="Number">
        /// Gets or sets the creditTerm for this supplier.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this supplier.
        /// </field>
        /// <field name="Phone" type="String">
        /// Gets or sets the phone for this supplier.
        /// </field>
        /// <field name="Fax" type="String">
        /// Gets or sets the fax for this supplier.
        /// </field>
        /// <field name="Website" type="String">
        /// Gets or sets the website for this supplier.
        /// </field>
        /// <field name="RegisterDate" type="Date">
        /// Gets or sets the registerDate for this supplier.
        /// </field>
        /// <field name="Latitude" type="Number">
        /// Gets or sets the latitude for this supplier.
        /// </field>
        /// <field name="Longitude" type="Number">
        /// Gets or sets the longitude for this supplier.
        /// </field>
        /// <field name="SupplierGroup" type="msls.application.SupplierGroup">
        /// Gets or sets the supplierGroup for this supplier.
        /// </field>
        /// <field name="Discontinued" type="Boolean">
        /// Gets or sets the discontinued for this supplier.
        /// </field>
        /// <field name="PurchaseOrders" type="msls.EntityCollection" elementType="msls.application.PurchaseOrder">
        /// Gets the purchaseOrders for this supplier.
        /// </field>
        /// <field name="ReceiveFromPurchaseOrders" type="msls.EntityCollection" elementType="msls.application.ReceiveFromPurchaseOrder">
        /// Gets the receiveFromPurchaseOrders for this supplier.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this supplier.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this supplier.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this supplier.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this supplier.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this supplier.
        /// </field>
        /// <field name="details" type="msls.application.Supplier.Details">
        /// Gets the details for this supplier.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ShippingMethod(entitySet) {
        /// <summary>
        /// Represents the ShippingMethod entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this shippingMethod.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this shippingMethod.
        /// </field>
        /// <field name="Shipper" type="String">
        /// Gets or sets the shipper for this shippingMethod.
        /// </field>
        /// <field name="OrderDetails" type="msls.EntityCollection" elementType="msls.application.OrderDetail">
        /// Gets the orderDetails for this shippingMethod.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this shippingMethod.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this shippingMethod.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this shippingMethod.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this shippingMethod.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this shippingMethod.
        /// </field>
        /// <field name="details" type="msls.application.ShippingMethod.Details">
        /// Gets the details for this shippingMethod.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function StockCheckDetail(entitySet) {
        /// <summary>
        /// Represents the StockCheckDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this stockCheckDetail.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this stockCheckDetail.
        /// </field>
        /// <field name="StockCheck" type="msls.application.StockCheck">
        /// Gets or sets the stockCheck for this stockCheckDetail.
        /// </field>
        /// <field name="UnitsExpected" type="Number">
        /// Gets or sets the unitsExpected for this stockCheckDetail.
        /// </field>
        /// <field name="UnitsFound" type="Number">
        /// Gets or sets the unitsFound for this stockCheckDetail.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this stockCheckDetail.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this stockCheckDetail.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this stockCheckDetail.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this stockCheckDetail.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this stockCheckDetail.
        /// </field>
        /// <field name="details" type="msls.application.StockCheckDetail.Details">
        /// Gets the details for this stockCheckDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function StockCheck(entitySet) {
        /// <summary>
        /// Represents the StockCheck entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this stockCheck.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this stockCheck.
        /// </field>
        /// <field name="StockCheckDate" type="Date">
        /// Gets or sets the stockCheckDate for this stockCheck.
        /// </field>
        /// <field name="StockCheckBy" type="msls.application.Employee">
        /// Gets or sets the stockCheckBy for this stockCheck.
        /// </field>
        /// <field name="StockCheckDetails" type="msls.EntityCollection" elementType="msls.application.StockCheckDetail">
        /// Gets the stockCheckDetails for this stockCheck.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this stockCheck.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this stockCheck.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this stockCheck.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this stockCheck.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this stockCheck.
        /// </field>
        /// <field name="details" type="msls.application.StockCheck.Details">
        /// Gets the details for this stockCheck.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProductSubscriber(entitySet) {
        /// <summary>
        /// Represents the ProductSubscriber entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this productSubscriber.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this productSubscriber.
        /// </field>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this productSubscriber.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this productSubscriber.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this productSubscriber.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this productSubscriber.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this productSubscriber.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this productSubscriber.
        /// </field>
        /// <field name="details" type="msls.application.ProductSubscriber.Details">
        /// Gets the details for this productSubscriber.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Location(entitySet) {
        /// <summary>
        /// Represents the Location entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this location.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this location.
        /// </field>
        /// <field name="LocationName" type="String">
        /// Gets or sets the locationName for this location.
        /// </field>
        /// <field name="Width" type="Number">
        /// Gets or sets the width for this location.
        /// </field>
        /// <field name="Height" type="Number">
        /// Gets or sets the height for this location.
        /// </field>
        /// <field name="Length" type="Number">
        /// Gets or sets the length for this location.
        /// </field>
        /// <field name="Discontinued" type="Boolean">
        /// Gets or sets the discontinued for this location.
        /// </field>
        /// <field name="Products" type="msls.EntityCollection" elementType="msls.application.Product">
        /// Gets the products for this location.
        /// </field>
        /// <field name="ProductReceiveBalanceForwardDetail" type="msls.EntityCollection" elementType="msls.application.ProductReceiveBalanceForwardDetail">
        /// Gets the productReceiveBalanceForwardDetail for this location.
        /// </field>
        /// <field name="StockOnHands" type="msls.EntityCollection" elementType="msls.application.StockOnHand">
        /// Gets the stockOnHands for this location.
        /// </field>
        /// <field name="StockAdjustDetails" type="msls.EntityCollection" elementType="msls.application.StockAdjustDetail">
        /// Gets the stockAdjustDetails for this location.
        /// </field>
        /// <field name="SaleOrderDetails" type="msls.EntityCollection" elementType="msls.application.SaleOrderDetail">
        /// Gets the saleOrderDetails for this location.
        /// </field>
        /// <field name="ReceiveFromPurchaseOrderDetails" type="msls.EntityCollection" elementType="msls.application.ReceiveFromPurchaseOrderDetail">
        /// Gets the receiveFromPurchaseOrderDetails for this location.
        /// </field>
        /// <field name="PurchaseOrderDetails" type="msls.EntityCollection" elementType="msls.application.PurchaseOrderDetail">
        /// Gets the purchaseOrderDetails for this location.
        /// </field>
        /// <field name="WorkOrderIssueDetail" type="msls.EntityCollection" elementType="msls.application.WorkOrderIssueDetail">
        /// Gets the workOrderIssueDetail for this location.
        /// </field>
        /// <field name="WorkOrderProduces" type="msls.EntityCollection" elementType="msls.application.WorkOrderProduce">
        /// Gets the workOrderProduces for this location.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this location.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this location.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this location.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this location.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this location.
        /// </field>
        /// <field name="details" type="msls.application.Location.Details">
        /// Gets the details for this location.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProductGroup(entitySet) {
        /// <summary>
        /// Represents the ProductGroup entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this productGroup.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this productGroup.
        /// </field>
        /// <field name="ProductGroupName" type="String">
        /// Gets or sets the productGroupName for this productGroup.
        /// </field>
        /// <field name="Discontinued" type="Boolean">
        /// Gets or sets the discontinued for this productGroup.
        /// </field>
        /// <field name="Products" type="msls.EntityCollection" elementType="msls.application.Product">
        /// Gets the products for this productGroup.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this productGroup.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this productGroup.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this productGroup.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this productGroup.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this productGroup.
        /// </field>
        /// <field name="details" type="msls.application.ProductGroup.Details">
        /// Gets the details for this productGroup.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function UnitOfMeasure(entitySet) {
        /// <summary>
        /// Represents the UnitOfMeasure entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this unitOfMeasure.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this unitOfMeasure.
        /// </field>
        /// <field name="UOMName" type="String">
        /// Gets or sets the uOMName for this unitOfMeasure.
        /// </field>
        /// <field name="Products" type="msls.EntityCollection" elementType="msls.application.Product">
        /// Gets the products for this unitOfMeasure.
        /// </field>
        /// <field name="Discontinued" type="Boolean">
        /// Gets or sets the discontinued for this unitOfMeasure.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this unitOfMeasure.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this unitOfMeasure.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this unitOfMeasure.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this unitOfMeasure.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this unitOfMeasure.
        /// </field>
        /// <field name="details" type="msls.application.UnitOfMeasure.Details">
        /// Gets the details for this unitOfMeasure.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function SupplierGroup(entitySet) {
        /// <summary>
        /// Represents the SupplierGroup entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this supplierGroup.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this supplierGroup.
        /// </field>
        /// <field name="SupplierGroupName" type="String">
        /// Gets or sets the supplierGroupName for this supplierGroup.
        /// </field>
        /// <field name="Suppliers" type="msls.EntityCollection" elementType="msls.application.Supplier">
        /// Gets the suppliers for this supplierGroup.
        /// </field>
        /// <field name="Discontinued" type="Boolean">
        /// Gets or sets the discontinued for this supplierGroup.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this supplierGroup.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this supplierGroup.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this supplierGroup.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this supplierGroup.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this supplierGroup.
        /// </field>
        /// <field name="details" type="msls.application.SupplierGroup.Details">
        /// Gets the details for this supplierGroup.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function CustomerGroup(entitySet) {
        /// <summary>
        /// Represents the CustomerGroup entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this customerGroup.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this customerGroup.
        /// </field>
        /// <field name="CustomerGroupName" type="String">
        /// Gets or sets the customerGroupName for this customerGroup.
        /// </field>
        /// <field name="Customers" type="msls.EntityCollection" elementType="msls.application.Customer">
        /// Gets the customers for this customerGroup.
        /// </field>
        /// <field name="Discontinued" type="Boolean">
        /// Gets or sets the discontinued for this customerGroup.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this customerGroup.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this customerGroup.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this customerGroup.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this customerGroup.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this customerGroup.
        /// </field>
        /// <field name="details" type="msls.application.CustomerGroup.Details">
        /// Gets the details for this customerGroup.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TransportRoute(entitySet) {
        /// <summary>
        /// Represents the TransportRoute entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this transportRoute.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this transportRoute.
        /// </field>
        /// <field name="TransportRouteName" type="String">
        /// Gets or sets the transportRouteName for this transportRoute.
        /// </field>
        /// <field name="Customers" type="msls.EntityCollection" elementType="msls.application.Customer">
        /// Gets the customers for this transportRoute.
        /// </field>
        /// <field name="Distance" type="Number">
        /// Gets or sets the distance for this transportRoute.
        /// </field>
        /// <field name="Discontinued" type="Boolean">
        /// Gets or sets the discontinued for this transportRoute.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this transportRoute.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this transportRoute.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this transportRoute.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this transportRoute.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this transportRoute.
        /// </field>
        /// <field name="details" type="msls.application.TransportRoute.Details">
        /// Gets the details for this transportRoute.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function PaymentType(entitySet) {
        /// <summary>
        /// Represents the PaymentType entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this paymentType.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this paymentType.
        /// </field>
        /// <field name="PaymentTypeName" type="String">
        /// Gets or sets the paymentTypeName for this paymentType.
        /// </field>
        /// <field name="Discontinued" type="Boolean">
        /// Gets or sets the discontinued for this paymentType.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this paymentType.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this paymentType.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this paymentType.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this paymentType.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this paymentType.
        /// </field>
        /// <field name="details" type="msls.application.PaymentType.Details">
        /// Gets the details for this paymentType.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Bank(entitySet) {
        /// <summary>
        /// Represents the Bank entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this bank.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this bank.
        /// </field>
        /// <field name="BankCode" type="String">
        /// Gets or sets the bankCode for this bank.
        /// </field>
        /// <field name="BankName" type="String">
        /// Gets or sets the bankName for this bank.
        /// </field>
        /// <field name="Discontinued" type="Boolean">
        /// Gets or sets the discontinued for this bank.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this bank.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this bank.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this bank.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this bank.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this bank.
        /// </field>
        /// <field name="details" type="msls.application.Bank.Details">
        /// Gets the details for this bank.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Machine(entitySet) {
        /// <summary>
        /// Represents the Machine entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this machine.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this machine.
        /// </field>
        /// <field name="MachineName" type="String">
        /// Gets or sets the machineName for this machine.
        /// </field>
        /// <field name="Discontinued" type="Boolean">
        /// Gets or sets the discontinued for this machine.
        /// </field>
        /// <field name="WorkOrders" type="msls.EntityCollection" elementType="msls.application.WorkOrder">
        /// Gets the workOrders for this machine.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this machine.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this machine.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this machine.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this machine.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this machine.
        /// </field>
        /// <field name="details" type="msls.application.Machine.Details">
        /// Gets the details for this machine.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Worker(entitySet) {
        /// <summary>
        /// Represents the Worker entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this worker.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this worker.
        /// </field>
        /// <field name="WorkerName" type="String">
        /// Gets or sets the workerName for this worker.
        /// </field>
        /// <field name="HireDate" type="Date">
        /// Gets or sets the hireDate for this worker.
        /// </field>
        /// <field name="Discontinued" type="Boolean">
        /// Gets or sets the discontinued for this worker.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this worker.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this worker.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this worker.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this worker.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this worker.
        /// </field>
        /// <field name="details" type="msls.application.Worker.Details">
        /// Gets the details for this worker.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Package(entitySet) {
        /// <summary>
        /// Represents the Package entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this package.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this package.
        /// </field>
        /// <field name="PackageName" type="String">
        /// Gets or sets the packageName for this package.
        /// </field>
        /// <field name="Discontinued" type="Boolean">
        /// Gets or sets the discontinued for this package.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this package.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this package.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this package.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this package.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this package.
        /// </field>
        /// <field name="details" type="msls.application.Package.Details">
        /// Gets the details for this package.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Company(entitySet) {
        /// <summary>
        /// Represents the Company entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this company.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this company.
        /// </field>
        /// <field name="CompanyNameTH" type="String">
        /// Gets or sets the companyNameTH for this company.
        /// </field>
        /// <field name="CompanyNameEN" type="String">
        /// Gets or sets the companyNameEN for this company.
        /// </field>
        /// <field name="AddressTH1" type="String">
        /// Gets or sets the addressTH1 for this company.
        /// </field>
        /// <field name="AddressTH2" type="String">
        /// Gets or sets the addressTH2 for this company.
        /// </field>
        /// <field name="AddressEN1" type="String">
        /// Gets or sets the addressEN1 for this company.
        /// </field>
        /// <field name="AddressEN2" type="String">
        /// Gets or sets the addressEN2 for this company.
        /// </field>
        /// <field name="TaxID" type="String">
        /// Gets or sets the taxID for this company.
        /// </field>
        /// <field name="Phone" type="String">
        /// Gets or sets the phone for this company.
        /// </field>
        /// <field name="Fax" type="String">
        /// Gets or sets the fax for this company.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this company.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this company.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this company.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this company.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this company.
        /// </field>
        /// <field name="details" type="msls.application.Company.Details">
        /// Gets the details for this company.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProductReceiveBalanceForward(entitySet) {
        /// <summary>
        /// Represents the ProductReceiveBalanceForward entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this productReceiveBalanceForward.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this productReceiveBalanceForward.
        /// </field>
        /// <field name="DocumentNo" type="String">
        /// Gets or sets the documentNo for this productReceiveBalanceForward.
        /// </field>
        /// <field name="DocumentDate" type="Date">
        /// Gets or sets the documentDate for this productReceiveBalanceForward.
        /// </field>
        /// <field name="Remarks" type="String">
        /// Gets or sets the remarks for this productReceiveBalanceForward.
        /// </field>
        /// <field name="ProductReceiveBalanceForwardDetail" type="msls.EntityCollection" elementType="msls.application.ProductReceiveBalanceForwardDetail">
        /// Gets the productReceiveBalanceForwardDetail for this productReceiveBalanceForward.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this productReceiveBalanceForward.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this productReceiveBalanceForward.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this productReceiveBalanceForward.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this productReceiveBalanceForward.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this productReceiveBalanceForward.
        /// </field>
        /// <field name="details" type="msls.application.ProductReceiveBalanceForward.Details">
        /// Gets the details for this productReceiveBalanceForward.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProductReceiveBalanceForwardDetail(entitySet) {
        /// <summary>
        /// Represents the ProductReceiveBalanceForwardDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this productReceiveBalanceForwardDetail.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this productReceiveBalanceForwardDetail.
        /// </field>
        /// <field name="LotNo" type="String">
        /// Gets or sets the lotNo for this productReceiveBalanceForwardDetail.
        /// </field>
        /// <field name="ReceivedQuantity" type="Number">
        /// Gets or sets the receivedQuantity for this productReceiveBalanceForwardDetail.
        /// </field>
        /// <field name="Product" type="msls.application.Product">
        /// Gets or sets the product for this productReceiveBalanceForwardDetail.
        /// </field>
        /// <field name="Location" type="msls.application.Location">
        /// Gets or sets the location for this productReceiveBalanceForwardDetail.
        /// </field>
        /// <field name="ProductReceiveBalanceForward" type="msls.application.ProductReceiveBalanceForward">
        /// Gets or sets the productReceiveBalanceForward for this productReceiveBalanceForwardDetail.
        /// </field>
        /// <field name="CostPrice" type="String">
        /// Gets or sets the costPrice for this productReceiveBalanceForwardDetail.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this productReceiveBalanceForwardDetail.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this productReceiveBalanceForwardDetail.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this productReceiveBalanceForwardDetail.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this productReceiveBalanceForwardDetail.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this productReceiveBalanceForwardDetail.
        /// </field>
        /// <field name="details" type="msls.application.ProductReceiveBalanceForwardDetail.Details">
        /// Gets the details for this productReceiveBalanceForwardDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function StockOnHand(entitySet) {
        /// <summary>
        /// Represents the StockOnHand entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this stockOnHand.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this stockOnHand.
        /// </field>
        /// <field name="LotNo" type="String">
        /// Gets or sets the lotNo for this stockOnHand.
        /// </field>
        /// <field name="QuantityOnHand" type="Number">
        /// Gets or sets the quantityOnHand for this stockOnHand.
        /// </field>
        /// <field name="SellingPrice" type="String">
        /// Gets or sets the sellingPrice for this stockOnHand.
        /// </field>
        /// <field name="CostPrice" type="String">
        /// Gets or sets the costPrice for this stockOnHand.
        /// </field>
        /// <field name="IsAvailableForSale" type="Boolean">
        /// Gets or sets the isAvailableForSale for this stockOnHand.
        /// </field>
        /// <field name="Location" type="msls.application.Location">
        /// Gets or sets the location for this stockOnHand.
        /// </field>
        /// <field name="Product" type="msls.application.Product">
        /// Gets or sets the product for this stockOnHand.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this stockOnHand.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this stockOnHand.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this stockOnHand.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this stockOnHand.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this stockOnHand.
        /// </field>
        /// <field name="details" type="msls.application.StockOnHand.Details">
        /// Gets the details for this stockOnHand.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function StockTransaction(entitySet) {
        /// <summary>
        /// Represents the StockTransaction entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this stockTransaction.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this stockTransaction.
        /// </field>
        /// <field name="TransactionPeriod" type="String">
        /// Gets or sets the transactionPeriod for this stockTransaction.
        /// </field>
        /// <field name="TransactionDate" type="Date">
        /// Gets or sets the transactionDate for this stockTransaction.
        /// </field>
        /// <field name="TransactionNo" type="String">
        /// Gets or sets the transactionNo for this stockTransaction.
        /// </field>
        /// <field name="TransactionType" type="String">
        /// Gets or sets the transactionType for this stockTransaction.
        /// </field>
        /// <field name="ItemSequence" type="Number">
        /// Gets or sets the itemSequence for this stockTransaction.
        /// </field>
        /// <field name="LocationId" type="Number">
        /// Gets or sets the locationId for this stockTransaction.
        /// </field>
        /// <field name="ProductId" type="Number">
        /// Gets or sets the productId for this stockTransaction.
        /// </field>
        /// <field name="LotNo" type="String">
        /// Gets or sets the lotNo for this stockTransaction.
        /// </field>
        /// <field name="Quantity" type="Number">
        /// Gets or sets the quantity for this stockTransaction.
        /// </field>
        /// <field name="CostPrice" type="String">
        /// Gets or sets the costPrice for this stockTransaction.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this stockTransaction.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this stockTransaction.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this stockTransaction.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this stockTransaction.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this stockTransaction.
        /// </field>
        /// <field name="details" type="msls.application.StockTransaction.Details">
        /// Gets the details for this stockTransaction.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function StockTransfer(entitySet) {
        /// <summary>
        /// Represents the StockTransfer entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this stockTransfer.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this stockTransfer.
        /// </field>
        /// <field name="LotNo" type="String">
        /// Gets or sets the lotNo for this stockTransfer.
        /// </field>
        /// <field name="Quantity" type="Number">
        /// Gets or sets the quantity for this stockTransfer.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this stockTransfer.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this stockTransfer.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this stockTransfer.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this stockTransfer.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this stockTransfer.
        /// </field>
        /// <field name="details" type="msls.application.StockTransfer.Details">
        /// Gets the details for this stockTransfer.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function StockAdjustDetail(entitySet) {
        /// <summary>
        /// Represents the StockAdjustDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this stockAdjustDetail.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this stockAdjustDetail.
        /// </field>
        /// <field name="Location" type="msls.application.Location">
        /// Gets or sets the location for this stockAdjustDetail.
        /// </field>
        /// <field name="Product" type="msls.application.Product">
        /// Gets or sets the product for this stockAdjustDetail.
        /// </field>
        /// <field name="LotNo" type="String">
        /// Gets or sets the lotNo for this stockAdjustDetail.
        /// </field>
        /// <field name="CurrentQuantity" type="Number">
        /// Gets or sets the currentQuantity for this stockAdjustDetail.
        /// </field>
        /// <field name="NewQuantity" type="Number">
        /// Gets or sets the newQuantity for this stockAdjustDetail.
        /// </field>
        /// <field name="StockAdjust" type="msls.application.StockAdjust">
        /// Gets or sets the stockAdjust for this stockAdjustDetail.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this stockAdjustDetail.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this stockAdjustDetail.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this stockAdjustDetail.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this stockAdjustDetail.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this stockAdjustDetail.
        /// </field>
        /// <field name="details" type="msls.application.StockAdjustDetail.Details">
        /// Gets the details for this stockAdjustDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function StockAdjust(entitySet) {
        /// <summary>
        /// Represents the StockAdjust entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this stockAdjust.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this stockAdjust.
        /// </field>
        /// <field name="DocumentNo" type="String">
        /// Gets or sets the documentNo for this stockAdjust.
        /// </field>
        /// <field name="DocumentDate" type="Date">
        /// Gets or sets the documentDate for this stockAdjust.
        /// </field>
        /// <field name="Remarks" type="String">
        /// Gets or sets the remarks for this stockAdjust.
        /// </field>
        /// <field name="StockAdjustDetails" type="msls.EntityCollection" elementType="msls.application.StockAdjustDetail">
        /// Gets the stockAdjustDetails for this stockAdjust.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this stockAdjust.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this stockAdjust.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this stockAdjust.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this stockAdjust.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this stockAdjust.
        /// </field>
        /// <field name="details" type="msls.application.StockAdjust.Details">
        /// Gets the details for this stockAdjust.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function SaleOrder(entitySet) {
        /// <summary>
        /// Represents the SaleOrder entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this saleOrder.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this saleOrder.
        /// </field>
        /// <field name="DocumentNo" type="String">
        /// Gets or sets the documentNo for this saleOrder.
        /// </field>
        /// <field name="SaleOrderDate" type="Date">
        /// Gets or sets the saleOrderDate for this saleOrder.
        /// </field>
        /// <field name="ReferenceNo" type="String">
        /// Gets or sets the referenceNo for this saleOrder.
        /// </field>
        /// <field name="Customer" type="msls.application.Customer">
        /// Gets or sets the customer for this saleOrder.
        /// </field>
        /// <field name="SaleOrderDetails" type="msls.EntityCollection" elementType="msls.application.SaleOrderDetail">
        /// Gets the saleOrderDetails for this saleOrder.
        /// </field>
        /// <field name="PaymentTerm" type="Number">
        /// Gets or sets the paymentTerm for this saleOrder.
        /// </field>
        /// <field name="PaymentStatus" type="String">
        /// Gets or sets the paymentStatus for this saleOrder.
        /// </field>
        /// <field name="Remarks" type="String">
        /// Gets or sets the remarks for this saleOrder.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this saleOrder.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this saleOrder.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this saleOrder.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this saleOrder.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this saleOrder.
        /// </field>
        /// <field name="details" type="msls.application.SaleOrder.Details">
        /// Gets the details for this saleOrder.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function SaleOrderDetail(entitySet) {
        /// <summary>
        /// Represents the SaleOrderDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this saleOrderDetail.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this saleOrderDetail.
        /// </field>
        /// <field name="SaleOrder" type="msls.application.SaleOrder">
        /// Gets or sets the saleOrder for this saleOrderDetail.
        /// </field>
        /// <field name="Product" type="msls.application.Product">
        /// Gets or sets the product for this saleOrderDetail.
        /// </field>
        /// <field name="Location" type="msls.application.Location">
        /// Gets or sets the location for this saleOrderDetail.
        /// </field>
        /// <field name="LotNo" type="String">
        /// Gets or sets the lotNo for this saleOrderDetail.
        /// </field>
        /// <field name="OrderQuantity" type="Number">
        /// Gets or sets the orderQuantity for this saleOrderDetail.
        /// </field>
        /// <field name="MasterSalePrice" type="String">
        /// Gets or sets the masterSalePrice for this saleOrderDetail.
        /// </field>
        /// <field name="UnitCost" type="String">
        /// Gets or sets the unitCost for this saleOrderDetail.
        /// </field>
        /// <field name="SalePrice" type="String">
        /// Gets or sets the salePrice for this saleOrderDetail.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this saleOrderDetail.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this saleOrderDetail.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this saleOrderDetail.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this saleOrderDetail.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this saleOrderDetail.
        /// </field>
        /// <field name="details" type="msls.application.SaleOrderDetail.Details">
        /// Gets the details for this saleOrderDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function PurchaseOrder(entitySet) {
        /// <summary>
        /// Represents the PurchaseOrder entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this purchaseOrder.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this purchaseOrder.
        /// </field>
        /// <field name="PurchaseOrderNumber" type="String">
        /// Gets or sets the purchaseOrderNumber for this purchaseOrder.
        /// </field>
        /// <field name="PurchaseOrderDate" type="Date">
        /// Gets or sets the purchaseOrderDate for this purchaseOrder.
        /// </field>
        /// <field name="PurchaseOrderStatus" type="Boolean">
        /// Gets or sets the purchaseOrderStatus for this purchaseOrder.
        /// </field>
        /// <field name="Supplier" type="msls.application.Supplier">
        /// Gets or sets the supplier for this purchaseOrder.
        /// </field>
        /// <field name="PurchaseOrderDetails" type="msls.EntityCollection" elementType="msls.application.PurchaseOrderDetail">
        /// Gets the purchaseOrderDetails for this purchaseOrder.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this purchaseOrder.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this purchaseOrder.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this purchaseOrder.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this purchaseOrder.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this purchaseOrder.
        /// </field>
        /// <field name="details" type="msls.application.PurchaseOrder.Details">
        /// Gets the details for this purchaseOrder.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function PurchaseOrderDetail(entitySet) {
        /// <summary>
        /// Represents the PurchaseOrderDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this purchaseOrderDetail.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this purchaseOrderDetail.
        /// </field>
        /// <field name="RequireDate" type="Date">
        /// Gets or sets the requireDate for this purchaseOrderDetail.
        /// </field>
        /// <field name="ReceiveDate" type="Date">
        /// Gets or sets the receiveDate for this purchaseOrderDetail.
        /// </field>
        /// <field name="Product" type="msls.application.Product">
        /// Gets or sets the product for this purchaseOrderDetail.
        /// </field>
        /// <field name="Location" type="msls.application.Location">
        /// Gets or sets the location for this purchaseOrderDetail.
        /// </field>
        /// <field name="LotNo" type="String">
        /// Gets or sets the lotNo for this purchaseOrderDetail.
        /// </field>
        /// <field name="RequireQuantity" type="Number">
        /// Gets or sets the requireQuantity for this purchaseOrderDetail.
        /// </field>
        /// <field name="ReceiveQuantity" type="Number">
        /// Gets or sets the receiveQuantity for this purchaseOrderDetail.
        /// </field>
        /// <field name="RequireTotalCost" type="String">
        /// Gets or sets the requireTotalCost for this purchaseOrderDetail.
        /// </field>
        /// <field name="ReceiveTotalCost" type="String">
        /// Gets or sets the receiveTotalCost for this purchaseOrderDetail.
        /// </field>
        /// <field name="Remark" type="String">
        /// Gets or sets the remark for this purchaseOrderDetail.
        /// </field>
        /// <field name="IsReceiveComplete" type="Boolean">
        /// Gets or sets the isReceiveComplete for this purchaseOrderDetail.
        /// </field>
        /// <field name="PurchaseOrder" type="msls.application.PurchaseOrder">
        /// Gets or sets the purchaseOrder for this purchaseOrderDetail.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this purchaseOrderDetail.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this purchaseOrderDetail.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this purchaseOrderDetail.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this purchaseOrderDetail.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this purchaseOrderDetail.
        /// </field>
        /// <field name="details" type="msls.application.PurchaseOrderDetail.Details">
        /// Gets the details for this purchaseOrderDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ReceiveFromPurchaseOrder(entitySet) {
        /// <summary>
        /// Represents the ReceiveFromPurchaseOrder entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this receiveFromPurchaseOrder.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this receiveFromPurchaseOrder.
        /// </field>
        /// <field name="ReceiveNumber" type="String">
        /// Gets or sets the receiveNumber for this receiveFromPurchaseOrder.
        /// </field>
        /// <field name="ReceiveDate" type="Date">
        /// Gets or sets the receiveDate for this receiveFromPurchaseOrder.
        /// </field>
        /// <field name="Supplier" type="msls.application.Supplier">
        /// Gets or sets the supplier for this receiveFromPurchaseOrder.
        /// </field>
        /// <field name="ReceiveFromPurchaseOrderDetails" type="msls.EntityCollection" elementType="msls.application.ReceiveFromPurchaseOrderDetail">
        /// Gets the receiveFromPurchaseOrderDetails for this receiveFromPurchaseOrder.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this receiveFromPurchaseOrder.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this receiveFromPurchaseOrder.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this receiveFromPurchaseOrder.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this receiveFromPurchaseOrder.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this receiveFromPurchaseOrder.
        /// </field>
        /// <field name="details" type="msls.application.ReceiveFromPurchaseOrder.Details">
        /// Gets the details for this receiveFromPurchaseOrder.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ReceiveFromPurchaseOrderDetail(entitySet) {
        /// <summary>
        /// Represents the ReceiveFromPurchaseOrderDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this receiveFromPurchaseOrderDetail.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this receiveFromPurchaseOrderDetail.
        /// </field>
        /// <field name="ReceiveFromPurchaseOrder" type="msls.application.ReceiveFromPurchaseOrder">
        /// Gets or sets the receiveFromPurchaseOrder for this receiveFromPurchaseOrderDetail.
        /// </field>
        /// <field name="Location" type="msls.application.Location">
        /// Gets or sets the location for this receiveFromPurchaseOrderDetail.
        /// </field>
        /// <field name="Product" type="msls.application.Product">
        /// Gets or sets the product for this receiveFromPurchaseOrderDetail.
        /// </field>
        /// <field name="LotNo" type="String">
        /// Gets or sets the lotNo for this receiveFromPurchaseOrderDetail.
        /// </field>
        /// <field name="Quantity" type="Number">
        /// Gets or sets the quantity for this receiveFromPurchaseOrderDetail.
        /// </field>
        /// <field name="UnitCost" type="String">
        /// Gets or sets the unitCost for this receiveFromPurchaseOrderDetail.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this receiveFromPurchaseOrderDetail.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this receiveFromPurchaseOrderDetail.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this receiveFromPurchaseOrderDetail.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this receiveFromPurchaseOrderDetail.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this receiveFromPurchaseOrderDetail.
        /// </field>
        /// <field name="details" type="msls.application.ReceiveFromPurchaseOrderDetail.Details">
        /// Gets the details for this receiveFromPurchaseOrderDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function WorkOrder(entitySet) {
        /// <summary>
        /// Represents the WorkOrder entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this workOrder.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this workOrder.
        /// </field>
        /// <field name="WorkOrderNumber" type="String">
        /// Gets or sets the workOrderNumber for this workOrder.
        /// </field>
        /// <field name="WorkOrderDate" type="Date">
        /// Gets or sets the workOrderDate for this workOrder.
        /// </field>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this workOrder.
        /// </field>
        /// <field name="Machine" type="msls.application.Machine">
        /// Gets or sets the machine for this workOrder.
        /// </field>
        /// <field name="IsReceiveComplete" type="Boolean">
        /// Gets or sets the isReceiveComplete for this workOrder.
        /// </field>
        /// <field name="WorkOrderIssueDetails" type="msls.EntityCollection" elementType="msls.application.WorkOrderIssueDetail">
        /// Gets the workOrderIssueDetails for this workOrder.
        /// </field>
        /// <field name="WorkOrderProduces" type="msls.EntityCollection" elementType="msls.application.WorkOrderProduce">
        /// Gets the workOrderProduces for this workOrder.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this workOrder.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this workOrder.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this workOrder.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this workOrder.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this workOrder.
        /// </field>
        /// <field name="details" type="msls.application.WorkOrder.Details">
        /// Gets the details for this workOrder.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function WorkOrderIssueDetail(entitySet) {
        /// <summary>
        /// Represents the WorkOrderIssueDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this workOrderIssueDetail.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this workOrderIssueDetail.
        /// </field>
        /// <field name="WorkOrder" type="msls.application.WorkOrder">
        /// Gets or sets the workOrder for this workOrderIssueDetail.
        /// </field>
        /// <field name="IssueProduct" type="msls.application.Product">
        /// Gets or sets the issueProduct for this workOrderIssueDetail.
        /// </field>
        /// <field name="IssueLocation" type="msls.application.Location">
        /// Gets or sets the issueLocation for this workOrderIssueDetail.
        /// </field>
        /// <field name="IssueLot" type="String">
        /// Gets or sets the issueLot for this workOrderIssueDetail.
        /// </field>
        /// <field name="IssueQuantity" type="Number">
        /// Gets or sets the issueQuantity for this workOrderIssueDetail.
        /// </field>
        /// <field name="IssueUnitCost" type="String">
        /// Gets or sets the issueUnitCost for this workOrderIssueDetail.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this workOrderIssueDetail.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this workOrderIssueDetail.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this workOrderIssueDetail.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this workOrderIssueDetail.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this workOrderIssueDetail.
        /// </field>
        /// <field name="details" type="msls.application.WorkOrderIssueDetail.Details">
        /// Gets the details for this workOrderIssueDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function WorkOrderProduce(entitySet) {
        /// <summary>
        /// Represents the WorkOrderProduce entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this workOrderProduce.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this workOrderProduce.
        /// </field>
        /// <field name="WorkOrder" type="msls.application.WorkOrder">
        /// Gets or sets the workOrder for this workOrderProduce.
        /// </field>
        /// <field name="ReceiveDate" type="Date">
        /// Gets or sets the receiveDate for this workOrderProduce.
        /// </field>
        /// <field name="ProduceProduct" type="msls.application.Product">
        /// Gets or sets the produceProduct for this workOrderProduce.
        /// </field>
        /// <field name="ProduceLocation" type="msls.application.Location">
        /// Gets or sets the produceLocation for this workOrderProduce.
        /// </field>
        /// <field name="ProduceLot" type="String">
        /// Gets or sets the produceLot for this workOrderProduce.
        /// </field>
        /// <field name="OrderQuantity" type="Number">
        /// Gets or sets the orderQuantity for this workOrderProduce.
        /// </field>
        /// <field name="ReceiveQuantity" type="Number">
        /// Gets or sets the receiveQuantity for this workOrderProduce.
        /// </field>
        /// <field name="ProduceCost" type="String">
        /// Gets or sets the produceCost for this workOrderProduce.
        /// </field>
        /// <field name="ReceiveCost" type="String">
        /// Gets or sets the receiveCost for this workOrderProduce.
        /// </field>
        /// <field name="IsReceiveComplete" type="Boolean">
        /// Gets or sets the isReceiveComplete for this workOrderProduce.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this workOrderProduce.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this workOrderProduce.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this workOrderProduce.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this workOrderProduce.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this workOrderProduce.
        /// </field>
        /// <field name="details" type="msls.application.WorkOrderProduce.Details">
        /// Gets the details for this workOrderProduce.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Transaction(entitySet) {
        /// <summary>
        /// Represents the Transaction entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this transaction.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this transaction.
        /// </field>
        /// <field name="TransactionNo" type="String">
        /// Gets or sets the transactionNo for this transaction.
        /// </field>
        /// <field name="TransactionDate" type="Date">
        /// Gets or sets the transactionDate for this transaction.
        /// </field>
        /// <field name="TransactionType" type="String">
        /// Gets or sets the transactionType for this transaction.
        /// </field>
        /// <field name="ReferenceNo" type="String">
        /// Gets or sets the referenceNo for this transaction.
        /// </field>
        /// <field name="ProductId" type="Number">
        /// Gets or sets the productId for this transaction.
        /// </field>
        /// <field name="LocationId" type="Number">
        /// Gets or sets the locationId for this transaction.
        /// </field>
        /// <field name="LotNo" type="String">
        /// Gets or sets the lotNo for this transaction.
        /// </field>
        /// <field name="Quantity" type="Number">
        /// Gets or sets the quantity for this transaction.
        /// </field>
        /// <field name="Cost" type="String">
        /// Gets or sets the cost for this transaction.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this transaction.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this transaction.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this transaction.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this transaction.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this transaction.
        /// </field>
        /// <field name="details" type="msls.application.Transaction.Details">
        /// Gets the details for this transaction.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function StockOnHandHistory(entitySet) {
        /// <summary>
        /// Represents the StockOnHandHistory entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this stockOnHandHistory.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this stockOnHandHistory.
        /// </field>
        /// <field name="TransactionNo" type="String">
        /// Gets or sets the transactionNo for this stockOnHandHistory.
        /// </field>
        /// <field name="TransactionDate" type="Date">
        /// Gets or sets the transactionDate for this stockOnHandHistory.
        /// </field>
        /// <field name="TransactionBy" type="String">
        /// Gets or sets the transactionBy for this stockOnHandHistory.
        /// </field>
        /// <field name="ProductId" type="Number">
        /// Gets or sets the productId for this stockOnHandHistory.
        /// </field>
        /// <field name="LocationId" type="Number">
        /// Gets or sets the locationId for this stockOnHandHistory.
        /// </field>
        /// <field name="LotNo" type="String">
        /// Gets or sets the lotNo for this stockOnHandHistory.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this stockOnHandHistory.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this stockOnHandHistory.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this stockOnHandHistory.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this stockOnHandHistory.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this stockOnHandHistory.
        /// </field>
        /// <field name="details" type="msls.application.StockOnHandHistory.Details">
        /// Gets the details for this stockOnHandHistory.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Products" type="msls.EntitySet">
        /// Gets the Products entity set.
        /// </field>
        /// <field name="ProductCategories" type="msls.EntitySet">
        /// Gets the ProductCategories entity set.
        /// </field>
        /// <field name="Employees" type="msls.EntitySet">
        /// Gets the Employees entity set.
        /// </field>
        /// <field name="Orders" type="msls.EntitySet">
        /// Gets the Orders entity set.
        /// </field>
        /// <field name="OrderDetails" type="msls.EntitySet">
        /// Gets the OrderDetails entity set.
        /// </field>
        /// <field name="Customers" type="msls.EntitySet">
        /// Gets the Customers entity set.
        /// </field>
        /// <field name="Suppliers" type="msls.EntitySet">
        /// Gets the Suppliers entity set.
        /// </field>
        /// <field name="ShippingMethods" type="msls.EntitySet">
        /// Gets the ShippingMethods entity set.
        /// </field>
        /// <field name="StockCheckDetails" type="msls.EntitySet">
        /// Gets the StockCheckDetails entity set.
        /// </field>
        /// <field name="StockChecks" type="msls.EntitySet">
        /// Gets the StockChecks entity set.
        /// </field>
        /// <field name="ProductSubscribers" type="msls.EntitySet">
        /// Gets the ProductSubscribers entity set.
        /// </field>
        /// <field name="Locations" type="msls.EntitySet">
        /// Gets the Locations entity set.
        /// </field>
        /// <field name="ProductGroups" type="msls.EntitySet">
        /// Gets the ProductGroups entity set.
        /// </field>
        /// <field name="UnitOfMeasures" type="msls.EntitySet">
        /// Gets the UnitOfMeasures entity set.
        /// </field>
        /// <field name="SupplierGroups" type="msls.EntitySet">
        /// Gets the SupplierGroups entity set.
        /// </field>
        /// <field name="CustomerGroups" type="msls.EntitySet">
        /// Gets the CustomerGroups entity set.
        /// </field>
        /// <field name="TransportRoutes" type="msls.EntitySet">
        /// Gets the TransportRoutes entity set.
        /// </field>
        /// <field name="PaymentTypes" type="msls.EntitySet">
        /// Gets the PaymentTypes entity set.
        /// </field>
        /// <field name="Banks" type="msls.EntitySet">
        /// Gets the Banks entity set.
        /// </field>
        /// <field name="Machines" type="msls.EntitySet">
        /// Gets the Machines entity set.
        /// </field>
        /// <field name="Workers" type="msls.EntitySet">
        /// Gets the Workers entity set.
        /// </field>
        /// <field name="Packages" type="msls.EntitySet">
        /// Gets the Packages entity set.
        /// </field>
        /// <field name="Companies" type="msls.EntitySet">
        /// Gets the Companies entity set.
        /// </field>
        /// <field name="ProductReceiveBalanceForwards" type="msls.EntitySet">
        /// Gets the ProductReceiveBalanceForwards entity set.
        /// </field>
        /// <field name="ProductReceiveBalanceForwardDetails" type="msls.EntitySet">
        /// Gets the ProductReceiveBalanceForwardDetails entity set.
        /// </field>
        /// <field name="StockOnHands" type="msls.EntitySet">
        /// Gets the StockOnHands entity set.
        /// </field>
        /// <field name="StockTransactions" type="msls.EntitySet">
        /// Gets the StockTransactions entity set.
        /// </field>
        /// <field name="StockTransfers" type="msls.EntitySet">
        /// Gets the StockTransfers entity set.
        /// </field>
        /// <field name="StockAdjustDetails" type="msls.EntitySet">
        /// Gets the StockAdjustDetails entity set.
        /// </field>
        /// <field name="StockAdjusts" type="msls.EntitySet">
        /// Gets the StockAdjusts entity set.
        /// </field>
        /// <field name="SaleOrders" type="msls.EntitySet">
        /// Gets the SaleOrders entity set.
        /// </field>
        /// <field name="SaleOrderDetails" type="msls.EntitySet">
        /// Gets the SaleOrderDetails entity set.
        /// </field>
        /// <field name="PurchaseOrders" type="msls.EntitySet">
        /// Gets the PurchaseOrders entity set.
        /// </field>
        /// <field name="PurchaseOrderDetails" type="msls.EntitySet">
        /// Gets the PurchaseOrderDetails entity set.
        /// </field>
        /// <field name="ReceiveFromPurchaseOrders" type="msls.EntitySet">
        /// Gets the ReceiveFromPurchaseOrders entity set.
        /// </field>
        /// <field name="ReceiveFromPurchaseOrderDetails" type="msls.EntitySet">
        /// Gets the ReceiveFromPurchaseOrderDetails entity set.
        /// </field>
        /// <field name="WorkOrders" type="msls.EntitySet">
        /// Gets the WorkOrders entity set.
        /// </field>
        /// <field name="WorkOrderIssueDetails" type="msls.EntitySet">
        /// Gets the WorkOrderIssueDetails entity set.
        /// </field>
        /// <field name="WorkOrderProduces" type="msls.EntitySet">
        /// Gets the WorkOrderProduces entity set.
        /// </field>
        /// <field name="Transactions" type="msls.EntitySet">
        /// Gets the Transactions entity set.
        /// </field>
        /// <field name="StockOnHandHistories" type="msls.EntitySet">
        /// Gets the StockOnHandHistories entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Product: $defineEntity(Product, [
            { name: "Id", type: Number },
            { name: "ProductCode", type: String },
            { name: "ProductName", type: String },
            { name: "ProductCategory", kind: "reference", type: ProductCategory },
            { name: "UnitPrice", type: String },
            { name: "ReorderLevelFlag", type: Boolean },
            { name: "ReorderLevel", type: Number },
            { name: "Discontinued", type: Boolean },
            { name: "ProductGroup", kind: "reference", type: ProductGroup },
            { name: "Location", kind: "reference", type: Location },
            { name: "UnitOfMeasure", kind: "reference", type: UnitOfMeasure },
            { name: "AgingControlFlag", type: Boolean },
            { name: "AgingControlDays", type: Number },
            { name: "LotControlFlag", type: Boolean },
            { name: "LotType", type: String },
            { name: "CarryingCostFlag", type: Boolean },
            { name: "CarryingCost", type: String },
            { name: "ProductionCostFlag", type: Boolean },
            { name: "UnitWeight", type: Number },
            { name: "ProductReceiveBalanceForwardDetail", kind: "collection", elementType: ProductReceiveBalanceForwardDetail },
            { name: "StockOnHands", kind: "collection", elementType: StockOnHand },
            { name: "StockAdjustDetail", kind: "collection", elementType: StockAdjustDetail },
            { name: "SaleOrderDetails", kind: "collection", elementType: SaleOrderDetail },
            { name: "PurchaseOrderDetails", kind: "collection", elementType: PurchaseOrderDetail },
            { name: "ReceiveFromPurchaseOrderDetails", kind: "collection", elementType: ReceiveFromPurchaseOrderDetail },
            { name: "WorkOrderIssueDetail", kind: "collection", elementType: WorkOrderIssueDetail },
            { name: "WorkOrderProduces", kind: "collection", elementType: WorkOrderProduce },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ProductCategory: $defineEntity(ProductCategory, [
            { name: "Id", type: Number },
            { name: "ProductCategoryName", type: String },
            { name: "Products", kind: "collection", elementType: Product },
            { name: "Discontinued", type: Boolean },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Employee: $defineEntity(Employee, [
            { name: "Id", type: Number },
            { name: "LastName", type: String },
            { name: "FirstName", type: String },
            { name: "UserName", type: String },
            { name: "Email", type: String },
            { name: "Current", type: Boolean },
            { name: "Orders", kind: "collection", elementType: Order },
            { name: "StockChecks", kind: "collection", elementType: StockCheck },
            { name: "ProductSubscribers", kind: "collection", elementType: ProductSubscriber },
            { name: "WorkOrders", kind: "collection", elementType: WorkOrder },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Order: $defineEntity(Order, [
            { name: "Id", type: Number },
            { name: "OrderReference", type: String },
            { name: "OrderDate", type: Date },
            { name: "Customer", kind: "reference", type: Customer },
            { name: "Employee", kind: "reference", type: Employee },
            { name: "OrderPaidFor", type: Boolean },
            { name: "DatePaid", type: Date },
            { name: "OrderDetails", kind: "collection", elementType: OrderDetail },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        OrderDetail: $defineEntity(OrderDetail, [
            { name: "Id", type: Number },
            { name: "Order", kind: "reference", type: Order },
            { name: "UnitsOrdered", type: Number },
            { name: "UnitsShipped", type: Number },
            { name: "DateOrderShipped", type: Date },
            { name: "ShippingMethod", kind: "reference", type: ShippingMethod },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Customer: $defineEntity(Customer, [
            { name: "Id", type: Number },
            { name: "CustomerName", type: String },
            { name: "Address1", type: String },
            { name: "Address2", type: String },
            { name: "ContactName", type: String },
            { name: "TaxID", type: String },
            { name: "CreditTerm", type: Number },
            { name: "Email", type: String },
            { name: "Phone", type: String },
            { name: "Fax", type: String },
            { name: "Website", type: String },
            { name: "RegisterDate", type: Date },
            { name: "Orders", kind: "collection", elementType: Order },
            { name: "CustomerGroup", kind: "reference", type: CustomerGroup },
            { name: "Latitude", type: Number },
            { name: "Longitude", type: Number },
            { name: "TransportRoute", kind: "reference", type: TransportRoute },
            { name: "Discontinued", type: Boolean },
            { name: "SaleOrders", kind: "collection", elementType: SaleOrder },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Supplier: $defineEntity(Supplier, [
            { name: "Id", type: Number },
            { name: "SupplierName", type: String },
            { name: "Address1", type: String },
            { name: "Address2", type: String },
            { name: "ContactName", type: String },
            { name: "TaxID", type: String },
            { name: "CreditTerm", type: Number },
            { name: "Email", type: String },
            { name: "Phone", type: String },
            { name: "Fax", type: String },
            { name: "Website", type: String },
            { name: "RegisterDate", type: Date },
            { name: "Latitude", type: Number },
            { name: "Longitude", type: Number },
            { name: "SupplierGroup", kind: "reference", type: SupplierGroup },
            { name: "Discontinued", type: Boolean },
            { name: "PurchaseOrders", kind: "collection", elementType: PurchaseOrder },
            { name: "ReceiveFromPurchaseOrders", kind: "collection", elementType: ReceiveFromPurchaseOrder },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ShippingMethod: $defineEntity(ShippingMethod, [
            { name: "Id", type: Number },
            { name: "Shipper", type: String },
            { name: "OrderDetails", kind: "collection", elementType: OrderDetail },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        StockCheckDetail: $defineEntity(StockCheckDetail, [
            { name: "Id", type: Number },
            { name: "StockCheck", kind: "reference", type: StockCheck },
            { name: "UnitsExpected", type: Number },
            { name: "UnitsFound", type: Number },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        StockCheck: $defineEntity(StockCheck, [
            { name: "Id", type: Number },
            { name: "StockCheckDate", type: Date },
            { name: "StockCheckBy", kind: "reference", type: Employee },
            { name: "StockCheckDetails", kind: "collection", elementType: StockCheckDetail },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ProductSubscriber: $defineEntity(ProductSubscriber, [
            { name: "Id", type: Number },
            { name: "Employee", kind: "reference", type: Employee },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Location: $defineEntity(Location, [
            { name: "Id", type: Number },
            { name: "LocationName", type: String },
            { name: "Width", type: Number },
            { name: "Height", type: Number },
            { name: "Length", type: Number },
            { name: "Discontinued", type: Boolean },
            { name: "Products", kind: "collection", elementType: Product },
            { name: "ProductReceiveBalanceForwardDetail", kind: "collection", elementType: ProductReceiveBalanceForwardDetail },
            { name: "StockOnHands", kind: "collection", elementType: StockOnHand },
            { name: "StockAdjustDetails", kind: "collection", elementType: StockAdjustDetail },
            { name: "SaleOrderDetails", kind: "collection", elementType: SaleOrderDetail },
            { name: "ReceiveFromPurchaseOrderDetails", kind: "collection", elementType: ReceiveFromPurchaseOrderDetail },
            { name: "PurchaseOrderDetails", kind: "collection", elementType: PurchaseOrderDetail },
            { name: "WorkOrderIssueDetail", kind: "collection", elementType: WorkOrderIssueDetail },
            { name: "WorkOrderProduces", kind: "collection", elementType: WorkOrderProduce },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ProductGroup: $defineEntity(ProductGroup, [
            { name: "Id", type: Number },
            { name: "ProductGroupName", type: String },
            { name: "Discontinued", type: Boolean },
            { name: "Products", kind: "collection", elementType: Product },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        UnitOfMeasure: $defineEntity(UnitOfMeasure, [
            { name: "Id", type: Number },
            { name: "UOMName", type: String },
            { name: "Products", kind: "collection", elementType: Product },
            { name: "Discontinued", type: Boolean },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        SupplierGroup: $defineEntity(SupplierGroup, [
            { name: "Id", type: Number },
            { name: "SupplierGroupName", type: String },
            { name: "Suppliers", kind: "collection", elementType: Supplier },
            { name: "Discontinued", type: Boolean },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        CustomerGroup: $defineEntity(CustomerGroup, [
            { name: "Id", type: Number },
            { name: "CustomerGroupName", type: String },
            { name: "Customers", kind: "collection", elementType: Customer },
            { name: "Discontinued", type: Boolean },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        TransportRoute: $defineEntity(TransportRoute, [
            { name: "Id", type: Number },
            { name: "TransportRouteName", type: String },
            { name: "Customers", kind: "collection", elementType: Customer },
            { name: "Distance", type: Number },
            { name: "Discontinued", type: Boolean },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        PaymentType: $defineEntity(PaymentType, [
            { name: "Id", type: Number },
            { name: "PaymentTypeName", type: String },
            { name: "Discontinued", type: Boolean },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Bank: $defineEntity(Bank, [
            { name: "Id", type: Number },
            { name: "BankCode", type: String },
            { name: "BankName", type: String },
            { name: "Discontinued", type: Boolean },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Machine: $defineEntity(Machine, [
            { name: "Id", type: Number },
            { name: "MachineName", type: String },
            { name: "Discontinued", type: Boolean },
            { name: "WorkOrders", kind: "collection", elementType: WorkOrder },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Worker: $defineEntity(Worker, [
            { name: "Id", type: Number },
            { name: "WorkerName", type: String },
            { name: "HireDate", type: Date },
            { name: "Discontinued", type: Boolean },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Package: $defineEntity(Package, [
            { name: "Id", type: Number },
            { name: "PackageName", type: String },
            { name: "Discontinued", type: Boolean },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Company: $defineEntity(Company, [
            { name: "Id", type: Number },
            { name: "CompanyNameTH", type: String },
            { name: "CompanyNameEN", type: String },
            { name: "AddressTH1", type: String },
            { name: "AddressTH2", type: String },
            { name: "AddressEN1", type: String },
            { name: "AddressEN2", type: String },
            { name: "TaxID", type: String },
            { name: "Phone", type: String },
            { name: "Fax", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ProductReceiveBalanceForward: $defineEntity(ProductReceiveBalanceForward, [
            { name: "Id", type: Number },
            { name: "DocumentNo", type: String },
            { name: "DocumentDate", type: Date },
            { name: "Remarks", type: String },
            { name: "ProductReceiveBalanceForwardDetail", kind: "collection", elementType: ProductReceiveBalanceForwardDetail },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ProductReceiveBalanceForwardDetail: $defineEntity(ProductReceiveBalanceForwardDetail, [
            { name: "Id", type: Number },
            { name: "LotNo", type: String },
            { name: "ReceivedQuantity", type: Number },
            { name: "Product", kind: "reference", type: Product },
            { name: "Location", kind: "reference", type: Location },
            { name: "ProductReceiveBalanceForward", kind: "reference", type: ProductReceiveBalanceForward },
            { name: "CostPrice", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        StockOnHand: $defineEntity(StockOnHand, [
            { name: "Id", type: Number },
            { name: "LotNo", type: String },
            { name: "QuantityOnHand", type: Number },
            { name: "SellingPrice", type: String },
            { name: "CostPrice", type: String },
            { name: "IsAvailableForSale", type: Boolean },
            { name: "Location", kind: "reference", type: Location },
            { name: "Product", kind: "reference", type: Product },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        StockTransaction: $defineEntity(StockTransaction, [
            { name: "Id", type: Number },
            { name: "TransactionPeriod", type: String },
            { name: "TransactionDate", type: Date },
            { name: "TransactionNo", type: String },
            { name: "TransactionType", type: String },
            { name: "ItemSequence", type: Number },
            { name: "LocationId", type: Number },
            { name: "ProductId", type: Number },
            { name: "LotNo", type: String },
            { name: "Quantity", type: Number },
            { name: "CostPrice", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        StockTransfer: $defineEntity(StockTransfer, [
            { name: "Id", type: Number },
            { name: "LotNo", type: String },
            { name: "Quantity", type: Number },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        StockAdjustDetail: $defineEntity(StockAdjustDetail, [
            { name: "Id", type: Number },
            { name: "Location", kind: "reference", type: Location },
            { name: "Product", kind: "reference", type: Product },
            { name: "LotNo", type: String },
            { name: "CurrentQuantity", type: Number },
            { name: "NewQuantity", type: Number },
            { name: "StockAdjust", kind: "reference", type: StockAdjust },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        StockAdjust: $defineEntity(StockAdjust, [
            { name: "Id", type: Number },
            { name: "DocumentNo", type: String },
            { name: "DocumentDate", type: Date },
            { name: "Remarks", type: String },
            { name: "StockAdjustDetails", kind: "collection", elementType: StockAdjustDetail },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        SaleOrder: $defineEntity(SaleOrder, [
            { name: "Id", type: Number },
            { name: "DocumentNo", type: String },
            { name: "SaleOrderDate", type: Date },
            { name: "ReferenceNo", type: String },
            { name: "Customer", kind: "reference", type: Customer },
            { name: "SaleOrderDetails", kind: "collection", elementType: SaleOrderDetail },
            { name: "PaymentTerm", type: Number },
            { name: "PaymentStatus", type: String },
            { name: "Remarks", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        SaleOrderDetail: $defineEntity(SaleOrderDetail, [
            { name: "Id", type: Number },
            { name: "SaleOrder", kind: "reference", type: SaleOrder },
            { name: "Product", kind: "reference", type: Product },
            { name: "Location", kind: "reference", type: Location },
            { name: "LotNo", type: String },
            { name: "OrderQuantity", type: Number },
            { name: "MasterSalePrice", type: String },
            { name: "UnitCost", type: String },
            { name: "SalePrice", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        PurchaseOrder: $defineEntity(PurchaseOrder, [
            { name: "Id", type: Number },
            { name: "PurchaseOrderNumber", type: String },
            { name: "PurchaseOrderDate", type: Date },
            { name: "PurchaseOrderStatus", type: Boolean },
            { name: "Supplier", kind: "reference", type: Supplier },
            { name: "PurchaseOrderDetails", kind: "collection", elementType: PurchaseOrderDetail },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        PurchaseOrderDetail: $defineEntity(PurchaseOrderDetail, [
            { name: "Id", type: Number },
            { name: "RequireDate", type: Date },
            { name: "ReceiveDate", type: Date },
            { name: "Product", kind: "reference", type: Product },
            { name: "Location", kind: "reference", type: Location },
            { name: "LotNo", type: String },
            { name: "RequireQuantity", type: Number },
            { name: "ReceiveQuantity", type: Number },
            { name: "RequireTotalCost", type: String },
            { name: "ReceiveTotalCost", type: String },
            { name: "Remark", type: String },
            { name: "IsReceiveComplete", type: Boolean },
            { name: "PurchaseOrder", kind: "reference", type: PurchaseOrder },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ReceiveFromPurchaseOrder: $defineEntity(ReceiveFromPurchaseOrder, [
            { name: "Id", type: Number },
            { name: "ReceiveNumber", type: String },
            { name: "ReceiveDate", type: Date },
            { name: "Supplier", kind: "reference", type: Supplier },
            { name: "ReceiveFromPurchaseOrderDetails", kind: "collection", elementType: ReceiveFromPurchaseOrderDetail },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ReceiveFromPurchaseOrderDetail: $defineEntity(ReceiveFromPurchaseOrderDetail, [
            { name: "Id", type: Number },
            { name: "ReceiveFromPurchaseOrder", kind: "reference", type: ReceiveFromPurchaseOrder },
            { name: "Location", kind: "reference", type: Location },
            { name: "Product", kind: "reference", type: Product },
            { name: "LotNo", type: String },
            { name: "Quantity", type: Number },
            { name: "UnitCost", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        WorkOrder: $defineEntity(WorkOrder, [
            { name: "Id", type: Number },
            { name: "WorkOrderNumber", type: String },
            { name: "WorkOrderDate", type: Date },
            { name: "Employee", kind: "reference", type: Employee },
            { name: "Machine", kind: "reference", type: Machine },
            { name: "IsReceiveComplete", type: Boolean },
            { name: "WorkOrderIssueDetails", kind: "collection", elementType: WorkOrderIssueDetail },
            { name: "WorkOrderProduces", kind: "collection", elementType: WorkOrderProduce },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        WorkOrderIssueDetail: $defineEntity(WorkOrderIssueDetail, [
            { name: "Id", type: Number },
            { name: "WorkOrder", kind: "reference", type: WorkOrder },
            { name: "IssueProduct", kind: "reference", type: Product },
            { name: "IssueLocation", kind: "reference", type: Location },
            { name: "IssueLot", type: String },
            { name: "IssueQuantity", type: Number },
            { name: "IssueUnitCost", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        WorkOrderProduce: $defineEntity(WorkOrderProduce, [
            { name: "Id", type: Number },
            { name: "WorkOrder", kind: "reference", type: WorkOrder },
            { name: "ReceiveDate", type: Date },
            { name: "ProduceProduct", kind: "reference", type: Product },
            { name: "ProduceLocation", kind: "reference", type: Location },
            { name: "ProduceLot", type: String },
            { name: "OrderQuantity", type: Number },
            { name: "ReceiveQuantity", type: Number },
            { name: "ProduceCost", type: String },
            { name: "ReceiveCost", type: String },
            { name: "IsReceiveComplete", type: Boolean },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Transaction: $defineEntity(Transaction, [
            { name: "Id", type: Number },
            { name: "TransactionNo", type: String },
            { name: "TransactionDate", type: Date },
            { name: "TransactionType", type: String },
            { name: "ReferenceNo", type: String },
            { name: "ProductId", type: Number },
            { name: "LocationId", type: Number },
            { name: "LotNo", type: String },
            { name: "Quantity", type: Number },
            { name: "Cost", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        StockOnHandHistory: $defineEntity(StockOnHandHistory, [
            { name: "Id", type: Number },
            { name: "TransactionNo", type: String },
            { name: "TransactionDate", type: Date },
            { name: "TransactionBy", type: String },
            { name: "ProductId", type: Number },
            { name: "LocationId", type: Number },
            { name: "LotNo", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Products", elementType: Product },
            { name: "ProductCategories", elementType: ProductCategory },
            { name: "Employees", elementType: Employee },
            { name: "Orders", elementType: Order },
            { name: "OrderDetails", elementType: OrderDetail },
            { name: "Customers", elementType: Customer },
            { name: "Suppliers", elementType: Supplier },
            { name: "ShippingMethods", elementType: ShippingMethod },
            { name: "StockCheckDetails", elementType: StockCheckDetail },
            { name: "StockChecks", elementType: StockCheck },
            { name: "ProductSubscribers", elementType: ProductSubscriber },
            { name: "Locations", elementType: Location },
            { name: "ProductGroups", elementType: ProductGroup },
            { name: "UnitOfMeasures", elementType: UnitOfMeasure },
            { name: "SupplierGroups", elementType: SupplierGroup },
            { name: "CustomerGroups", elementType: CustomerGroup },
            { name: "TransportRoutes", elementType: TransportRoute },
            { name: "PaymentTypes", elementType: PaymentType },
            { name: "Banks", elementType: Bank },
            { name: "Machines", elementType: Machine },
            { name: "Workers", elementType: Worker },
            { name: "Packages", elementType: Package },
            { name: "Companies", elementType: Company },
            { name: "ProductReceiveBalanceForwards", elementType: ProductReceiveBalanceForward },
            { name: "ProductReceiveBalanceForwardDetails", elementType: ProductReceiveBalanceForwardDetail },
            { name: "StockOnHands", elementType: StockOnHand },
            { name: "StockTransactions", elementType: StockTransaction },
            { name: "StockTransfers", elementType: StockTransfer },
            { name: "StockAdjustDetails", elementType: StockAdjustDetail },
            { name: "StockAdjusts", elementType: StockAdjust },
            { name: "SaleOrders", elementType: SaleOrder },
            { name: "SaleOrderDetails", elementType: SaleOrderDetail },
            { name: "PurchaseOrders", elementType: PurchaseOrder },
            { name: "PurchaseOrderDetails", elementType: PurchaseOrderDetail },
            { name: "ReceiveFromPurchaseOrders", elementType: ReceiveFromPurchaseOrder },
            { name: "ReceiveFromPurchaseOrderDetails", elementType: ReceiveFromPurchaseOrderDetail },
            { name: "WorkOrders", elementType: WorkOrder },
            { name: "WorkOrderIssueDetails", elementType: WorkOrderIssueDetail },
            { name: "WorkOrderProduces", elementType: WorkOrderProduce },
            { name: "Transactions", elementType: Transaction },
            { name: "StockOnHandHistories", elementType: StockOnHandHistory }
        ], [
            {
                name: "Products_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Products },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Products(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ProductCategories_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ProductCategories },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ProductCategories(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Employees_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Employees },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Employees(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Orders_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Orders },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Orders(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "OrderDetails_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.OrderDetails },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/OrderDetails(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Customers_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Customers },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Customers(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Suppliers_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Suppliers },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Suppliers(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ShippingMethods_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ShippingMethods },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ShippingMethods(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "StockCheckDetails_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.StockCheckDetails },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/StockCheckDetails(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "StockChecks_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.StockChecks },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/StockChecks(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ProductSubscribers_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ProductSubscribers },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ProductSubscribers(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Locations_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Locations },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Locations(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ProductGroups_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ProductGroups },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ProductGroups(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "UnitOfMeasures_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.UnitOfMeasures },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/UnitOfMeasures(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "SupplierGroups_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.SupplierGroups },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/SupplierGroups(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "CustomerGroups_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.CustomerGroups },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/CustomerGroups(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TransportRoutes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.TransportRoutes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/TransportRoutes(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "PaymentTypes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.PaymentTypes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/PaymentTypes(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Banks_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Banks },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Banks(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Machines_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Machines },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Machines(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Workers_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Workers },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Workers(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Packages_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Packages },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Packages(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Companies_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Companies },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Companies(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ProductReceiveBalanceForwards_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ProductReceiveBalanceForwards },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ProductReceiveBalanceForwards(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ProductReceiveBalanceForwardDetails_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ProductReceiveBalanceForwardDetails },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ProductReceiveBalanceForwardDetails(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "QueryLatestProductReceiveBalanceForwardDocumentNo", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.ProductReceiveBalanceForwards },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/QueryLatestProductReceiveBalanceForwardDocumentNo()",
                        {
                        });
                }
            },
            {
                name: "CustomerGroupActiveQuery", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.CustomerGroups },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/CustomerGroupActiveQuery()",
                        {
                        });
                }
            },
            {
                name: "LocationActiveQuery", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Locations },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/LocationActiveQuery()",
                        {
                        });
                }
            },
            {
                name: "MachineActiveQuery", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Machines },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MachineActiveQuery()",
                        {
                        });
                }
            },
            {
                name: "BankActiveQuery", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Banks },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/BankActiveQuery()",
                        {
                        });
                }
            },
            {
                name: "PackageActiveQuery", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Packages },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/PackageActiveQuery()",
                        {
                        });
                }
            },
            {
                name: "PaymentTypeActiveQuery", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.PaymentTypes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/PaymentTypeActiveQuery()",
                        {
                        });
                }
            },
            {
                name: "ProductCategoriesActiveQuery", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.ProductCategories },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ProductCategoriesActiveQuery()",
                        {
                        });
                }
            },
            {
                name: "ProductGroupsActiveQuery", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.ProductGroups },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ProductGroupsActiveQuery()",
                        {
                        });
                }
            },
            {
                name: "SupplierGroupsActiveQuery", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.SupplierGroups },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/SupplierGroupsActiveQuery()",
                        {
                        });
                }
            },
            {
                name: "TransportRoutesActiveQuery", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.TransportRoutes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/TransportRoutesActiveQuery()",
                        {
                        });
                }
            },
            {
                name: "UnitOfMeasuresActiveQuery", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.UnitOfMeasures },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/UnitOfMeasuresActiveQuery()",
                        {
                        });
                }
            },
            {
                name: "WorkersActiveQuery", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Workers },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/WorkersActiveQuery()",
                        {
                        });
                }
            },
            {
                name: "ProductsActiveQuery", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Products },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ProductsActiveQuery()",
                        {
                        });
                }
            },
            {
                name: "StockOnHands_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.StockOnHands },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/StockOnHands(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "StockTransactions_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.StockTransactions },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/StockTransactions(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "StockTransfers_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.StockTransfers },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/StockTransfers(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "StockAdjustDetails_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.StockAdjustDetails },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/StockAdjustDetails(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "StockAdjusts_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.StockAdjusts },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/StockAdjusts(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "SaleOrders_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.SaleOrders },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/SaleOrders(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "SaleOrderDetails_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.SaleOrderDetails },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/SaleOrderDetails(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "PurchaseOrders_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.PurchaseOrders },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/PurchaseOrders(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "PurchaseOrderDetails_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.PurchaseOrderDetails },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/PurchaseOrderDetails(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ReceiveFromPurchaseOrders_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ReceiveFromPurchaseOrders },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ReceiveFromPurchaseOrders(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ReceiveFromPurchaseOrderDetails_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ReceiveFromPurchaseOrderDetails },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ReceiveFromPurchaseOrderDetails(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "PurchaseOrderNotClose", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.PurchaseOrders },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/PurchaseOrderNotClose()",
                        {
                        });
                }
            },
            {
                name: "PurchaseOrderDetailByPOId", value: function (POId) {
                    return new $DataServiceQuery({ _entitySet: this.PurchaseOrderDetails },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/PurchaseOrderDetailByPOId()",
                        {
                            POId: $toODataString(POId, "Int32?")
                        });
                }
            },
            {
                name: "StockOnHandForSale", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.StockOnHands },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/StockOnHandForSale()",
                        {
                        });
                }
            },
            {
                name: "QueryMaxPONumber", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.PurchaseOrders },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/QueryMaxPONumber()",
                        {
                        });
                }
            },
            {
                name: "SupplierActiveQuery", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Suppliers },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/SupplierActiveQuery()",
                        {
                        });
                }
            },
            {
                name: "CustomersActiveQuery", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Customers },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/CustomersActiveQuery()",
                        {
                        });
                }
            },
            {
                name: "WorkOrders_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.WorkOrders },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/WorkOrders(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "WorkOrderIssueDetails_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.WorkOrderIssueDetails },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/WorkOrderIssueDetails(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "WorkOrderProduces_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.WorkOrderProduces },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/WorkOrderProduces(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "EmployeeActiveQuery", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Employees },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/EmployeeActiveQuery()",
                        {
                        });
                }
            },
            {
                name: "QueryMaxWONumber", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.WorkOrders },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/QueryMaxWONumber()",
                        {
                        });
                }
            },
            {
                name: "QueryStockOnHandForIssue", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.StockOnHands },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/QueryStockOnHandForIssue()",
                        {
                        });
                }
            },
            {
                name: "WorkOrderIsNotReceive", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.WorkOrders },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/WorkOrderIsNotReceive()",
                        {
                        });
                }
            },
            {
                name: "Transactions_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Transactions },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Transactions(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "StockOnHandHistories_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.StockOnHandHistories },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/StockOnHandHistories(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "QueryMaxSONumber", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.SaleOrders },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/QueryMaxSONumber()",
                        {
                        });
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
