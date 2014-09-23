using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml; //+

/// <summary>
/// Summary description for Feed
/// </summary>
public class Feed
{
    private XmlDocument xmlDoc = new XmlDocument(); //-- New XML Document
    private XmlElement xmlElement = null;
    private XmlNodeList xmlNodeList = null;
    
    public Feed(string xml)
    {
        try
        {
            xmlDoc.Load(xml); //-- Load Feed onto XML Doc
	        xmlElement = xmlDoc.DocumentElement; //-- Get Root Element
            xmlNodeList = xmlElement.SelectNodes("//channel/item"); //-- Blog Post List
        }
        catch
        {
            return;
        }


    }
}
