
	function FileHelper()
	{}
	{
		FileHelper.readStringFromFileAtPath = function(pathOfFileToReadFrom)
		{
			var request = new XMLHttpRequest();
			request.open("GET", pathOfFileToReadFrom, false);
			request.send(null);
			var returnValue = request.responseText.replace(/\n/g, "<br/>");
			return returnValue;
		}
		
		FileHelper.readFolderAtPath = function(pathOfFolderToReadFrom)
		{
			var request = new XMLHttpRequest();
			request.open("GET", pathOfFileToReadFrom, false);
			request.send(null);
			var returnValue = request.responseText.replace(/\n/g, "<br/>");
			return returnValue;
		}
	}