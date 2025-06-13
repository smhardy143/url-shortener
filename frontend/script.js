async function shortenUrl() {
  const longUrl = document.getElementById('longUrl').value;
  const res = await fetch('http://localhost:5000/api/shorten', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ longUrl })
  });
  const data = await res.json();
  document.getElementById('result').innerHTML = `
    Short URL: <a href="http://localhost:5000/api/${data.short}" target="_blank">
    http://localhost:5000/api/${data.short}
    </a>
  `;
}
