// Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', () => {
    const title = document.getElementById('main-title');
    title.textContent = 'You changed the title!';
    title.style.color = '#ff6f61'; // Modify CSS style
  });
  
  // Add/remove element (toggle visibility)
  document.getElementById('toggleBoxBtn').addEventListener('click', () => {
    const box = document.getElementById('box');
    box.classList.toggle('hidden');
  });