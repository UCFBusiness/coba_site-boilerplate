using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml; //+

/// <summary>
/// Summary description for wpSinglePost
/// </summary>
public class wpSinglePost
{
	public String wpTitle { get; set; }
	public String wpHyperLink { get; set; }
	public String wpPubDate { get; set; }
	public String wpContent { get; set; }
	
	public wpSinglePost()
	{
		//
		// TODO: Add constructor logic here
		//
		XmlDocument wpBlog = new XmlDocument(); //-- New XML Document
		wpBlog.Load("http://pauljarley.wordpress.com/feed/"); //-- Load WordPress Feed onto XML Doc
		XmlElement xe = wpBlog.DocumentElement; //-- Root Element


	}
}