function showSection(targetId) {
  // Hide all sections and remove active class
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });

  // Show the targeted section and add active class
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // Update active state in sidebar
  document.querySelectorAll('.email-filter-folders li').forEach(item => {
    item.classList.remove('active');
  });
  const activeItem = document.querySelector(`[data-target="${targetId}"]`);
  if (activeItem) {
    activeItem.classList.add('active');
  }
}

// Initial setup - show the desired section on page load
const initialSection = 'company'; // Ganti dengan 'system' jika ingin menampilkan section 'system' pada awal
showSection(initialSection);

// Contoh penggunaan
document.getElementById('showCompany').addEventListener('click', () => showSection('company'));
document.getElementById('showSystem').addEventListener('click', () => showSection('system'));
