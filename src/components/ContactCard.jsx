import { Mail, Phone, Building2 } from 'lucide-react';

const ContactCard = ({ contact }) => {
    return (
        <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                    <img
                        src={contact.avatar}
                        alt={contact.name}
                        className="w-16 h-16 rounded-full ring-4 ring-primary-100"
                    />
                </div>

                {/* Contact Info */}
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate mb-1">
                        {contact.name}
                    </h3>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="w-4 h-4 flex-shrink-0 text-primary-500" />
                            <a
                                href={`mailto:${contact.email}`}
                                className="truncate hover:text-primary-600 transition-colors"
                            >
                                {contact.email}
                            </a>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="w-4 h-4 flex-shrink-0 text-primary-500" />
                            <a
                                href={`tel:${contact.phone}`}
                                className="hover:text-primary-600 transition-colors"
                            >
                                {contact.phone}
                            </a>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Building2 className="w-4 h-4 flex-shrink-0 text-primary-500" />
                            <span className="truncate">{contact.company}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;


