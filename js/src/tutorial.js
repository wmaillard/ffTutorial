var showText = function (target, message, index, interval) { 
	if(!interval){
		interval = 125
	}   
  if (index < message.length) { 
    $(target).append(message[index++] + " "); 
    setTimeout(function () { showText(target, message, index, interval); }, interval); 
  } 
}