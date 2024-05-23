const express = require('express');
const multer = require('multer'); // Middleware for handling file uploads
const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(express.static('public')); // Serve static HTML/CSS/JS files from the 'public' directory

app.post('/upload', upload.single('image'), (req, res) => {
  // Access uploaded file and form data
  const file = req.file;
  const description = req.body.description;
  const date = req.body.date;
  const location = req.body.location;
  const people = req.body.people;

  // Save this information in your database or storage system
  // You can use a database like MongoDB or a cloud storage service

  // Respond to the client
  res.send('Upload successful');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
