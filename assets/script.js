// date & time
var today = dayjs();
var hour = dayjs().hour();
var saveBtn = $(".saveBtn");

$("#currentDay").text(today);

console.log(hour);

$(".time-block").each(function(e){
    //console.log(block);
   //console.log($(this))
    var blockHour = $(this).attr("id");
    //var textArea = $(".time-block").children("textarea")
    console.log(blockHour);
    if (hour > blockHour){
        $(this).addClass("past")
        console.log(this);
    }
    else if (hour < blockHour){
        $(this).addClass("future")
        console.log(this);
    }
      if (hour == blockHour){
          $(this).addClass("present")
          console.log(this);
        }
}
);


saveBtn.on("click",function(){
    var text = $(this).siblings(".event").val();
    console.log(text);
    var appointmentTime = $(this).parent().attr("id");
    console.log(appointmentTime);
    localStorage.setItem(appointmentTime,text);
})


$("#9 .event").val(localStorage.getItem("9"));
console.log($("#9 .event"));
$("#10 .event").val(localStorage.getItem("10"));
console.log($("#10 .event"));
$("#11 .event").val(localStorage.getItem("11"));
console.log($("#11 .event"));
$("#12 .event").val(localStorage.getItem("12"));
console.log($("#12 .event"));
$("#13 .event").val(localStorage.getItem("13"));
console.log($("#13 .event"));
$("#14 .event").val(localStorage.getItem("14"));
console.log($("#14 .event"));
$("#15 .event").val(localStorage.getItem("15"));
console.log($("#15 .event"));
$("#16 .event").val(localStorage.getItem("16"));
console.log($("#16 .event"));
$("#17 .event").val(localStorage.getItem("17"));
console.log($("#17 .event"));
