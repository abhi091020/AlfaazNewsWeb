// JavaScript to handle search functionality
document.getElementById('search-input').addEventListener('input', function() {
  const filter = this.value.toUpperCase();
  const listItems = document.querySelectorAll('#directory ul li');

  listItems.forEach(function(item) {
    const text = item.textContent || item.innerText;
    if (text.toUpperCase().indexOf(filter) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

console.log("Industry Directory page loaded.");
