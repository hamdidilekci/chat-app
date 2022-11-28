import { useEffect } from 'react';

import { useChat } from '../context/ChatContext';
import { init, subscribeChat, subscribeInitialMessages } from '../socketApi';
import ChatForm from './ChatForm';
import ChatList from './ChatList';

function Container() {
    const { setMessages } = useChat();

    useEffect(() => {
        init();

        subscribeInitialMessages( messages => setMessages(messages) )

        subscribeChat((message) => {
            setMessages((prevState) => [...prevState, { message }]);
        });
    }, [setMessages]);

    return (
        <div className='App'>
            <ChatList />
            <ChatForm />
        </div>
    );
}

export default Container;