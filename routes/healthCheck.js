const express = require('express');

const healthController = require('./../controllers/healthCheck');

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ status: "success", message: "Server is healthy" });
});

module.exports = router;