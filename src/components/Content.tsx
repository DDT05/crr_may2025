import React from 'react';
import { Clock, ThumbsUp, Plus, ChevronDown, FileText } from 'lucide-react';

interface ContentProps {
  title: string;
  author: string;
  date: string;
}

const Content: React.FC<ContentProps> = ({ title, author, date }) => {
  const sections = [
    {
      title: 'IT',
      items: [
        'Infrastructure Management',
        'Technical Support',
        'Development Guidelines',
        'System Architecture',
        'Security Protocols',
        'Cloud Services'
      ]
    },
    {
      title: 'HR',
      items: [
        'Employee Onboarding Process',
        'Offboarding Procedures',
        'Salary Structure',
        'Benefits Administration',
        'Performance Review Process',
        'Training Programs'
      ]
    },
    {
      title: 'Marketing',
      items: [
        'Sales Strategy',
        'Digital Marketing Campaigns',
        'Social Media Guidelines',
        'Brand Guidelines',
        'Content Strategy',
        'Market Analysis'
      ]
    },
    {
      title: 'Finance/Accounting',
      items: [
        'Annual Audit Procedures',
        'Cash Flow Management',
        'Budget Planning',
        'Financial Reporting',
        'Tax Compliance',
        'Investment Strategy'
      ]
    },
    {
      title: 'Legal',
      items: [
        'Corporate Policies',
        'Compliance Framework',
        'Risk Management',
        'Contract Templates',
        'Data Protection Guidelines',
        'Legal Documentation'
      ]
    }
  ];

  const relatedContent = [
    {
      title: 'Company Handbook',
      author: 'HR Team',
      type: 'document'
    },
    {
      title: 'Security Guidelines',
      author: 'IT Department',
      type: 'document'
    },
    {
      title: 'Marketing Strategy',
      author: 'Marketing Team',
      type: 'document'
    }
  ];

  return (
    <div className="flex-1 bg-white overflow-y-auto h-[calc(100vh-138px)]">
      <div className="max-w-4xl mx-auto py-6 px-4">
        <h1 className="text-2xl font-medium text-gray-800 mb-4">{title}</h1>
        
        <div className="flex items-center mb-6">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white font-medium mr-2">
              {author.split(' ').map(name => name[0]).join('')}
            </div>
            <span className="text-gray-500 text-sm">{author}</span>
          </div>
          
          <div className="flex items-center ml-4 text-gray-500 text-sm">
            <Clock size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          
          <div className="ml-4 flex items-center">
            <button className="flex items-center text-sm text-gray-600 hover:text-gray-900 mr-1">
              <ThumbsUp size={14} className="mr-1" />
              <span>Add a reaction</span>
            </button>
            <button className="text-sm text-blue-600 hover:underline ml-3">Legacy editor</button>
          </div>
        </div>
        
        <div className="mb-6">
          <button className="text-gray-500 text-sm flex items-center">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
            Scroll page details
          </button>
        </div>
        
        {sections.map((section, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-xl font-medium text-gray-800 mb-4">{section.title}</h2>
            <ul className="list-disc pl-6 space-y-3">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-800">
                  <a href="#" className="text-blue-600 hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        <div className="mt-4">
          <button className="flex items-center text-sm text-blue-600 hover:underline">
            <Plus size={14} className="mr-1" />
            Add label
          </button>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <h2 className="text-lg font-medium text-gray-800">Related content</h2>
              <div className="ml-2 bg-gray-200 text-gray-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                ?
              </div>
            </div>
            <button className="text-gray-400">
              <ChevronDown size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedContent.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded bg-white hover:shadow-md transition-shadow">
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-1 rounded">
                      <FileText size={16} className="text-blue-500" />
                    </div>
                    <div className="text-gray-600 text-sm ml-2">{item.author}</div>
                  </div>
                  <h3 className="font-medium text-blue-600 hover:underline">{item.title}</h3>
                  <div className="mt-3 flex items-center text-sm text-gray-500">
                    <button className="flex items-center hover:text-gray-700">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
                      More like this
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;