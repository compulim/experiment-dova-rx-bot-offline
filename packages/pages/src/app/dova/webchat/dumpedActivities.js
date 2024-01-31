export default [
  {
    type: 'event',
    id: '9VUcmqEJBbRLnW2RiDbyWZ-us|0000000',
    timestamp: '2024-01-25T20:29:42.318371Z',
    localTimestamp: '2024-01-25T15:29:42.234-05:00',
    localTimezone: 'America/New_York',
    serviceUrl: 'https://northamerica.directline.botframework.com/',
    channelId: 'directline',
    from: {
      id: 'r_809wamnnc9',
      name: '',
      role: 'user'
    },
    conversation: {
      id: '9VUcmqEJBbRLnW2RiDbyWZ-us'
    },
    locale: 'en-US',
    entities: [
      {
        type: 'ClientCapabilities',
        requiresBotState: true,
        supportsListening: true,
        supportsTts: true
      }
    ],
    channelData: {
      postBack: true,
      clientActivityID: 'kcipmn3tri'
    },
    value: {
      apiURL: 'https://81e7-104-244-243-17.ngrok-free.app/',
      baseURL: 'http://localhost:3001',
      userFirstName: 'Zero',
      userUuid: '29e145e6-5302-4bf0-b9d3-c1f98b1076f5',
      currentConversationId: '9VUcmqEJBbRLnW2RiDbyWZ-us',
      isMobile: false
    },
    name: 'startConversation'
  },
  {
    type: 'event',
    id: '9VUcmqEJBbRLnW2RiDbyWZ-us|0000001',
    timestamp: '2024-01-25T20:29:42.318371Z',
    localTimestamp: '2024-01-25T15:29:42.244-05:00',
    localTimezone: 'America/New_York',
    serviceUrl: 'https://northamerica.directline.botframework.com/',
    channelId: 'directline',
    from: {
      id: 'r_809wamnnc9',
      name: '',
      role: 'user'
    },
    conversation: {
      id: '9VUcmqEJBbRLnW2RiDbyWZ-us'
    },
    locale: 'en-US',
    channelData: {
      clientActivityID: 'annw5dec71r'
    },
    value: {
      language: 'en-US'
    },
    name: 'webchat/join'
  },
  {
    type: 'message',
    id: '9VUcmqEJBbRLnW2RiDbyWZ-us|0000002',
    timestamp: '2024-01-25T20:29:42.9111511Z',
    channelId: 'directline',
    from: {
      id: '6df55025-ca5e-4f0d-84ea-2d1242ec53b0',
      name: 'va-bot',
      role: 'bot'
    },
    conversation: {
      id: '9VUcmqEJBbRLnW2RiDbyWZ-us'
    },
    textFormat: 'markdown',
    locale: 'en-US',
    text: 'Welcome, Zero, to the VA chatbot.',
    inputHint: 'acceptingInput',
    attachments: [],
    entities: [],
    replyToId: '9VUcmqEJBbRLnW2RiDbyWZ-us|0000000'
  },
  {
    type: 'message',
    id: '9VUcmqEJBbRLnW2RiDbyWZ-us|0000003',
    timestamp: '2024-01-25T20:29:42.9663925Z',
    channelId: 'directline',
    from: {
      id: '6df55025-ca5e-4f0d-84ea-2d1242ec53b0',
      name: 'va-bot',
      role: 'bot'
    },
    conversation: {
      id: '9VUcmqEJBbRLnW2RiDbyWZ-us'
    },
    textFormat: 'markdown',
    locale: 'en-US',
    text: "This bot can help you find general information on VA.gov. To get started, try entering questions or requests like:\n\n*   What's the PACT Act?\n*   What is my claim status?\n*   Where is my decision letter?\n*   Is there an update on my appeal?\n*   Tell me about my prescriptions.",
    inputHint: 'acceptingInput',
    attachments: [],
    entities: [],
    replyToId: '9VUcmqEJBbRLnW2RiDbyWZ-us|0000000'
  },
  {
    type: 'message',
    id: '9VUcmqEJBbRLnW2RiDbyWZ-us|0000004',
    timestamp: '2024-01-25T20:30:11.3448458Z',
    localTimestamp: '2024-01-25T15:30:11.248-05:00',
    localTimezone: 'America/New_York',
    serviceUrl: 'https://northamerica.directline.botframework.com/',
    channelId: 'directline',
    from: {
      id: 'r_809wamnnc9',
      name: '',
      role: 'user'
    },
    conversation: {
      id: '9VUcmqEJBbRLnW2RiDbyWZ-us'
    },
    recipient: {
      id: '6df55025-ca5e-4f0d-84ea-2d1242ec53b0@Fsph-KCVBgo',
      name: 'va-bot'
    },
    textFormat: 'plain',
    locale: 'en-US',
    text: 'prescriptions',
    attachments: [],
    channelData: {
      clientActivityID: 'hhtzal4mlu'
    }
  },
  {
    type: 'message',
    id: '9VUcmqEJBbRLnW2RiDbyWZ-us|0000005',
    timestamp: '2024-01-25T20:30:13.7970242Z',
    channelId: 'directline',
    from: {
      id: '6df55025-ca5e-4f0d-84ea-2d1242ec53b0',
      name: 'va-bot',
      role: 'bot'
    },
    conversation: {
      id: '9VUcmqEJBbRLnW2RiDbyWZ-us'
    },
    textFormat: 'markdown',
    locale: 'en-US',
    text: 'You are now in the Prescriptions Bot, where you can view, refill, and track your active VA prescriptions.',
    inputHint: 'acceptingInput',
    attachments: [],
    entities: [],
    replyToId: '9VUcmqEJBbRLnW2RiDbyWZ-us|0000004'
  },
  {
    type: 'message',
    id: '9VUcmqEJBbRLnW2RiDbyWZ-us|0000006',
    timestamp: '2024-01-25T20:30:13.9751029Z',
    channelId: 'directline',
    from: {
      id: '6df55025-ca5e-4f0d-84ea-2d1242ec53b0',
      name: 'va-bot',
      role: 'bot'
    },
    conversation: {
      id: '9VUcmqEJBbRLnW2RiDbyWZ-us'
    },
    textFormat: 'markdown',
    locale: 'en-US',
    text: '**What you need to know about this prescriptions list:**\n\nThis list doesn\'t include all your medications. The list includes only prescriptions that a VA pharmacy filled and that have a current status of "active." The list doesn\'t include prescriptions such as those that have expired or medications your VA provider documented in your medical record. To review your full medications list, go to [My HealtheVet](https://www.myhealth.va.gov/mhv-portal-web/home).',
    inputHint: 'acceptingInput',
    attachments: [],
    entities: [],
    replyToId: '9VUcmqEJBbRLnW2RiDbyWZ-us|0000004'
  },
  {
    type: 'event',
    id: '9VUcmqEJBbRLnW2RiDbyWZ-us|0000007',
    timestamp: '2024-01-25T20:30:22.9044054Z',
    channelId: 'directline',
    from: {
      id: '6df55025-ca5e-4f0d-84ea-2d1242ec53b0',
      name: 'va-bot',
      role: 'bot'
    },
    conversation: {
      id: '9VUcmqEJBbRLnW2RiDbyWZ-us'
    },
    locale: 'en-US',
    channelData: {
      deliveryMode: 'bridged'
    },
    replyToId: '9VUcmqEJBbRLnW2RiDbyWZ-us|0000004',
    value: 'RX_Skill',
    name: 'Skill_Entry'
  },
  {
    type: 'message',
    id: '9VUcmqEJBbRLnW2RiDbyWZ-us|0000008',
    timestamp: '2024-01-25T20:30:25.3145189Z',
    channelId: 'directline',
    from: {
      id: '6df55025-ca5e-4f0d-84ea-2d1242ec53b0',
      name: 'va-bot',
      role: 'bot'
    },
    conversation: {
      id: '9VUcmqEJBbRLnW2RiDbyWZ-us'
    },
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
      ]
    },
    channelData: {
      deliveryMode: 'bridged'
    },
    replyToId: '9VUcmqEJBbRLnW2RiDbyWZ-us|0000004'
  }
];
