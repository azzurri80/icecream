$(document).ready(function() {
  var flavors = ["Chocolate", "Peanut Butter", "Cookie Dough", "Marionberry", "Mint Chip", "Rocky Road", "Cookies and Cream"];

  flavors.forEach(function(flavor) {
    $("ul").append("<li>" + flavor + "</li>");
  });
});
