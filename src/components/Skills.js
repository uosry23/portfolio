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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              I've acquired a diverse set of skills throughout my journey as a developer. Here's a glimpse of my technical expertise.
            </p>
          </div>
        </AnimatedElement>

        {/* Tech Stack Icons */}
        <AnimatedElement animation="fade-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-24 h-24 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-3xl mb-2">{tech.icon}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </AnimatedElement>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedElement
              key={category.id}
              animation="fade-up"
              delay={categoryIndex * 100}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full"
                          style={{ width: `${skill.level}%`, transition: 'width 1.5s ease-in-out' }}
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
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Redux', 'Tailwind CSS',
                'Firebase', 'Git', 'Expo', 'Responsive Design', 'UI/UX Design', 'Cross-Browser Compatibility',
                'Performance Optimization', 'Problem Solving', 'Team Collaboration'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full shadow-md text-sm font-medium"
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
