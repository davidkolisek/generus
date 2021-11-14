window.addEventListener("DOMContentLoaded", (event) => {
  const borderBox = document.querySelector(".border-box");
  const page = document.querySelector("html");
  const pageBody = document.querySelector("body");

  const btnRadius = document.querySelector("#generateRadius");
  const btnGradient = document.querySelector("#generateGradient");
  const btnBoxShadow = document.querySelector("#generateBoxShadow");

  const brCopyBtn = document.querySelector(".br-copy");
  const bgCopyBtn = document.querySelector(".bg-copy");
  const bsCopyBtn = document.querySelector(".bs-copy");

  let wInput = document.querySelector(".w-input");
  let hInput = document.querySelector(".h-input");

  const offsetWidth = borderBox.offsetWidth;
  const offsetHeight = borderBox.offsetHeight;

  wInput.value = offsetWidth;
  hInput.value = offsetHeight;

  btnRadius.addEventListener(
    "click",
    function (e) {
      let rnd1 = Math.floor(Math.random() * 100);
      let rnd2 = Math.floor(Math.random() * 100);
      let rnd3 = Math.floor(Math.random() * 100);
      let rnd4 = Math.floor(Math.random() * 100);
      // /

      let rnd5 = Math.floor(Math.random() * 100);
      let rnd6 = Math.floor(Math.random() * 100);
      let rnd7 = Math.floor(Math.random() * 100);
      let rnd8 = Math.floor(Math.random() * 100);
      borderBox.style.borderRadius =
        rnd1 +
        "% " +
        "" +
        rnd2 +
        "% " +
        "" +
        rnd3 +
        "% " +
        "" +
        rnd4 +
        "% " +
        " / " +
        rnd5 +
        "% " +
        rnd6 +
        "% " +
        rnd7 +
        "% " +
        rnd8 +
        "%";
      var target = document.querySelector(".br-output");
      target.innerHTML = 'border-radius: '+window.getComputedStyle(borderBox).borderRadius +';';
      
    },
    false
  );

  btnGradient.addEventListener(
    "click",
    function (e) {
      let c1 = Math.random().toString(16).slice(2, 8); 
      let c2 = Math.random().toString(16).slice(2, 8); 
      let gDirections = ["top", "left", "right", "bottom"];
      let gType = [
        "linear",
        "radial",
        "repeating-linear",
        "repeating-radial",
        "conic",
      ];
      let gd = Math.floor(Math.random() * gDirections.length);
      let gt = Math.floor(Math.random() * gType.length);
      page.setAttribute(
        "style",
        "--c-1:#" +
          c1 +
          "; --c-2:#" +
          c2 +
          "; --gradient-direction: to " +
          gDirections[gd] +
          ";" +
          " --gradient-type:" +
          gType[gt] +
          "-gradient;"
      );
      var target = document.querySelector(".bg-output");
      target.innerHTML =
        "background:linear-gradient(to " +
        gDirections[gd] +
        ", #" +
        c1 +
        ", #" +
        c2 +
        ");";
    },
    false
  );

  btnBoxShadow.addEventListener(
    "click",
    function (e) {
      let offsetX = Math.floor(Math.random() * (50 - -50 + 1)) + -50;
      let offsetY = Math.floor(Math.random() * 100);
      let blurRadius = Math.floor(Math.random() * 100);
      let color = Math.random().toString(16).slice(2, 8); 
      pageBody.setAttribute(
        "style",
        "--offsetX:" +
          offsetX +
          "px;" +
          "--offsetY:" +
          offsetY +
          "px;" +
          "--blurRadius:" +
          blurRadius +
          "px;" +
          "--color:#" +
          color
      );
      var target = document.querySelector(".bs-output");
      target.innerHTML =
        "box-shadow:" +
        offsetX +
        "px " +
        offsetY +
        "px " +
        blurRadius +
        "px #" +
        color + ';';
    },
    false
  );

  wInput.addEventListener("keyup", (e) => {
    wInput = e.target.value;
    console.log(wInput);
    borderBox.style.width = wInput + "px";
  });

  hInput.addEventListener("keyup", (e) => {
    hInput = e.target.value;
    console.log(hInput);
    borderBox.style.height = hInput + "px";
  });

  window.onload = function () {
    btnRadius.click();
    btnGradient.click();
    btnBoxShadow.click();
  };

  //clipboard copy
  function copyToClipboard(elSelector) {
    // Create an auxiliary hidden input
    var aux = document.createElement("input");

    // Get the text from the element passed into the input
    aux.setAttribute("value", document.querySelector(elSelector).innerHTML);

    // Append the aux input to the body
    document.body.appendChild(aux);

    // Highlight the content
    aux.select();

    // Execute the copy command
    document.execCommand("copy");

    // Remove the input from the body
    document.body.removeChild(aux);
  }

  brCopyBtn.addEventListener(
    "click",
    function () {
        copyToClipboard(".br-output")
        document.querySelector('.copied-popup').classList.add('active')
        setTimeout(function(){
            document.querySelector('.copied-popup').classList.remove('active')
         }, 3000);
    },
    false
  );
  bgCopyBtn.addEventListener(
    "click",
    function () {
        copyToClipboard(".bg-output")
        document.querySelector('.copied-popup').classList.add('active')
        setTimeout(function(){
            document.querySelector('.copied-popup').classList.remove('active')
         }, 3000);
    },
    false
  );
  bsCopyBtn.addEventListener(
    "click",
    function () {
        copyToClipboard(".bs-output")
        document.querySelector('.copied-popup').classList.add('active')
        setTimeout(function(){
            document.querySelector('.copied-popup').classList.remove('active')
         }, 3000);
    },
    false
  );

  //random divs
  // mainDiv = document.querySelector( '.random-br-wrapper' );
  // for (var i = 1; i <= 16; i++) {

  //   let rnd1 = Math.floor(Math.random() * 100);
  //   let rnd2 = Math.floor(Math.random() * 100);
  //   let rnd3 = Math.floor(Math.random() * 100);
  //   let rnd4 = Math.floor(Math.random() * 100);
  //   // /

  //   let rnd5 = Math.floor(Math.random() * 100);
  //   let rnd6 = Math.floor(Math.random() * 100);
  //   let rnd7 = Math.floor(Math.random() * 100);
  //   let rnd8 = Math.floor(Math.random() * 100);
  //     mainDiv.innerHTML += '<div class="col-lg-3 col-md-4 col-sm-6 col-12"><div class="random-block' + i + '"><p></p></div></ div>';
  //     document.querySelector( '.random-block' + i ).style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);
  //     document.querySelector( '.random-block' + i ).style.borderRadius =
  //     rnd1 +
  //     "% " +
  //     "" +
  //     rnd2 +
  //     "% " +
  //     "" +
  //     rnd3 +
  //     "% " +
  //     "" +
  //     rnd4 +
  //     "% " +
  //     " / " +
  //     rnd5 +
  //     "% " +
  //     rnd6 +
  //     "% " +
  //     rnd7 +
  //     "% " +
  //     rnd8 +
  //     "%";
  //     var target = document.querySelectorAll(".col-lg-3 p");
  //     target.innerHTML = 'border-radius: '+window.getComputedStyle(borderBox).borderRadius +';';
  // }
 

  document.getElementById("year").innerHTML = new Date().getFullYear();
});
