// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';

const Solution = () => {
  // Write your code here
  const inter = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  inter.question("please enter your mail ",(emai)=>{
    const trans = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "codingninjas2k16@gmail.com",
        pass: "slwvvlczduktvhdj",
      },
    });
    const option = {
      from: "codingninjas2k16@gmail.com",
      to:  emai,
      subject: "Coding Ninjas",
      text: "The world has enough coders; be a coding ninja!",
    };
    trans.sendMail(option,(err,info)=>{
            if(err)
            {
              console.log(err);
            }
            else{
              console.log(`Success: Email sent to ${emai}`);
            }
    });
  })
  };

export default Solution;
