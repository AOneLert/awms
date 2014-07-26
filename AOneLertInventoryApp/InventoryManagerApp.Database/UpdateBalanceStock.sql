CREATE  PROCEDURE UpdateBalanceStock
	@UserName varchar(100),
	@TransactionType varchar(100),
	@DocumentNo varchar(100)
AS
BEGIN
		DECLARE @loc INT;
		DECLARE @item INT;
		DECLARE @lot VARCHAR(20);
		DECLARE @qty FLOAT;
		DECLARE @cost DECIMAL(18,2);

		DECLARE bf_cursor CURSOR
		FOR SELECT dtl.ProductReceiveDetail_Location,dtl.ProductReceiveDetail_Product,dtl.LotNo
					,SUM(dtl.ReceivedQuantity)AS ReceivedQuantity
					,SUM(dtl.ReceivedQuantity) * SUM(dtl.CostPrice)AS TotalCost
				FROM dbo.ProductReceiveBalanceForwards hdr 
					Inner Join dbo.ProductReceiveBalanceForwardDetails dtl 
					ON hdr.Id = dtl.ProductReceiveDetail_ProductReceive 
				Where hdr.DocumentNo = @DocumentNo
				GROUP BY dtl.ProductReceiveDetail_Location,dtl.ProductReceiveDetail_Product,dtl.LotNo;


		OPEN bf_cursor
		FETCH NEXT FROM bf_cursor INTO @loc,@item,@lot,@qty,@cost;

		--WHILE @@FETCH_STATUS=0
		--BEGIN
		--	UPDATE StockOnHands2 
		--	SET QuantityOnHand=@qty
		--	WHERE StockOnHand_Product = @item;

		--	FETCH NEXT FROM bf_cursor INTO @loc,@item,@lot,@qty,@cost;
		--END

		CLOSE bf_cursor;
		DEALLOCATE bf_cursor;
		--UPDATE StockOnHands 
		--	Set QuantityOnHand=QuantityOnHand + @Qty,CostPrice = CostPrice + (@UnitCost * @Qty)
		--WHERE StockOnHand_Location = @Loc And 

		--IF @TransactionType = 'BF'
		--BEGIN
			--UPDATE StockOnHands SET QuantityOnHand = QuantityOnHand + tr.ReceivedQuantity
			--	,CostPrice = CostPrice + tr.TotalCost
			--FROM(SELECT dtl.ProductReceiveDetail_Location,dtl.ProductReceiveDetail_Product,dtl.LotNo
			--		,SUM(dtl.ReceivedQuantity)AS ReceivedQuantity
			--		,SUM(dtl.ReceivedQuantity) * SUM(dtl.CostPrice)AS TotalCost
			--	FROM dbo.ProductReceiveBalanceForwards hdr 
			--		Inner Join dbo.ProductReceiveBalanceForwardDetails dtl 
			--		ON hdr.Id = dtl.ProductReceiveDetail_ProductReceive 
			--	Where hdr.DocumentNo = @DocumentNo
			--	GROUP BY dtl.ProductReceiveDetail_Location,dtl.ProductReceiveDetail_Product,dtl.LotNo)tr
			--WHERE StockOnHand_Location = tr.ProductReceiveDetail_Location 
			--	AND StockOnHand_Product = tr.ProductReceiveDetail_Product AND StockOnHands.LotNo = tr.LotNo
	
			--UPDATE StockOnHands
			--	SET QuantityOnHand = 5
			--WHERE StockOnHand_Product = 1;
			--INSERT INTO StockOnHands (StockOnHand_Location,StockOnHand_Product,LotNo,QuantityOnHand,CostPrice,SellingPrice,IsAvailableForSale,Created)
			
			--VALUES (1,1,'1111',1,1,1,1,GETDATE())
			--SELECT dtl.ProductReceiveDetail_Location,dtl.ProductReceiveDetail_Product,dtl.LotNo
			--	,SUM(dtl.ReceivedQuantity) AS ReceivedQuantity
			--	,SUM(dtl.CostPrice) AS TotalCost,0 AS SellingPrice
			--	,0 AS IsAvailableForSale
			--FROM dbo.ProductReceiveBalanceForwards hdr 
			--	Inner Join dbo.ProductReceiveBalanceForwardDetails dtl 
			--	ON hdr.Id = dtl.ProductReceiveDetail_ProductReceive 
			--Where hdr.DocumentNo = @DocumentNo				
			--GROUP BY dtl.ProductReceiveDetail_Location,dtl.ProductReceiveDetail_Product,dtl.LotNo

		--END
END

RETURN 0