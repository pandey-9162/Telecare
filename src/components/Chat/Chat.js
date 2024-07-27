import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Hang tight! We're brewing up your answer. It’ll be ready in just a moment");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.REACT_APP_API_KEY}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      // console.error("Error generating answer:", error);
      setAnswer("Failed to load the answer. Please try again later.");
    } finally {
      setGeneratingAnswer(false);
    }
  }

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <button 
        onClick={toggleChat} 
        className="chat-toggle-button"
      >
        {isChatOpen ? 'परामर्शः' : 'Vaidya'}
      </button>

      {isChatOpen && (
        <div className="chat-container">
          <form onSubmit={generateAnswer} className="chat-form">
            <textarea
              required
              className="chat-textarea"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask anything"
            ></textarea>
            <button
              type="submit"
              className={`chat-button ${generatingAnswer ? 'disabled' : ''}`}
              disabled={generatingAnswer}
            >
              Ask question
            </button>
          </form>
          <div className="chat-response">
            <ReactMarkdown className="chat-response-text">{answer}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
