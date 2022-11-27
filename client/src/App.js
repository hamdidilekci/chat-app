import { useEffect } from 'react';

import { ChatProvider } from './context/ChatContext';
import { init } from './socketApi';
import ChatForm from './components/ChatForm';
import ChatList from './components/ChatList';

import './App.css';

function App() {

  useEffect(() => {

    init();

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
