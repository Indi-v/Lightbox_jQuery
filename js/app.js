//Problem: Images link to just themselves causing a dead end.
//Solution: Create an overlay a Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>')
var $caption = $('<p></p>');
// Place Images
$overlay.append($image);
// Place caption
$overlay.append($caption);
// Add overlay
$("body").append($overlay);

$
// Capture click event on anchors/links
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  // Get child's alt atribute
  var captionText = $(this).children("img").attr("alt");
  // Update overlayt with the image clicked on the link
  $image.attr("src", imageLocation);
  // Update overlay with alt text
  $caption.text(captionText);
  // Show the overlay.
  $overlay.show()
});




// When the overlay is clicked.
$("#overlay").click(function(event){
    // Hide overlay.
  $(this).hide();
});
