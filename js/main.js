function submitdata(){

  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var address=document.querySelector("#address").value;
  var email=document.querySelector("#email").value;
  var mobilenumber=document.querySelector("#mobilenumber").value;
  var gender=document.querySelector("#gender").value;
  var ginstitute=document.querySelector("#ginstitute").value;
  var gbranch=document.querySelector("#gbranch").value;
  var gyear=document.querySelector("#gyear").value;
  var gpercentage=document.querySelector("#gpercentage").value;
  var ininstitute=document.querySelector("#ininstitute").value;
  var inbranch=document.querySelector("#inbranch").value;
  var inyop=document.querySelector("#inyop").value;
  var inpercentage=document.querySelector("#inpercentage").value;
  var sinstitute=document.querySelector("#sinstitute").value;
  var sbranch=document.querySelector("#sbranch").value;
  var syop=document.querySelector("#syop").value;
  var spercentage=document.querySelector("#spercentage").value;
  var skills=document.querySelector("#skills").value;
   // IndexedDB Implementaion
   var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;
   if(!idb in window)
   {
     console.log("indexedDB is not supported");
   }
   // IndexedDB creation
   var request;
   var store;
   var open=idb.open("storeData",1);
   console.log("IndexedDB is created");



open.onupgradeneeded=function(e){
request=e.target.result;
 store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
}
open.onerror=function(error){
  console.log("Error is occured");
}
open.onsuccess=function(e){
 request=e.target.result;
 var transaction=request.transaction("formdata","readwrite");
 store=transaction.objectStore("formdata");
 store.put({
   career:career,
   name:name,
   address:address,
   email:email,
   mobilenumber:mobilenumber,
   gender:gender,

  education:
  [{
    institute:ginstitute,
    branch:gbranch,
    year:gyear,
    percentage:gpercentage
  },
  {
    institute:ininstitute,
    branch:inbranch,
    year:inyop,
    percentage:inpercentage
  },
  {
    institute:sinstitute,
    branch:sbranch,
    year:syop,
    percentage:spercentage
}],
skills:skills

});

}
window.open("index.html");
}
