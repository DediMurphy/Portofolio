import { Github, Linkedin, Mail } from "lucide-react";

export const AboutPages = () => {
  return (
    <section id="aboutpage" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-mono">About Me</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-justify font-sans">
              I am an undergraduate student majoring in Information Technology who has an interest in mobile application development. Since the beginning of my studies, I have been interested in the world of technology, especially in
              software development. Nowadays, I am increasingly interested in focusing on mobile app development because I believe that the mobility and connectivity offered by mobile devices can open up huge opportunities in improving user
              experience and solving various problems in everyday life.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-justify"> In my educational journey, I have learned the basic concepts of programming, data structures, and algorithms. Additionally, I have also gained a solid understanding of
              mobile application platform development, such as Android. I have attended various courses, training and small projects to improve my skills in software development.</p>
              <div className="flex gap-4">
                <a href="https://github.com/DediMurphy">
                  <Github className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/dedi-murphy-8119bb238/">
                  <Linkedin className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                </a>
                <a href="dedimurphy05@gmail.com">
                <Mail className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-6xl text-gray-400">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
