//your JS code here. If require
const button=document.getElementById("enterBtn");
const first=document.getElementById("status");
let flag=0;
button.addEventListener("click" ,()=>{
	if(flag==0)
	{
	first.innerText="";
	let value=document.createElement("h1");
	value.innerText="Entered Metaverse";
		value.id="status"
first.appendChild(value);
flag=1;}
	else{
		return;
	}
	
});
