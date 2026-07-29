const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});



// JavaScript for Modal Handling

  function openModal(title, content) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalContent').innerText = content;
    document.getElementById('articleModal').classList.remove('hidden');
  }

  function closeModal() {
    document.getElementById('articleModal').classList.add('hidden');
  }

  // Close modal when clicking outside the box
  window.onclick = function(event) {
    const modal = document.getElementById('articleModal');
    if (event.target === modal) {
      closeModal();
    }
  }
