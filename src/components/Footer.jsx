import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="mt-16 pb-8 text-center text-gray-600">
            <div className="flex items-center justify-center gap-2">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>for Tria Assignment</span>
            </div>
            <div className="mt-2 text-sm">
                React • Vite • Tailwind CSS
            </div>
        </footer>
    );
};

export default Footer;


