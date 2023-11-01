const express = require('express');
const app = express();
const port = 3301;

app.use(express.static('public'));

app.get('/generateColor', (req, res) => {
  // Generate a random color (hex code)
  const randomColor = getRandomColor();
  res.json({ color: randomColor });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
