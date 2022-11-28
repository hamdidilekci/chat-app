import { useEffect } from 'react';

import { ChatProvider, useChat } from './context/ChatContext';
import { init, subscribeChat } from './socketApi';
import ChatForm from './components/ChatForm';
import ChatList from './components/ChatList';

import './App.css';

function App() {
  const { setMessages } = useChat();

  useEffect(() => {
    init();

    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, {message}]);
    });
  }, []);

  return (
    <ChatProvider>
      <div className='App'>
        <ChatList />
        <ChatForm />
      </div>
    </ChatProvider>
  );
}

export default App;
