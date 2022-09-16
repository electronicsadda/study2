





$( "#Account" ).click(  function(){

    
     
    $("#Account").addClass("active")
    $("#Pool").removeClass("active")
    $("#please2").show();
    $("#please").hide()
    Intrest();
    console.log(1);
});

 $( "#Pool" ).click(function(){
 $("#Account").removeClass("active")
 $("#Pool").addClass("active")
 $("#please").show();
 $("#please2").hide()
 console.log(2);

});
 function vipshow(){
     console.log(69)
     $("#vip").show();
     $("#please2").hide()
 }

 function shares_show(){
     console.log(69)
     $("#shares").show();
     $("#please2").hide()
 }

 function close_vip(){
     console.log(699)
     $("#vip").hide();
     $("#please2").show()
     
 }
 function shares_close(){
     console.log(699)
     $("#shares").hide();
     $("#please2").show()
     
 }

 function withdraw() {
     console.log(49)
     $("#withdraw_div").addClass("active");
     $("#record_div").removeClass("active");
     $("#exchange_div").removeClass("active");
     $("#withdraw_div").show();
     $("#exchange_div").hide();
     $("record_div").hide();

 }
 function exchange() {
     console.log(54);
     $("#withdraw_div").removeClass("active");
     $("#record_div").removeClass("active");
     $("#exchange_div").addClass("active");
     $("#exchange_div").show();
     $("#withdraw_div").hide();
     $("record_div").hide();

 }

 function records() {
     console.log(420)
     $("#withdraw_div").removeClass("active");
     $("#record_div").addClass("active");
     $("#exchange_div").removeClass("active");
     $("#record_div").show();
     console.log(35);
     $("#withdraw_div").hide();
     $("#exchange_div").hide();

 }


