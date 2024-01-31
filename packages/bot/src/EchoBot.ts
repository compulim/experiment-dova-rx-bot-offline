import { ActivityHandler, type ConversationState, type UserState } from 'botbuilder';

type BotInit = {
  conversationState?: ConversationState;
  userState?: UserState;
};

export default class EchoBot extends ActivityHandler {
  constructor({ conversationState, userState }: BotInit = {}) {
    super();

    // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
    this.onMessage(async (context, next) => {
      if (context.activity.type === 'message') {
        await context.sendActivities([
          {
            type: 'message',
            textFormat: 'markdown',
            locale: 'en-US',
            text: 'You are now in the Prescriptions Bot, where you can view, refill, and track your active VA prescriptions.',
            inputHint: 'acceptingInput',
            attachments: [],
            entities: []
          },
          {
            type: 'message',
            textFormat: 'markdown',
            locale: 'en-US',
            text: '**What you need to know about this prescriptions list:**\n\nThis list doesn\'t include all your medications. The list includes only prescriptions that a VA pharmacy filled and that have a current status of "active." The list doesn\'t include prescriptions such as those that have expired or medications your VA provider documented in your medical record. To review your full medications list, go to [My HealtheVet](https://www.myhealth.va.gov/mhv-portal-web/home).',
            inputHint: 'acceptingInput',
            attachments: [],
            entities: []
          },
          {
            type: 'event',
            locale: 'en-US',
            channelData: {
              deliveryMode: 'bridged'
            },
            value: 'RX_Skill',
            name: 'Skill_Entry'
          },
          {
            type: 'message',
            locale: 'en-US',
            text: 'You can request refills, list active prescriptions, or track shipments. Which would you like?',
            speak:
              '<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US"><voice name="en-US-JennyNeural">You can request refills, list active prescriptions, or track shipments. Which would you like?</voice></speak>',
            inputHint: 'expectingInput',
            suggestedActions: {
              actions: [
                {
                  type: 'imBack',
                  title: 'List Prescriptions',
                  value: 'List Prescriptions'
                },
                {
                  type: 'imBack',
                  title: 'Request Refills',
                  value: 'Request Refills'
                },
                {
                  type: 'imBack',
                  title: 'Track Shipments',
                  value: 'Track Shipments'
                },
                {
                  type: 'imBack',
                  title: 'Done',
                  value: 'Done'
                }
              ],
              to: []
            },
            channelData: {
              deliveryMode: 'bridged'
            }
          }
        ]);
      }

      // By calling next() you ensure that the next BotHandler is run.
      await next();

      await conversationState?.saveChanges(context);
      await userState?.saveChanges(context);
    });

    this.onMembersAdded(async (context, next) => {
      const membersAdded = context.activity.membersAdded || [];

      for (const { id } of membersAdded) {
        if (id !== context.activity.recipient.id) {
          await context.sendActivities([
            {
              type: 'message',
              textFormat: 'markdown',
              locale: 'en-US',
              text: 'Welcome, Zero, to the VA chatbot.',
              inputHint: 'acceptingInput',
              attachments: [],
              entities: []
            },
            {
              type: 'message',
              textFormat: 'markdown',
              locale: 'en-US',
              text: "This bot can help you find general information on VA.gov. To get started, try entering questions or requests like:\n\n*   What's the PACT Act?\n*   What is my claim status?\n*   Where is my decision letter?\n*   Is there an update on my appeal?\n*   Tell me about my prescriptions.",
              inputHint: 'acceptingInput',
              attachments: [],
              entities: []
            }
          ]);
        }
      }

      // By calling next() you ensure that the next BotHandler is run.
      await next();
    });
  }
}
