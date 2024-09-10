const express = require('express');
const router = express.Router();
const axios = require('axios');
const { RECAPTCHA_SECRET_KEY } = require('../config/recaptcha');

router.post('/register', async (req, res) => {
  try {
    const { recaptchaToken } = req.body;

    // Verify reCAPTCHA
    const recaptchaVerify = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${'6LfavDwqAAAAAN-PJcLk-UZ4lE7MUI8z89b4IKHp'}&response=${recaptchaToken}`
    );

    if (!recaptchaVerify.data.success) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed' });
    }

    // If verification successful, proceed with user registration
    // ... your existing registration logic

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;