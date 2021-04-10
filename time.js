//SETTING THE DATE AND THE TIME

const weekday = document.querySelector(".weekday");
const month = document.querySelector(".month");

const option = {
    weekday: "long"
};
const months = {
    month: "long",
    day: "numeric"
};

const today = new Date();
weekday.innerHTML = today.toLocaleDateString("en-US", option);
month.innerHTML = today.toLocaleDateString("en-US", months);

// The section that shows the time in 12 hours
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    // if (h == 0) {
    //   h = 12;
    // }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ":" + m + ":" + s + "" + session;
    document.getElementById("time").innerHTML = time;
    // document.getElementById("time").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();