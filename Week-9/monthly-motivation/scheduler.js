const cron = require('node-cron');
const nodemailer = require('nodemailer');

// Email configuration
require('dotenv').config();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


// A list of motivational quotes
const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "The purpose of our lives is to be happy. – Dalai Lama",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Get busy living or get busy dying. – Stephen King",
    "You only live once, but if you do it right, once is enough. – Mae West"
];

// Function to send a motivational quote via email
function sendEmail() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    const mailOptions = {
        from: process.env.EMAIL_USER,    
        to: process.env.EMAIL_USER,  
        subject: 'Your Monthly Motivation',
        text: `Here's your monthly motivational quote:\n\n"${quote}"`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error while sending email:', error);
        }
        console.log('Email sent: ' + info.response);
    });
}

// Schedule the task to run once a month on the 1st at 9 AM
cron.schedule('0 9 1 * *', () => {
    console.log('Sending monthly motivational email...');
    sendEmail();
});

console.log('Monthly email scheduler is running...');
