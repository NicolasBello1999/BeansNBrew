window.addEventListener('DOMContentLoaded', function() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Define the path to the header HTML file
    var headerPath = 'header.html';
  
    // Fetch the header HTML file
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Insert the header HTML into the placeholder div
          document.getElementById('header-placeholder').innerHTML = xhr.responseText;
        } else {
          console.error('Error: ' + xhr.status);
        }
      }
    };
  
    // Send the XMLHttpRequest
    xhr.open('GET', headerPath, true);
    xhr.send();
  });
  