var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.post('/new', (req, res) => {
  const reqBody = req.body;
  const message = {
    text: reqBody.message,
    user: reqBody.user,
    added: new Date()
  }
  messages.push(message);
  res.redirect('/');
})

module.exports = router;
