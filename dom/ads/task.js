const slogans = document.querySelectorAll(".rotator__case");

let i = 0;
setInterval(function () {
  slogans[i].classList.remove("rotator__case_active");
  i = i === slogans.length - 1 ? 0 : i + 1;
  slogans[i].classList.add("rotator__case_active");
}, 1000);
