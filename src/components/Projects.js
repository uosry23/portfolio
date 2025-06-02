
import AnimatedElement from './AnimatedElement';
import Gloo from '../assests/gloo-market.vercel.app_ (2).png';
import araby from '../assests/3araby.vercel.app_ (3).png'
import male from '../assests/male-fashion-nu.vercel.app_.png'
import movie from '../assests/movie-khaki-nu.vercel.app_ (1).png'
import Sodfa from '../assests/Sodfa.png'
const Projects = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: 'Gloo Market',
      description: 'Developed a modern e-commerce platform using React.js and Redux Toolkit. Features include clean UI, responsive layout, cart management, and scalability best practices.',
      tags: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Responsive Design'],
      image: Gloo,
      demoLink: 'https://gloo-market.vercel.app/',
      codeLink: 'https://github.com/uosry23/gloo-market', // Replace with actual if exists
    },
    {
      id: 2,
      title: '3araby',
      description: 'Built a fashion platform using Next.js and Firebase. Integrated real-time data, user authentication, and optimized shopping experience on all devices.',
      tags: ['Next.js', 'Firebase', 'Authentication', 'Real-time Data'],
      image: araby,
      demoLink: 'https://3araby.vercel.app/',
      codeLink: 'https://github.com/uosry23/3araby', // Replace with actual if exists
    },
    {
      id: 3,
      title: 'Movie App',
      description: 'Created a movie browsing app with React.js featuring smooth navigation, fast load times, and intuitive UI to explore movie data.',
      tags: ['React.js', 'API Integration', 'Performance Optimization', 'Responsive UI'],
      image: movie,
      demoLink: 'https://movie-khaki-nu.vercel.app/',
      codeLink: 'https://github.com/uosry23/movie-app', // Replace with actual if exists
    },
    {
      id: 4,
      title: 'Sodfa',
      description: 'Sodfa is a dynamic storytelling platform built with Next.js and Firebase, allowing users to share and discover spontaneous life moments. It features real-time updates and a seamless, responsive design for an engaging user experience.',
      tags: ['React.js', 'Mobile Optimization', 'firebase', 'UI/UX Design'],
      image: Sodfa,
      demoLink: 'https://sodfa.vercel.app/',
      codeLink: 'https://github.com/uosry23/Sodfa.git', // Replace with actual if exists
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
            <p className="max-w-2xl mx-auto text-sm md:text-lg text-gray-600 dark:text-gray-300">
              Here are some of my featured projects showcasing my skills in React.js, Next.js, Redux, and other modern web technologies.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <AnimatedElement
              key={project.id}
              animation="fade-up"
              className="mb-8"
              delay={(index % 2) * 200}
              className="h-full"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex space-x-3">
                        <a
                          href={project.demoLink}
                          className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.codeLink}
                          className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors duration-300"
                        >
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animation="fade-up" delay={300}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/uosry23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              See More on GitHub
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Projects;

