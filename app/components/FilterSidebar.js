'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FilterSection = ({ title, options, isOpenDefault = true }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border-b border-gray-100 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-sm font-medium text-gray-900"
      >
        <span className="uppercase tracking-wide">{title}</span>
        {isOpen ? <ChevronUp className="h-4 w-4 text-gray-500" /> : <ChevronDown className="h-4 w-4 text-gray-500" />}
      </button>
      
      {isOpen && (
        <div className="mt-4 space-y-3">
          {options.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                id={`${title}-${option.value}`}
                name={`${title}[]`}
                defaultValue={option.value}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
              />
              <label
                htmlFor={`${title}-${option.value}`}
                className="ml-3 text-sm text-gray-600 hover:text-black cursor-pointer"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const FilterSidebar = () => {
  return (
    <div className="hidden lg:block w-64 flex-shrink-0 pr-8">
      <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-200 pb-4">
        Filters
      </h3>
      
      <FilterSection 
        title="Category" 
        options={[
          { value: 'dresses', label: 'Dresses' },
          { value: 'tops', label: 'Tops' },
          { value: 'bottoms', label: 'Bottoms' },
          { value: 'outerwear', label: 'Outerwear' },
          { value: 'accessories', label: 'Accessories' },
        ]} 
      />
      
      <FilterSection 
        title="Size" 
        options={[
          { value: 'xs', label: 'XS' },
          { value: 's', label: 'S' },
          { value: 'm', label: 'M' },
          { value: 'l', label: 'L' },
          { value: 'xl', label: 'XL' },
        ]} 
      />
      
      <FilterSection 
        title="Color" 
        options={[
          { value: 'black', label: 'Black' },
          { value: 'white', label: 'White' },
          { value: 'red', label: 'Red' },
          { value: 'blue', label: 'Blue' },
          { value: 'pink', label: 'Pink' },
        ]} 
      />
      
      <div className="border-b border-gray-100 py-6">
         <h4 className="text-sm font-medium uppercase tracking-wide mb-4">Price Range</h4>
         <div className="flex items-center gap-4">
            <div className="relative">
               <span className="absolute left-3 top-2 text-gray-500 text-xs">$</span>
               <input type="number" placeholder="0" className="w-full border border-gray-200 pl-6 py-1 text-sm rounded-sm" />
            </div>
            <span className="text-gray-400">-</span>
            <div className="relative">
               <span className="absolute left-3 top-2 text-gray-500 text-xs">$</span>
               <input type="number" placeholder="500" className="w-full border border-gray-200 pl-6 py-1 text-sm rounded-sm" />
            </div>
         </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
