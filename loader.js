function load() {
  alert("click")
  choice = prompt("Click ? (Y/N)")
  if(choice == "Y") {
    alert("oui")
    url = document.getElementById("url_input")
    window.open(url, '_blank')
  }
  else {
    alert("non")
  }
}
