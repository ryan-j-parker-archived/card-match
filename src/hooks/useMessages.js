import { useState, useEffect } from 'react';
import { fetchMessages } from '../services/client';

function useMessages() {

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadMessages = async () => {
      setLoading(true);
      try {
        const data = await fetchMessages();
        setMessages(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    loadMessages();
  }, []);

  return { messages, setMessages, error, loading };
}

export default useMessages;