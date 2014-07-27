using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using LightSwitchApplication.UserCode;
using System.Data.SqlClient;
using System.Configuration;
using System.Data;
namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        //partial void Customers_CanDelete(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditCustomers);
        //}

        //partial void Customers_CanInsert(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditCustomers);
        //}

        //partial void Customers_CanUpdate(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditCustomers);
        //}

        //partial void Employees_CanDelete(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        //}

        //partial void Employees_CanInsert(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        //}

        //partial void Employees_CanUpdate(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        //}

        //partial void OrderDetails_CanDelete(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditOrderDetails);
        //}

        //partial void OrderDetails_CanInsert(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditOrderDetails);
        //}

        //partial void OrderDetails_CanUpdate(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditOrderDetails);
        //}

        //partial void Orders_CanDelete(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditOrders);
        //}

        //partial void Orders_CanInsert(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditOrders);
        //}

        //partial void Orders_CanUpdate(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditOrders);
        //}

        //partial void ProductCategories_CanDelete(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditProductCategories);
        //}

        //partial void ProductCategories_CanInsert(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditProductCategories);
        //}

        //partial void ProductCategories_CanUpdate(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditProductCategories);
        //}

        //partial void Products_CanDelete(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditProducts);
        //}

        //partial void Products_CanInsert(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditProducts);
        //}

        //partial void Products_CanUpdate(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditProducts);
        //}

        //partial void ProductSubscribers_CanDelete(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditProductSubscribers);
        //}

        //partial void ProductSubscribers_CanInsert(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditProductSubscribers);
        //}

        //partial void ProductSubscribers_CanUpdate(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditProductSubscribers);
        //}

        //partial void PurchaseOrderDetails_CanDelete(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditPurchaseOrderDetails);
        //}

        //partial void PurchaseOrderDetails_CanInsert(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditPurchaseOrderDetails);
        //}

        //partial void PurchaseOrderDetails_CanUpdate(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditPurchaseOrderDetails);
        //}

        //partial void ShippingMethods_CanDelete(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditShippingMethods);
        //}

        //partial void ShippingMethods_CanInsert(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditShippingMethods);
        //}

        //partial void ShippingMethods_CanUpdate(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditShippingMethods);
        //}

        //partial void PurchaseOrders_CanDelete(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditPurchaseOrders);
        //}

        //partial void PurchaseOrders_CanInsert(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditPurchaseOrders);
        //}

        //partial void PurchaseOrders_CanUpdate(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditPurchaseOrders);
        //}

        //partial void StockCheckDetails_CanDelete(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditStockCheckDetails);
        //}

        //partial void StockCheckDetails_CanInsert(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditStockCheckDetails);
        //}

        //partial void StockCheckDetails_CanUpdate(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditStockCheckDetails);
        //}

        //partial void StockChecks_CanDelete(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditStockChecks);
        //}

        //partial void StockChecks_CanInsert(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditStockChecks);
        //}

        //partial void StockChecks_CanUpdate(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditStockChecks);
        //}

        //partial void Suppliers_CanDelete(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditSuppliers);
        //}

        //partial void Suppliers_CanInsert(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditSuppliers);
        //}

        //partial void Suppliers_CanUpdate(ref bool result)
        //{
        //    result = this.Application.User.HasPermission(Permissions.CanEditSuppliers);
        //}

        //partial void PurchaseOrder_Olds_Validate(PurchaseOrder_Old entity, EntitySetValidationResultsBuilder results)
        //{
        //    if (entity.DatePurchaseOrderPlaced != null & entity.DatePurchaseOrderRequired != null)
        //    {
        //        if (entity.DatePurchaseOrderRequired < entity.DatePurchaseOrderPlaced)
        //        {
        //            results.AddEntityError("The order required date cannot be earlier than the date order placed");
        //        }
        //    }

        //    if (entity.DatePurchaseOrderPlaced != null & entity.DatePurchaseOrderShipped != null)
        //    {
        //        if (entity.DatePurchaseOrderShipped < entity.DatePurchaseOrderPlaced)
        //        {
        //            results.AddEntityError("The shipped date cannot be earlier than the date order placed");
        //        }
        //    }
        //}

        //partial void Orders_Validate(Order entity, EntitySetValidationResultsBuilder results)
        //{
        //    if (entity.OrderDate != null & entity.DatePaid != null)
        //    {
        //        if (entity.DatePaid < entity.OrderDate)
        //        {
        //            results.AddEntityError("The order cannot be paid foe before it is placced");
        //        }
        //    }
        //}

        //partial void OrderDetails_Validate(OrderDetail entity, EntitySetValidationResultsBuilder results)
        //{
        //    if (entity.DateOrderShipped != null & entity.Order.OrderDate != null)
        //    {
        //        if (entity.DateOrderShipped < entity.Order.OrderDate)
        //        {
        //            results.AddEntityError("The order cannot be shipped before it is placed");
        //        }
        //    }
        //}

        //partial void PurchaseOrderDetail_Olds_Validate(PurchaseOrderDetail_Old entity, EntitySetValidationResultsBuilder results)
        //{
        //    if (entity.DateRecieved != null & entity.PurchaseOrder_Old.DatePurchaseOrderPlaced != null)
        //    {
        //        if (entity.DateRecieved < entity.PurchaseOrder_Old.DatePurchaseOrderPlaced)
        //        {
        //            results.AddEntityError("The purchase order product cannot be recieved before the purchase order is placed");
        //        }
        //    }
        //}

        //partial void Products_Updated(Product entity)
        //{
        //    OnProductStatusAffected(entity);
        //}

        //partial void PurchaseOrderDetail_Olds_Inserted(PurchaseOrderDetail_Old entity)
        //{
        //    //OnProductStatusAffected(entity.Product);
        //}

        //partial void PurchaseOrderDetail_Olds_Updated(PurchaseOrderDetail_Old entity)
        //{
        //    //OnProductStatusAffected(entity.Product);
        //}

        //partial void OrderDetails_Inserted(OrderDetail entity)
        //{
        //    //OnProductStatusAffected(entity.Product);
        //}

        //partial void OrderDetails_Updated(OrderDetail entity)
        //{
        //    //OnProductStatusAffected(entity.Product);
        //}

        partial void StockCheckDetails_Inserted(StockCheckDetail entity)
        {
            //OnProductStatusAffected(entity.Product);
        }

        partial void StockCheckDetails_Updated(StockCheckDetail entity)
        {
            //OnProductStatusAffected(entity.Product);
        }

        private void OnProductStatusAffected(Product product)
        {
            //var unitsReceived = 0;
            //var unitsShipped = 0;
            //var unitsLost = 0;
            //var unitsOnHand = 0;
            //var unitsOnOrder = 0;

            //var purchaseOrderDetails = product.PurchaseOrderDetails;
            //foreach (var purchaseOrderDetail in purchaseOrderDetails)
            //{
            //    unitsReceived += purchaseOrderDetail.UnitsReceived.Value;
            //    unitsOnOrder += purchaseOrderDetail.UnitsOrdered - purchaseOrderDetail.UnitsReceived.Value;
            //}

            //var orderDetails = product.OrderDetails;
            //foreach (var orderDetail in orderDetails)
            //{
            //    unitsShipped += orderDetail.UnitsShipped.Value;
            //}

            //var stockCheckDetails = product.StockCheckDetails;
            //foreach (var stockCheckDetail in stockCheckDetails)
            //{
            //    unitsLost += stockCheckDetail.UnitsExpected - stockCheckDetail.UnitsFound;
            //}

            //unitsOnHand = unitsReceived - (unitsShipped + unitsLost);

            //if (unitsOnHand <= product.ReorderLevel)
            //{
            //    string subject = string.Format("{0} at or below reorder levels", product.ProductName);

            //    foreach (var subscriber in product.ProductSubscribers)
            //    {
            //        List<string> mailTos = new List<string>();

            //        string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The product '{2}' is at or below the reorder level:<br></br>The reorder level is {3} but you currently only have {4} on hand.<br></br>For info, the number of units on order is {5}.</p></body></html>", subscriber.Employee.FirstName, subscriber.Employee.LastName, product.ProductName, product.ReorderLevel, unitsOnHand, unitsOnOrder);

            //        mailTos.Add(subscriber.Employee.Email);

            //        SendEmail(mailTos, subject, message);
            //    }
            //}
        }

        private void SendEmail(List<string> mailTos, string subject, string message)
        {
            if (System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable())
            {
                if (mailTos.Count() != 0)
                {
                    MailHelper mailHelper = new MailHelper();

                    mailHelper.SendMail(mailTos, subject, message);
                }
            }
        }

        partial void QueryLatestProductReceiveBalanceForwardDocumentNo_PreprocessQuery(ref IQueryable<ProductReceiveBalanceForward> query)
        {
            // Only show the Orders for the current user
            query = query.OrderByDescending(x => x.DocumentNo);//.Where(x => x.CreatedBy == this.Application.User.Identity.Name);
        }

        partial void StockOnHands_Updated(StockOnHand entity)
        {
            
        }

        partial void ProductReceiveBalanceForwards_Inserted(ProductReceiveBalanceForward entity)
        {
            using (SqlConnection connection = new SqlConnection())
            {
                string connectionStringName = this.DataWorkspace.ApplicationData.Details.Name;
                connection.ConnectionString = ConfigurationManager.ConnectionStrings["_IntrinsicData"].ConnectionString;

                string procedure = "UpdateBalanceStock";
                using (SqlCommand command = new SqlCommand(procedure, connection))
                {
                    command.CommandType = CommandType.StoredProcedure;

                    command.Parameters.Add(new SqlParameter("@UserName", entity.Modified));
                    command.Parameters.Add(new SqlParameter("@TransactionType", "BF"));
                    command.Parameters.Add(new SqlParameter("@DocumentNo", entity.DocumentNo));

                    connection.Open();
                    command.ExecuteNonQuery();
                }
            }

            this.Details.DiscardChanges();
        }

        partial void ProductReceiveBalanceForwards_Updated(ProductReceiveBalanceForward entity)
        {
            //using (SqlConnection connection = new SqlConnection())
            //{
            //    string connectionStringName = this.DataWorkspace.ApplicationData.Details.Name;
            //    connection.ConnectionString = ConfigurationManager.ConnectionStrings["_IntrinsicData"].ConnectionString;

            //    string procedure = "UpdateBalanceStock";
            //    using (SqlCommand command = new SqlCommand(procedure, connection))
            //    {
            //        command.CommandType = CommandType.StoredProcedure;

            //        command.Parameters.Add(new SqlParameter("@UserName", entity.Modified));
            //        command.Parameters.Add(new SqlParameter("@TransactionType", "BF"));
            //        command.Parameters.Add(new SqlParameter("@DocumentNo", entity.DocumentNo));

            //        connection.Open();
            //        command.ExecuteNonQuery();
            //    }
            //}

            //this.Details.DiscardChanges();
        }

        partial void ProductReceiveBalanceForwardDetails_Updated(ProductReceiveBalanceForwardDetail entity)
        {
            using (SqlConnection connection = new SqlConnection())
            {
                string connectionStringName = this.DataWorkspace.ApplicationData.Details.Name;
                connection.ConnectionString = ConfigurationManager.ConnectionStrings["_IntrinsicData"].ConnectionString;

                string procedure = string.Empty;
                procedure =  "UPDATE StockOnHands ";
                procedure += "    SET QuantityOnHand=@qty+QuantityOnHand";
                procedure += "       ,CostPrice=CostPrice + (@costPrice * @qty) ";
                procedure += "WHERE StockOnHand_Location=@loc ";
                procedure += "    AND StockOnHand_Product=@product";
                procedure += "    AND LotNo=@lot";

                using (SqlCommand command = new SqlCommand(procedure, connection))
                {
                    command.CommandType = CommandType.Text;
                    
                     
                    command.Parameters.Add(new SqlParameter("@qty", entity.ReceivedQuantity));
                    command.Parameters.Add(new SqlParameter("@costPrice", entity.CostPrice));
                    command.Parameters.Add(new SqlParameter("@loc", entity.Location.Id));
                    command.Parameters.Add(new SqlParameter("@product", entity.Product.Id));
                    command.Parameters.Add(new SqlParameter("@lot", entity.LotNo));

                    connection.Open();
                    int result = command.ExecuteNonQuery();

                    if (result == 0)
                    {
                        procedure = "INSERT INTO StockOnHands (StockOnHand_Location,StockOnHand_Product,LotNo,QuantityOnHand,CostPrice,SellingPrice,IsAvailableForSale,CreatedBy,Created) ";
                        procedure += "VALUES(@loc,@product,@lot,@qty,@costPrice*@qty,0,1,@userName,GETDATE())";

                        command.CommandText = procedure;

                        command.Parameters.Clear();
                        command.Parameters.Add(new SqlParameter("@loc", entity.Location.Id));
                        command.Parameters.Add(new SqlParameter("@product", entity.Product.Id));
                        command.Parameters.Add(new SqlParameter("@lot", entity.LotNo));
                        command.Parameters.Add(new SqlParameter("@qty", entity.ReceivedQuantity));
                        command.Parameters.Add(new SqlParameter("@costPrice", entity.CostPrice));
                        command.Parameters.Add(new SqlParameter("@userName", entity.CreatedBy));

                        command.ExecuteNonQuery();
                    }
                }
            }

            this.Details.DiscardChanges();
        }

        partial void ProductReceiveBalanceForwardDetails_Inserted(ProductReceiveBalanceForwardDetail entity)
        {
            using (SqlConnection connection = new SqlConnection())
            {
                string connectionStringName = this.DataWorkspace.ApplicationData.Details.Name;
                connection.ConnectionString = ConfigurationManager.ConnectionStrings["_IntrinsicData"].ConnectionString;

                string procedure = string.Empty;
                procedure = "UPDATE StockOnHands ";
                procedure += "    SET QuantityOnHand=@qty+QuantityOnHand";
                procedure += "       ,CostPrice=CostPrice + (@costPrice * @qty) ";
                procedure += "WHERE StockOnHand_Location=@loc ";
                procedure += "    AND StockOnHand_Product=@product";
                procedure += "    AND LotNo=@lot";

                using (SqlCommand command = new SqlCommand(procedure, connection))
                {
                    command.CommandType = CommandType.Text;


                    command.Parameters.Add(new SqlParameter("@qty", entity.ReceivedQuantity));
                    command.Parameters.Add(new SqlParameter("@costPrice", entity.CostPrice));
                    command.Parameters.Add(new SqlParameter("@loc", entity.Location.Id));
                    command.Parameters.Add(new SqlParameter("@product", entity.Product.Id));
                    command.Parameters.Add(new SqlParameter("@lot", entity.LotNo));

                    connection.Open();
                    int result = command.ExecuteNonQuery();

                    if (result == 0)
                    {
                        procedure = "INSERT INTO StockOnHands (StockOnHand_Location,StockOnHand_Product,LotNo,QuantityOnHand,CostPrice,SellingPrice,IsAvailableForSale,CreatedBy,Created) ";
                        procedure += "VALUES(@loc,@product,@lot,@qty,@costPrice*@qty,0,1,@userName,GETDATE())";

                        command.CommandText = procedure;

                        command.Parameters.Clear();
                        command.Parameters.Add(new SqlParameter("@loc", entity.Location.Id));
                        command.Parameters.Add(new SqlParameter("@product", entity.Product.Id));
                        command.Parameters.Add(new SqlParameter("@lot", entity.LotNo));
                        command.Parameters.Add(new SqlParameter("@qty", entity.ReceivedQuantity));
                        command.Parameters.Add(new SqlParameter("@costPrice", entity.CostPrice));
                        command.Parameters.Add(new SqlParameter("@userName", entity.CreatedBy));

                        command.ExecuteNonQuery();
                    }
                }
            }

            this.Details.DiscardChanges();
        }

        partial void QueryMaxPONumber_PreprocessQuery(ref IQueryable<PurchaseOrder> query)
        {
            query = query.OrderByDescending(x => x.PurchaseOrderNumber);
        }

        partial void PurchaseOrderDetails_Inserting(PurchaseOrderDetail entity)
        {
            if (entity.ReceiveDate != null) {
                string receiveType = getPOTransactionType(entity.Product);
                entity.LotNo = getNewLotFromStockOnhand(receiveType, entity.ReceiveDate.Value, entity.Product, "");
            }
        }

        partial void PurchaseOrderDetails_Updating(PurchaseOrderDetail entity)
        {
            if (entity.ReceiveDate != null)
            {
                string receiveType = getPOTransactionType(entity.Product);
                entity.LotNo = getNewLotFromStockOnhand(receiveType, entity.ReceiveDate.Value, entity.Product, "");
            }
        }

        private string getPOTransactionType(Product ReceiveProduct) {
            string receiveType = "";
            switch (ReceiveProduct.ProductCategory.ProductCategoryName)
            {
                case "วัตถุดิบ": receiveType = "PORM";
                    break;
                case "สินค้า": receiveType = "POFG";
                    break;
                case "ของเสีย": receiveType = "POWS";
                    break;
                default: receiveType = "PONA";
                    break;
            }
            return receiveType;
        }
        private string getNewLotFromStockOnhand(string ReceiveType,DateTime LotDate,Product ReceiveProduct,string OldRawmatLotNo) {
            string newLot = "";
            string insertLot = (Int32.Parse(String.Format("{0:yy}", LotDate))%10).ToString() + String.Format("{0:MMdd}", LotDate);

            string[] ReceiveNewLotPrefix = { "PO","BF","RT" };
            if (ReceiveNewLotPrefix.Contains(ReceiveType.Substring(0, 2)))
            {
                var queryStockOnHand = from stock in StockOnHands
                                       where stock.Product.Id == (ReceiveProduct.Id) && stock.LotNo.Contains(insertLot)
                                       orderby stock.LotNo descending
                                       select stock.LotNo;
                if (queryStockOnHand.Count() > 0)
                {
                    string LastLot = queryStockOnHand.First();
                    newLot = insertLot + (Int32.Parse(LastLot.Substring(6, 1)) + 1).ToString();
                }
                else
                {
                    newLot = insertLot + '1';
                }
            }

            string[] ReceiveOldLotPrefix = { "GIRM","AJQT","AJCT","TRFS" };
            if (ReceiveOldLotPrefix.Contains(ReceiveType))
            {
                newLot = OldRawmatLotNo;
            }

            string[] ReceiveCheckLotPrefix = { "GIFG", "GIWS" };
            if (ReceiveCheckLotPrefix.Contains(ReceiveType))
            {
                var SelectProduct = from Item in Products where Item.Id == ReceiveProduct.Id select Item.LotType;
                if (SelectProduct.Count() > 0) {
                    string ItemCategory = SelectProduct.FirstOrDefault();
                    if (ItemCategory == "Fix")
                    {
                        newLot = OldRawmatLotNo;
                    }else
                    {
                        var queryStockOnHand = from stock in StockOnHands
                                               where stock.Product.Id == (ReceiveProduct.Id) && stock.LotNo.Contains(insertLot)
                                               orderby stock.LotNo descending
                                               select stock.LotNo;
                        if (queryStockOnHand.Count() > 0)
                        {
                            string LastLot = queryStockOnHand.First();
                            newLot = insertLot + (Int32.Parse(LastLot.Substring(6, 1)) + 1).ToString();
                        }
                        else
                        {
                            newLot = insertLot + '1';
                        }
                    }
                }

            }
            return newLot;
        }        
    }
}
