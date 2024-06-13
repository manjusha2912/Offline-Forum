const express = require('express');
const app = express();
app.use(express.json());

let userPosts = [
  { title: 'My First Post', content: 'Content of my first post.' },
  { title: 'Another Post', content: 'Content of another post.' }
];

app.post('/publish-post', (req, res) => {
  const newPost = req.body;
  userPosts.push(newPost);
  res.json({ success: true });
});

app.get('/user-posts', (req, res) => {
  res.json(userPosts);
});

app.get('/recent-activities', (req, res) => {
  const recentActivities = [
    { description: 'Commented on a post.', date: '2024-06-12' },
    { description: 'Liked a post.', date: '2024-06-11' }
  ];
  res.json(recentActivities);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
