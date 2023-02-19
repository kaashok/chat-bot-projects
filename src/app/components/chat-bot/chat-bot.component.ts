import { Component, OnInit } from '@angular/core';
import { MessageID } from '../../core/enum/message.enum';
import { MessagesData, UserMessage } from '../../core/dbo/message.dbo';
import { ChatBotService } from "../../services/chat-bot.service"

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {

  chatbotName: string = "Bot";
  messageData: MessagesData[] = [];
  showTextBox: boolean = false;
  emailId: string = "test@test.com";
  constructor(private chatbotService: ChatBotService) { }

  ngOnInit(): void {
    this.loadDefaultBotMessage();
  }

  loadDefaultBotMessage() {
    this.messageData = this.chatbotService.getDefaultChatBotMessage();
  }

  getCurrentTime() {
    return new Date();
  }

  userOptionButtonClick(messageData: MessagesData, userMsg: UserMessage) {
    //Clear the previous Message Options
    messageData.options = [];

    this.messageData.push({
      message: userMsg.message,
      isChatbot: false,
      dateTime: this.getCurrentTime()
    });

    this.messageData.push(...this.chatbotService.getChatbotMessage(userMsg.messageId));

    this.showTextBox = false;
    if (userMsg.messageId === MessageID.Component1Subscribe || userMsg.messageId === MessageID.Component2Subscribe
      || userMsg.messageId === MessageID.Component3Subscribe || userMsg.messageId === MessageID.Component1Unsubscribe ||
      userMsg.messageId === MessageID.Component2Unsubscribe || userMsg.messageId === MessageID.Component3Unsubscribe) {
      this.showTextBox = true;
    }
  }

  emailClick() {
    this.showTextBox = false;
    this.messageData.push(this.chatbotService.getThankYouMessage()); 
    this.messageData.push(this.chatbotService.FirstMessage());   
  }

}
