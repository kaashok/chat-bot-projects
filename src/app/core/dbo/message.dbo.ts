
export interface MessagesData {
    message: string;
    isChatbot: boolean;
    dateTime: Date;
    options?: UserMessage[];    
}

export interface UserMessage {
    messageId: number;
    message: string;
}