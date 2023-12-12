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






