export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 bg-blue-50 rounded-2xl shadow-sm mb-12 border border-blue-100">
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">
          All Educational Resources in One Place
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Access free textbooks, past papers, exam notes, and research guides from Matric (9th-10th) to University level.
        </p>
        <a
          href="#categories"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition inline-block"
        >
          Explore Material
        </a>
      </section>

      {/* Categories Grid */}
      <h3 id="categories" className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        Choose Your Study Level
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Matric Card */}
        <div id="matric" className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
          <div className="text-3xl mb-3">🎒</div>
          <h4 className="text-xl font-bold text-blue-700 mb-2">Matric (9th & 10th)</h4>
          <p className="text-gray-600 mb-4">
            Punjab & Federal boards free textbooks, key books, model papers, and past 5 years past papers.
          </p>
          <button className="text-blue-600 font-semibold hover:underline">Download PDFs &rarr;</button>
        </div>

        {/* Inter Card */}
        <div id="inter" className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
          <div className="text-3xl mb-3">🎓</div>
          <h4 className="text-xl font-bold text-blue-700 mb-2">Intermediate (FSc/ICS)</h4>
          <p className="text-gray-600 mb-4">
            FSc notes, chapter-wise MCQs, model papers, and MDCAT / ECAT entry test preparation material.
          </p>
          <button className="text-blue-600 font-semibold hover:underline">Explore Notes &rarr;</button>
        </div>

        {/* University Card */}
        <div id="university" className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
          <div className="text-3xl mb-3">🏛️</div>
          <h4 className="text-xl font-bold text-blue-700 mb-2">University (BS Level)</h4>
          <p className="text-gray-600 mb-4">
            Standard textbooks, semester lecture notes, assignment assistance, and research writing guides.
          </p>
          <button className="text-blue-600 font-semibold hover:underline">Access E-Books &rarr;</button>
        </div>
      </div>

      {/* Research Section */}
      <section id="research" className="mt-16 bg-white p-8 rounded-xl shadow-md border">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🔍 Research & Academic Help</h3>
        <p className="text-gray-600 mb-4">
          Are you a university student looking for research papers? Use these trusted free tools recommended by experts: Google Scholar, CORE, DOAJ, and ResearchGate.
        </p>
        <div className="flex flex-wrap gap-4">
          <span className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-700">Google Scholar Search Tips</span>
          <span className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-700">Thesis Formatting Guides</span>
          <span className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-700">Free PDF Repositories</span>
        </div>
      </section>
    </div>
  );
}
