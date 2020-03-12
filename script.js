var day = moment().format('dddd');
var date = moment().format("MMMM Do");
$("#currentDay").append(day + ", " + date);
var times = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

for (var i = 0; i < times.length; i++) {
    var current = times.indexOf(moment().format("h A"));
    var row = $("<div>");
    var time = $("<div>");
    var events;
    var save = $("<button>");
    row.addClass("row time-block");
    time.addClass("hour");
    save.addClass("saveBtn");
    time.text(times[i]);
    if (i < current) {
        events = $("<div>");
        events.addClass("past");
    }
    else if (i === current) {
        events = $("<div>");
        events.addClass("present");
    }
    else {
        events = $("<input>");
        events.addClass("future");
    }
    row.append(time, events, save);
    $(".container").append(row);
}