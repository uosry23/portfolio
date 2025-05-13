import React from 'react';
import AnimatedElement from './AnimatedElement';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Code Element Side */}
          <AnimatedElement animation="fade-right">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 dark:bg-indigo-900/30 rounded-full filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-200 dark:bg-purple-900/30 rounded-full filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>

              {/* Code editor mockup */}
              <div className="relative z-10 bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                <div className="h-8 bg-gray-800 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-gray-400 text-xs font-mono">developer.js</div>
                </div>

                <div className="p-4 font-mono text-sm text-left h-full" style={{ minHeight: '400px' }}>
                  <div className="text-blue-400">class <span className="text-green-400">FrontEndDeveloper</span> {`{`}</div>
                  <div className="pl-6 text-yellow-300">constructor<span className="text-white">()</span> {`{`}</div>
                  <div className="pl-10 text-white">this.<span className="text-purple-400">name</span> = <span className="text-orange-400">"Yousry Ahmed"</span>;</div>
                  <div className="pl-10 text-white">this.<span className="text-purple-400">title</span> = <span className="text-orange-400">"Front-End Developer"</span>;</div>
                  <div className="pl-10 text-white">this.<span className="text-purple-400">experience</span> = <span className="text-green-400">2</span>;</div>
                  <div className="pl-10 text-white">this.<span className="text-purple-400">education</span> = <span className="text-orange-400">"Computer Science, Cairo University"</span>;</div>
                  <div className="pl-6 text-white">{`}`}</div>
                  <div className="mt-4 pl-6 text-yellow-300">skills<span className="text-white">()</span> {`{`}</div>
                  <div className="pl-10 text-white">return [</div>
                  <div className="pl-14 text-orange-400">"HTML"</div>
                  <div className="pl-14 text-orange-400">"CSS"</div>
                  <div className="pl-14 text-orange-400">"JavaScript"</div>
                  <div className="pl-14 text-orange-400">"React.js"</div>
                  <div className="pl-14 text-orange-400">"Next.js"</div>
                  <div className="pl-14 text-orange-400">"Redux"</div>
                  <div className="pl-14 text-orange-400">"Tailwind CSS"</div>
                  <div className="pl-14 text-orange-400">"Firebase"</div>
                  <div className="pl-14 text-orange-400">"Git"</div>
                  <div className="pl-14 text-orange-400">"Expo"</div>
                  <div className="pl-10 text-white">];</div>
                  <div className="pl-6 text-white">{`}`}</div>
                  <div className="mt-4 pl-6 text-yellow-300">projects<span className="text-white">()</span> {`{`}</div>
                  <div className="pl-10 text-white">return [</div>
                  <div className="pl-14 text-orange-400">"Gloo Market" <span className="text-gray-400">// React.js, Redux</span></div>
                  <div className="pl-14 text-orange-400">"3araby" <span className="text-gray-400">// Next.js, Firebase</span></div>
                  <div className="pl-14 text-orange-400">"Movie App" <span className="text-gray-400">// React.js</span></div>
                  <div className="pl-14 text-orange-400">"Male Fashion" <span className="text-gray-400">// React.js</span></div>
                  <div className="pl-10 text-white">];</div>
                  <div className="pl-6 text-white">{`}`}</div>
                  <div className="text-white">{`}`}</div>
                </div>

                {/* Experience badge */}
                <div className="absolute top-6 right-6 bg-white dark:bg-gray-800 rounded-full shadow-lg px-4 py-2 flex items-center">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg mr-1">2+</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Years Experience</span>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Text Content Side */}
          <AnimatedElement animation="fade-left" delay={200}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm Yousry Ahmed, a Front-End Developer with hands-on experience in crafting fast, responsive, and user-focused web applications using modern technologies like React.js and Next.js. I’m deeply passionate about clean code, performance optimization, and delivering beautiful interfaces.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                While pursuing a Computer Science degree at Cairo University, I’ve also completed intensive front-end training and contributed to several real-world projects including e-commerce platforms and movie discovery apps. My development philosophy emphasizes scalability, speed, and great user experience.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-gray-900 dark:text-white">Featured Projects:</span> Developed Gloo Market (React.js/Redux), 3araby (Next.js/Firebase), Movie App (React.js), and Male Fashion (React.js).
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-gray-900 dark:text-white">Modern Stack:</span> Proficient in JavaScript, React, Tailwind CSS, Next.js, Firebase, and Git.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-gray-900 dark:text-white">Always Improving:</span> I continuously upgrade my skills through courses and project-based learning.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get In Touch
                </a>
                <a
                  href="https://my-portfolio-ten-pink-54.vercel.app/"
                  className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>

  );
};

export default About;
