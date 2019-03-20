const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle email form POsT requests
app.post('/send', (req, res) => {
    console.log(req.body);
    const formInfo = req.body;
    let messageHTML = '';

    if (formInfo.type === 'contact') {
        messageHTML = `
            <h1>You have a new contact request</h1>
            <ul>
                <li>First Name: ${formInfo.firstName}</li>
                <li>Last Name: ${formInfo.lastName}</li>
                <li>E-mail: ${formInfo.email}</li>
                <li>Phone: ${formInfo.phone}</li>
                <li>Zipcode: ${formInfo.zipcode}</li>
                <li>Service Type: ${formInfo.serviceType}</li>
            </ul>
            <p>
            Customer Notes: ${formInfo.needs}
            </p>
        `;
    } else {
        messageHTML = `
            <h1>You have a new Referral Rewards request</h1>
            <h2>Requestor's Info</h2>
            <ul>
                <li>Requestor's First Name: ${formInfo.firstName}</li>
                <li>Requestor's Last Name: ${formInfo.lastName}</li>
                <li>Requestor's E-mail: ${formInfo.email}</li>
            </ul>
            <h2>Info of their referral</h2>
            <ul>
                <li>Referral's First Name: ${formInfo.refFirstName}</li>
                <li>Referral's Last Name: ${formInfo.refLastName}</li>
                <li>Referral's E-mail: ${formInfo.refEmail}</li>
            </ul>
        `;
    }

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true, // true for 465, false for other ports
        auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: formInfo.email, // sender address
        to: process.env.MAIL_RECIPIENT_ADDRESS, // list of receivers
        subject: `Pro Tree | ${formInfo.firstName} ${formInfo.lastName}`, // Subject line
        html: messageHTML // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect(200, '/success');
        }
    });

});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);