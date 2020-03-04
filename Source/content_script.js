walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bmaybe\b/g, "allegedly");
	v = v.replace(/\bperhaps\b/g, "allegedly");
	v = v.replace(/\bthrow out\b/g, "pretermit");
	v = v.replace(/\bconfusing\b/g, "turpitudinous");
	v = v.replace(/\bcancel\b/g, "rescind");
	v = v.replace(/\baccordin to\b/g, "as per");
	v = v.replace(/\bbecause\b/g, "inasmuch as");
	v = v.replace(/\bthrough\b/g, "vis-a-vis");
    v = v.replace(/\bcancel\b/g, "nolle");
	v = v.replace(/\brestart\b/g, "recommence");
	v = v.replace(/\bbeginning\b/g, "commencement");	
	v = v.replace(/\bstart\b/g, "initiate");
	v = v.replace(/\bbegin\b/g, "commence");
	v = v.replace(/\bsay\b/g, "state");
	v = v.replace(/\bsaid\b/g, "asserted");
	v = v.replace(/\bdid you \b/g, "did you, in fact, ");
	v = v.replace(/\borganized\b/g, "combobulated");
	v = v.replace(/\ba tiny amount\b/g, "a scintilla");
	v = v.replace(/\bsituation\b/g, "fact pattern");
	v = v.replace(/\bfinish\b/g, "finish and complete");
	v = v.replace(/\bmore than\b/g, "over and above");
	v = v.replace(/\bfinal\b/g, "final and conclusive");
	v = v.replace(/\bunless\b/g, "save and except");
	v = v.replace(/\bgive to\b/g, "assign, transfer and set over");
	v = v.replace(/\bfiles\b/g, "documents, instruments, and writings");
	v = v.replace(/\bagree\b/g, "covenant and agree");
	v = v.replace(/\bthink\b/g, "deem and consider");
	v = v.replace(/\bhave\b/g, "have and hold");
	v = v.replace(/\backnowledge\b/g, "concede");

	textNode.nodeValue = v;
}


