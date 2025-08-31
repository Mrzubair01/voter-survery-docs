document.querySelectorAll('pre .copy').forEach(btn => {
  btn.addEventListener('click', () => {
    const code = btn.nextElementSibling.innerText;
    navigator.clipboard.writeText(code).then(() => {
      const original = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => (btn.textContent = original), 1200);
    });
  });
});

// Theme toggle (light/dark)
const key = 'voter-docs-theme';
const saved = localStorage.getItem(key);
if (saved === 'light') document.documentElement.style.colorScheme = 'light';
if (saved === 'dark') document.documentElement.style.colorScheme = 'dark';

document.getElementById('toggleTheme').addEventListener('click', () => {
  const current = getComputedStyle(document.documentElement).colorScheme;
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.style.colorScheme = next;
  localStorage.setItem(key, next);
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();