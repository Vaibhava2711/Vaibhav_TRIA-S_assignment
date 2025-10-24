import { Search, X } from 'lucide-react';

const SearchBar = ({ searchQuery, onSearchChange }) => {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
            </div>

            <input
                type="text"
                placeholder="Search contacts by name..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="input-field pl-12 pr-12"
            />

            {searchQuery && (
                <button
                    onClick={() => onSearchChange('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Clear search"
                >
                    <X className="h-5 w-5" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;


