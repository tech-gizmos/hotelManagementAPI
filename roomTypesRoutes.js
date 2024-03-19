const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { getDB } = require('../db/db');

router.post('/', async (req, res) => {
    // POST logic for room types
});

router.get('/', async (req, res) => {
    // GET logic for room types
});

module.exports = router;
