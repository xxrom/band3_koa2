import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

// heroku keep await => https://uptimerobot.com/dashboard#781986023

const nodemailer = require('nodemailer');

const router = new Router();

// async..await is not allowed in global scope, must use a wrapper
async function main(mailObject) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //   let account = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      //   user: account.user, // generated ethereal user
      //   pass: account.pass, // generated ethereal password
      user: 'xpom66nikita004@mail.ru', // generated ethereal user
      pass: '1qazxsw2WSXZAQ!QAZXSW@', // generated ethereal password
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Fred Foo 👻" <xpom66nikita004@mail.ru>', // sender address
    to: 'xpom5566@mail.ru', // list of receivers
    subject: `Hello ✔ ${mailObject.number}`, // Subject line
    text: `Hello world? ${mailObject.number}`, // plain text body
    html: `<b>Hello world?${JSON.stringify(mailObject)}</b>`, // html body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  console.log('Message sent: %s', info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// curl -H "Content-Type: application/json" -X POST --data '{"value": "30"}' http://localhost:3334
router.post('/', bodyParser(), async (ctx) => {
  console.log('asdfl alskdfj laskjdf test');

  const { body } = ctx.request;
  //   sendEmail();
  await main(body).catch(console.error);

  console.log('request', body);

  const data = { allGood: true };
  ctx.status = 200;
  ctx.body = JSON.stringify({ data });
});

export default router;
