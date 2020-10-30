const express = require('express');
const urlRouter = express.Router();

const controller = require('../controllers/url.controller');

urlRouter.get('/:slug',
  controller.getUrl);

urlRouter.post('/new',
  controller.postUrl);

module.exports = urlRouter;