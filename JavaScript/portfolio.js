document.getElementById('triggerLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the link from navigating to #
    document.getElementById('dropdownBox').classList.toggle('show');
  });