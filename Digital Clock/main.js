var timeStart;

function curTime() {

    const date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    if (hh == 24) {
        hh = 0;
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;


    let dd = date.getDate();
    let mon = date.getMonth() + 1;
    let year = date.getFullYear();

    dd = (dd < 10) ? "0" + dd : dd;
    mon = (mon < 10) ? "0" + mon : mon;

    let currentTime = `${hh}:${mm}:${ss}`;
    let currentDate = `${dd} / ${mon} / ${year}`;

    document.getElementById("time").innerHTML = currentTime;
    document.getElementById("date").innerHTML = currentDate;
    if (timeStart == null) {

        timeStart = setInterval(curTime, 1000);

    }

}

function stopTime() {
    clearInterval(timeStart);
    timeStart = null;
}