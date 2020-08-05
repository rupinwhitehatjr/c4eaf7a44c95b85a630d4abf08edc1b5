function FillDetails(){ 
 
 var first = document.getElementById("nameinput").value;
  document.getElementById("name0").innerHTML=first
  document.getElementById("name1").innerHTML=first
  
  
   var second = document.getElementById("friendname").value;
  document.getElementById("friend0").innerHTML=second;
  document.getElementById("friend1").innerHTML=second;
  
  
  var third = document.getElementById("petname").value;
  document.getElementById("pet").innerHTML=third;
  
  var fourth = document.getElementById("foodname").value;
  document.getElementById("food").innerHTML=fourth;
  
  var fifth = document.getElementById("drinkname").value;
  document.getElementById("drink").innerHTML=fifth;
}