import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [activeContainer, setActiveContainer] = useState('search');
  const [profileOptionsVisible, setProfileOptionsVisible] = useState(false);

  useEffect(() => {
    // Initialize with the search container visible
    showContainer('search');
  }, []);

  const toggleProfileOptions = () => {
    setProfileOptionsVisible(!profileOptionsVisible);
  };

  const showContainer = (container) => {
    setActiveContainer(container);
  };

  const handleFormSubmit = (e, formId) => {
    e.preventDefault();
    const query = e.target.querySelector('input').value;
    alert(`${formId} search for: ${query}`);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    const message = e.target.querySelector('input').value;
    const chatWindow = document.getElementById('chat-window');
    chatWindow.innerHTML += `<div>You: ${message}</div>`;
    e.target.querySelector('input').value = '';
    setTimeout(() => {
      chatWindow.innerHTML += `<div>AI: Simulated response for: ${message}</div>`;
    }, 1000);
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
          <li>
            <details>
              <summary><i className="fas fa-search"></i> AI Search</summary>
              <ul>
                <li>Semantic Search</li>
                <li>Real-time Data Retrieval and Indexing</li>
                <li>Personalized Search Results</li>
                <li>Enterprise Data Integration</li>
                <li>Voice Search</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><i className="fas fa-eye"></i> AI Vision</summary>
              <ul>
                <li>Image and Video Recognition</li>
                <li>Object Detection and Classification</li>
                <li>Facial Recognition</li>
                <li>AR/VR Integration</li>
                <li>Medical Image Analysis</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><i className="fas fa-briefcase"></i> AI Job Search</summary>
              <ul>
                <li>Job Recommendations</li>
                <li>Interview Scheduling and Preparation</li>
                <li>Labor Market Analysis</li>
                <li>Job Board Integration</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><i className="fas fa-code"></i> AI Coding Assistant</summary>
              <ul>
                <li>Auto-completion and Code Suggestions</li>
                <li>Bug Detection and Fixing</li>
                <li>Code Refactoring and Optimization</li>
                <li>Real-time Collaboration</li>
                <li>IDE Integration</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><i className="fas fa-shopping-cart"></i> AI Shopping</summary>
              <ul>
                <li>Personalized Product Recommendations</li>
                <li>Price Comparison and Alerts</li>
                <li>Automated Shopping Assistants</li>
                <li>Inventory Management</li>
                <li>E-commerce Integration</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><i className="fas fa-tasks"></i> AI Productivity</summary>
              <ul>
                <li>Task and Project Management</li>
                <li>Smart Scheduling and Reminders</li>
                <li>Workflow Automation</li>
                <li>Collaboration Platform Integration</li>
                <li>Document Management</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><i className="fas fa-bullhorn"></i> AI Marketing</summary>
              <ul>
                <li>Customer Segmentation and Targeting</li>
                <li>Automated Campaign Optimization</li>
                <li>Social Media Engagement</li>
                <li>A/B Testing and Analytics</li>
                <li>Marketing Platform Integration</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><i className="fas fa-language"></i> AI Translation</summary>
              <ul>
                <li>Real-time Translation</li>
                <li>Language Detection</li>
                <li>Contextual Accuracy</li>
                <li>Communication Tool Integration</li>
                <li>Multilingual Content Creation</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><i className="fas fa-users"></i> AI HR</summary>
              <ul>
                <li>Candidate Screening</li>
                <li>Onboarding Automation</li>
                <li>Performance Tracking</li>
                <li>Workforce Planning</li>
                <li>HR System Integration</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><i className="fas fa-chart-line"></i> AI Market Insights & Analysis</summary>
              <ul>
                <li>Predictive Analytics</li>
                <li>Competitor Benchmarking</li>
                <li>Customer Sentiment Analysis</li>
                <li>Performance Tracking</li>
                <li>BI Tool Integration</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><i className="fas fa-images"></i> AI Image</summary>
              <ul>
                <li>Advanced Editing</li>
                <li>Content Creation</li>
                <li>Image Tagging</li>
                <li>Asset Management Integration</li>
                <li>Creative Industry Support</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><i className="fas fa-video"></i> AI Video</summary>
              <ul>
                <li>Editing Automation</li>
                <li>Content Indexing</li>
                <li>Streaming Enhancements</li>
                <li>Video Conferencing Integration</li>
                <li>Security Surveillance</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><i className="fas fa-life-ring"></i> AI Daily Life</summary>
              <ul>
                <li>Personal Assistant</li>
                <li>Smart Home Integration</li>
                <li>Health Tracking</li>
                <li>Finance Management</li>
                <li>Lifestyle App Integration</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><i className="fas fa-heartbeat"></i> AI Healthcare & Wellness</summary>
              <ul>
                <li>Remote Monitoring</li>
                <li>Diagnostics</li>
                <li>Personalized Treatment Plans</li>
                <li>Health Data Analysis</li>
                <li>EHR Integration</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><i className="fas fa-dollar-sign"></i> AI Finance & Stock Market</summary>
              <ul>
                <li>Stock Analysis</li>
                <li>Automated Trading</li>
                <li>Risk Management</li>
                <li>Financial Planning</li>
                <li>Financial Platform Integration</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><i className="fas fa-cogs"></i> AI Task Automation & Workflow</summary>
              <ul>
                <li>Workflow Automation</li>
                <li>Business Process Management</li>
                <li>Web Development Automation</li>
                <li>Automation Platform Integration</li>
                <li>Custom Script Execution</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><i className="fas fa-graduation-cap"></i> AI Education</summary>
              <ul>
                <li>Personalized Learning Paths</li>
                <li>AI-driven Tutoring</li>
                <li>Content Curation</li>
                <li>Virtual Classrooms</li>
                <li>LMS Integration</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><i className="fas fa-comments"></i> AI Communication</summary>
              <ul>
                <li>High-quality Communication</li>
                <li>Real-time Translation</li>
                <li>Meeting Management</li>
                <li>Collaboration Tools</li>
                <li>Communication Platform Integration</li>
              </ul>
            </details>
          </li>
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
            <form id="search-form" onSubmit={(e) => handleFormSubmit(e, 'Search')}>
              <input type="search" id="search-query" name="searchQuery" placeholder="Search..." />
              <button type="submit">Search</button>
            </form>
          </div>
        )}
        {activeContainer === 'chat' && (
          <div id="chat-container" className="chat-container active">
            <form id="chat-form" onSubmit={handleChatSubmit}>
              <input type="text" id="chat-input" name="message" placeholder="Ask your question" />
              <button type="submit">Send</button>
            </form>
            <div id="chat-window"></div>
          </div>
        )}
        {activeContainer === 'marketplace' && (
          <div id="marketplace-container" className="marketplace-container active">
            <form id="marketplace-form" onSubmit={(e) => handleFormSubmit(e, 'Marketplace')}>
              <input type="search" id="marketplace-query" name="marketplaceQuery" placeholder="Search marketplace..." />
              <button type="submit">Search</button>
            </form>
          </div>
        )}
        {activeContainer === 'jobs-search' && (
          <div id="jobs-search-container" className="jobs-search-container active">
            <form id="jobs-search-form" onSubmit={(e) => handleFormSubmit(e, 'Jobs')}>
              <input type="search" id="jobs-search-query" name="jobsSearchQuery" placeholder="Search jobs..." />
              <button type="submit">Search</button>
            </form>
            <div>
              <button className="jobs-search-option" data-category="Healthcare">Healthcare</button>
              <button className="jobs-search-option" data-category="Education">Education</button>
              <button className="jobs-search-option" data-category="Finance">Finance</button>
              <button className="jobs-search-option" data-category="Engineering">Engineering</button>
              <button className="jobs-search-option" data-category="Transportation">Transportation</button>
              <button className="jobs-search-option" data-category="Retail">Retail</button>
              <button className="jobs-search-option" data-category="Technology">Technology</button>
              <button className="jobs-search-option" data-category="View All">View All</button>
            </div>
          </div>
        )}
      </div>
      <div className="chat-input-box">
        <form id="chat-form" onSubmit={handleChatSubmit}>
          <input type="text" id="chat-input" name="message" placeholder="Ask your question" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
