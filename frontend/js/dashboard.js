// Redirect to login if token not found
if (!localStorage.getItem('token')) {
  window.location.href = 'index.html';
}

// Logout function
function logout() {
  localStorage.removeItem('token');
  window.location.href = 'index.html';
}

// Attach logout event listener
document.getElementById('logoutBtn')?.addEventListener('click', logout);

// Render items onto dashboard
function renderItems(items) {
  const lostItemsDiv = document.getElementById('lostItems');
  const foundItemsDiv = document.getElementById('foundItems');

  const lostItems = items.filter(item => item.type === 'lost');
  const foundItems = items.filter(item => item.type === 'found');

  lostItemsDiv.innerHTML = lostItems.map(itemCard).join('');
  foundItemsDiv.innerHTML = foundItems.map(itemCard).join('');
}

// Template for displaying each item
function itemCard(item) {
  return `
    <div class="card">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <p><b>Location:</b> ${item.location}</p>
      <p><b>Date:</b> ${item.date}</p>
      <p><b>Contact:</b> ${item.contact}</p>
    </div>
  `;
}

// Get items from localStorage and display
const allItems = JSON.parse(localStorage.getItem('items')) || [];
renderItems(allItems);

// Filter items based on search input
document.getElementById('searchInput')?.addEventListener('input', (e) => {
  const search = e.target.value.toLowerCase();
  const filtered = allItems.filter(item =>
    item.title.toLowerCase().includes(search) ||
    item.description.toLowerCase().includes(search) ||
    item.location.toLowerCase().includes(search)
  );
  renderItems(filtered);
});