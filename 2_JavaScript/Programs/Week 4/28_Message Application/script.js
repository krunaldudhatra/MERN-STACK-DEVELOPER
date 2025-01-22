/*Problem statement
Suppose you are working on a project to develop a messaging application.




Objective:


1- Create a class called Message, which has the following instance variables:

- sender
- receiver
- messageContent
2- To keep track of the total number of messages sent and received, create a static variable called "totalMessages".

3- Create a static variable called status to show the status of the User, which should initially be set to false.

4- The Message has the following static methods:-

a- recordMessage - To keep track of total number of messages sent. It should be able to increment the totalMessage every time it is called. This method should be called every time a new message is sent using the `Message` class.

b- changeStatus - It should be able to change the static property status to true or false depending on its value and console a message representing the status as  " the status has been changed to online/offline" depending on the value of status.
5- The Class should have the following public methods:-

a- sendMessage - It should console using the sender, receiver and messagecontent of the Object in the format :

b- "The message <messageContent> has been sent from <sender> to <receiver>"

c- It should utilize the recordMessage to increment the totalMessage.

d- displayDetail - It should be able to display the sender, Receiver, message content, Status, and total message in the form of key Value pair as shown in the expected output.


Note:
The name and console output should be exactly as mentioned in the Problem Statement. Any change will fail in test cases.


Input:
Message.changeStatus();
const myMessage = new Message("John", "Jane", "Hello");
myMessage.sendMessage();
myMessage.displayDetails();


Output:
The status has been changed to online
The message 'Hello' has been sent from 'John' to 
'Jane'
Sender: John
Receiver: Jane
Message: Hello
Status: online
Total Messages: 1
 */
function main() {
  class Message {
    static status = false;
    static totalMessages = 0;

    constructor(sender, receiver, messageContent) {
      this.sender = sender;
      this.receiver = receiver;
      this.messageContent = messageContent;
    }

    static changeStatus() {
      Message.status = !Message.status;
      console.log(
        `The status has been changed to ${
          Message.status ? "online" : "offline"
        }`
      );
    }

    static recordMessage() {
      Message.totalMessages += 1;
    }

    sendMessage() {
      console.log(
        `The message '${this.messageContent}' has been sent from '${this.sender}' to '${this.receiver}'`
      );
      Message.recordMessage();
    }

    displayDetails() {
      console.log(`Sender: ${this.sender}`);
      console.log(`Receiver: ${this.receiver}`);
      console.log(`Message: ${this.messageContent}`);
      console.log(`Status: ${Message.status ? "online" : "offline"}`);
      console.log(`Total Messages: ${Message.totalMessages}`);
    }
  }

  return Message;
}
