import { useEffect, useState, useRef } from 'react';
import DownloadCVButton from '../Cv';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = useRef(100);
  const deletingSpeed = useRef(50);
  const pauseTime = useRef(1500);

  // Words to animate through
  const words = ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Firebase'];

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const typeWriter = () => {
      if (!isDeleting && typedText === currentWord) {
        // Pause at the end of typing a word
        setTimeout(() => setIsDeleting(true), pauseTime.current);
        return;
      }

      if (isDeleting && typedText === '') {
        // Move to the next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      // Set the typing speed
      const speed = isDeleting ? deletingSpeed.current : typingSpeed.current;

      // Update the text
      setTimeout(() => {
        setTypedText(prev =>
          isDeleting
            ? prev.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, speed);
    };

    const timer = setTimeout(typeWriter, 100);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentWordIndex, words]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-200/30 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-200/30 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} px-4`}>
            <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg md:text-xl mb-2 flex items-center ">
              <span className="inline-block mr-2 animate-wave">👋</span> Hello, I'm
            </h2>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2">
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text animate-pulse">Yousry Ahmed</span>
            </h1>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="block">Front-End</span>
              <span className="block text-indigo-600 dark:text-indigo-400">Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-lg">
              I specialize in building modern web applications with
              <span className="relative inline-block mx-1">
                <span className="relative z-10 text-indigo-600 dark:text-indigo-400 font-semibold">{typedText}</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-indigo-100 dark:bg-indigo-900/30 -z-10 transform -rotate-1"></span>
                <span className="absolute inline-block w-0.5 h-5 bg-indigo-600 dark:bg-indigo-400 ml-1 animate-blink"></span>
              </span>
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Creating responsive, user-friendly interfaces that deliver exceptional experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                View My Work
              </a>
              <a
                href="/Resume.pdf"
                download="Yousry_CV.pdf"  // اسم الملف اللي هينزل به
                className="px-6 py-3 outline outline-indigo-400  text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Download Cv
              </a>

            </div>

            {/* Tech stack badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js'].map((tech, index) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.5s ease-out forwards',
                    opacity: 0,
                    transform: 'translateY(10px)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Animated Illustration/Image */}
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 dark:bg-indigo-900/30 rounded-full filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-200 dark:bg-purple-900/30 rounded-full filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-200 dark:bg-pink-900/30 rounded-full filter blur-xl opacity-50 animate-ping" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>

              {/* Main image/illustration container */}
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-2 transform transition-all duration-500 hover:rotate-1 hover:scale-105">
                <div className="aspect-w-4 aspect-h-3 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center transform transition-transform hover:rotate-12">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-white text-2xl font-bold mb-1">Yousry Ahmed</p>
                    <p className="text-white text-xl font-semibold">Front-End Developer</p>
                    <p className="text-white/80 mt-2">React.js • Next.js • Redux</p>
                    <div className="mt-4 flex justify-center space-x-3">
                      <a href="https://github.com/uosry23" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 1.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/yousry-ahmed-b5a8972b6/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-1">
            <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
