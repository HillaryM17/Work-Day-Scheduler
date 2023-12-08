// date & time
var today = dayjs();
var hour = dayjs().hour();

$("#currentDay").text(today);

console.log(hour);

$(".time-block").each(function(block){
    console.log(block);
   console.log($(this));
    var blockHour = $(this).attr("id");
    console.log(blockHour);
    // if (hour>blockHour){
    //     $("textarea").addClass(".future")
    // }
    // else if (hour<blockHour){
    //     $("textarea").addClass(".past")
    // }
    // else if (hour==blockHour){
    //     $("textarea").addClass(".present")
    // }

    if (hour!==blockHour){
        $("textarea").addClass(".future")    
    }

});

