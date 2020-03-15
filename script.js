var day = moment().format('dddd');
var date = moment().format("MMMM Do");
$("#currentDay").append(day + ", " + date);
var times = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

if (localStorage.getItem("saved") === null) {
    var allEvents = {
        "9 AM": "",
        "10 AM": "",
        "11 AM": "",
        "12 PM": "",
        "1 PM": "",
        "2 PM": "",
        "3 PM": "",
        "4 PM": "",
        "5 PM": ""
    };
    localStorage.setItem("saved", JSON.stringify(allEvents));
}
var stored = JSON.parse(localStorage.getItem("saved"));

for (var i = 0; i < times.length; i++) {
    var current = times.indexOf(moment().format("h A"));
    var row = $("<div>");
    var time = $("<div>");
    var events;
    var save = $("<button>");
    row.addClass("row time-block");
    time.addClass("hour");
    save.addClass("saveBtn");
    save.attr("time", times[i]);
    save.text("Save");
    time.text(times[i]);
    if (i < current) {
        events = $("<div>");
        events.addClass("past");
        events.text(stored[times[i]]);
    }
    else if (i === current) {
        events = $("<input>");
        events.addClass("present");
        events.val(stored[times[i]]);
    }
    else {
        events = $("<input>");
        events.addClass("future");
        events.val(stored[times[i]]);
    }
    row.append(time, events, save);
    $(".container").append(row);
}

$(".saveBtn").on("click", function () {
    stored[$(this).attr("time")] = $(this).siblings("input").val();
    localStorage.setItem("saved", JSON.stringify(stored));

});