// Response from /channels/:id/message?limit=:amt

import { Message } from '../../../common';

export interface FetchMessage {
    messages: Message[];
    hasPastMessages: boolean;
}