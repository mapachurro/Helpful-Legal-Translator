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
	v = v.replace(/\bsaid\b/g, "as per");
	v = v.replace(/\bbecause\b/g, "inasmuch as");
	v = v.replace(/\bthrough\b/g, "vis-a-vis");





	
	//Need to come up with a better synonym for nolle v = v.replace(/\bdrop\b/g, "nolle");
	
	textNode.nodeValue = v;
}


