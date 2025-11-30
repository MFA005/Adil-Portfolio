import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="my-5 m-auto mb-15 text-white font-robotocnd md:ml-10 w-[60%] md:w-[40%]">
      <input
        type="text"
        placeholder="Search skills..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 rounded-lg bg-white/7 border-2 border-white/40 text-white placeholder-white/70 font-robotocnd focus:border-white"
      />
    </div>
  );
};

export default SearchBar;