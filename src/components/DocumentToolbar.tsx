import React from 'react';
import { Edit, MessageSquare, Copy, Star, Eye, Share2 } from 'lucide-react';

interface DocumentToolbarProps {
  title: string;
  breadcrumbs: string[];
}

const DocumentToolbar: React.FC<DocumentToolbarProps> = ({ title, breadcrumbs }) => {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="flex items-center px-4 py-2">
        <div className="flex-1">
          <div className="flex items-center text-sm text-gray-500">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="mx-1">/</span>}
                <a href="#" className="hover:text-blue-500 hover:underline">{crumb}</a>
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded flex items-center">
            <Edit size={16} className="mr-1" />
            <span className="text-sm">Edit</span>
          </button>
          
          <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded">
            <MessageSquare size={16} />
          </button>
          
          <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded">
            <Copy size={16} />
          </button>
          
          <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded">
            <Star size={16} />
          </button>
          
          <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded">
            <Eye size={16} />
          </button>
          
          <div className="h-6 border-l border-gray-300 mx-1"></div>
          
          <button className="p-1.5 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 flex items-center">
            <span className="mr-1">Document toolbox</span>
          </button>
          
          <button className="p-1.5 border border-gray-300 rounded text-sm font-medium text-blue-600 hover:bg-blue-50 flex items-center">
            <Share2 size={14} className="mr-1" />
            <span>Share</span>
          </button>
          
          <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentToolbar;