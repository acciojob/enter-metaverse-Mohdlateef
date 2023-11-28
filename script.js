//your JS code here. If require
const button=document.getElementById("enterBtn");
const first=document.getElementById("status");
let flag=0;
button.addEventListener("click" ,()=>{
	if(flag==0)
	{
	first.remove();
	let value=document.createElement("h1");
	value.innerText="Entered Metaverse";
	button.parentNode.insertBefore(value,button);
flag=1;}
	else{
		return;
	}
	
});
