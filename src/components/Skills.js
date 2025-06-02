import React from 'react';
import AnimatedElement from './AnimatedElement';

const Skills = () => {
  // Skill categories with their respective skills
  const skillCategories = [
    {
      id: 1,
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'React.js', level: 88 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      id: 2,
      title: 'Libraries & Frameworks',
      skills: [
        { name: 'Redux', level: 85 },
        { name: 'Expo', level: 80 },
        { name: 'React Native', level: 78 },
        { name: 'Material UI', level: 82 },
        { name: 'Bootstrap', level: 88 },
      ],
    },
    {
      id: 3,
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 88 },
        { name: 'Firebase', level: 85 },
        { name: 'Responsive Design', level: 92 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'Performance Optimization', level: 82 },
      ],
    },
  ];

  // Tech stack icons (you can replace these with actual icons or logos)
  const techStack = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '𝗝𝗦' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Redux', icon: '🔄' },
    { name: 'Tailwind CSS', icon: '🌊' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Git', icon: '📊' },
    { name: 'Expo', icon: '📱' },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-12 sm:mb-16 px-2 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Skills
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I've acquired a diverse set of skills throughout my journey as a developer. Here's a glimpse of my technical expertise.
            </p>
          </div>
        </AnimatedElement>

        {/* Tech Stack Icons */}
        <AnimatedElement animation="fade-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-2 sm:px-0">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-20 sm:w-24 h-20 sm:h-24 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-2xl sm:text-3xl mb-1 sm:mb-2">{tech.icon}</span>
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 truncate max-w-full">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedElement>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedElement
              key={category.id}
              animation="fade-up"
              className="w-full"
              delay={categoryIndex * 100}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-5 border-b border-gray-200 dark:border-gray-700 pb-2">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="w-full">
                      <div className="flex justify-between mb-1">
                        <span
                          className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 truncate max-w-[70%]"
                          title={skill.name}
                        >
                          {skill.name}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full transition-width duration-1500 ease-in-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Additional Skills Section */}
        <AnimatedElement animation="fade-up" delay={300}>
          <div className="mt-12 sm:mt-16 text-center px-2 sm:px-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-5">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                'HTML',
                'CSS',
                'JavaScript',
                'React.js',
                'Next.js',
                'Redux',
                'Tailwind CSS',
                'Firebase',
                'Git',
                'Expo',
                'Responsive Design',
                'UI/UX Design',
                'Cross-Browser Compatibility',
                'Performance Optimization',
                'Problem Solving',
                'Team Collaboration',
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full shadow-md text-xs sm:text-sm font-medium whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Skills;
