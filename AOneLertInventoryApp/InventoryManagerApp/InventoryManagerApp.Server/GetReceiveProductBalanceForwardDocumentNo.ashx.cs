using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LightSwitchApplication
{
    /// <summary>
    /// Summary description for GetReceiveProductBalanceForwardDocumentNo
    /// </summary>
    public class GetReceiveProductBalanceForwardDocumentNo : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            using (var serverContext = ServerApplicationContext.CreateContext())
            {
                //PaymentType pt= serverContext.DataWorkspace.ApplicationData.ProductReceiveBalanceForwards
                //context.Response.ContentType = "text/plain";
                context.Response.Write("BF1406001");
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}