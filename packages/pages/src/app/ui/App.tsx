import './App.css';

import { memo } from 'react';

import { COMPLETE } from '../dova/chatbox/loadingStatus';
import useWebChatFramework from '../dova/chatbox/useWebChatFramework';
import WebChat from '../dova/webchat/WebChat';

export default memo(function App() {
  const { loadingStatus, WebChatFramework } = useWebChatFramework({ timeout: 60_000 });

  return (
    <div className="app">
      {loadingStatus === COMPLETE && <WebChat apiSession={{}} WebChatFramework={WebChatFramework} />}
    </div>
  );
});
