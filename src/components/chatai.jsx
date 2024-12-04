import React, { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa'; // React Icons
import { AiFillMessage } from 'react-icons/ai';

const ChatAssistant = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to handle user input and call Gemini API
  const handleUserMessage = async () => {
    if (userInput.trim()) {
      // Update UI to show user message
      const newMessages = [
        ...messages,
        { text: userInput, sender: 'user' },
      ];
      setMessages(newMessages);
      setUserInput('');
      setLoading(true); // Show loading spinner

      // Call Gemini API with correct payload
      try {
        const response = await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBrZlKE1kZ1Ro0_4_vHCYwJCWCDyUsHFpc', {
          contents: [
            {
              parts: [
                {
                  text: `You are Franky Amit's Assistent and you are in his office and some customer is coming for enquiry u have to be polite and not excited be serious about that also amit is a full stack web developer who builds websites for others talk like an actual human and dont sedn big messages anyway this is the users input ${userInput}`,
                },
              ],
            },
          ],
        });

        const botReply = response.data.candidates[0]?.content?.parts[0]?.text || 'Sorry, I didn\'t understand that.';
        setMessages([
          ...newMessages,
          { text: botReply, sender: 'bot' },
        ]);
      } catch (error) {
        console.error('Error while calling Gemini API', error);
        setMessages([
          ...newMessages,
          { text: 'Error, please try again later.', sender: 'bot' },
        ]);
      }
      setLoading(false); // Hide loading spinner
    }
  };

return (
    <div className="chat-container fixed bottom-4 right-4 z-50">
        <div
            className="chat-button bg-primary p-3 rounded-full text-white cursor-pointer"
            onClick={() => document.getElementById('chat-box').classList.toggle('hidden')}
        >
            <AiFillMessage size={20} />
        </div>

        <div
            id="chat-box"
            className="chat-box hidden fixed bottom-16 right-4 bg-darkBg text-textPrimary p-6 rounded-lg w-80 md:w-96 shadow-lg"
        >
            <div className="messages overflow-y-auto max-h-80 mb-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'} mb-3`}
                    >
                        <div className="message-text">{message.text}</div>
                    </div>
                ))}
                {loading && (
                    <div className="loading-message">
                        <FaSpinner className="animate-spin text-white" size={24} />
                    </div>
                )}
            </div>

            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    className="w-full p-3 bg-gray-800 text-white rounded-md outline-none"
                    placeholder="Ask me something..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleUserMessage()}
                />
                <button
                    onClick={handleUserMessage}
                    className="send-btn bg-primary p-3 rounded-full text-white"
                >
                    <FaPaperPlane size={20} />
                </button>
            </div>
        </div>
    </div>
);
};

export default ChatAssistant;
