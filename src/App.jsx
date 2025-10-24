import { useState, useEffect } from 'react';
import { UserPlus, Users, Loader2 } from 'lucide-react';
import ContactCard from './components/ContactCard';
import SearchBar from './components/SearchBar';
import AddContactModal from './components/AddContactModal';
import Footer from './components/Footer';
import { fetchContacts } from './data/mockContacts';

function App() {
    const [contacts, setContacts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Simulate API fetch on component mount
    useEffect(() => {
        const loadContacts = async () => {
            setIsLoading(true);
            try {
                const data = await fetchContacts();
                setContacts(data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadContacts();
    }, []);

    // Filter contacts based on search query
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle adding a new contact
    const handleAddContact = (newContactData) => {
        const newContact = {
            id: Date.now(),
            ...newContactData,
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(newContactData.name)}&background=0ea5e9&color=fff&size=128`
        };

        setContacts(prevContacts => [newContact, ...prevContacts]);
    };

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <Users className="w-10 h-10 text-primary-600" />
                        <h1 className="text-4xl font-bold text-gray-900">
                            Contact List
                        </h1>
                    </div>
                    <p className="text-gray-600 text-lg">
                        Manage your contacts efficiently
                    </p>
                </div>

                {/* Controls Section */}
                <div className="glass-card rounded-2xl p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
                        <div className="flex-1">
                            <SearchBar
                                searchQuery={searchQuery}
                                onSearchChange={setSearchQuery}
                            />
                        </div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
                        >
                            <UserPlus className="w-5 h-5" />
                            Add Contact
                        </button>
                    </div>

                    {/* Results Info */}
                    <div className="mt-4 text-sm text-gray-600">
                        {searchQuery ? (
                            <span>
                                Found <strong>{filteredContacts.length}</strong> contact
                                {filteredContacts.length !== 1 ? 's' : ''} matching "{searchQuery}"
                            </span>
                        ) : (
                            <span>
                                Showing <strong>{contacts.length}</strong> contact
                                {contacts.length !== 1 ? 's' : ''}
                            </span>
                        )}
                    </div>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="flex flex-col items-center justify-center py-16">
                        <Loader2 className="w-12 h-12 text-primary-600 animate-spin mb-4" />
                        <p className="text-gray-600">Loading contacts...</p>
                    </div>
                )}

                {/* Empty State */}
                {!isLoading && filteredContacts.length === 0 && (
                    <div className="glass-card rounded-2xl p-12 text-center">
                        <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {searchQuery ? 'No contacts found' : 'No contacts yet'}
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {searchQuery
                                ? `No contacts match "${searchQuery}". Try a different search term.`
                                : 'Get started by adding your first contact.'
                            }
                        </p>
                        {!searchQuery && (
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                <UserPlus className="w-5 h-5" />
                                Add Your First Contact
                            </button>
                        )}
                    </div>
                )}

                {/* Contact Grid */}
                {!isLoading && filteredContacts.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredContacts.map(contact => (
                            <ContactCard key={contact.id} contact={contact} />
                        ))}
                    </div>
                )}

                {/* Add Contact Modal */}
                <AddContactModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onAddContact={handleAddContact}
                />

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}

export default App;

