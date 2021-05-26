function load() {
    document.getElementById("formInput").style.display="none";
    document.getElementById("Answer").style.display="block";
    document.getElementById("Answer").style.fontSize="140%";
    let Website = document.getElementById("url_input").value;
    document.getElementById("Website").innerText=Website;
    url = "http://" + Website
    setTimeout(function(){ window.location.replace(url); }, 2000);
}
