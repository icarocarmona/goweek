const express = require('express');

const routers = express.Router();

const TweetController = require('../src/controller/TweetController');
const LikeController = require('../src/controller/LikeController');

routers.get('/tweets', TweetController.index);
routers.post('/tweets', TweetController.store);

routers.post('/likes/:id', LikeController.store);

module.exports = routers;