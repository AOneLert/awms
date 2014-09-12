/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditBank(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditBank screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Bank" type="msls.application.Bank">
        /// Gets or sets the bank for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditBank.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditBank", parameters);
    }

    function AddEditCompany(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditCompany screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Company" type="msls.application.Company">
        /// Gets or sets the company for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditCompany.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditCompany", parameters);
    }

    function AddEditCustomer(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditCustomer screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Customer" type="msls.application.Customer">
        /// Gets or sets the customer for this screen.
        /// </field>
        /// <field name="CustomerGroupActiveQuery" type="msls.VisualCollection" elementType="msls.application.CustomerGroup">
        /// Gets the customerGroupActiveQuery for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditCustomer.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditCustomer", parameters);
    }

    function AddEditCustomerGroup(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditCustomerGroup screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CustomerGroup" type="msls.application.CustomerGroup">
        /// Gets or sets the customerGroup for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditCustomerGroup.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditCustomerGroup", parameters);
    }

    function AddEditEmployee(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployee screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.AddEditEmployee.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployee", parameters);
    }

    function AddEditLocation(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditLocation screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProductLocation" type="msls.application.Location">
        /// Gets or sets the productLocation for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditLocation.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditLocation", parameters);
    }

    function AddEditMachine(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditMachine screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Machine" type="msls.application.Machine">
        /// Gets or sets the machine for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditMachine.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditMachine", parameters);
    }

    function AddEditOrder(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditOrder screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.AddEditOrder.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditOrder", parameters);
    }

    function AddEditOrderDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditOrderDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.AddEditOrderDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditOrderDetail", parameters);
    }

    function AddEditOrderRequisition(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditOrderRequisition screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="OrderRequisition" type="msls.application.OrderRequisition">
        /// Gets or sets the orderRequisition for this screen.
        /// </field>
        /// <field name="OrderRequisitionDetail" type="msls.VisualCollection" elementType="msls.application.OrderRequisitionDetail">
        /// Gets the orderRequisitionDetail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditOrderRequisition.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditOrderRequisition", parameters);
    }

    function AddEditOrderRequisitionDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditOrderRequisitionDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="OrderRequisitionDetail" type="msls.application.OrderRequisitionDetail">
        /// Gets or sets the orderRequisitionDetail for this screen.
        /// </field>
        /// <field name="ProductsActiveQuery" type="msls.VisualCollection" elementType="msls.application.Product">
        /// Gets the productsActiveQuery for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditOrderRequisitionDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditOrderRequisitionDetail", parameters);
    }

    function AddEditPackage(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPackage screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Package" type="msls.application.Package">
        /// Gets or sets the package for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPackage.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPackage", parameters);
    }

    function AddEditPaymentType(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPaymentType screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PaymentType" type="msls.application.PaymentType">
        /// Gets or sets the paymentType for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPaymentType.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPaymentType", parameters);
    }

    function AddEditPO(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPO screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrder" type="msls.application.PurchaseOrder">
        /// Gets or sets the purchaseOrder for this screen.
        /// </field>
        /// <field name="PurchaseOrderDetails" type="msls.VisualCollection" elementType="msls.application.PurchaseOrderDetail">
        /// Gets the purchaseOrderDetails for this screen.
        /// </field>
        /// <field name="SupplierActiveQuery" type="msls.VisualCollection" elementType="msls.application.Supplier">
        /// Gets the supplierActiveQuery for this screen.
        /// </field>
        /// <field name="SearchSupplier" type="String">
        /// Gets or sets the searchSupplier for this screen.
        /// </field>
        /// <field name="POStatusDescription" type="String">
        /// Gets or sets the pOStatusDescription for this screen.
        /// </field>
        /// <field name="ItemIsReceiveComplete" type="String">
        /// Gets or sets the itemIsReceiveComplete for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPO.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPO", parameters);
    }

    function AddEditPODetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPODetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrderDetail" type="msls.application.PurchaseOrderDetail">
        /// Gets or sets the purchaseOrderDetail for this screen.
        /// </field>
        /// <field name="ProductUOM" type="String">
        /// Gets or sets the productUOM for this screen.
        /// </field>
        /// <field name="ProductsActiveQuery" type="msls.VisualCollection" elementType="msls.application.Product">
        /// Gets the productsActiveQuery for this screen.
        /// </field>
        /// <field name="SearchProduct" type="String">
        /// Gets or sets the searchProduct for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPODetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPODetail", parameters);
    }

    function AddEditPOReceive(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPOReceive screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrder" type="msls.application.PurchaseOrder">
        /// Gets or sets the purchaseOrder for this screen.
        /// </field>
        /// <field name="PurchaseOrderDetails" type="msls.VisualCollection" elementType="msls.application.PurchaseOrderDetail">
        /// Gets the purchaseOrderDetails for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPOReceive.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPOReceive", parameters);
    }

    function AddEditPOReceiveDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPOReceiveDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrderDetail" type="msls.application.PurchaseOrderDetail">
        /// Gets or sets the purchaseOrderDetail for this screen.
        /// </field>
        /// <field name="LocationActiveQuery" type="msls.VisualCollection" elementType="msls.application.Location">
        /// Gets the locationActiveQuery for this screen.
        /// </field>
        /// <field name="SearchLocation" type="String">
        /// Gets or sets the searchLocation for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPOReceiveDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPOReceiveDetail", parameters);
    }

    function AddEditProduct(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProduct screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Product" type="msls.application.Product">
        /// Gets or sets the product for this screen.
        /// </field>
        /// <field name="ProductCategoriesActiveQuery" type="msls.VisualCollection" elementType="msls.application.ProductCategory">
        /// Gets the productCategoriesActiveQuery for this screen.
        /// </field>
        /// <field name="ProductGroupsActiveQuery" type="msls.VisualCollection" elementType="msls.application.ProductGroup">
        /// Gets the productGroupsActiveQuery for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProduct.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProduct", parameters);
    }

    function AddEditProduct_bk(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProduct_bk screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Product" type="msls.application.Product">
        /// Gets or sets the product for this screen.
        /// </field>
        /// <field name="UnitsOnOrder" type="String">
        /// Gets or sets the unitsOnOrder for this screen.
        /// </field>
        /// <field name="UnitsOnHand" type="String">
        /// Gets or sets the unitsOnHand for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProduct_bk.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProduct_bk", parameters);
    }

    function AddEditProductCategory(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProductCategory screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProductCategory" type="msls.application.ProductCategory">
        /// Gets or sets the productCategory for this screen.
        /// </field>
        /// <field name="Products" type="msls.VisualCollection" elementType="msls.application.Product">
        /// Gets the products for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProductCategory.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProductCategory", parameters);
    }

    function AddEditProductGroup(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProductGroup screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProductGroup" type="msls.application.ProductGroup">
        /// Gets or sets the productGroup for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProductGroup.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProductGroup", parameters);
    }

    function AddEditProductPricing(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProductPricing screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="StockOnHand" type="msls.application.StockOnHand">
        /// Gets or sets the stockOnHand for this screen.
        /// </field>
        /// <field name="UnitCost" type="String">
        /// Gets or sets the unitCost for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProductPricing.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProductPricing", parameters);
    }

    function AddEditProductReceiveBalanceForward(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProductReceiveBalanceForward screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProductReceive" type="msls.application.ProductReceiveBalanceForward">
        /// Gets or sets the productReceive for this screen.
        /// </field>
        /// <field name="ProductReceiveDetails" type="msls.VisualCollection" elementType="msls.application.ProductReceiveBalanceForwardDetail">
        /// Gets the productReceiveDetails for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProductReceiveBalanceForward.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProductReceiveBalanceForward", parameters);
    }

    function AddEditProductReceiveBalanceForwardDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProductReceiveBalanceForwardDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProductReceiveDetail" type="msls.application.ProductReceiveBalanceForwardDetail">
        /// Gets or sets the productReceiveDetail for this screen.
        /// </field>
        /// <field name="CostAmountReadOnly" type="String">
        /// Gets or sets the costAmountReadOnly for this screen.
        /// </field>
        /// <field name="ProductsActiveQuery" type="msls.VisualCollection" elementType="msls.application.Product">
        /// Gets the productsActiveQuery for this screen.
        /// </field>
        /// <field name="LocationActiveQuery" type="msls.VisualCollection" elementType="msls.application.Location">
        /// Gets the locationActiveQuery for this screen.
        /// </field>
        /// <field name="SearchProduct" type="String">
        /// Gets or sets the searchProduct for this screen.
        /// </field>
        /// <field name="ProductDescription" type="String">
        /// Gets or sets the productDescription for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProductReceiveBalanceForwardDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProductReceiveBalanceForwardDetail", parameters);
    }

    function AddEditProductReceiveBalanceForwardWithDetails(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProductReceiveBalanceForwardWithDetails screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProductReceiveBalanceForward" type="msls.application.ProductReceiveBalanceForward">
        /// Gets or sets the productReceiveBalanceForward for this screen.
        /// </field>
        /// <field name="ProductReceiveBalanceForwardDetail" type="msls.VisualCollection" elementType="msls.application.ProductReceiveBalanceForwardDetail">
        /// Gets the productReceiveBalanceForwardDetail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProductReceiveBalanceForwardWithDetails.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProductReceiveBalanceForwardWithDetails", parameters);
    }

    function AddEditProductReceivePurchaseOrderDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProductReceivePurchaseOrderDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProductReceivePurchaseOrderDetail" type="msls.application.ProductReceivePurchaseOrderDetail">
        /// Gets or sets the productReceivePurchaseOrderDetail for this screen.
        /// </field>
        /// <field name="SelectedPODetail" type="msls.application.PurchaseOrderDetail">
        /// Gets or sets the selectedPODetail for this screen.
        /// </field>
        /// <field name="LocationActiveQuery" type="msls.VisualCollection" elementType="msls.application.Location">
        /// Gets the locationActiveQuery for this screen.
        /// </field>
        /// <field name="SearchLocation" type="String">
        /// Gets or sets the searchLocation for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProductReceivePurchaseOrderDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProductReceivePurchaseOrderDetail", parameters);
    }

    function AddEditProductSubscriber(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProductSubscriber screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.AddEditProductSubscriber.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProductSubscriber", parameters);
    }

    function AddEditPurchaseOrder(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPurchaseOrder screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrder" type="msls.application.PurchaseOrder">
        /// Gets or sets the purchaseOrder for this screen.
        /// </field>
        /// <field name="PurchaseOrderDetails" type="msls.VisualCollection" elementType="msls.application.PurchaseOrderDetail">
        /// Gets the purchaseOrderDetails for this screen.
        /// </field>
        /// <field name="POStatusDescription" type="String">
        /// Gets or sets the pOStatusDescription for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPurchaseOrder.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPurchaseOrder", parameters);
    }

    function AddEditPurchaseOrder_Old(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPurchaseOrder_Old screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.AddEditPurchaseOrder_Old.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPurchaseOrder_Old", parameters);
    }

    function AddEditPurchaseOrderDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPurchaseOrderDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrderDetail" type="msls.application.PurchaseOrderDetail">
        /// Gets or sets the purchaseOrderDetail for this screen.
        /// </field>
        /// <field name="SelectPONumber" type="String">
        /// Gets or sets the selectPONumber for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPurchaseOrderDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPurchaseOrderDetail", parameters);
    }

    function AddEditPurchaseOrderDetail_Old(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPurchaseOrderDetail_Old screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.AddEditPurchaseOrderDetail_Old.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPurchaseOrderDetail_Old", parameters);
    }

    function AddEditPurchaseOrderDetailTest(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPurchaseOrderDetailTest screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrderDetail" type="msls.application.PurchaseOrderDetail">
        /// Gets or sets the purchaseOrderDetail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPurchaseOrderDetailTest.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPurchaseOrderDetailTest", parameters);
    }

    function AddEditPurchaseOrderTest(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPurchaseOrderTest screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrder" type="msls.application.PurchaseOrder">
        /// Gets or sets the purchaseOrder for this screen.
        /// </field>
        /// <field name="PurchaseOrderDetails" type="msls.VisualCollection" elementType="msls.application.PurchaseOrderDetail">
        /// Gets the purchaseOrderDetails for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPurchaseOrderTest.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPurchaseOrderTest", parameters);
    }

    function AddEditReceiveFromPurchaseOrder(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditReceiveFromPurchaseOrder screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="SelectPO" type="msls.VisualCollection" elementType="msls.application.PurchaseOrder">
        /// Gets the selectPO for this screen.
        /// </field>
        /// <field name="PurchaseOrderDetails" type="msls.VisualCollection" elementType="msls.application.PurchaseOrderDetail">
        /// Gets the purchaseOrderDetails for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditReceiveFromPurchaseOrder.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditReceiveFromPurchaseOrder", parameters);
    }

    function AddEditReceiveFromPurchaseOrderDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditReceiveFromPurchaseOrderDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ItemUOM" type="String">
        /// Gets or sets the itemUOM for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditReceiveFromPurchaseOrderDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditReceiveFromPurchaseOrderDetail", parameters);
    }

    function AddEditSaleOrder(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditSaleOrder screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="SaleOrder" type="msls.application.SaleOrder">
        /// Gets or sets the saleOrder for this screen.
        /// </field>
        /// <field name="SaleOrderDetails" type="msls.VisualCollection" elementType="msls.application.SaleOrderDetail">
        /// Gets the saleOrderDetails for this screen.
        /// </field>
        /// <field name="SaleOrderTotalAmount" type="String">
        /// Gets or sets the saleOrderTotalAmount for this screen.
        /// </field>
        /// <field name="CustomersActiveQuery" type="msls.VisualCollection" elementType="msls.application.Customer">
        /// Gets the customersActiveQuery for this screen.
        /// </field>
        /// <field name="SearchCustomer" type="String">
        /// Gets or sets the searchCustomer for this screen.
        /// </field>
        /// <field name="totalAmount" type="String">
        /// Gets or sets the totalAmount for this screen.
        /// </field>
        /// <field name="SaleOrderDetailRequisitionFlagDescription" type="String">
        /// Gets or sets the saleOrderDetailRequisitionFlagDescription for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditSaleOrder.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditSaleOrder", parameters);
    }

    function AddEditSaleOrderDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditSaleOrderDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="SaleOrderDetail" type="msls.application.SaleOrderDetail">
        /// Gets or sets the saleOrderDetail for this screen.
        /// </field>
        /// <field name="StockOnHandForSale" type="msls.VisualCollection" elementType="msls.application.StockOnHand">
        /// Gets the stockOnHandForSale for this screen.
        /// </field>
        /// <field name="SearchLocation" type="String">
        /// Gets or sets the searchLocation for this screen.
        /// </field>
        /// <field name="SearchProduct" type="String">
        /// Gets or sets the searchProduct for this screen.
        /// </field>
        /// <field name="SearchLot" type="String">
        /// Gets or sets the searchLot for this screen.
        /// </field>
        /// <field name="AvailableQuantity" type="Number">
        /// Gets or sets the availableQuantity for this screen.
        /// </field>
        /// <field name="TotalSalePrice" type="String">
        /// Gets or sets the totalSalePrice for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditSaleOrderDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditSaleOrderDetail", parameters);
    }

    function AddEditShippingMethod(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditShippingMethod screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.AddEditShippingMethod.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditShippingMethod", parameters);
    }

    function AddEditStockAdjust(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditStockAdjust screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="StockAdjust" type="msls.application.StockAdjust">
        /// Gets or sets the stockAdjust for this screen.
        /// </field>
        /// <field name="StockAdjustDetails" type="msls.VisualCollection" elementType="msls.application.StockAdjustDetail">
        /// Gets the stockAdjustDetails for this screen.
        /// </field>
        /// <field name="DifferenceQuantity" type="Number">
        /// Gets or sets the differenceQuantity for this screen.
        /// </field>
        /// <field name="StockOnHands" type="msls.VisualCollection" elementType="msls.application.StockOnHand">
        /// Gets the stockOnHands for this screen.
        /// </field>
        /// <field name="SearchProductForAdjust" type="String">
        /// Gets or sets the searchProductForAdjust for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditStockAdjust.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditStockAdjust", parameters);
    }

    function AddEditStockAdjustDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditStockAdjustDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="StockAdjustDetail" type="msls.application.StockAdjustDetail">
        /// Gets or sets the stockAdjustDetail for this screen.
        /// </field>
        /// <field name="DiferenceQuantity" type="Number">
        /// Gets or sets the diferenceQuantity for this screen.
        /// </field>
        /// <field name="StockOnHandsQuery" type="msls.VisualCollection" elementType="msls.application.StockOnHand">
        /// Gets the stockOnHandsQuery for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditStockAdjustDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditStockAdjustDetail", parameters);
    }

    function AddEditStockCheck(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditStockCheck screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="StockCheck" type="msls.application.StockCheck">
        /// Gets or sets the stockCheck for this screen.
        /// </field>
        /// <field name="StockCheckDetailsCollection" type="msls.VisualCollection" elementType="msls.application.StockCheckDetail">
        /// Gets the stockCheckDetailsCollection for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditStockCheck.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditStockCheck", parameters);
    }

    function AddEditStockCheckDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditStockCheckDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="StockCheckDetail" type="msls.application.StockCheckDetail">
        /// Gets or sets the stockCheckDetail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditStockCheckDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditStockCheckDetail", parameters);
    }

    function AddEditSupplier(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditSupplier screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Supplier" type="msls.application.Supplier">
        /// Gets or sets the supplier for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditSupplier.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditSupplier", parameters);
    }

    function AddEditSupplierGroup(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditSupplierGroup screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="SupplierGroup" type="msls.application.SupplierGroup">
        /// Gets or sets the supplierGroup for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditSupplierGroup.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditSupplierGroup", parameters);
    }

    function AddEditTransportRoute(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTransportRoute screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TransportRoute" type="msls.application.TransportRoute">
        /// Gets or sets the transportRoute for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTransportRoute.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTransportRoute", parameters);
    }

    function AddEditUnitOfMeasure(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditUnitOfMeasure screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="UnitOfMeasure" type="msls.application.UnitOfMeasure">
        /// Gets or sets the unitOfMeasure for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditUnitOfMeasure.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditUnitOfMeasure", parameters);
    }

    function AddEditWorker(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditWorker screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Worker" type="msls.application.Worker">
        /// Gets or sets the worker for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditWorker.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditWorker", parameters);
    }

    function AddEditWorkOrder(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditWorkOrder screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="WorkOrder" type="msls.application.WorkOrder">
        /// Gets or sets the workOrder for this screen.
        /// </field>
        /// <field name="WorkOrderIssueDetails" type="msls.VisualCollection" elementType="msls.application.WorkOrderIssueDetail">
        /// Gets the workOrderIssueDetails for this screen.
        /// </field>
        /// <field name="WorkOrderProduces" type="msls.VisualCollection" elementType="msls.application.WorkOrderProduce">
        /// Gets the workOrderProduces for this screen.
        /// </field>
        /// <field name="SearchEmployee" type="String">
        /// Gets or sets the searchEmployee for this screen.
        /// </field>
        /// <field name="MachineActiveQuery" type="msls.VisualCollection" elementType="msls.application.Machine">
        /// Gets the machineActiveQuery for this screen.
        /// </field>
        /// <field name="SearchMachine" type="String">
        /// Gets or sets the searchMachine for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditWorkOrder.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditWorkOrder", parameters);
    }

    function AddEditWorkOrderIssueDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditWorkOrderIssueDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="WorkOrderIssueDetail" type="msls.application.WorkOrderIssueDetail">
        /// Gets or sets the workOrderIssueDetail for this screen.
        /// </field>
        /// <field name="QueryStockOnHandForIssue" type="msls.VisualCollection" elementType="msls.application.StockOnHand">
        /// Gets the queryStockOnHandForIssue for this screen.
        /// </field>
        /// <field name="SearchStock" type="String">
        /// Gets or sets the searchStock for this screen.
        /// </field>
        /// <field name="AvailableQuantity" type="Number">
        /// Gets or sets the availableQuantity for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditWorkOrderIssueDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditWorkOrderIssueDetail", parameters);
    }

    function AddEditWorkOrderProduce(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditWorkOrderProduce screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="WorkOrderProduce" type="msls.application.WorkOrderProduce">
        /// Gets or sets the workOrderProduce for this screen.
        /// </field>
        /// <field name="ProductsActiveQuery" type="msls.VisualCollection" elementType="msls.application.Product">
        /// Gets the productsActiveQuery for this screen.
        /// </field>
        /// <field name="SearchProduct" type="String">
        /// Gets or sets the searchProduct for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditWorkOrderProduce.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditWorkOrderProduce", parameters);
    }

    function BrowseAccountingTasks(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseAccountingTasks screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.BrowseAccountingTasks.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseAccountingTasks", parameters);
    }

    function BrowseBanks(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseBanks screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Banks" type="msls.VisualCollection" elementType="msls.application.Bank">
        /// Gets the banks for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseBanks.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseBanks", parameters);
    }

    function BrowseCompanies(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseCompanies screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Companies" type="msls.VisualCollection" elementType="msls.application.Company">
        /// Gets the companies for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseCompanies.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseCompanies", parameters);
    }

    function BrowseCustomerGroups(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseCustomerGroups screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CustomerGroups" type="msls.VisualCollection" elementType="msls.application.CustomerGroup">
        /// Gets the customerGroups for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseCustomerGroups.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseCustomerGroups", parameters);
    }

    function BrowseCustomers(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseCustomers screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Customers" type="msls.VisualCollection" elementType="msls.application.Customer">
        /// Gets the customers for this screen.
        /// </field>
        /// <field name="CustomerGroups" type="msls.VisualCollection" elementType="msls.application.CustomerGroup">
        /// Gets the customerGroups for this screen.
        /// </field>
        /// <field name="SearchCustomer" type="String">
        /// Gets or sets the searchCustomer for this screen.
        /// </field>
        /// <field name="SearchCustomerGroup" type="String">
        /// Gets or sets the searchCustomerGroup for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseCustomers.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseCustomers", parameters);
    }

    function BrowseEmployees(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployees screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployees.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployees", parameters);
    }

    function BrowseInventoryTasks(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseInventoryTasks screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.BrowseInventoryTasks.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseInventoryTasks", parameters);
    }

    function BrowseLocations(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseLocations screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProductLocations" type="msls.VisualCollection" elementType="msls.application.Location">
        /// Gets the productLocations for this screen.
        /// </field>
        /// <field name="Products" type="msls.VisualCollection" elementType="msls.application.Product">
        /// Gets the products for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseLocations.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseLocations", parameters);
    }

    function BrowseMachines(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMachines screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Machines" type="msls.VisualCollection" elementType="msls.application.Machine">
        /// Gets the machines for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMachines.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMachines", parameters);
    }

    function BrowseMenuReceiveProduct(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMenuReceiveProduct screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.BrowseMenuReceiveProduct.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMenuReceiveProduct", parameters);
    }

    function BrowseMenuSales(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMenuSales screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.BrowseMenuSales.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMenuSales", parameters);
    }

    function BrowseOrderRequisitions(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseOrderRequisitions screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="OrderRequisitions" type="msls.VisualCollection" elementType="msls.application.OrderRequisition">
        /// Gets the orderRequisitions for this screen.
        /// </field>
        /// <field name="OrderRequisitionDetail" type="msls.VisualCollection" elementType="msls.application.OrderRequisitionDetail">
        /// Gets the orderRequisitionDetail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseOrderRequisitions.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseOrderRequisitions", parameters);
    }

    function BrowseOrderRequisitionsDelivery(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseOrderRequisitionsDelivery screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="OrderRequisitions" type="msls.VisualCollection" elementType="msls.application.OrderRequisition">
        /// Gets the orderRequisitions for this screen.
        /// </field>
        /// <field name="OrderRequisitionDetail" type="msls.VisualCollection" elementType="msls.application.OrderRequisitionDetail">
        /// Gets the orderRequisitionDetail for this screen.
        /// </field>
        /// <field name="SelectedTransportRouteId" type="Number">
        /// Gets or sets the selectedTransportRouteId for this screen.
        /// </field>
        /// <field name="TotalProductWeight" type="Number">
        /// Gets or sets the totalProductWeight for this screen.
        /// </field>
        /// <field name="TotalWeight" type="Number">
        /// Gets or sets the totalWeight for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseOrderRequisitionsDelivery.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseOrderRequisitionsDelivery", parameters);
    }

    function BrowseOrderRequisitionsTransportRoute(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseOrderRequisitionsTransportRoute screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="QueryOrderRequisitionTransportRoute" type="msls.VisualCollection" elementType="msls.application.OrderRequisition">
        /// Gets the queryOrderRequisitionTransportRoute for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseOrderRequisitionsTransportRoute.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseOrderRequisitionsTransportRoute", parameters);
    }

    function BrowseOrders(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseOrders screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseOrders.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseOrders", parameters);
    }

    function BrowsePackages(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowsePackages screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Packages" type="msls.VisualCollection" elementType="msls.application.Package">
        /// Gets the packages for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowsePackages.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowsePackages", parameters);
    }

    function BrowsePaymentTypes(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowsePaymentTypes screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PaymentTypes" type="msls.VisualCollection" elementType="msls.application.PaymentType">
        /// Gets the paymentTypes for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowsePaymentTypes.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowsePaymentTypes", parameters);
    }

    function BrowsePO(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowsePO screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrders" type="msls.VisualCollection" elementType="msls.application.PurchaseOrder">
        /// Gets the purchaseOrders for this screen.
        /// </field>
        /// <field name="POStatusDescription" type="String">
        /// Gets or sets the pOStatusDescription for this screen.
        /// </field>
        /// <field name="SearchParameter" type="String">
        /// Gets or sets the searchParameter for this screen.
        /// </field>
        /// <field name="PurchaseOrderClosed" type="msls.VisualCollection" elementType="msls.application.PurchaseOrder">
        /// Gets the purchaseOrderClosed for this screen.
        /// </field>
        /// <field name="PurchaseOrderNotClose" type="msls.VisualCollection" elementType="msls.application.PurchaseOrder">
        /// Gets the purchaseOrderNotClose for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowsePO.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowsePO", parameters);
    }

    function BrowsePOReceive(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowsePOReceive screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrders" type="msls.VisualCollection" elementType="msls.application.PurchaseOrder">
        /// Gets the purchaseOrders for this screen.
        /// </field>
        /// <field name="POStatusDescription" type="String">
        /// Gets or sets the pOStatusDescription for this screen.
        /// </field>
        /// <field name="PurchaseOrderDetails" type="msls.VisualCollection" elementType="msls.application.PurchaseOrderDetail">
        /// Gets the purchaseOrderDetails for this screen.
        /// </field>
        /// <field name="ProductReceivePurchaseOrderDetails" type="msls.VisualCollection" elementType="msls.application.ProductReceivePurchaseOrderDetail">
        /// Gets the productReceivePurchaseOrderDetails for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowsePOReceive.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowsePOReceive", parameters);
    }

    function BrowseProductCategories(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseProductCategories screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProductCategories" type="msls.VisualCollection" elementType="msls.application.ProductCategory">
        /// Gets the productCategories for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="Products" type="msls.VisualCollection" elementType="msls.application.Product">
        /// Gets the products for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProductCategories.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProductCategories", parameters);
    }

    function BrowseProductGroups(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseProductGroups screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProductGroups" type="msls.VisualCollection" elementType="msls.application.ProductGroup">
        /// Gets the productGroups for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProductGroups.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProductGroups", parameters);
    }

    function BrowseProductPricings(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseProductPricings screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="StockOnHands" type="msls.VisualCollection" elementType="msls.application.StockOnHand">
        /// Gets the stockOnHands for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="AvailableForSaleDescription" type="String">
        /// Gets or sets the availableForSaleDescription for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProductPricings.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProductPricings", parameters);
    }

    function BrowseProductReceiveBalanceForwards(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseProductReceiveBalanceForwards screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProductReceives" type="msls.VisualCollection" elementType="msls.application.ProductReceiveBalanceForward">
        /// Gets the productReceives for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProductReceiveBalanceForwards.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProductReceiveBalanceForwards", parameters);
    }

    function BrowseProductReceivePurchaseOrderDetails(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseProductReceivePurchaseOrderDetails screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProductReceivePurchaseOrderDetails" type="msls.VisualCollection" elementType="msls.application.ProductReceivePurchaseOrderDetail">
        /// Gets the productReceivePurchaseOrderDetails for this screen.
        /// </field>
        /// <field name="SelectedPODetail" type="msls.application.PurchaseOrderDetail">
        /// Gets or sets the selectedPODetail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProductReceivePurchaseOrderDetails.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProductReceivePurchaseOrderDetails", parameters);
    }

    function BrowseProducts(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseProducts screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Products" type="msls.VisualCollection" elementType="msls.application.Product">
        /// Gets the products for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="ProductGroups" type="msls.VisualCollection" elementType="msls.application.ProductGroup">
        /// Gets the productGroups for this screen.
        /// </field>
        /// <field name="ProductCategories" type="msls.VisualCollection" elementType="msls.application.ProductCategory">
        /// Gets the productCategories for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProducts.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProducts", parameters);
    }

    function BrowseProducts_bk(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseProducts_bk screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Products" type="msls.VisualCollection" elementType="msls.application.Product">
        /// Gets the products for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProducts_bk.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProducts_bk", parameters);
    }

    function BrowsePurchaseOrderNotClose(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowsePurchaseOrderNotClose screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrderNotClose" type="msls.VisualCollection" elementType="msls.application.PurchaseOrder">
        /// Gets the purchaseOrderNotClose for this screen.
        /// </field>
        /// <field name="PurchaseOrderDetailByPOId" type="msls.VisualCollection" elementType="msls.application.PurchaseOrderDetail">
        /// Gets the purchaseOrderDetailByPOId for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowsePurchaseOrderNotClose.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowsePurchaseOrderNotClose", parameters);
    }

    function BrowsePurchaseOrders(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowsePurchaseOrders screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrders" type="msls.VisualCollection" elementType="msls.application.PurchaseOrder">
        /// Gets the purchaseOrders for this screen.
        /// </field>
        /// <field name="POStatusDescription" type="String">
        /// Gets or sets the pOStatusDescription for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowsePurchaseOrders.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowsePurchaseOrders", parameters);
    }

    function BrowsePurchaseOrders_Old(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowsePurchaseOrders_Old screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowsePurchaseOrders_Old.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowsePurchaseOrders_Old", parameters);
    }

    function BrowseSaleOrders(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseSaleOrders screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="SaleOrders" type="msls.VisualCollection" elementType="msls.application.SaleOrder">
        /// Gets the saleOrders for this screen.
        /// </field>
        /// <field name="SearchSO" type="String">
        /// Gets or sets the searchSO for this screen.
        /// </field>
        /// <field name="SaleOrderStatusDescription" type="String">
        /// Gets or sets the saleOrderStatusDescription for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseSaleOrders.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseSaleOrders", parameters);
    }

    function BrowseSaleOrderTasks(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseSaleOrderTasks screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.BrowseSaleOrderTasks.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseSaleOrderTasks", parameters);
    }

    function BrowseShippingMethods(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseShippingMethods screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseShippingMethods.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseShippingMethods", parameters);
    }

    function BrowseStockAdjusts(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseStockAdjusts screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="StockAdjusts" type="msls.VisualCollection" elementType="msls.application.StockAdjust">
        /// Gets the stockAdjusts for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseStockAdjusts.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseStockAdjusts", parameters);
    }

    function BrowseStockOnHands(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseStockOnHands screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="StockOnHands" type="msls.VisualCollection" elementType="msls.application.StockOnHand">
        /// Gets the stockOnHands for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="ProductDescription" type="String">
        /// Gets or sets the productDescription for this screen.
        /// </field>
        /// <field name="IsAvailableForSale" type="Boolean">
        /// Gets or sets the isAvailableForSale for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseStockOnHands.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseStockOnHands", parameters);
    }

    function BrowseStockTransfers(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseStockTransfers screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="StockTransfers" type="msls.VisualCollection" elementType="msls.application.StockTransfer">
        /// Gets the stockTransfers for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseStockTransfers.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseStockTransfers", parameters);
    }

    function BrowseSupplierGroups(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseSupplierGroups screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="SupplierGroups" type="msls.VisualCollection" elementType="msls.application.SupplierGroup">
        /// Gets the supplierGroups for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseSupplierGroups.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseSupplierGroups", parameters);
    }

    function BrowseSuppliers(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseSuppliers screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Suppliers" type="msls.VisualCollection" elementType="msls.application.Supplier">
        /// Gets the suppliers for this screen.
        /// </field>
        /// <field name="SupplierGroups" type="msls.VisualCollection" elementType="msls.application.SupplierGroup">
        /// Gets the supplierGroups for this screen.
        /// </field>
        /// <field name="SearchSupplier" type="String">
        /// Gets or sets the searchSupplier for this screen.
        /// </field>
        /// <field name="SearchSupplierGroup" type="String">
        /// Gets or sets the searchSupplierGroup for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseSuppliers.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseSuppliers", parameters);
    }

    function BrowseTransportRoutes(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTransportRoutes screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TransportRoutes" type="msls.VisualCollection" elementType="msls.application.TransportRoute">
        /// Gets the transportRoutes for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTransportRoutes.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTransportRoutes", parameters);
    }

    function BrowseUnitOfMeasures(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseUnitOfMeasures screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="UnitOfMeasures" type="msls.VisualCollection" elementType="msls.application.UnitOfMeasure">
        /// Gets the unitOfMeasures for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseUnitOfMeasures.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseUnitOfMeasures", parameters);
    }

    function BrowseWorkers(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseWorkers screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Workers" type="msls.VisualCollection" elementType="msls.application.Worker">
        /// Gets the workers for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseWorkers.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseWorkers", parameters);
    }

    function BrowseWorkOrderIsNotReceive(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseWorkOrderIsNotReceive screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="WorkOrderIsNotReceive" type="msls.VisualCollection" elementType="msls.application.WorkOrder">
        /// Gets the workOrderIsNotReceive for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseWorkOrderIsNotReceive.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseWorkOrderIsNotReceive", parameters);
    }

    function BrowseWorkOrders(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseWorkOrders screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="WorkOrders" type="msls.VisualCollection" elementType="msls.application.WorkOrder">
        /// Gets the workOrders for this screen.
        /// </field>
        /// <field name="EmployeeFullName" type="String">
        /// Gets or sets the employeeFullName for this screen.
        /// </field>
        /// <field name="WorkOrderStatusDescription" type="String">
        /// Gets or sets the workOrderStatusDescription for this screen.
        /// </field>
        /// <field name="WorkOrdersQuery" type="msls.VisualCollection" elementType="msls.application.WorkOrder">
        /// Gets the workOrdersQuery for this screen.
        /// </field>
        /// <field name="SearchWorkOrder" type="String">
        /// Gets or sets the searchWorkOrder for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseWorkOrders.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseWorkOrders", parameters);
    }

    function Home(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Home screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Home.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Home", parameters);
    }

    function MobileHome(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MobileHome screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.MobileHome.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MobileHome", parameters);
    }

    function SearchActiveProducts(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the SearchActiveProducts screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Products" type="msls.VisualCollection" elementType="msls.application.Product">
        /// Gets the products for this screen.
        /// </field>
        /// <field name="details" type="msls.application.SearchActiveProducts.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "SearchActiveProducts", parameters);
    }

    function ViewPOReceivedDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewPOReceivedDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrderDetail" type="msls.application.PurchaseOrderDetail">
        /// Gets or sets the purchaseOrderDetail for this screen.
        /// </field>
        /// <field name="IsReceiveCompleteDescription" type="String">
        /// Gets or sets the isReceiveCompleteDescription for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewPOReceivedDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewPOReceivedDetail", parameters);
    }

    function ViewPurchaseOrder(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewPurchaseOrder screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrder" type="msls.application.PurchaseOrder">
        /// Gets or sets the purchaseOrder for this screen.
        /// </field>
        /// <field name="PurchaseOrderDetails" type="msls.VisualCollection" elementType="msls.application.PurchaseOrderDetail">
        /// Gets the purchaseOrderDetails for this screen.
        /// </field>
        /// <field name="POStatusDescription" type="String">
        /// Gets or sets the pOStatusDescription for this screen.
        /// </field>
        /// <field name="ProductReceivePurchaseOrderDetails" type="msls.VisualCollection" elementType="msls.application.ProductReceivePurchaseOrderDetail">
        /// Gets the productReceivePurchaseOrderDetails for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewPurchaseOrder.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewPurchaseOrder", parameters);
    }

    function ViewPurchaseOrderDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewPurchaseOrderDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrderDetail" type="msls.application.PurchaseOrderDetail">
        /// Gets or sets the purchaseOrderDetail for this screen.
        /// </field>
        /// <field name="POStatusDescription" type="String">
        /// Gets or sets the pOStatusDescription for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewPurchaseOrderDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewPurchaseOrderDetail", parameters);
    }

    function ViewPurchaseOrderDetail1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewPurchaseOrderDetail1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrderDetail" type="msls.application.PurchaseOrderDetail">
        /// Gets or sets the purchaseOrderDetail for this screen.
        /// </field>
        /// <field name="ProductReceivePurchaseOrderDetails" type="msls.VisualCollection" elementType="msls.application.ProductReceivePurchaseOrderDetail">
        /// Gets the productReceivePurchaseOrderDetails for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewPurchaseOrderDetail1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewPurchaseOrderDetail1", parameters);
    }

    function ViewSaleOrder(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewSaleOrder screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="SaleOrder" type="msls.application.SaleOrder">
        /// Gets or sets the saleOrder for this screen.
        /// </field>
        /// <field name="SaleOrderDetails" type="msls.VisualCollection" elementType="msls.application.SaleOrderDetail">
        /// Gets the saleOrderDetails for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewSaleOrder.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewSaleOrder", parameters);
    }

    function ViewWorkOrder(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewWorkOrder screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="WorkOrder" type="msls.application.WorkOrder">
        /// Gets or sets the workOrder for this screen.
        /// </field>
        /// <field name="WorkOrderIssueDetails" type="msls.VisualCollection" elementType="msls.application.WorkOrderIssueDetail">
        /// Gets the workOrderIssueDetails for this screen.
        /// </field>
        /// <field name="WorkOrderProduces" type="msls.VisualCollection" elementType="msls.application.WorkOrderProduce">
        /// Gets the workOrderProduces for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewWorkOrder.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewWorkOrder", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditBank: $defineScreen(AddEditBank, [
            { name: "Bank", kind: "local", type: lightSwitchApplication.Bank }
        ], [
        ]),

        AddEditCompany: $defineScreen(AddEditCompany, [
            { name: "Company", kind: "local", type: lightSwitchApplication.Company }
        ], [
        ]),

        AddEditCustomer: $defineScreen(AddEditCustomer, [
            { name: "Customer", kind: "local", type: lightSwitchApplication.Customer },
            {
                name: "CustomerGroupActiveQuery", kind: "collection", elementType: lightSwitchApplication.CustomerGroup,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.CustomerGroupActiveQuery();
                }
            }
        ], [
        ]),

        AddEditCustomerGroup: $defineScreen(AddEditCustomerGroup, [
            { name: "CustomerGroup", kind: "local", type: lightSwitchApplication.CustomerGroup }
        ], [
        ]),

        AddEditEmployee: $defineScreen(AddEditEmployee, [
        ], [
        ]),

        AddEditLocation: $defineScreen(AddEditLocation, [
            { name: "ProductLocation", kind: "local", type: lightSwitchApplication.Location }
        ], [
        ]),

        AddEditMachine: $defineScreen(AddEditMachine, [
            { name: "Machine", kind: "local", type: lightSwitchApplication.Machine }
        ], [
        ]),

        AddEditOrder: $defineScreen(AddEditOrder, [
        ], [
        ]),

        AddEditOrderDetail: $defineScreen(AddEditOrderDetail, [
        ], [
        ]),

        AddEditOrderRequisition: $defineScreen(AddEditOrderRequisition, [
            { name: "OrderRequisition", kind: "local", type: lightSwitchApplication.OrderRequisition },
            {
                name: "OrderRequisitionDetail", kind: "collection", elementType: lightSwitchApplication.OrderRequisitionDetail,
                getNavigationProperty: function () {
                    if (this.owner.OrderRequisition) {
                        return this.owner.OrderRequisition.details.properties.OrderRequisitionDetail;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Product").expand("Product.UnitOfMeasure");
                }
            }
        ], [
        ]),

        AddEditOrderRequisitionDetail: $defineScreen(AddEditOrderRequisitionDetail, [
            { name: "OrderRequisitionDetail", kind: "local", type: lightSwitchApplication.OrderRequisitionDetail },
            {
                name: "ProductsActiveQuery", kind: "collection", elementType: lightSwitchApplication.Product,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.ProductsActiveQuery().expand("UnitOfMeasure");
                }
            }
        ], [
            { name: "ProductsActiveQuery_ItemTap" },
            { name: "deleteSelectedOrderRequisitionDetail" }
        ]),

        AddEditPackage: $defineScreen(AddEditPackage, [
            { name: "Package", kind: "local", type: lightSwitchApplication.Package }
        ], [
        ]),

        AddEditPaymentType: $defineScreen(AddEditPaymentType, [
            { name: "PaymentType", kind: "local", type: lightSwitchApplication.PaymentType }
        ], [
        ]),

        AddEditPO: $defineScreen(AddEditPO, [
            { name: "PurchaseOrder", kind: "local", type: lightSwitchApplication.PurchaseOrder },
            {
                name: "PurchaseOrderDetails", kind: "collection", elementType: lightSwitchApplication.PurchaseOrderDetail,
                getNavigationProperty: function () {
                    if (this.owner.PurchaseOrder) {
                        return this.owner.PurchaseOrder.details.properties.PurchaseOrderDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Product").expand("Product.UnitOfMeasure");
                }
            },
            {
                name: "SupplierActiveQuery", kind: "collection", elementType: lightSwitchApplication.Supplier,
                createQuery: function (SearchSupplier) {
                    return this.dataWorkspace.ApplicationData.SupplierActiveQuery().filter("" + ((SearchSupplier === undefined || SearchSupplier === null) ? "true" : "substringof(" + $toODataString(SearchSupplier, "String?") + ", SupplierName)") + "").expand("SupplierGroup");
                }
            },
            { name: "SearchSupplier", kind: "local", type: String },
            { name: "POStatusDescription", kind: "local", type: String },
            { name: "ItemIsReceiveComplete", kind: "local", type: String }
        ], [
            { name: "SupplierActiveQuery_ItemTap" },
            { name: "PurchaseOrderDetails_ItemTap" },
            { name: "ShowAddEditPODetail_Tap" }
        ]),

        AddEditPODetail: $defineScreen(AddEditPODetail, [
            { name: "PurchaseOrderDetail", kind: "local", type: lightSwitchApplication.PurchaseOrderDetail },
            { name: "ProductUOM", kind: "local", type: String },
            {
                name: "ProductsActiveQuery", kind: "collection", elementType: lightSwitchApplication.Product,
                createQuery: function (SearchProduct) {
                    return this.dataWorkspace.ApplicationData.ProductsActiveQuery().filter("" + ((SearchProduct === undefined || SearchProduct === null) ? "true" : "substringof(" + $toODataString(SearchProduct, "String?") + ", ProductName)") + " or " + ((SearchProduct === undefined || SearchProduct === null) ? "true" : "substringof(" + $toODataString(SearchProduct, "String?") + ", ProductCode)") + "").expand("ProductGroup").expand("UnitOfMeasure").expand("Location");
                }
            },
            { name: "SearchProduct", kind: "local", type: String }
        ], [
            { name: "deleteSelectedPODetail" },
            { name: "ProductsActiveQuery_ItemTap" }
        ]),

        AddEditPOReceive: $defineScreen(AddEditPOReceive, [
            { name: "PurchaseOrder", kind: "local", type: lightSwitchApplication.PurchaseOrder },
            {
                name: "PurchaseOrderDetails", kind: "collection", elementType: lightSwitchApplication.PurchaseOrderDetail,
                getNavigationProperty: function () {
                    if (this.owner.PurchaseOrder) {
                        return this.owner.PurchaseOrder.details.properties.PurchaseOrderDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Product").expand("Location").expand("Product.UnitOfMeasure");
                }
            }
        ], [
            { name: "PurchaseOrderDetails_ItemTap" }
        ]),

        AddEditPOReceiveDetail: $defineScreen(AddEditPOReceiveDetail, [
            { name: "PurchaseOrderDetail", kind: "local", type: lightSwitchApplication.PurchaseOrderDetail },
            {
                name: "LocationActiveQuery", kind: "collection", elementType: lightSwitchApplication.Location,
                createQuery: function (SearchLocation) {
                    return this.dataWorkspace.ApplicationData.LocationActiveQuery().filter("" + ((SearchLocation === undefined || SearchLocation === null) ? "true" : "substringof(" + $toODataString(SearchLocation, "String?") + ", LocationName)") + "").orderBy("LocationName");
                }
            },
            { name: "SearchLocation", kind: "local", type: String }
        ], [
            { name: "LocationActiveQuery_ItemTap" }
        ]),

        AddEditProduct: $defineScreen(AddEditProduct, [
            { name: "Product", kind: "local", type: lightSwitchApplication.Product },
            {
                name: "ProductCategoriesActiveQuery", kind: "collection", elementType: lightSwitchApplication.ProductCategory,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.ProductCategoriesActiveQuery();
                }
            },
            {
                name: "ProductGroupsActiveQuery", kind: "collection", elementType: lightSwitchApplication.ProductGroup,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.ProductGroupsActiveQuery();
                }
            }
        ], [
        ]),

        AddEditProduct_bk: $defineScreen(AddEditProduct_bk, [
            { name: "Product", kind: "local", type: lightSwitchApplication.Product },
            { name: "UnitsOnOrder", kind: "local", type: String },
            { name: "UnitsOnHand", kind: "local", type: String }
        ], [
        ]),

        AddEditProductCategory: $defineScreen(AddEditProductCategory, [
            { name: "ProductCategory", kind: "local", type: lightSwitchApplication.ProductCategory },
            {
                name: "Products", kind: "collection", elementType: lightSwitchApplication.Product,
                getNavigationProperty: function () {
                    if (this.owner.ProductCategory) {
                        return this.owner.ProductCategory.details.properties.Products;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditProductGroup: $defineScreen(AddEditProductGroup, [
            { name: "ProductGroup", kind: "local", type: lightSwitchApplication.ProductGroup }
        ], [
        ]),

        AddEditProductPricing: $defineScreen(AddEditProductPricing, [
            { name: "StockOnHand", kind: "local", type: lightSwitchApplication.StockOnHand },
            { name: "UnitCost", kind: "local", type: String }
        ], [
        ]),

        AddEditProductReceiveBalanceForward: $defineScreen(AddEditProductReceiveBalanceForward, [
            { name: "ProductReceive", kind: "local", type: lightSwitchApplication.ProductReceiveBalanceForward },
            {
                name: "ProductReceiveDetails", kind: "collection", elementType: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
                getNavigationProperty: function () {
                    if (this.owner.ProductReceive) {
                        return this.owner.ProductReceive.details.properties.ProductReceiveBalanceForwardDetail;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Product").expand("Location");
                }
            }
        ], [
            { name: "deleteSelectedItem" }
        ]),

        AddEditProductReceiveBalanceForwardDetail: $defineScreen(AddEditProductReceiveBalanceForwardDetail, [
            { name: "ProductReceiveDetail", kind: "local", type: lightSwitchApplication.ProductReceiveBalanceForwardDetail },
            { name: "CostAmountReadOnly", kind: "local", type: String },
            {
                name: "ProductsActiveQuery", kind: "collection", elementType: lightSwitchApplication.Product,
                createQuery: function (SearchProduct) {
                    return this.dataWorkspace.ApplicationData.ProductsActiveQuery().filter("" + ((SearchProduct === undefined || SearchProduct === null) ? "true" : "substringof(" + $toODataString(SearchProduct, "String?") + ", ProductName)") + " or " + ((SearchProduct === undefined || SearchProduct === null) ? "true" : "substringof(" + $toODataString(SearchProduct, "String?") + ", ProductCode)") + "").orderBy("ProductName").expand("ProductCategory");
                }
            },
            {
                name: "LocationActiveQuery", kind: "collection", elementType: lightSwitchApplication.Location,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.LocationActiveQuery();
                }
            },
            { name: "SearchProduct", kind: "local", type: String },
            { name: "ProductDescription", kind: "local", type: String }
        ], [
            { name: "deleteSelectedItem" },
            { name: "ProductsActiveQuery_ItemTap" }
        ]),

        AddEditProductReceiveBalanceForwardWithDetails: $defineScreen(AddEditProductReceiveBalanceForwardWithDetails, [
            { name: "ProductReceiveBalanceForward", kind: "local", type: lightSwitchApplication.ProductReceiveBalanceForward },
            {
                name: "ProductReceiveBalanceForwardDetail", kind: "collection", elementType: lightSwitchApplication.ProductReceiveBalanceForwardDetail,
                getNavigationProperty: function () {
                    if (this.owner.ProductReceiveBalanceForward) {
                        return this.owner.ProductReceiveBalanceForward.details.properties.ProductReceiveBalanceForwardDetail;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Product").expand("Location");
                }
            }
        ], [
            { name: "deleteSelectedItem" }
        ]),

        AddEditProductReceivePurchaseOrderDetail: $defineScreen(AddEditProductReceivePurchaseOrderDetail, [
            { name: "ProductReceivePurchaseOrderDetail", kind: "local", type: lightSwitchApplication.ProductReceivePurchaseOrderDetail },
            { name: "SelectedPODetail", kind: "local", type: lightSwitchApplication.PurchaseOrderDetail },
            {
                name: "LocationActiveQuery", kind: "collection", elementType: lightSwitchApplication.Location,
                createQuery: function (SearchLocation) {
                    return this.dataWorkspace.ApplicationData.LocationActiveQuery().filter("" + ((SearchLocation === undefined || SearchLocation === null) ? "true" : "substringof(" + $toODataString(SearchLocation, "String?") + ", LocationName)") + "").orderBy("LocationName");
                }
            },
            { name: "SearchLocation", kind: "local", type: String }
        ], [
            { name: "LocationActiveQuery_ItemTap" }
        ]),

        AddEditProductSubscriber: $defineScreen(AddEditProductSubscriber, [
        ], [
        ]),

        AddEditPurchaseOrder: $defineScreen(AddEditPurchaseOrder, [
            { name: "PurchaseOrder", kind: "local", type: lightSwitchApplication.PurchaseOrder },
            {
                name: "PurchaseOrderDetails", kind: "collection", elementType: lightSwitchApplication.PurchaseOrderDetail,
                getNavigationProperty: function () {
                    if (this.owner.PurchaseOrder) {
                        return this.owner.PurchaseOrder.details.properties.PurchaseOrderDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Product").expand("Product.UnitOfMeasure");
                }
            },
            { name: "POStatusDescription", kind: "local", type: String }
        ], [
        ]),

        AddEditPurchaseOrder_Old: $defineScreen(AddEditPurchaseOrder_Old, [
        ], [
        ]),

        AddEditPurchaseOrderDetail: $defineScreen(AddEditPurchaseOrderDetail, [
            { name: "PurchaseOrderDetail", kind: "local", type: lightSwitchApplication.PurchaseOrderDetail },
            { name: "SelectPONumber", kind: "local", type: String }
        ], [
        ]),

        AddEditPurchaseOrderDetail_Old: $defineScreen(AddEditPurchaseOrderDetail_Old, [
        ], [
        ]),

        AddEditPurchaseOrderDetailTest: $defineScreen(AddEditPurchaseOrderDetailTest, [
            { name: "PurchaseOrderDetail", kind: "local", type: lightSwitchApplication.PurchaseOrderDetail }
        ], [
        ]),

        AddEditPurchaseOrderTest: $defineScreen(AddEditPurchaseOrderTest, [
            { name: "PurchaseOrder", kind: "local", type: lightSwitchApplication.PurchaseOrder },
            {
                name: "PurchaseOrderDetails", kind: "collection", elementType: lightSwitchApplication.PurchaseOrderDetail,
                getNavigationProperty: function () {
                    if (this.owner.PurchaseOrder) {
                        return this.owner.PurchaseOrder.details.properties.PurchaseOrderDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Product").expand("Product.UnitOfMeasure");
                }
            }
        ], [
        ]),

        AddEditReceiveFromPurchaseOrder: $defineScreen(AddEditReceiveFromPurchaseOrder, [
            {
                name: "SelectPO", kind: "collection", elementType: lightSwitchApplication.PurchaseOrder,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.PurchaseOrders.expand("Supplier");
                }
            },
            {
                name: "PurchaseOrderDetails", kind: "collection", elementType: lightSwitchApplication.PurchaseOrderDetail,
                getNavigationProperty: function () {
                    if (this.owner.SelectPO.selectedItem) {
                        return this.owner.SelectPO.selectedItem.details.properties.PurchaseOrderDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Product").expand("Product.UnitOfMeasure");
                }
            }
        ], [
        ]),

        AddEditReceiveFromPurchaseOrderDetail: $defineScreen(AddEditReceiveFromPurchaseOrderDetail, [
            { name: "ItemUOM", kind: "local", type: String }
        ], [
        ]),

        AddEditSaleOrder: $defineScreen(AddEditSaleOrder, [
            { name: "SaleOrder", kind: "local", type: lightSwitchApplication.SaleOrder },
            {
                name: "SaleOrderDetails", kind: "collection", elementType: lightSwitchApplication.SaleOrderDetail,
                getNavigationProperty: function () {
                    if (this.owner.SaleOrder) {
                        return this.owner.SaleOrder.details.properties.SaleOrderDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Product").expand("Location").expand("Product.UnitOfMeasure");
                }
            },
            { name: "SaleOrderTotalAmount", kind: "local", type: String },
            {
                name: "CustomersActiveQuery", kind: "collection", elementType: lightSwitchApplication.Customer,
                createQuery: function (SearchCustomer) {
                    return this.dataWorkspace.ApplicationData.CustomersActiveQuery().filter("" + ((SearchCustomer === undefined || SearchCustomer === null) ? "true" : "substringof(" + $toODataString(SearchCustomer, "String?") + ", CustomerName)") + " or " + ((SearchCustomer === undefined || SearchCustomer === null) ? "true" : "substringof(" + $toODataString(SearchCustomer, "String?") + ", ContactName)") + "").expand("CustomerGroup").expand("TransportRoute");
                }
            },
            { name: "SearchCustomer", kind: "local", type: String },
            { name: "totalAmount", kind: "local", type: String },
            { name: "SaleOrderDetailRequisitionFlagDescription", kind: "local", type: String }
        ], [
            { name: "CustomersPopup_Tap" }
        ]),

        AddEditSaleOrderDetail: $defineScreen(AddEditSaleOrderDetail, [
            { name: "SaleOrderDetail", kind: "local", type: lightSwitchApplication.SaleOrderDetail },
            {
                name: "StockOnHandForSale", kind: "collection", elementType: lightSwitchApplication.StockOnHand,
                createQuery: function (SearchLocation, SearchProduct, SearchLot) {
                    return this.dataWorkspace.ApplicationData.StockOnHandForSale().filter("(" + ((SearchLocation === undefined || SearchLocation === null) ? "true" : "substringof(" + $toODataString(SearchLocation, "String?") + ", Location/LocationName)") + " and (" + ((SearchProduct === undefined || SearchProduct === null) ? "true" : "substringof(" + $toODataString(SearchProduct, "String?") + ", Product/ProductCode)") + " or " + ((SearchProduct === undefined || SearchProduct === null) ? "true" : "substringof(" + $toODataString(SearchProduct, "String?") + ", Product/ProductName)") + ")) and " + ((SearchLot === undefined || SearchLot === null) ? "true" : "substringof(" + $toODataString(SearchLot, "String?") + ", LotNo)") + "").expand("Product").expand("Location").expand("Product.UnitOfMeasure");
                }
            },
            { name: "SearchLocation", kind: "local", type: String },
            { name: "SearchProduct", kind: "local", type: String },
            { name: "SearchLot", kind: "local", type: String },
            { name: "AvailableQuantity", kind: "local", type: Number },
            { name: "TotalSalePrice", kind: "local", type: String }
        ], [
            { name: "deleteSelected" },
            { name: "StockOnHandForSale_ItemTap" }
        ]),

        AddEditShippingMethod: $defineScreen(AddEditShippingMethod, [
        ], [
        ]),

        AddEditStockAdjust: $defineScreen(AddEditStockAdjust, [
            { name: "StockAdjust", kind: "local", type: lightSwitchApplication.StockAdjust },
            {
                name: "StockAdjustDetails", kind: "collection", elementType: lightSwitchApplication.StockAdjustDetail,
                getNavigationProperty: function () {
                    if (this.owner.StockAdjust) {
                        return this.owner.StockAdjust.details.properties.StockAdjustDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Product").expand("Product.Location").expand("Product.UnitOfMeasure");
                }
            },
            { name: "DifferenceQuantity", kind: "local", type: Number },
            {
                name: "StockOnHands", kind: "collection", elementType: lightSwitchApplication.StockOnHand,
                createQuery: function (SearchProductForAdjust) {
                    return this.dataWorkspace.ApplicationData.StockOnHands.filter("" + ((SearchProductForAdjust === undefined || SearchProductForAdjust === null) ? "true" : "substringof(" + $toODataString(SearchProductForAdjust, "String?") + ", Product/ProductCode)") + " or " + ((SearchProductForAdjust === undefined || SearchProductForAdjust === null) ? "true" : "substringof(" + $toODataString(SearchProductForAdjust, "String?") + ", Product/ProductName)") + "").orderBy("Product/ProductName").expand("Location").expand("Product");
                }
            },
            { name: "SearchProductForAdjust", kind: "local", type: String }
        ], [
        ]),

        AddEditStockAdjustDetail: $defineScreen(AddEditStockAdjustDetail, [
            { name: "StockAdjustDetail", kind: "local", type: lightSwitchApplication.StockAdjustDetail },
            { name: "DiferenceQuantity", kind: "local", type: Number },
            {
                name: "StockOnHandsQuery", kind: "collection", elementType: lightSwitchApplication.StockOnHand,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.StockOnHands.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Product/ProductCode)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Product/ProductName)") + "").orderBy("Product/ProductName").expand("Product").expand("Location");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
            { name: "StockOnHandsQuery_ItemTap" }
        ]),

        AddEditStockCheck: $defineScreen(AddEditStockCheck, [
            { name: "StockCheck", kind: "local", type: lightSwitchApplication.StockCheck },
            {
                name: "StockCheckDetailsCollection", kind: "collection", elementType: lightSwitchApplication.StockCheckDetail,
                getNavigationProperty: function () {
                    if (this.owner.StockCheck) {
                        return this.owner.StockCheck.details.properties.StockCheckDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditStockCheckDetail: $defineScreen(AddEditStockCheckDetail, [
            { name: "StockCheckDetail", kind: "local", type: lightSwitchApplication.StockCheckDetail }
        ], [
        ]),

        AddEditSupplier: $defineScreen(AddEditSupplier, [
            { name: "Supplier", kind: "local", type: lightSwitchApplication.Supplier }
        ], [
        ]),

        AddEditSupplierGroup: $defineScreen(AddEditSupplierGroup, [
            { name: "SupplierGroup", kind: "local", type: lightSwitchApplication.SupplierGroup }
        ], [
        ]),

        AddEditTransportRoute: $defineScreen(AddEditTransportRoute, [
            { name: "TransportRoute", kind: "local", type: lightSwitchApplication.TransportRoute }
        ], [
        ]),

        AddEditUnitOfMeasure: $defineScreen(AddEditUnitOfMeasure, [
            { name: "UnitOfMeasure", kind: "local", type: lightSwitchApplication.UnitOfMeasure }
        ], [
        ]),

        AddEditWorker: $defineScreen(AddEditWorker, [
            { name: "Worker", kind: "local", type: lightSwitchApplication.Worker }
        ], [
        ]),

        AddEditWorkOrder: $defineScreen(AddEditWorkOrder, [
            { name: "WorkOrder", kind: "local", type: lightSwitchApplication.WorkOrder },
            {
                name: "WorkOrderIssueDetails", kind: "collection", elementType: lightSwitchApplication.WorkOrderIssueDetail,
                getNavigationProperty: function () {
                    if (this.owner.WorkOrder) {
                        return this.owner.WorkOrder.details.properties.WorkOrderIssueDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("IssueProduct").expand("IssueLocation").expand("IssueProduct.UnitOfMeasure");
                }
            },
            {
                name: "WorkOrderProduces", kind: "collection", elementType: lightSwitchApplication.WorkOrderProduce,
                getNavigationProperty: function () {
                    if (this.owner.WorkOrder) {
                        return this.owner.WorkOrder.details.properties.WorkOrderProduces;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("ProduceProduct").expand("ProduceProduct.UnitOfMeasure").expand("ProduceLocation");
                }
            },
            { name: "SearchEmployee", kind: "local", type: String },
            {
                name: "MachineActiveQuery", kind: "collection", elementType: lightSwitchApplication.Machine,
                createQuery: function (SearchMachine) {
                    return this.dataWorkspace.ApplicationData.MachineActiveQuery().filter("" + ((SearchMachine === undefined || SearchMachine === null) ? "true" : "substringof(" + $toODataString(SearchMachine, "String?") + ", MachineName)") + "").orderBy("MachineName");
                }
            },
            { name: "SearchMachine", kind: "local", type: String }
        ], [
            { name: "EmployeeActiveQuery_ItemTap" },
            { name: "MachineActiveQuery_ItemTap" }
        ]),

        AddEditWorkOrderIssueDetail: $defineScreen(AddEditWorkOrderIssueDetail, [
            { name: "WorkOrderIssueDetail", kind: "local", type: lightSwitchApplication.WorkOrderIssueDetail },
            {
                name: "QueryStockOnHandForIssue", kind: "collection", elementType: lightSwitchApplication.StockOnHand,
                createQuery: function (SearchStock) {
                    return this.dataWorkspace.ApplicationData.QueryStockOnHandForIssue().filter("" + ((SearchStock === undefined || SearchStock === null) ? "true" : "substringof(" + $toODataString(SearchStock, "String?") + ", Location/LocationName)") + " or " + ((SearchStock === undefined || SearchStock === null) ? "true" : "substringof(" + $toODataString(SearchStock, "String?") + ", Product/ProductName)") + "").orderBy("Product/ProductName").thenBy("LotNo").thenBy("Location/LocationName").expand("Product").expand("Product.UnitOfMeasure").expand("Location");
                }
            },
            { name: "SearchStock", kind: "local", type: String },
            { name: "AvailableQuantity", kind: "local", type: Number }
        ], [
            { name: "QueryStockOnHandForIssue_ItemTap" }
        ]),

        AddEditWorkOrderProduce: $defineScreen(AddEditWorkOrderProduce, [
            { name: "WorkOrderProduce", kind: "local", type: lightSwitchApplication.WorkOrderProduce },
            {
                name: "ProductsActiveQuery", kind: "collection", elementType: lightSwitchApplication.Product,
                createQuery: function (SearchProduct) {
                    return this.dataWorkspace.ApplicationData.ProductsActiveQuery().filter("" + ((SearchProduct === undefined || SearchProduct === null) ? "true" : "substringof(" + $toODataString(SearchProduct, "String?") + ", ProductCode)") + " or " + ((SearchProduct === undefined || SearchProduct === null) ? "true" : "substringof(" + $toODataString(SearchProduct, "String?") + ", ProductName)") + "").orderBy("ProductCode").thenBy("ProductName");
                }
            },
            { name: "SearchProduct", kind: "local", type: String }
        ], [
            { name: "ProductsActiveQuery_ItemTap" }
        ]),

        BrowseAccountingTasks: $defineScreen(BrowseAccountingTasks, [
        ], [
        ]),

        BrowseBanks: $defineScreen(BrowseBanks, [
            {
                name: "Banks", kind: "collection", elementType: lightSwitchApplication.Bank,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Banks;
                }
            }
        ], [
        ]),

        BrowseCompanies: $defineScreen(BrowseCompanies, [
            {
                name: "Companies", kind: "collection", elementType: lightSwitchApplication.Company,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Companies;
                }
            }
        ], [
        ]),

        BrowseCustomerGroups: $defineScreen(BrowseCustomerGroups, [
            {
                name: "CustomerGroups", kind: "collection", elementType: lightSwitchApplication.CustomerGroup,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.CustomerGroups;
                }
            }
        ], [
        ]),

        BrowseCustomers: $defineScreen(BrowseCustomers, [
            {
                name: "Customers", kind: "collection", elementType: lightSwitchApplication.Customer,
                createQuery: function (SearchCustomer) {
                    return this.dataWorkspace.ApplicationData.Customers.filter("(" + ((SearchCustomer === undefined || SearchCustomer === null) ? "true" : "substringof(" + $toODataString(SearchCustomer, "String?") + ", CustomerName)") + " or " + ((SearchCustomer === undefined || SearchCustomer === null) ? "true" : "substringof(" + $toODataString(SearchCustomer, "String?") + ", CustomerGroup/CustomerGroupName)") + ") or " + ((SearchCustomer === undefined || SearchCustomer === null) ? "true" : "substringof(" + $toODataString(SearchCustomer, "String?") + ", TransportRoute/TransportRouteName)") + "").orderBy("CustomerGroup/CustomerGroupName").thenBy("CustomerName").expand("CustomerGroup").expand("TransportRoute");
                }
            },
            {
                name: "CustomerGroups", kind: "collection", elementType: lightSwitchApplication.CustomerGroup,
                createQuery: function (SearchCustomerGroup) {
                    return this.dataWorkspace.ApplicationData.CustomerGroups.filter("" + ((SearchCustomerGroup === undefined || SearchCustomerGroup === null) ? "true" : "substringof(" + $toODataString(SearchCustomerGroup, "String?") + ", CustomerGroupName)") + "").orderBy("CustomerGroupName");
                }
            },
            { name: "SearchCustomer", kind: "local", type: String },
            { name: "SearchCustomerGroup", kind: "local", type: String }
        ], [
        ]),

        BrowseEmployees: $defineScreen(BrowseEmployees, [
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseInventoryTasks: $defineScreen(BrowseInventoryTasks, [
        ], [
        ]),

        BrowseLocations: $defineScreen(BrowseLocations, [
            {
                name: "ProductLocations", kind: "collection", elementType: lightSwitchApplication.Location,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.Locations.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", LocationName)") + "");
                }
            },
            {
                name: "Products", kind: "collection", elementType: lightSwitchApplication.Product,
                getNavigationProperty: function () {
                    if (this.owner.ProductLocations.selectedItem) {
                        return this.owner.ProductLocations.selectedItem.details.properties.Products;
                    }
                    return null;
                },
                appendQuery: function (Search) {
                    return this.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Location/LocationName)") + "");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseMachines: $defineScreen(BrowseMachines, [
            {
                name: "Machines", kind: "collection", elementType: lightSwitchApplication.Machine,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Machines;
                }
            }
        ], [
        ]),

        BrowseMenuReceiveProduct: $defineScreen(BrowseMenuReceiveProduct, [
        ], [
        ]),

        BrowseMenuSales: $defineScreen(BrowseMenuSales, [
        ], [
        ]),

        BrowseOrderRequisitions: $defineScreen(BrowseOrderRequisitions, [
            {
                name: "OrderRequisitions", kind: "collection", elementType: lightSwitchApplication.OrderRequisition,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.OrderRequisitions.filter("Status eq false").expand("Customer").expand("Customer.TransportRoute").expand("Customer.CustomerGroup");
                }
            },
            {
                name: "OrderRequisitionDetail", kind: "collection", elementType: lightSwitchApplication.OrderRequisitionDetail,
                getNavigationProperty: function () {
                    if (this.owner.OrderRequisitions.selectedItem) {
                        return this.owner.OrderRequisitions.selectedItem.details.properties.OrderRequisitionDetail;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        BrowseOrderRequisitionsDelivery: $defineScreen(BrowseOrderRequisitionsDelivery, [
            {
                name: "OrderRequisitions", kind: "collection", elementType: lightSwitchApplication.OrderRequisition,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.OrderRequisitions.expand("Customer").expand("Customer.TransportRoute");
                }
            },
            {
                name: "OrderRequisitionDetail", kind: "collection", elementType: lightSwitchApplication.OrderRequisitionDetail,
                getNavigationProperty: function () {
                    if (this.owner.OrderRequisitions.selectedItem) {
                        return this.owner.OrderRequisitions.selectedItem.details.properties.OrderRequisitionDetail;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("OrderRequisition").expand("Product");
                }
            },
            { name: "SelectedTransportRouteId", kind: "local", type: Number },
            { name: "TotalProductWeight", kind: "local", type: Number },
            { name: "TotalWeight", kind: "local", type: Number }
        ], [
        ]),

        BrowseOrderRequisitionsTransportRoute: $defineScreen(BrowseOrderRequisitionsTransportRoute, [
            {
                name: "QueryOrderRequisitionTransportRoute", kind: "collection", elementType: lightSwitchApplication.OrderRequisition,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.QueryOrderRequisitionTransportRoute().expand("Customer").expand("Customer.TransportRoute");
                }
            }
        ], [
        ]),

        BrowseOrders: $defineScreen(BrowseOrders, [
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowsePackages: $defineScreen(BrowsePackages, [
            {
                name: "Packages", kind: "collection", elementType: lightSwitchApplication.Package,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Packages;
                }
            }
        ], [
        ]),

        BrowsePaymentTypes: $defineScreen(BrowsePaymentTypes, [
            {
                name: "PaymentTypes", kind: "collection", elementType: lightSwitchApplication.PaymentType,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.PaymentTypes;
                }
            }
        ], [
        ]),

        BrowsePO: $defineScreen(BrowsePO, [
            {
                name: "PurchaseOrders", kind: "collection", elementType: lightSwitchApplication.PurchaseOrder,
                createQuery: function (SearchParameter) {
                    return this.dataWorkspace.ApplicationData.PurchaseOrders.filter("" + ((SearchParameter === undefined || SearchParameter === null) ? "true" : "substringof(" + $toODataString(SearchParameter, "String?") + ", PurchaseOrderNumber)") + " or " + ((SearchParameter === undefined || SearchParameter === null) ? "true" : "substringof(" + $toODataString(SearchParameter, "String?") + ", Supplier/SupplierName)") + "").orderByDescending("PurchaseOrderNumber").expand("Supplier");
                }
            },
            { name: "POStatusDescription", kind: "local", type: String },
            { name: "SearchParameter", kind: "local", type: String },
            {
                name: "PurchaseOrderClosed", kind: "collection", elementType: lightSwitchApplication.PurchaseOrder,
                createQuery: function (SearchPOClosed) {
                    return this.dataWorkspace.ApplicationData.PurchaseOrderClosed().filter("" + ((SearchPOClosed === undefined || SearchPOClosed === null) ? "true" : "substringof(" + $toODataString(SearchPOClosed, "String?") + ", PurchaseOrderNumber)") + " and (PurchaseOrderStatus eq true)").orderByDescending("PurchaseOrderDate").thenByDescending("PurchaseOrderNumber").expand("Supplier");
                }
            },
            {
                name: "PurchaseOrderNotClose", kind: "collection", elementType: lightSwitchApplication.PurchaseOrder,
                createQuery: function (SearchPONotClose) {
                    return this.dataWorkspace.ApplicationData.PurchaseOrderNotClose().filter("" + ((SearchPONotClose === undefined || SearchPONotClose === null) ? "true" : "substringof(" + $toODataString(SearchPONotClose, "String?") + ", PurchaseOrderNumber)") + " and (PurchaseOrderStatus eq false)").orderByDescending("PurchaseOrderDate").thenByDescending("PurchaseOrderNumber").expand("Supplier");
                }
            }
        ], [
            { name: "PurchaseOrder_ItemTap" },
            { name: "ShowAddEditPO_Tap" },
            { name: "PurchaseOrderNotClose_ItemTap" },
            { name: "PurchaseOrderClosed_ItemTap" },
            { name: "ShowBrowsePOReceive_Tap" }
        ]),

        BrowsePOReceive: $defineScreen(BrowsePOReceive, [
            {
                name: "PurchaseOrders", kind: "collection", elementType: lightSwitchApplication.PurchaseOrder,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.PurchaseOrders.filter("PurchaseOrderStatus eq false").expand("Supplier");
                }
            },
            { name: "POStatusDescription", kind: "local", type: String },
            {
                name: "PurchaseOrderDetails", kind: "collection", elementType: lightSwitchApplication.PurchaseOrderDetail,
                getNavigationProperty: function () {
                    if (this.owner.PurchaseOrders.selectedItem) {
                        return this.owner.PurchaseOrders.selectedItem.details.properties.PurchaseOrderDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "ProductReceivePurchaseOrderDetails", kind: "collection", elementType: lightSwitchApplication.ProductReceivePurchaseOrderDetail,
                getNavigationProperty: function () {
                    if (this.owner.PurchaseOrderDetails.selectedItem) {
                        return this.owner.PurchaseOrderDetails.selectedItem.details.properties.ProductReceivePurchaseOrderDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
            { name: "PurchaseOrder_ItemTap" }
        ]),

        BrowseProductCategories: $defineScreen(BrowseProductCategories, [
            {
                name: "ProductCategories", kind: "collection", elementType: lightSwitchApplication.ProductCategory,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.ProductCategories.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", ProductCategoryName)") + "");
                }
            },
            { name: "Search", kind: "local", type: String },
            {
                name: "Products", kind: "collection", elementType: lightSwitchApplication.Product,
                getNavigationProperty: function () {
                    if (this.owner.ProductCategories.selectedItem) {
                        return this.owner.ProductCategories.selectedItem.details.properties.Products;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        BrowseProductGroups: $defineScreen(BrowseProductGroups, [
            {
                name: "ProductGroups", kind: "collection", elementType: lightSwitchApplication.ProductGroup,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.ProductGroups.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", ProductGroupName)") + "");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseProductPricings: $defineScreen(BrowseProductPricings, [
            {
                name: "StockOnHands", kind: "collection", elementType: lightSwitchApplication.StockOnHand,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.StockOnHands.filter("(" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Location/LocationName)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Product/ProductCode)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Product/ProductName)") + "").orderBy("Location/LocationName").thenBy("Product/ProductName").expand("Product").expand("Location").expand("Product.UnitOfMeasure");
                }
            },
            { name: "Search", kind: "local", type: String },
            { name: "AvailableForSaleDescription", kind: "local", type: String }
        ], [
            { name: "StockOnHand_ItemTap" }
        ]),

        BrowseProductReceiveBalanceForwards: $defineScreen(BrowseProductReceiveBalanceForwards, [
            {
                name: "ProductReceives", kind: "collection", elementType: lightSwitchApplication.ProductReceiveBalanceForward,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.ProductReceiveBalanceForwards.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", DocumentNo)") + "").orderByDescending("Created");
                }
            }
        ], [
        ]),

        BrowseProductReceivePurchaseOrderDetails: $defineScreen(BrowseProductReceivePurchaseOrderDetails, [
            {
                name: "ProductReceivePurchaseOrderDetails", kind: "collection", elementType: lightSwitchApplication.ProductReceivePurchaseOrderDetail,
                createQuery: function (PODetailID) {
                    return this.dataWorkspace.ApplicationData.ProductReceivePurchaseOrderDetails.filter("" + ((PODetailID === undefined || PODetailID === null) ? "true" : "(PurchaseOrderDetail/Id eq " + $toODataString(PODetailID, "Int32?") + ")") + "").expand("Product").expand("PurchaseOrderDetail").expand("Location").expand("Product.UnitOfMeasure");
                }
            },
            { name: "SelectedPODetail", kind: "local", type: lightSwitchApplication.PurchaseOrderDetail }
        ], [
            { name: "AddProductReceivePurchaseOrderDetail_Tap" }
        ]),

        BrowseProducts: $defineScreen(BrowseProducts, [
            {
                name: "Products", kind: "collection", elementType: lightSwitchApplication.Product,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.Products.filter("(" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", ProductName)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", ProductCategory/ProductCategoryName)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", ProductGroup/ProductGroupName)") + "").expand("ProductCategory").expand("ProductGroup").expand("Location").expand("UnitOfMeasure");
                }
            },
            { name: "Search", kind: "local", type: String },
            {
                name: "ProductGroups", kind: "collection", elementType: lightSwitchApplication.ProductGroup,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.ProductGroups;
                }
            },
            {
                name: "ProductCategories", kind: "collection", elementType: lightSwitchApplication.ProductCategory,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.ProductCategories;
                }
            }
        ], [
        ]),

        BrowseProducts_bk: $defineScreen(BrowseProducts_bk, [
            {
                name: "Products", kind: "collection", elementType: lightSwitchApplication.Product,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.Products.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", ProductName)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", ProductCategory/ProductCategoryName)") + "").orderBy("ProductName").expand("ProductCategory").expand("ProductGroup").expand("Location").expand("UnitOfMeasure");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowsePurchaseOrderNotClose: $defineScreen(BrowsePurchaseOrderNotClose, [
            {
                name: "PurchaseOrderNotClose", kind: "collection", elementType: lightSwitchApplication.PurchaseOrder,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.PurchaseOrderNotClose().expand("Supplier");
                }
            },
            {
                name: "PurchaseOrderDetailByPOId", kind: "collection", elementType: lightSwitchApplication.PurchaseOrderDetail,
                createQuery: function (POId) {
                    return this.dataWorkspace.ApplicationData.PurchaseOrderDetailByPOId(POId).expand("Product").expand("Product.UnitOfMeasure").expand("PurchaseOrder");
                }
            }
        ], [
        ]),

        BrowsePurchaseOrders: $defineScreen(BrowsePurchaseOrders, [
            {
                name: "PurchaseOrders", kind: "collection", elementType: lightSwitchApplication.PurchaseOrder,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.PurchaseOrders.expand("Supplier");
                }
            },
            { name: "POStatusDescription", kind: "local", type: String }
        ], [
            { name: "AddPurchaseOrder" }
        ]),

        BrowsePurchaseOrders_Old: $defineScreen(BrowsePurchaseOrders_Old, [
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseSaleOrders: $defineScreen(BrowseSaleOrders, [
            {
                name: "SaleOrders", kind: "collection", elementType: lightSwitchApplication.SaleOrder,
                createQuery: function (SearchSO) {
                    return this.dataWorkspace.ApplicationData.SaleOrders.filter("(" + ((SearchSO === undefined || SearchSO === null) ? "true" : "substringof(" + $toODataString(SearchSO, "String?") + ", SaleOrderNo)") + " or " + ((SearchSO === undefined || SearchSO === null) ? "true" : "substringof(" + $toODataString(SearchSO, "String?") + ", ReferenceNo)") + ") or " + ((SearchSO === undefined || SearchSO === null) ? "true" : "substringof(" + $toODataString(SearchSO, "String?") + ", Customer/CustomerName)") + "").orderByDescending("SaleOrderNo").expand("Customer").expand("Customer.TransportRoute");
                }
            },
            { name: "SearchSO", kind: "local", type: String },
            { name: "SaleOrderStatusDescription", kind: "local", type: String }
        ], [
            { name: "SaleOrder_ItemTap" }
        ]),

        BrowseSaleOrderTasks: $defineScreen(BrowseSaleOrderTasks, [
        ], [
        ]),

        BrowseShippingMethods: $defineScreen(BrowseShippingMethods, [
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseStockAdjusts: $defineScreen(BrowseStockAdjusts, [
            {
                name: "StockAdjusts", kind: "collection", elementType: lightSwitchApplication.StockAdjust,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.StockAdjusts;
                }
            }
        ], [
        ]),

        BrowseStockOnHands: $defineScreen(BrowseStockOnHands, [
            {
                name: "StockOnHands", kind: "collection", elementType: lightSwitchApplication.StockOnHand,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.StockOnHands.filter("((" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Location/LocationName)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", LotNo)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Product/ProductCode)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Product/ProductName)") + "").expand("Location").expand("Product");
                }
            },
            { name: "Search", kind: "local", type: String },
            { name: "ProductDescription", kind: "local", type: String },
            { name: "IsAvailableForSale", kind: "local", type: Boolean }
        ], [
        ]),

        BrowseStockTransfers: $defineScreen(BrowseStockTransfers, [
            {
                name: "StockTransfers", kind: "collection", elementType: lightSwitchApplication.StockTransfer,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.StockTransfers;
                }
            }
        ], [
        ]),

        BrowseSupplierGroups: $defineScreen(BrowseSupplierGroups, [
            {
                name: "SupplierGroups", kind: "collection", elementType: lightSwitchApplication.SupplierGroup,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.SupplierGroups;
                }
            }
        ], [
        ]),

        BrowseSuppliers: $defineScreen(BrowseSuppliers, [
            {
                name: "Suppliers", kind: "collection", elementType: lightSwitchApplication.Supplier,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.Suppliers.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", SupplierName)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", SupplierGroup/SupplierGroupName)") + "").orderBy("SupplierGroup/SupplierGroupName").thenBy("SupplierName").expand("SupplierGroup");
                }
            },
            {
                name: "SupplierGroups", kind: "collection", elementType: lightSwitchApplication.SupplierGroup,
                createQuery: function (SearchSupplierGroup) {
                    return this.dataWorkspace.ApplicationData.SupplierGroups.filter("" + ((SearchSupplierGroup === undefined || SearchSupplierGroup === null) ? "true" : "substringof(" + $toODataString(SearchSupplierGroup, "String?") + ", SupplierGroupName)") + "").orderBy("SupplierGroupName");
                }
            },
            { name: "SearchSupplier", kind: "local", type: String },
            { name: "SearchSupplierGroup", kind: "local", type: String }
        ], [
        ]),

        BrowseTransportRoutes: $defineScreen(BrowseTransportRoutes, [
            {
                name: "TransportRoutes", kind: "collection", elementType: lightSwitchApplication.TransportRoute,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.TransportRoutes.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", TransportRouteName)") + "").orderBy("TransportRouteName");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseUnitOfMeasures: $defineScreen(BrowseUnitOfMeasures, [
            {
                name: "UnitOfMeasures", kind: "collection", elementType: lightSwitchApplication.UnitOfMeasure,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.UnitOfMeasures;
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseWorkers: $defineScreen(BrowseWorkers, [
            {
                name: "Workers", kind: "collection", elementType: lightSwitchApplication.Worker,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Workers;
                }
            }
        ], [
        ]),

        BrowseWorkOrderIsNotReceive: $defineScreen(BrowseWorkOrderIsNotReceive, [
            {
                name: "WorkOrderIsNotReceive", kind: "collection", elementType: lightSwitchApplication.WorkOrder,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.WorkOrderIsNotReceive().expand("Machine");
                }
            }
        ], [
        ]),

        BrowseWorkOrders: $defineScreen(BrowseWorkOrders, [
            {
                name: "WorkOrders", kind: "collection", elementType: lightSwitchApplication.WorkOrder,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.WorkOrders.expand("Machine");
                }
            },
            { name: "EmployeeFullName", kind: "local", type: String },
            { name: "WorkOrderStatusDescription", kind: "local", type: String },
            {
                name: "WorkOrdersQuery", kind: "collection", elementType: lightSwitchApplication.WorkOrder,
                createQuery: function (Parameter) {
                    return this.dataWorkspace.ApplicationData.WorkOrders.filter("" + ((Parameter === undefined || Parameter === null) ? "true" : "substringof(" + $toODataString(Parameter, "String?") + ", WorkOrderNumber)") + "");
                }
            },
            { name: "SearchWorkOrder", kind: "local", type: String }
        ], [
            { name: "WorkOrder_ItemTap" }
        ]),

        Home: $defineScreen(Home, [
        ], [
        ]),

        MobileHome: $defineScreen(MobileHome, [
        ], [
        ]),

        SearchActiveProducts: $defineScreen(SearchActiveProducts, [
            {
                name: "Products", kind: "collection", elementType: lightSwitchApplication.Product,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Products.expand("ProductCategory").expand("ProductGroup").expand("Location").expand("UnitOfMeasure");
                }
            }
        ], [
        ]),

        ViewPOReceivedDetail: $defineScreen(ViewPOReceivedDetail, [
            { name: "PurchaseOrderDetail", kind: "local", type: lightSwitchApplication.PurchaseOrderDetail },
            { name: "IsReceiveCompleteDescription", kind: "local", type: String }
        ], [
        ]),

        ViewPurchaseOrder: $defineScreen(ViewPurchaseOrder, [
            { name: "PurchaseOrder", kind: "local", type: lightSwitchApplication.PurchaseOrder },
            {
                name: "PurchaseOrderDetails", kind: "collection", elementType: lightSwitchApplication.PurchaseOrderDetail,
                getNavigationProperty: function () {
                    if (this.owner.PurchaseOrder) {
                        return this.owner.PurchaseOrder.details.properties.PurchaseOrderDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Product").expand("Location").expand("Product.UnitOfMeasure");
                }
            },
            { name: "POStatusDescription", kind: "local", type: String },
            {
                name: "ProductReceivePurchaseOrderDetails", kind: "collection", elementType: lightSwitchApplication.ProductReceivePurchaseOrderDetail,
                getNavigationProperty: function () {
                    if (this.owner.PurchaseOrderDetails.selectedItem) {
                        return this.owner.PurchaseOrderDetails.selectedItem.details.properties.ProductReceivePurchaseOrderDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("PurchaseOrderDetail").expand("Location").expand("Product");
                }
            }
        ], [
        ]),

        ViewPurchaseOrderDetail: $defineScreen(ViewPurchaseOrderDetail, [
            { name: "PurchaseOrderDetail", kind: "local", type: lightSwitchApplication.PurchaseOrderDetail },
            { name: "POStatusDescription", kind: "local", type: String }
        ], [
        ]),

        ViewPurchaseOrderDetail1: $defineScreen(ViewPurchaseOrderDetail1, [
            { name: "PurchaseOrderDetail", kind: "local", type: lightSwitchApplication.PurchaseOrderDetail },
            {
                name: "ProductReceivePurchaseOrderDetails", kind: "collection", elementType: lightSwitchApplication.ProductReceivePurchaseOrderDetail,
                getNavigationProperty: function () {
                    if (this.owner.PurchaseOrderDetail) {
                        return this.owner.PurchaseOrderDetail.details.properties.ProductReceivePurchaseOrderDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Product").expand("Location").expand("Product.UnitOfMeasure");
                }
            }
        ], [
        ]),

        ViewSaleOrder: $defineScreen(ViewSaleOrder, [
            { name: "SaleOrder", kind: "local", type: lightSwitchApplication.SaleOrder },
            {
                name: "SaleOrderDetails", kind: "collection", elementType: lightSwitchApplication.SaleOrderDetail,
                getNavigationProperty: function () {
                    if (this.owner.SaleOrder) {
                        return this.owner.SaleOrder.details.properties.SaleOrderDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Product").expand("Location").expand("Product.UnitOfMeasure");
                }
            }
        ], [
        ]),

        ViewWorkOrder: $defineScreen(ViewWorkOrder, [
            { name: "WorkOrder", kind: "local", type: lightSwitchApplication.WorkOrder },
            {
                name: "WorkOrderIssueDetails", kind: "collection", elementType: lightSwitchApplication.WorkOrderIssueDetail,
                getNavigationProperty: function () {
                    if (this.owner.WorkOrder) {
                        return this.owner.WorkOrder.details.properties.WorkOrderIssueDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("IssueProduct").expand("IssueLocation").expand("IssueProduct.UnitOfMeasure");
                }
            },
            {
                name: "WorkOrderProduces", kind: "collection", elementType: lightSwitchApplication.WorkOrderProduce,
                getNavigationProperty: function () {
                    if (this.owner.WorkOrder) {
                        return this.owner.WorkOrder.details.properties.WorkOrderProduces;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("ProduceProduct").expand("ProduceLocation").expand("ProduceProduct.UnitOfMeasure");
                }
            }
        ], [
        ]),

        showAddEditBank: $defineShowScreen(function showAddEditBank(Bank, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditBank screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditBank", parameters, options);
        }),

        showAddEditCompany: $defineShowScreen(function showAddEditCompany(Company, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditCompany screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditCompany", parameters, options);
        }),

        showAddEditCustomer: $defineShowScreen(function showAddEditCustomer(Customer, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditCustomer screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditCustomer", parameters, options);
        }),

        showAddEditCustomerGroup: $defineShowScreen(function showAddEditCustomerGroup(CustomerGroup, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditCustomerGroup screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditCustomerGroup", parameters, options);
        }),

        showAddEditEmployee: $defineShowScreen(function showAddEditEmployee(options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployee screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("AddEditEmployee", parameters, options);
        }),

        showAddEditLocation: $defineShowScreen(function showAddEditLocation(ProductLocation, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditLocation screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditLocation", parameters, options);
        }),

        showAddEditMachine: $defineShowScreen(function showAddEditMachine(Machine, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditMachine screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditMachine", parameters, options);
        }),

        showAddEditOrder: $defineShowScreen(function showAddEditOrder(options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditOrder screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("AddEditOrder", parameters, options);
        }),

        showAddEditOrderDetail: $defineShowScreen(function showAddEditOrderDetail(options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditOrderDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("AddEditOrderDetail", parameters, options);
        }),

        showAddEditOrderRequisition: $defineShowScreen(function showAddEditOrderRequisition(OrderRequisition, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditOrderRequisition screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditOrderRequisition", parameters, options);
        }),

        showAddEditOrderRequisitionDetail: $defineShowScreen(function showAddEditOrderRequisitionDetail(OrderRequisitionDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditOrderRequisitionDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditOrderRequisitionDetail", parameters, options);
        }),

        showAddEditPackage: $defineShowScreen(function showAddEditPackage(Package, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPackage screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPackage", parameters, options);
        }),

        showAddEditPaymentType: $defineShowScreen(function showAddEditPaymentType(PaymentType, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPaymentType screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPaymentType", parameters, options);
        }),

        showAddEditPO: $defineShowScreen(function showAddEditPO(PurchaseOrder, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPO screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPO", parameters, options);
        }),

        showAddEditPODetail: $defineShowScreen(function showAddEditPODetail(PurchaseOrderDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPODetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPODetail", parameters, options);
        }),

        showAddEditPOReceive: $defineShowScreen(function showAddEditPOReceive(PurchaseOrder, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPOReceive screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPOReceive", parameters, options);
        }),

        showAddEditPOReceiveDetail: $defineShowScreen(function showAddEditPOReceiveDetail(PurchaseOrderDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPOReceiveDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPOReceiveDetail", parameters, options);
        }),

        showAddEditProduct: $defineShowScreen(function showAddEditProduct(Product, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProduct screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProduct", parameters, options);
        }),

        showAddEditProduct_bk: $defineShowScreen(function showAddEditProduct_bk(Product, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProduct_bk screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProduct_bk", parameters, options);
        }),

        showAddEditProductCategory: $defineShowScreen(function showAddEditProductCategory(ProductCategory, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProductCategory screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProductCategory", parameters, options);
        }),

        showAddEditProductGroup: $defineShowScreen(function showAddEditProductGroup(ProductGroup, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProductGroup screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProductGroup", parameters, options);
        }),

        showAddEditProductPricing: $defineShowScreen(function showAddEditProductPricing(StockOnHand, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProductPricing screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProductPricing", parameters, options);
        }),

        showAddEditProductReceiveBalanceForward: $defineShowScreen(function showAddEditProductReceiveBalanceForward(ProductReceive, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProductReceiveBalanceForward screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProductReceiveBalanceForward", parameters, options);
        }),

        showAddEditProductReceiveBalanceForwardDetail: $defineShowScreen(function showAddEditProductReceiveBalanceForwardDetail(ProductReceiveDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProductReceiveBalanceForwardDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProductReceiveBalanceForwardDetail", parameters, options);
        }),

        showAddEditProductReceiveBalanceForwardWithDetails: $defineShowScreen(function showAddEditProductReceiveBalanceForwardWithDetails(ProductReceiveBalanceForward, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProductReceiveBalanceForwardWithDetails screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProductReceiveBalanceForwardWithDetails", parameters, options);
        }),

        showAddEditProductReceivePurchaseOrderDetail: $defineShowScreen(function showAddEditProductReceivePurchaseOrderDetail(ProductReceivePurchaseOrderDetail, SelectedPODetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProductReceivePurchaseOrderDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("AddEditProductReceivePurchaseOrderDetail", parameters, options);
        }),

        showAddEditProductSubscriber: $defineShowScreen(function showAddEditProductSubscriber(options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProductSubscriber screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("AddEditProductSubscriber", parameters, options);
        }),

        showAddEditPurchaseOrder: $defineShowScreen(function showAddEditPurchaseOrder(PurchaseOrder, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPurchaseOrder screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPurchaseOrder", parameters, options);
        }),

        showAddEditPurchaseOrder_Old: $defineShowScreen(function showAddEditPurchaseOrder_Old(options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPurchaseOrder_Old screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("AddEditPurchaseOrder_Old", parameters, options);
        }),

        showAddEditPurchaseOrderDetail: $defineShowScreen(function showAddEditPurchaseOrderDetail(PurchaseOrderDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPurchaseOrderDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPurchaseOrderDetail", parameters, options);
        }),

        showAddEditPurchaseOrderDetail_Old: $defineShowScreen(function showAddEditPurchaseOrderDetail_Old(options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPurchaseOrderDetail_Old screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("AddEditPurchaseOrderDetail_Old", parameters, options);
        }),

        showAddEditPurchaseOrderDetailTest: $defineShowScreen(function showAddEditPurchaseOrderDetailTest(PurchaseOrderDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPurchaseOrderDetailTest screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPurchaseOrderDetailTest", parameters, options);
        }),

        showAddEditPurchaseOrderTest: $defineShowScreen(function showAddEditPurchaseOrderTest(PurchaseOrder, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPurchaseOrderTest screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPurchaseOrderTest", parameters, options);
        }),

        showAddEditReceiveFromPurchaseOrder: $defineShowScreen(function showAddEditReceiveFromPurchaseOrder(options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditReceiveFromPurchaseOrder screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("AddEditReceiveFromPurchaseOrder", parameters, options);
        }),

        showAddEditReceiveFromPurchaseOrderDetail: $defineShowScreen(function showAddEditReceiveFromPurchaseOrderDetail(options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditReceiveFromPurchaseOrderDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("AddEditReceiveFromPurchaseOrderDetail", parameters, options);
        }),

        showAddEditSaleOrder: $defineShowScreen(function showAddEditSaleOrder(SaleOrder, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditSaleOrder screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditSaleOrder", parameters, options);
        }),

        showAddEditSaleOrderDetail: $defineShowScreen(function showAddEditSaleOrderDetail(SaleOrderDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditSaleOrderDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditSaleOrderDetail", parameters, options);
        }),

        showAddEditShippingMethod: $defineShowScreen(function showAddEditShippingMethod(options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditShippingMethod screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("AddEditShippingMethod", parameters, options);
        }),

        showAddEditStockAdjust: $defineShowScreen(function showAddEditStockAdjust(StockAdjust, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditStockAdjust screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditStockAdjust", parameters, options);
        }),

        showAddEditStockAdjustDetail: $defineShowScreen(function showAddEditStockAdjustDetail(StockAdjustDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditStockAdjustDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditStockAdjustDetail", parameters, options);
        }),

        showAddEditStockCheck: $defineShowScreen(function showAddEditStockCheck(StockCheck, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditStockCheck screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditStockCheck", parameters, options);
        }),

        showAddEditStockCheckDetail: $defineShowScreen(function showAddEditStockCheckDetail(StockCheckDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditStockCheckDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditStockCheckDetail", parameters, options);
        }),

        showAddEditSupplier: $defineShowScreen(function showAddEditSupplier(Supplier, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditSupplier screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditSupplier", parameters, options);
        }),

        showAddEditSupplierGroup: $defineShowScreen(function showAddEditSupplierGroup(SupplierGroup, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditSupplierGroup screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditSupplierGroup", parameters, options);
        }),

        showAddEditTransportRoute: $defineShowScreen(function showAddEditTransportRoute(TransportRoute, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTransportRoute screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTransportRoute", parameters, options);
        }),

        showAddEditUnitOfMeasure: $defineShowScreen(function showAddEditUnitOfMeasure(UnitOfMeasure, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditUnitOfMeasure screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditUnitOfMeasure", parameters, options);
        }),

        showAddEditWorker: $defineShowScreen(function showAddEditWorker(Worker, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditWorker screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditWorker", parameters, options);
        }),

        showAddEditWorkOrder: $defineShowScreen(function showAddEditWorkOrder(WorkOrder, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditWorkOrder screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditWorkOrder", parameters, options);
        }),

        showAddEditWorkOrderIssueDetail: $defineShowScreen(function showAddEditWorkOrderIssueDetail(WorkOrderIssueDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditWorkOrderIssueDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditWorkOrderIssueDetail", parameters, options);
        }),

        showAddEditWorkOrderProduce: $defineShowScreen(function showAddEditWorkOrderProduce(WorkOrderProduce, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditWorkOrderProduce screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditWorkOrderProduce", parameters, options);
        }),

        showBrowseAccountingTasks: $defineShowScreen(function showBrowseAccountingTasks(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseAccountingTasks screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseAccountingTasks", parameters, options);
        }),

        showBrowseBanks: $defineShowScreen(function showBrowseBanks(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseBanks screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseBanks", parameters, options);
        }),

        showBrowseCompanies: $defineShowScreen(function showBrowseCompanies(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseCompanies screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseCompanies", parameters, options);
        }),

        showBrowseCustomerGroups: $defineShowScreen(function showBrowseCustomerGroups(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseCustomerGroups screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseCustomerGroups", parameters, options);
        }),

        showBrowseCustomers: $defineShowScreen(function showBrowseCustomers(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseCustomers screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseCustomers", parameters, options);
        }),

        showBrowseEmployees: $defineShowScreen(function showBrowseEmployees(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployees screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEmployees", parameters, options);
        }),

        showBrowseInventoryTasks: $defineShowScreen(function showBrowseInventoryTasks(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseInventoryTasks screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseInventoryTasks", parameters, options);
        }),

        showBrowseLocations: $defineShowScreen(function showBrowseLocations(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseLocations screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseLocations", parameters, options);
        }),

        showBrowseMachines: $defineShowScreen(function showBrowseMachines(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMachines screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMachines", parameters, options);
        }),

        showBrowseMenuReceiveProduct: $defineShowScreen(function showBrowseMenuReceiveProduct(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMenuReceiveProduct screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMenuReceiveProduct", parameters, options);
        }),

        showBrowseMenuSales: $defineShowScreen(function showBrowseMenuSales(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMenuSales screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMenuSales", parameters, options);
        }),

        showBrowseOrderRequisitions: $defineShowScreen(function showBrowseOrderRequisitions(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseOrderRequisitions screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseOrderRequisitions", parameters, options);
        }),

        showBrowseOrderRequisitionsDelivery: $defineShowScreen(function showBrowseOrderRequisitionsDelivery(SelectedTransportRouteId, options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseOrderRequisitionsDelivery screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("BrowseOrderRequisitionsDelivery", parameters, options);
        }),

        showBrowseOrderRequisitionsTransportRoute: $defineShowScreen(function showBrowseOrderRequisitionsTransportRoute(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseOrderRequisitionsTransportRoute screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseOrderRequisitionsTransportRoute", parameters, options);
        }),

        showBrowseOrders: $defineShowScreen(function showBrowseOrders(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseOrders screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseOrders", parameters, options);
        }),

        showBrowsePackages: $defineShowScreen(function showBrowsePackages(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowsePackages screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowsePackages", parameters, options);
        }),

        showBrowsePaymentTypes: $defineShowScreen(function showBrowsePaymentTypes(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowsePaymentTypes screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowsePaymentTypes", parameters, options);
        }),

        showBrowsePO: $defineShowScreen(function showBrowsePO(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowsePO screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowsePO", parameters, options);
        }),

        showBrowsePOReceive: $defineShowScreen(function showBrowsePOReceive(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowsePOReceive screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowsePOReceive", parameters, options);
        }),

        showBrowseProductCategories: $defineShowScreen(function showBrowseProductCategories(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseProductCategories screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseProductCategories", parameters, options);
        }),

        showBrowseProductGroups: $defineShowScreen(function showBrowseProductGroups(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseProductGroups screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseProductGroups", parameters, options);
        }),

        showBrowseProductPricings: $defineShowScreen(function showBrowseProductPricings(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseProductPricings screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseProductPricings", parameters, options);
        }),

        showBrowseProductReceiveBalanceForwards: $defineShowScreen(function showBrowseProductReceiveBalanceForwards(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseProductReceiveBalanceForwards screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseProductReceiveBalanceForwards", parameters, options);
        }),

        showBrowseProductReceivePurchaseOrderDetails: $defineShowScreen(function showBrowseProductReceivePurchaseOrderDetails(SelectedPODetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseProductReceivePurchaseOrderDetails screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("BrowseProductReceivePurchaseOrderDetails", parameters, options);
        }),

        showBrowseProducts: $defineShowScreen(function showBrowseProducts(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseProducts screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseProducts", parameters, options);
        }),

        showBrowseProducts_bk: $defineShowScreen(function showBrowseProducts_bk(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseProducts_bk screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseProducts_bk", parameters, options);
        }),

        showBrowsePurchaseOrderNotClose: $defineShowScreen(function showBrowsePurchaseOrderNotClose(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowsePurchaseOrderNotClose screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowsePurchaseOrderNotClose", parameters, options);
        }),

        showBrowsePurchaseOrders: $defineShowScreen(function showBrowsePurchaseOrders(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowsePurchaseOrders screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowsePurchaseOrders", parameters, options);
        }),

        showBrowsePurchaseOrders_Old: $defineShowScreen(function showBrowsePurchaseOrders_Old(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowsePurchaseOrders_Old screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowsePurchaseOrders_Old", parameters, options);
        }),

        showBrowseSaleOrders: $defineShowScreen(function showBrowseSaleOrders(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseSaleOrders screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseSaleOrders", parameters, options);
        }),

        showBrowseSaleOrderTasks: $defineShowScreen(function showBrowseSaleOrderTasks(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseSaleOrderTasks screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseSaleOrderTasks", parameters, options);
        }),

        showBrowseShippingMethods: $defineShowScreen(function showBrowseShippingMethods(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseShippingMethods screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseShippingMethods", parameters, options);
        }),

        showBrowseStockAdjusts: $defineShowScreen(function showBrowseStockAdjusts(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseStockAdjusts screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseStockAdjusts", parameters, options);
        }),

        showBrowseStockOnHands: $defineShowScreen(function showBrowseStockOnHands(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseStockOnHands screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseStockOnHands", parameters, options);
        }),

        showBrowseStockTransfers: $defineShowScreen(function showBrowseStockTransfers(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseStockTransfers screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseStockTransfers", parameters, options);
        }),

        showBrowseSupplierGroups: $defineShowScreen(function showBrowseSupplierGroups(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseSupplierGroups screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseSupplierGroups", parameters, options);
        }),

        showBrowseSuppliers: $defineShowScreen(function showBrowseSuppliers(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseSuppliers screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseSuppliers", parameters, options);
        }),

        showBrowseTransportRoutes: $defineShowScreen(function showBrowseTransportRoutes(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTransportRoutes screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTransportRoutes", parameters, options);
        }),

        showBrowseUnitOfMeasures: $defineShowScreen(function showBrowseUnitOfMeasures(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseUnitOfMeasures screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseUnitOfMeasures", parameters, options);
        }),

        showBrowseWorkers: $defineShowScreen(function showBrowseWorkers(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseWorkers screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseWorkers", parameters, options);
        }),

        showBrowseWorkOrderIsNotReceive: $defineShowScreen(function showBrowseWorkOrderIsNotReceive(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseWorkOrderIsNotReceive screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseWorkOrderIsNotReceive", parameters, options);
        }),

        showBrowseWorkOrders: $defineShowScreen(function showBrowseWorkOrders(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseWorkOrders screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseWorkOrders", parameters, options);
        }),

        showHome: $defineShowScreen(function showHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Home screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Home", parameters, options);
        }),

        showMobileHome: $defineShowScreen(function showMobileHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the MobileHome screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("MobileHome", parameters, options);
        }),

        showSearchActiveProducts: $defineShowScreen(function showSearchActiveProducts(options) {
            /// <summary>
            /// Asynchronously navigates forward to the SearchActiveProducts screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("SearchActiveProducts", parameters, options);
        }),

        showViewPOReceivedDetail: $defineShowScreen(function showViewPOReceivedDetail(PurchaseOrderDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewPOReceivedDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewPOReceivedDetail", parameters, options);
        }),

        showViewPurchaseOrder: $defineShowScreen(function showViewPurchaseOrder(PurchaseOrder, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewPurchaseOrder screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewPurchaseOrder", parameters, options);
        }),

        showViewPurchaseOrderDetail: $defineShowScreen(function showViewPurchaseOrderDetail(PurchaseOrderDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewPurchaseOrderDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewPurchaseOrderDetail", parameters, options);
        }),

        showViewPurchaseOrderDetail1: $defineShowScreen(function showViewPurchaseOrderDetail1(PurchaseOrderDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewPurchaseOrderDetail1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewPurchaseOrderDetail1", parameters, options);
        }),

        showViewSaleOrder: $defineShowScreen(function showViewSaleOrder(SaleOrder, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewSaleOrder screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewSaleOrder", parameters, options);
        }),

        showViewWorkOrder: $defineShowScreen(function showViewWorkOrder(WorkOrder, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewWorkOrder screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewWorkOrder", parameters, options);
        })

    });

}(msls.application));
