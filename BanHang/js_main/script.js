function openForm() 
{
  document.getElementById("myForm").style.display = "block";
}

function closeForm() 
{
  document.getElementById("myForm").style.display = "none";
}

function send()
{
	var mess = document.getElementById("mess")
	console.log(mess)
	if(mess.value != "")
	{
		alert("Cảm ơn bạn đã phản hồi cho chúng tôi!");
		mess.value = "";	
	}
	else
	{
		alert("Bạn chưa nhập tin nhắn!");
		mess.value = "";		
	}
}