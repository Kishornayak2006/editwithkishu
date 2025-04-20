// Show/Hide the services when the "Get Started" button is clicked
document.getElementById("getStartedBtn").addEventListener("click", function() {
  var servicesSection = document.getElementById("services");
  if (servicesSection.style.display === "none" || servicesSection.style.display === "") {
    servicesSection.style.display = "block";
  } else {
    servicesSection.style.display = "none";
  }
});

// Show the file upload form when a service button is clicked
var serviceButtons = document.querySelectorAll(".serviceBtn");
serviceButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var serviceId = button.getAttribute("data-service");
    var fileUploadSection = document.getElementById(serviceId);
    
    // Toggle visibility of the file upload section for the selected service
    if (fileUploadSection.style.display === "none" || fileUploadSection.style.display === "") {
      fileUploadSection.style.display = "block";
    } else {
      fileUploadSection.style.display = "none";
    }
  });
});
