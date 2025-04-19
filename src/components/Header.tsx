import React, { useState } from 'react';
import { Search, Bell, Settings, ChevronDown, Plus } from 'lucide-react';

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  
  return (
    <header className="bg-[#172B4D] text-white border-b border-gray-300 shadow-sm">
      {/* Banner message */}
      <div className="relative bg-[#172B4D] text-white px-4 py-2 text-sm flex justify-between items-center">
        <p>
          The new navigation is now available and will be automatically turned on in the coming weeks. 
          Turn it on for your team now or start with just yourself. 
          <a href="#" className="ml-1 text-blue-200 hover:underline">Go to settings</a>
        </p>
        <button className="text-gray-300 hover:text-white">
          <span className="text-xl font-bold">×</span>
        </button>
      </div>

      {/* Main header */}
      <div className="flex items-center px-4 py-2">
        <div className="flex items-center">
          <button className="p-2 mr-2 text-gray-300 hover:bg-gray-700 rounded">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="4" width="6" height="6" rx="1" />
              <rect x="14" y="4" width="6" height="6" rx="1" />
              <rect x="4" y="14" width="6" height="6" rx="1" />
              <rect x="14" y="14" width="6" height="6" rx="1" />
            </svg>
          </button>
          
          <div className="flex items-center mr-6">
            <div className="bg-blue-500 text-white rounded p-1.5 mr-2">
              <span className="font-bold text-sm">H</span>
            </div>
            <span className="font-medium">HEBED AI</span>
          </div>
          
          <nav className="hidden md:flex">
            <button className="px-3 py-1 text-gray-300 hover:text-white">Home</button>
            <div className="relative group">
              <button className="px-3 py-1 text-gray-300 hover:text-white flex items-center">
                Recent <ChevronDown size={14} className="ml-1" />
              </button>
            </div>
            <div className="relative group">
              <button className="px-3 py-1 text-gray-300 hover:text-white flex items-center">
                Spaces <ChevronDown size={14} className="ml-1" />
              </button>
            </div>
            <div className="relative group">
              <button className="px-3 py-1 text-gray-300 hover:text-white flex items-center">
                Teams <ChevronDown size={14} className="ml-1" />
              </button>
            </div>
            <div className="relative group">
              <button className="px-3 py-1 text-gray-300 hover:text-white flex items-center">
                Apps <ChevronDown size={14} className="ml-1" />
              </button>
            </div>
            <button className="px-3 py-1 text-gray-300 hover:text-white">Templates</button>
          </nav>
          
          <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded flex items-center transition-colors duration-200">
            <Plus size={16} className="mr-1" /> Create
          </button>
        </div>
        
        <div className="ml-auto flex items-center">
          <div className="relative mr-3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-white pl-10 pr-4 py-1.5 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          
          <button className="p-2 relative text-gray-300 hover:bg-gray-700 rounded">
            <Bell size={18} />
            <span className="absolute top-1 right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs">
              2
            </span>
          </button>
          
          <button className="p-2 text-gray-300 hover:bg-gray-700 rounded mx-1">
            <Settings size={18} />
          </button>
          
          <button className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-medium ml-2">
            TP
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;