window.addEventListener('DOMContentLoaded', function() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Define the path to the footer HTML file
    var footerPath = 'footer.html';
  
    // Fetch the footer HTML file
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Insert the footer HTML into the placeholder div
          document.getElementById('footer-placeholder').innerHTML = xhr.responseText;
        } else {
          console.error('Error: ' + xhr.status);
        }
      }
    };
  
    // Send the XMLHttpRequest
    xhr.open('GET', footerPath, true);
    xhr.send();
  });
  