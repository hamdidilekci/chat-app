import './App.css';
import ChatForm from './components/ChatForm';
import ChatList from './components/ChatList';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <ChatForm/>
      <ChatList/>
    </ChatProvider>
  );
}

export default App;
