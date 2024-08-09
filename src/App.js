import React, { useState } from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css'; // Ensure font-awesome is installed in your project

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: #fdfdfd; /* Light background */
`;

const Header = styled.header`
  background-color: #0360ff;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  position: relative;

  .profile-options {
    display: ${({ visible }) => (visible ? 'block' : 'none')};
    position: absolute;
    background-color: #fff;
    border: 1px solid #ccc;
    top: 40px;
    right: 10px;
    z-index: 10;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .profile-options ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .profile-options ul li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }

  .profile-options ul li:hover {
    background-color: #f4f4f4;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 50px;
  bottom: 0;
  width: 200px;
  background-color: #fff;
  border-right: 1px solid #ccc;
  overflow-y: auto;

  &.right-nav {
    right: 0;
    border-left: 1px solid #ccc;
  }

  h2 {
    margin-top: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
  }

  ul li:hover {
    background-color: #f4f4f4;
  }

  .download-section {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    background-color: #f5f5f5;
    border-top: 1px solid #ccc;
  }
`;

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: calc(100% - 400px); /* Adjust width considering sidebars */
  margin: 20px auto;
  padding: 0 20px;
  flex-grow: 1;
`;

const ContainerButton = styled.button`
  font-weight: bold;
  padding: 10px 20px;
  border: 1px solid #ddd;
  width: 150px;
  height: 80px;
  margin: 0 10px;
  cursor: pointer;
  background-color: #f5f5f5;
  border-radius: 5px;
  transition: background-color 0.2s;

  &.active,
  &:hover {
    background-color: #0360ff;
    color: white;
    border-color: #0360ff;
  }
`;

const ContainerContent = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  overflow-y: auto;

  .search-container,
  .chat-container,
  .marketplace-container,
  .jobs-search-container {
    display: none;
  }

  .search-container.active,
  .chat-container.active,
  .marketplace-container.active,
  .jobs-search-container.active {
    display: block;
  }

  input[type='search'],
  input[type='text'] {
    width: 100%;
    padding: 15px;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;

const ChatInputBox = styled.div`
  position: fixed;
  bottom: 10px;
  width: calc(100% - 400px); /* Adjust width considering sidebars */
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
  display: flex;

  input[type='text'] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    border: none;
    background-color: #0360ff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #024bb5;
    }
  }
`;

function App() {
  const [activeContainer, setActiveContainer] = useState('search');
  const [profileOptionsVisible, setProfileOptionsVisible] = useState(false);

  const showContainer = (container) => {
    setActiveContainer(container);
  };

  const toggleProfileOptions = () => {
    setProfileOptionsVisible(!profileOptionsVisible);
  };

  const handleSubmit = (event, formType) => {
    event.preventDefault();
    const query = event.target.elements[`${formType}-query`].value;
    alert(`${formType.charAt(0).toUpperCase() + formType.slice(1)} search for: ${query}`);
  };

  return (
    <AppContainer>
      <Header>
        <ProfileIcon visible={profileOptionsVisible} onClick={toggleProfileOptions}>
          <i className="fas fa-user-circle"></i>
          <div className="profile-options" id="profile-options">
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        </ProfileIcon>
      </Header>

      <Sidebar className="left-nav sidebar open" id="left-sidebar">
        <h2>Chats</h2>
        <ul>
          <li>Chat 1</li>
          <li>Chat 2</li>
          <li>Chat 3</li>
          <li>Chat 4</li>
        </ul>
        <div className="download-section">
          <p>Download on:</p>
          <i className="fas fa-mobile-alt"></i> Mobile
          <i className="fas fa-desktop"></i> Desktop
          <i className="fas fa-code"></i> Compilers/IDEs
        </div>
      </Sidebar>

      <Sidebar className="right-nav sidebar open" id="right-sidebar">
        <h2>AI Assistants</h2>
        <ul>
          <li>
            <details open>
              <summary>
                <i className="fas fa-comments"></i> AI General Purpose Chat
              </summary>
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
              <summary>
                <i className="fas fa-search"></i> AI Search
              </summary>
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
              <summary>
                <i className="fas fa-eye"></i> AI Vision
              </summary>
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
              <summary>
                <i className="fas fa-briefcase"></i> AI Job Search
              </summary>
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
              <summary>
                <i className="fas fa-code"></i> AI Coding Assistant
              </summary>
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
              <summary>
                <i className="fas fa-shopping-cart"></i> AI Shopping
              </summary>
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
              <summary>
                <i className="fas fa-tasks"></i> AI Productivity
              </summary>
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
              <summary>
                <i className="fas fa-bullhorn"></i> AI Marketing
              </summary>
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
              <summary>
                <i className="fas fa-language"></i> AI Translation
              </summary>
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
              <summary>
                <i className="fas fa-users"></i> AI HR
              </summary>
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
              <summary>
                <i className="fas fa-chart-line"></i> AI Market Insights & Analysis
              </summary>
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
              <summary>
                <i className="fas fa-images"></i> AI Image
              </summary>
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
              <summary>
                <i className="fas fa-video"></i> AI Video
              </summary>
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
              <summary>
                <i className="fas fa-life-ring"></i> AI Daily Life
              </summary>
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
              <summary>
                <i className="fas fa-heartbeat"></i> AI Healthcare & Wellness
              </summary>
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
              <summary>
                <i className="fas fa-dollar-sign"></i> AI Finance & Stock Market
              </summary>
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
              <summary>
                <i className="fas fa-cogs"></i> AI Task Automation & Workflow
              </summary>
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
              <summary>
                <i className="fas fa-graduation-cap"></i> AI Education
              </summary>
              <ul>
                <li>Personalized Learning Paths</li>
                <li>AI-driven Tutoring</li>
                <li>Content Curation</li>
                <li>Virtual Classrooms</li>
                <li>LMS Integration</li>
              </ul>
            </details>
          </li>
        </ul>
      </Sidebar>

      <ContainerWrapper>
        <ContainerButton
          className={activeContainer === 'search' ? 'active' : ''}
          onClick={() => showContainer('search')}
        >
          Search
        </ContainerButton>
        <ContainerButton
          className={activeContainer === 'chat' ? 'active' : ''}
          onClick={() => showContainer('chat')}
        >
          Chat
        </ContainerButton>
        <ContainerButton
          className={activeContainer === 'marketplace' ? 'active' : ''}
          onClick={() => showContainer('marketplace')}
        >
          Marketplace
        </ContainerButton>
        <ContainerButton
          className={activeContainer === 'jobs-search' ? 'active' : ''}
          onClick={() => showContainer('jobs-search')}
        >
          Jobs
        </ContainerButton>

        <ContainerContent>
          <div className={`search-container ${activeContainer === 'search' ? 'active' : ''}`}>
            <form id="search-form" onSubmit={(e) => handleSubmit(e, 'search')}>
              <input type="search" id="search-query" placeholder="Search..." />
              <button type="submit">Search</button>
            </form>
          </div>

          <div className={`chat-container ${activeContainer === 'chat' ? 'active' : ''}`}>
            <form id="chat-form" onSubmit={(






                        <form id="chat-form" onSubmit={(e) => handleSubmit(e, 'chat')}>
              <input type="text" id="chat-input" placeholder="Chat..." />
              <button type="submit">Send</button>
            </form>
            <div id="chat-window"></div>
          </div>

          <div className={`marketplace-container ${activeContainer === 'marketplace' ? 'active' : ''}`}>
            <form id="marketplace-form" onSubmit={(e) => handleSubmit(e, 'marketplace')}>
              <input type="search" id="marketplace-query" placeholder="Marketplace..." />
              <button type="submit">Search</button>
            </form>
          </div>

          <div className={`jobs-search-container ${activeContainer === 'jobs-search' ? 'active' : ''}`}>
            <form id="jobs-search-form" onSubmit={(e) => handleSubmit(e, 'jobs-search')}>
              <input type="search" id="jobs-search-query" placeholder="Job search..." />
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
        </ContainerContent>
      </ContainerWrapper>

      <ChatInputBox>
        <input type="text" id="chat-input" name="message" placeholder="Ask your question" />
        <button type="submit">Send</button>
      </ChatInputBox>
    </AppContainer>
  );
}

export default App;
