import { Injectable } from '@angular/core';
import { MessagesData, UserMessage } from '../core/dbo/message.dbo';
import { MessageID } from '../core/enum/message.enum';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  constructor() {

  }

  public getDefaultChatBotMessage(): MessagesData[] {
    return [
      {
        message: "Hi, I am <Project Name> bot, your virtual assistant",
        isChatbot: true,
        dateTime: this.getCurrentTime()
      },
      this.FirstMessage()
    ]
  }

  public getChatbotMessage(option: number): MessagesData[] {
    let messageData: MessagesData = {
      isChatbot: true,
      message: "",
      dateTime: this.getCurrentTime()
    };
    let addThankYouMessage: Boolean = false;

    if (option === MessageID.ComponentsDetails) {
      messageData.message = "Please select one of the components listed below to learn more about it.";
      messageData.options = this.getComponentsDetailsOptions();
    } else if (option === MessageID.ComponentsReleaseDetails) {
      messageData.message = "Please select one of the components listed below to know the released version details.";
      messageData.options = this.getComponentsReleaseDetailsOptions();
    } else if (option === MessageID.SubscribeReleaseMail) {
      messageData.message = "Please select one of the components listed below to Subscribe";
      messageData.options = this.getComponentsSubscribeOptions();
    } else if (option === MessageID.UnsubscribeReleaseMail) {
      messageData.message = "Please select one of the components listed below to Unsubscribe";
      messageData.options = this.getComponentsUnsubscribeOptions();
    } else if (option === MessageID.Component1Details) {
      messageData.message = "Component 1";
      addThankYouMessage = true;
    } else if (option === MessageID.Component2Details) {
      messageData.message = "Component 2";
      addThankYouMessage = true;
    } else if (option === MessageID.Component3ComponentDetails) {
      messageData.message = "Component 3";
      addThankYouMessage = true;
    } else if (option === MessageID.Component1ComponentReleaseDetails) {
      messageData.message = "Component 1 V1.0.0 Released on 01-Jan-23";
      addThankYouMessage = true;
    } else if (option === MessageID.Component2ComponentReleaseDetails) {
      messageData.message = "Component 2 V1.0.0 Released on 01-Jan-23";
      addThankYouMessage = true;
    } else if (option === MessageID.Component3ComponentReleaseDetails) {
      messageData.message = "Component 3 V1.0.0 Released on 01-Jan-23";
      addThankYouMessage = true;
    } else if (option === MessageID.Component1Subscribe || option === MessageID.Component2Subscribe || option === MessageID.Component3Subscribe) {
      messageData.message = "Please enter your emailId to Subscribe";
    } else if (option === MessageID.Component1Unsubscribe || option === MessageID.Component2Unsubscribe || option === MessageID.Component3Unsubscribe) {
      messageData.message = "Please enter your emailId to Unsubscribe";
    }

    if (addThankYouMessage)
      return [messageData, this.getThankYouMessage(),this.FirstMessage()];
    else
      return [messageData];
  }

  public getThankYouMessage(): MessagesData {
    return {
      message: "Thank you.",
      isChatbot: true,
      dateTime: this.getCurrentTime()
    }
  }

  public FirstMessage(): MessagesData {
    return {
      message: "How can we help you with below options",
      isChatbot: true,
      dateTime: this.getCurrentTime(),
      options: this.getFirstUserMsgOption()
    }
  }

  private getFirstUserMsgOption(): UserMessage[] {
    return [
      {
        messageId: MessageID.ComponentsDetails,
        message: "Components Details"
      },
      {
        messageId: MessageID.ComponentsReleaseDetails,
        message: "Components Release Details"
      },
      {
        messageId: MessageID.SubscribeReleaseMail,
        message: "Subscribe Release Mail"
      },
      {
        messageId: MessageID.UnsubscribeReleaseMail,
        message: "Unsubscribe Release Mail"
      }
    ]
  }

  private getComponentsDetailsOptions(): UserMessage[] {
    return [
      {
        messageId: MessageID.Component1Details,
        message: "Component 1"
      },
      {
        messageId: MessageID.Component2Details,
        message: "Component 2"
      },
      {
        messageId: MessageID.Component3ComponentDetails,
        message: "Component 3"
      }
    ];
  }

  private getComponentsReleaseDetailsOptions(): UserMessage[] {
    return [
      {
        messageId: MessageID.Component1ComponentReleaseDetails,
        message: "Component 1"
      },
      {
        messageId: MessageID.Component2ComponentReleaseDetails,
        message: "Component 2"
      },
      {
        messageId: MessageID.Component3ComponentReleaseDetails,
        message: "Component 3"
      }
    ];
  }

  private getComponentsSubscribeOptions(): UserMessage[] {
    return [
      {
        messageId: MessageID.Component1Subscribe,
        message: "Component 1"
      },
      {
        messageId: MessageID.Component2Subscribe,
        message: "Component 2"
      },
      {
        messageId: MessageID.Component3Subscribe,
        message: "Component 3"
      }
    ];
  }

  private getComponentsUnsubscribeOptions(): UserMessage[] {
    return [
      {
        messageId: MessageID.Component1Unsubscribe,
        message: "Component1"
      },
      {
        messageId: MessageID.Component2Unsubscribe,
        message: "Component2"
      },
      {
        messageId: MessageID.Component3Unsubscribe,
        message: "Component3"
      }
    ];
  }

  private getCurrentTime() {
    return new Date();
  }
}
