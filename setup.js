const fs = require('fs');
const path = require('path');

const folders = [
  'images',
  'auth',
  'orders',
  'admin',
  'backend'
];

const files = {
  'index.html': '',
  'style.css': '',
  'script.js': '',
  'auth/login.html': '',
  'auth/register.html': '',
  'orders/order.html': '',
  'orders/track.html': '',
  'admin/dashboard.html': '',
  'admin/messages.html': '',
  'backend/db.js': '',
  'backend/auth.js': '',
  'backend/orders.js': ''
};

folders.forEach(folder => {
  const dirPath = path.join(__dirname, folder);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
});

for (let [file, content] of Object.entries(files)) {
  const filePath = path.join(__dirname, file);
  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('✅ Project structure created successfully!');
