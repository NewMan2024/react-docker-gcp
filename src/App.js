
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Project Portfolio Website
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/**
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const App = () => {
  const [activeContainer, setActiveContainer] = useState('search');
  const [profileOptionsVisible, setProfileOptionsVisible] = useState(false);

  const toggleProfileOptions = () => {
    setProfileOptionsVisible(!profileOptionsVisible);
  };

  const showContainer = (container) => {
    setActiveContainer(container);
  };

  return (
    <div className="App">
      <header>
        <div className="profile-icon" onClick={toggleProfileOptions}>
          <i className="fas fa-user-circle"></i>
          {profileOptionsVisible && (
            <div className="profile-options" id="profile-options">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </header>
      <div className="left-nav sidebar open" id="left-sidebar">
        <h2>Chats</h2>
        <ul>
          <li>Chat 1</li>
          <li>Chat 2</li>
          <li>Chat 3</li>
          <li>Chat 4</li>
          <div className="download-section">
            <p>Download on:</p>
            <i className="fas fa-mobile-alt"></i> Mobile
            <i className="fas fa-desktop"></i> Desktop
            <i className="fas fa-code"></i> Compilers/IDEs
          </div>
        </ul>
      </div>
      <div className="right-nav sidebar open" id="right-sidebar">
        <h2>AI Assistants</h2>
        <ul>
          <li>
            <details open>
              <summary><i className="fas fa-comments"></i> AI General Purpose Chat</summary>
              <ul>
                <li>Advanced Natural Language Understanding</li>
                <li>Multi-lingual Support</li>
                <li>Sentiment Analysis</li>
                <li>Contextual Awareness</li>
                <li>Customer Support Integration</li>
              </ul>
            </details>
          </li>
          {/* Add more <li> elements here for other AI assistants */}
        </ul>
      </div>
      <div className="container-wrapper">
        <div className={`container-button ${activeContainer === 'search' ? 'active' : ''}`} onClick={() => showContainer('search')}>
          Search
        </div>
        <div className={`container-button ${activeContainer === 'chat' ? 'active' : ''}`} onClick={() => showContainer('chat')}>
          Chat
        </div>
        <div className={`container-button ${activeContainer === 'marketplace' ? 'active' : ''}`} onClick={() => showContainer('marketplace')}>
          Marketplace
        </div>
        <div className={`container-button ${activeContainer === 'jobs-search' ? 'active' : ''}`} onClick={() => showContainer('jobs-search')}>
          Jobs Search
        </div>
      </div>
      <div className="container-content">
        {activeContainer === 'search' && (
          <div id="search-container" className="search-container active">
            <form id="search-form" onSubmit={(e) => { e.preventDefault(); alert(`Search for: ${e.target.elements.searchQuery.value}`); }}>
              <input type="search" id="search-query" name="searchQuery" placeholder="Search..." />
              <button type="submit">Search</button>
            </form>
          </div>
        )}
        {activeContainer === 'chat' && (
          <div id="chat-container" className="chat-container active">
            <form id="chat-form" onSubmit={(e) => { e.preventDefault(); const message = e.target.elements.message.value; alert(`Chat message: ${message}`); }}>
              <input type="text" id="chat-input" name="message" placeholder="Ask your question" />
              <button type="submit">Send</button>
            </form>
          </div>
        )}
        {activeContainer === 'marketplace' && (
          <div id="marketplace-container" className="marketplace-container active">
            <form id="marketplace-form" onSubmit={(e) => { e.preventDefault(); alert(`Marketplace search for: ${e.target.elements.marketplaceQuery.value}`); }}>
              <input type="search" id="marketplace-query" name="marketplaceQuery" placeholder="Search marketplace..." />
              <button type="submit">Search</button>
            </form>
          </div>
        )}
        {activeContainer === 'jobs-search' && (
          <div id="jobs-search-container" className="jobs-search-container active">
            <form id="jobs-search-form" onSubmit={(e) => { e.preventDefault(); alert(`Job search for: ${e.target.elements.jobsSearchQuery.value}`); }}>
              <input type="search" id="jobs-search-query" name="jobsSearchQuery" placeholder="Search jobs..." />
              <button type="submit">Search</button>
            </form>
          </div>
        )}
      </div>
      <div className="chat-input-box">
        <form id="chat-form" onSubmit={(e) => { e.preventDefault(); const message = e.target.elements.message.value; alert(`Chat message: ${message}`); }}>
          <input type="text" id="chat-input" name="message" placeholder="Ask your question" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
**/
//export default App;
