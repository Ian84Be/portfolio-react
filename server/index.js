require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5000;
const helmet = require('helmet');
const cors = require('cors');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

server.get("*", (req,res) => {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

server.post('/api/contact', async (req,res) => {
	const {name, email, message} = req.body;
	const msg = {
		to: 'ian84be@gmail.com',
		from: email,
		subject: `PORTFOLIO CONTACT FORM: ${name}`,
		text: `${name}: ${message}`,
		html: `${name}: ${message}`,
	};
	console.log({msg});
	try {
		await sgMail.send(msg);
		res.status(200).json({message: 'Message Sent! Thanks for writing!'});
	} catch(err) {
		res.status(500).json({err, message:'Could not send email ;('})
	}
	
})

server.listen(PORT, () => console.log(`listening on port ${PORT}`));
