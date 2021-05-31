function load() {
    document.getElementById("formInput").style.display="none";
    document.getElementById("Answer").style.display="block";
    document.getElementById("Answer").style.fontSize="140%";
    let Website = document.getElementById("url_input").value;
    document.getElementById("Website").innerText=Website;
    if(url != "") {
      compose_url();
      setTimeout(function(){ window.location.replace(url); }, 2000);
    }
    else {
      document.getElementById("Answer").innerText="Error, Please provide clean url (BAD_URL)"
      alert("Error, Please provide clean url (BAD_URL)")
    }
  function compose_url() {
    url = "http://" + Website;
  }
}
