import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DocumentToolbar from './components/DocumentToolbar';
import Content from './components/Content';
import Chatbot from './components/Chatbot';
import ITPage from './pages/ITPage';
import HRPage from './pages/HRPage';
import MarketingPage from './pages/MarketingPage';
import FinancePage from './pages/FinancePage';
import LegalPage from './pages/LegalPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-50">
        <Header />
        
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          
          <div className="flex-1 flex flex-col overflow-hidden">
            <DocumentToolbar 
              title="Documentation" 
              breadcrumbs={['HEBED AI', 'Documentation']} 
            />
            
            <Routes>
              <Route path="/" element={
                <Content 
                  title="Welcome to Documentation" 
                  author="HEBED AI Team" 
                  date="Mar 2024" 
                />
              } />
              <Route path="/it" element={<ITPage />} />
              <Route path="/hr" element={<HRPage />} />
              <Route path="/marketing" element={<MarketingPage />} />
              <Route path="/finance" element={<FinancePage />} />
              <Route path="/legal" element={<LegalPage />} />
            </Routes>
          </div>
        </div>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;