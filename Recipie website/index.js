
function myFunction1() {
    var a = document.getElementById("breakfast");
    var b  = document.getElementById("lunch");
    var c = document.getElementById("dinner");
    var d = document.getElementById("snacks");
    var e = document.getElementById("userprofiles");
        a.style.display = "block";
        b .style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e .style.display = "none";
}
function myFunction2() {
    var a = document.getElementById("breakfast");
    var b  = document.getElementById("lunch");
    var c = document.getElementById("dinner");
    var d = document.getElementById("snacks");
    var e = document.getElementById("userprofiles");
        b.style.display = "block";
        a.style.display = "none";
        c .style.display = "none";
        d.style.display = "none";
        e .style.display = "none";
    c 
    
}
function myFunction3() {
    var a = document.getElementById("breakfast");
    var b  = document.getElementById("lunch");
    var c = document.getElementById("dinner");
    var d = document.getElementById("snacks");
    var e = document.getElementById("userprofiles");
        c.style.display = "block";
        a.style.display = "none";
        b .style.display = "none";
        d.style.display = "none";
        e .style.display = "none";
 
}
function myFunction4() {
    var a = document.getElementById("breakfast");
    var b  = document.getElementById("lunch");
    var c = document.getElementById("dinner");
    var d = document.getElementById("snacks");
    var e = document.getElementById("userprofiles");
        d.style.display = "block";
        a.style.display = "none";
        b .style.display = "none";
        c.style.display = "none";
        e .style.display = "none";

}
function myFunction5() {
    var a = document.getElementById("breakfast");
    var b  = document.getElementById("lunch");
    var c = document.getElementById("dinner");
    var d = document.getElementById("snacks");
    var e = document.getElementById("userprofiles");
        e.style.display = "block";
        a.style.display = "none";
        b .style.display = "none";
        c.style.display = "none";
        d .style.display = "none";

}

function salmon(evt, recipe) {

    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
  
    document.getElementById(recipe).style.display = "block";
    evt.currentTarget.className += " active";
  
  }
  
  function search_recipes() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('recipes');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

