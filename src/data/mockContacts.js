// Mock contact data simulating API response
export const initialContacts = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        phone: "+1 (555) 123-4567",
        company: "Tech Solutions Inc.",
        avatar: "https://ui-avatars.com/api/?name=Alice+Johnson&background=0ea5e9&color=fff&size=128"
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob.smith@example.com",
        phone: "+1 (555) 234-5678",
        company: "Digital Ventures",
        avatar: "https://ui-avatars.com/api/?name=Bob+Smith&background=10b981&color=fff&size=128"
    },
    {
        id: 3,
        name: "Carol Martinez",
        email: "carol.martinez@example.com",
        phone: "+1 (555) 345-6789",
        company: "Creative Studios",
        avatar: "https://ui-avatars.com/api/?name=Carol+Martinez&background=8b5cf6&color=fff&size=128"
    },
    {
        id: 4,
        name: "David Lee",
        email: "david.lee@example.com",
        phone: "+1 (555) 456-7890",
        company: "Innovation Labs",
        avatar: "https://ui-avatars.com/api/?name=David+Lee&background=f59e0b&color=fff&size=128"
    },
    {
        id: 5,
        name: "Emma Wilson",
        email: "emma.wilson@example.com",
        phone: "+1 (555) 567-8901",
        company: "Global Enterprises",
        avatar: "https://ui-avatars.com/api/?name=Emma+Wilson&background=ef4444&color=fff&size=128"
    },
    {
        id: 6,
        name: "Frank Brown",
        email: "frank.brown@example.com",
        phone: "+1 (555) 678-9012",
        company: "Smart Systems",
        avatar: "https://ui-avatars.com/api/?name=Frank+Brown&background=6366f1&color=fff&size=128"
    },
    {
        id: 7,
        name: "Grace Taylor",
        email: "grace.taylor@example.com",
        phone: "+1 (555) 789-0123",
        company: "Future Tech",
        avatar: "https://ui-avatars.com/api/?name=Grace+Taylor&background=ec4899&color=fff&size=128"
    },
    {
        id: 8,
        name: "Henry Davis",
        email: "henry.davis@example.com",
        phone: "+1 (555) 890-1234",
        company: "Quantum Solutions",
        avatar: "https://ui-avatars.com/api/?name=Henry+Davis&background=14b8a6&color=fff&size=128"
    },
    {
        id: 9,
        name: "Isabel Garcia",
        email: "isabel.garcia@example.com",
        phone: "+1 (555) 901-2345",
        company: "Horizon Group",
        avatar: "https://ui-avatars.com/api/?name=Isabel+Garcia&background=f97316&color=fff&size=128"
    },
    {
        id: 10,
        name: "Jack Anderson",
        email: "jack.anderson@example.com",
        phone: "+1 (555) 012-3456",
        company: "NextGen Corp",
        avatar: "https://ui-avatars.com/api/?name=Jack+Anderson&background=84cc16&color=fff&size=128"
    }
];

// Simulated API fetch function with delay
export const fetchContacts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(initialContacts);
        }, 500); // Simulate network delay
    });
};


