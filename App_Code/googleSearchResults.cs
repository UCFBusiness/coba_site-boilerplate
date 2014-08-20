using System;
using System.Collections.Generic;
using System.Linq;
using System.Text; //+
using System.Web;
using System.Xml; //+

/// <summary>
/// Summary description for googleSearchResults
/// </summary>
public class googleSearchResults
{
	public googleSearchResults()
	{
		//
		// TODO: Add constructor logic here
		//
	}

	public string ParseXml(string xmlString){
		
		// Create a stringbuilder object to hold the text from the XML file that we will output later
		StringBuilder output = new StringBuilder();

		// Create XML TextReader
		//using (XmlReader reader = XmlReader.Create(new StringReader(xmlString))){
		//    reader.ReadToFollowing("RES");
		//    reader.MoveToFirstAttribute();
		//    string rNumber = reader.Value;
		//    output.AppendLine("Result No. " + reader.ReadElementContentAsString());
		//}

		XmlTextReader reader = new XmlTextReader(xmlString);
		reader.ReadToFollowing("RES");
		reader.ReadToDescendant("R");

		reader.MoveToFirstAttribute();
		string n = reader.Value;
		output.AppendLine("The 1st attribute or R is: " + n);

		reader.ReadToFollowing("T");
		output.AppendLine("The content Title is: " + reader.ReadElementContentAsString());


		return output.ToString();
	}
}