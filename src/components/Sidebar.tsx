import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, Search, Plus, FileText, Settings } from 'lucide-react';

interface SidebarItemProps {
  title: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  isActive?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  title, 
  icon, 
  children, 
  isActive = false, 
  isExpanded = false,
  onToggle
}) => {
  return (
    <div className={`${isActive ? 'bg-blue-50' : ''}`}>
      <div 
        className={`flex items-center py-2 px-3 cursor-pointer hover:bg-gray-100 
                    ${isActive ? 'text-blue-500' : 'text-gray-700'}`}
        onClick={onToggle}
      >
        {children ? (
          isExpanded ? (
            <ChevronDown size={16} className="mr-1 text-gray-400" />
          ) : (
            <ChevronRight size={16} className="mr-1 text-gray-400" />
          )
        ) : (
          <div className="w-4 mr-1"></div>
        )}
        {icon && <span className="mr-2">{icon}</span>}
        <span className="text-sm font-medium">{title}</span>
      </div>
      {isExpanded && children && (
        <div className="ml-6">{children}</div>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<{[key: string]: boolean}>({
    'it': true,
    'hr': true,
    'marketing': true,
    'finance': true,
    'legal': true
  });
  
  const toggleItem = (item: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };
  
  return (
    <div className="w-64 border-r border-gray-200 h-[calc(100vh-98px)] overflow-y-auto bg-white">
      <div className="p-3">
        <div className="flex items-center mb-4">
          <div className="bg-gray-100 text-gray-500 rounded p-1 mr-2">
            <FileText size={20} />
          </div>
          <span className="text-gray-600 font-medium">Documentation</span>
        </div>
        
        <div className="space-y-1">
          <Link to="/" className="block pl-9 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded">
            All content
          </Link>
          <button className="w-full text-left pl-9 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded">
            Recent changes
          </button>
          <button className="w-full text-left pl-9 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded">
            Settings
          </button>
        </div>
      </div>
      
      <div className="border-t border-gray-200 py-2">
        <div className="flex items-center justify-between px-3 py-1">
          <h3 className="text-xs font-medium text-gray-500">Quick Access</h3>
          <button className="text-gray-400 hover:text-gray-700">
            <Plus size={16} />
          </button>
        </div>
        
        <div className="mt-1">
          <Link to="/it" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100">
            <div className="flex items-center">
              <FileText size={16} className="mr-2 text-gray-400" />
              IT Guidelines
            </div>
          </Link>
          <Link to="/hr" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100">
            <div className="flex items-center">
              <FileText size={16} className="mr-2 text-gray-400" />
              HR Handbook
            </div>
          </Link>
          <Link to="/legal" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100">
            <div className="flex items-center">
              <FileText size={16} className="mr-2 text-gray-400" />
              Legal Policies
            </div>
          </Link>
        </div>
      </div>
      
      <div className="border-t border-gray-200 py-2">
        <div className="flex items-center justify-between px-3 py-1">
          <div className="flex items-center">
            <ChevronDown size={16} className="mr-1 text-gray-400" />
            <h3 className="text-xs font-medium text-gray-500">Departments</h3>
          </div>
          <div className="flex">
            <button className="text-gray-400 hover:text-gray-700">
              <Plus size={16} />
            </button>
          </div>
        </div>
        
        <div className="mt-1 px-3">
          <div className="relative mb-2">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="text"
              placeholder="Search documentation"
              className="bg-gray-100 text-gray-700 pl-8 pr-3 py-1 rounded w-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="mt-2">
          <SidebarItem 
            title="IT" 
            isExpanded={expandedItems['it']}
            onToggle={() => toggleItem('it')}
          >
            <div className="pl-4">
              <Link to="/it" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                Infrastructure
              </Link>
              <Link to="/it" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                Support
              </Link>
              <Link to="/it" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                Development
              </Link>
            </div>
          </SidebarItem>
          
          <SidebarItem 
            title="HR" 
            isExpanded={expandedItems['hr']}
            onToggle={() => toggleItem('hr')}
          >
            <div className="pl-4">
              <Link to="/hr" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                Onboarding
              </Link>
              <Link to="/hr" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                Offboarding
              </Link>
              <Link to="/hr" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                Salaries
              </Link>
              <Link to="/hr" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                Administrative Procedures
              </Link>
            </div>
          </SidebarItem>
          
          <SidebarItem 
            title="Marketing" 
            isExpanded={expandedItems['marketing']}
            onToggle={() => toggleItem('marketing')}
          >
            <div className="pl-4">
              <Link to="/marketing" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                Sales
              </Link>
              <Link to="/marketing" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                Advertising
              </Link>
              <Link to="/marketing" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                Social Media
              </Link>
              <Link to="/marketing" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                Promotions
              </Link>
            </div>
          </SidebarItem>
          
          <SidebarItem 
            title="Finance/Accounting" 
            isExpanded={expandedItems['finance']}
            onToggle={() => toggleItem('finance')}
          >
            <div className="pl-4">
              <Link to="/finance" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                Audit
              </Link>
              <Link to="/finance" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                Cash Flow
              </Link>
            </div>
          </SidebarItem>
          
          <SidebarItem 
            title="Legal" 
            isExpanded={expandedItems['legal']}
            onToggle={() => toggleItem('legal')}
          >
            <div className="pl-4">
              <Link to="/legal" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                Policies
              </Link>
              <Link to="/legal" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                Governance
              </Link>
              <Link to="/legal" className="block py-2 text-sm text-gray-700 hover:text-blue-600">
                Accountability
              </Link>
            </div>
          </SidebarItem>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;