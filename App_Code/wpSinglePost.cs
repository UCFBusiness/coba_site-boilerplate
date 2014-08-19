using System;
using System.Collections.Generic;
using System.Linq;
using System.Text; //+
using System.Text.RegularExpressions; //+
using System.Web;
using System.Xml; //+

/// <summary>
/// Summary description for wpSinglePost
/// </summary>
public class wpSinglePost
{
	//public String Id { get; set; }
    public String Title { get; set; }
	public String PubDate { get; set; }
	public String Content { get; set; }
    public String HyperLink { get; set; }
	
	public wpSinglePost(string xml)
	{
        XmlTextReader reader = new XmlTextReader(xml);

        reader.ReadToFollowing("item");

        reader.ReadToFollowing("title");
        Title = reader.ReadElementContentAsString();

        reader.ReadToFollowing("link");
        HyperLink = reader.ReadElementContentAsString();

        reader.ReadToFollowing("pubDate");
        PubDate = reader.ReadElementContentAsString();
        
        //reader.ReadToFollowing("guid");
        //Id = Regex.Replace(reader.ReadElementContentAsString(), xml.Remove(xml.Length - 6)+ "/\\?p=", string.Empty);

        reader.ReadToFollowing("content:encoded");
        Content = reader.ReadElementContentAsString();
	}
}