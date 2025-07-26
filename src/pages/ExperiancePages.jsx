export const ExperiancePages = () => {
  return (
    <section id="experience" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 font-mono">Experience</h2>

        {/* Experience Item 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 transition-all duration-300 hover:shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Programmer</h3>
              <p className="text-lg text-gray-600">PT Inti Anugerah Teknologi Indonesia</p>
            </div>
            <p className="text-md text-gray-500 mt-2 md:mt-0">Oct 2024 - Mei 2025</p>
          </div>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 text-justify">
            <li>Developed and maintained ERP application features using C# and ASP.NET Framework.</li>
            <li>Designed and optimized MySql database, including stored procedures, triggers, and indexing.</li>
            <li>Analyzed business requirements and translated them into MVC-based system designs.</li>
            <li>Utilized Jenkins for automating the build and deployment process.</li>
            <li>Collaborated with the team and debugging using Visual Studio.</li>
            <li>Conduct Quality Control (QC) testing to ensure system reliability and performance.</li>
            <li>Create comprehensive user manuals and documentation for system users</li>
          </ul>
        </div>

        {/* Experience Item 2 (Jika Ada) */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 transition-all duration-300 hover:shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Mobile Development</h3>
              <p className="text-lg text-gray-600">Bangkit Academy led by Google, GoTo, & Traveloka</p>
            </div>
            <p className="text-md text-gray-500 mt-2 md:mt-0">Aug 2023 - Jan 2024</p>
          </div>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 text-justify">
            <li>
              Bangkit is a unique career readiness program led by Google and delivered with support from industry experts from their industry partner like GoTo, Traveloka, and Deeptech Foundation. The program is designed to provide
              participants with first-hand exposure to real-world practicioners and prepare them with relevant skills for a successful career in leading tech companies. I am successfully selected to be one of 4K participants from 50k
              applicants as Mobile Development.
            </li>
            <li> Successfully completing Bangkit, with the best 50 product-based capstone projects out of 639 projects 🏆.</li>
            <li>Collaborating with a team of other 6 students on a Capstone Project to develop a mobile app for mental health</li>
          </ul>
        </div>

        {/* Tambahkan lebih banyak entri pengalaman jika diperlukan */}
      </div>
    </section>
  );
};
