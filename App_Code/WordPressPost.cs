using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml; //+

/// <summary>
/// Summary description for WordPressPost
/// </summary>
public class WordPressPost
{
	public Guid Id { get; set; }
	public String Title { get; set; }
	public String PubDate { get; set; }
	public String Content { get; set; }
	public String HyperLink { get; set; }
	public String Thumbnail { get; set; }
	public String FirstImage { get; set; }
	public String ImageTitle { get; set; }
	
	public WordPressPost(string xmlFeed)
	{
		Id = Guid.NewGuid();
		
		XmlTextReader reader = new XmlTextReader(xmlFeed);

		reader.ReadToFollowing("item");

		reader.ReadToFollowing("title");
		Title = reader.ReadElementContentAsString();

		reader.ReadToFollowing("link");
		HyperLink = reader.ReadElementContentAsString();

		reader.ReadToFollowing("pubDate");
		PubDate = reader.ReadElementContentAsString();

		//reader.ReadToFollowing("guid");
		//Id = Regex.Replace(reader.ReadElementContentAsString(), xmlFeed.Remove(xmlFeed.Length - 6)+ "/\\?p=", string.Empty);

		reader.ReadToFollowing("content:encoded");
		Content = reader.ReadElementContentAsString();

		reader.ReadToFollowing("enclosure");
		Thumbnail = reader.GetAttribute("url");

		reader.ReadToFollowing("media:group");
		reader.ReadToDescendant("media:content");
		FirstImage = reader.GetAttribute("url");

		reader.ReadToFollowing("media:title");
		ImageTitle = reader.GetAttribute("url");
	}
}