var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.post('/new', (req, res) => {
  const { messageText, messageUser } = req.body;
  console.log(messageText, messageUser);
  messages.push({ text: messageText, user: messageUser, added: new Date() });

  res.redirect('/');
});

module.exports = router;
