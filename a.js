window.onload = (ev) => {
  let val = 1;
  function dosome_thing(ev) {
    if (val == 1) document.getElementById("message").innerHTML = "Hello";
    else document.getElementById("message").innerHTML = "World!";
    console.log("button press");
    val = 1 - val;
  }

  document.getElementById("button").onclick = dosome_thing;

  console.log("loaded a.js");
};
