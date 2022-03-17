window.onload = check();
function changeColor() {
  var r = document.querySelector(":root");
  var rand = Math.floor(Math.random() * 361);

  const darkTheme = "dark-theme";
  r.style.setProperty("--hue-color", rand);
}
function check() {
  
  document.body.classList.add("dark-back");
  if (!sessionStorage.getItem("Authorised")) {
    alert("Unauthorised! Redirecting to the Portfolio page!");
    // https://arjun-001.github.io/Portfolio/ http://127.0.0.1:8080/
    window.location.replace("https://arjun-001.github.io/Portfolio/");
  } else {
    sessionStorage.clear();
    changeColor();
  }
}
