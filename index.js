const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('');
const msg = {
  to: 'Edmundcheahhockseng78@gmail.com',
  from: 'handsomeboy@gmail.com',
  subject: 'This is a test message',
  text: 'Hello world whats up ?',
  html: '<strong>Happy new year!!</strong>',
};
(async () => {
  try {
    await sgMail.sendMultiple(msg);
    console.log('message has been sent successfully !');
  } catch (err) {
    console.error(err.toString());
  }
})();