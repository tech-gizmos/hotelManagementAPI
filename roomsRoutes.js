const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { getDB } = require('../db/db');

router.post('/', async (req, res) => {
    // POST logic for rooms
});

router.get('/', async (req, res) => {
    // GET logic for rooms
});

router.patch('/:roomId', async (req, res) => {
    // PATCH logic for rooms
});

router.delete('/:roomId', async (req, res) => {
    // DELETE logic for rooms
});

router.get('/:roomId', async (req, res) => {
    // GET logic for a single room
});

module.exports = router;
