function pageScroll1() {
    	window.scrollBy(0,720);
    }
  function pageScroll2() {
        	window.scrollBy(0,1540);
        }
function myFunction(x) {
    if (x.matches) { // If media query matches
        alert("Use a larger device for a better view of the website");
      }
    }

    var x = window.matchMedia("(max-width: 600px)")
    myFunction(x)
    x.addListener(myFunction)
