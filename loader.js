function load() {
  alert("click")
  choice = prompt("Click ? (Y/N)")
  if(choice == "Y") {
    url = document.getElementById("url_input")
    window.open(url, '_blank')
  }
  else {
    alert("non")
  }
}
