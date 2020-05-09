var name;
var email;
var city;
var state;
function check(x){
   var disp=x.value;
   var i=0;
   for(i=1;i<=4;i++)
   {
   document.getElementById(i).setAttribute("style","display:none;");
   }
   document.getElementById(disp).setAttribute("style","display:block;");
   state=disp;
}
function checkcity(val){
  city=val.value;
}
function validateForm(x){
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
    alert("Not a valid e-mail address");
    return false;
  }
  return true;
}
function submit(){
  console.log("inside");
  name=document.getElementById("name").value;
  email=document.getElementById("email").value;
  if(validateForm(email)==true)
  {
  if(name=="")
  {
    alert("form incomplete");
  }
  else{
    alert(name+" "+email+" "+city+" "+state);
  }
}
}
