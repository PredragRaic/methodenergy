document.addEventListener('DOMContentLoaded', function() {
    console.log('Method energy init...');
});

// PArtners section
// DOM content loaded event listener
document.addEventListener('DOMContentLoaded', function() {

    function showHideLogos() {
        var partnersSections = document.querySelectorAll('section.partners-section');
        if (partnersSections) {
            partnersSections.forEach(function (partnersSection) {
                var sliderContent = partnersSection.querySelector('.slider-content');
                if (sliderContent) {
                    var logos = partnersSection.querySelectorAll('.partner'),
                        contentWidth = sliderContent.offsetWidth,
                        elementWidth = logos[0].offsetWidth,
                        displayed = Math.ceil(contentWidth/elementWidth),
                        all = logos.length - displayed;

                    if (logos) {
                        var count = parseInt(sliderContent.getAttribute('data-count'));
                            count = ((count + 1) > all) ? 0 : (count + 1);
                        sliderContent.setAttribute('data-count', count);

                        // Move the content
                        var translateVal = count * elementWidth;
                        sliderContent.style.transform = 'translateX(-'+translateVal+'px)';
                    }
                }
            });
        }
    }

    // Auto slider
    setInterval(showHideLogos, 2400);
});
// Burger button and x toggle---------------------------------------
function myFunction(x) {
    x.classList.toggle("change");
}
// ______________________________________________________________

// dropping menu show and hide about and service------------------------
    var coll = document.getElementsByClassName("collapsible");
var i;


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
}

// ____________________________________________________________________

function myFunction1() {
    document.getElementById("search-block-display").style.display = "none";
}
function searchDisplayOn() {
    document.getElementById("search-block-display").style.display = "flex";
}
function searchDisplayOn1() {
    document.getElementById("search-block-display").style.display = "flex";
}

   
