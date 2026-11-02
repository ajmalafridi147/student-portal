import './globals.css';

export const metadata = {
  title: 'Student Portal PK - Free Study Material & Notes',
  description: 'Free textbooks, past papers, notes and research guides from Matric to University level.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 min-h-screen flex flex-col font-sans">
        {/* Header */}
        <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-wide">📚 Student Portal PK</h1>
            <nav className="space-x-6 hidden md:flex font-medium">
              <a href="#matric" className="hover:underline">Matric</a>
              <a href="#inter" className="hover:underline">Intermediate</a>
              <a href="#university" className="hover:underline">University</a>
              <a href="#research" className="hover:underline">Research</a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-6 mt-10">
          <p>© 2026 Student Portal PK. Free Educational Resources for Everyone.</p>
        </footer>
      </body>
    </html>
  );
}
