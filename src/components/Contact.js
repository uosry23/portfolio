import { useState } from 'react';
import AnimatedElement from './AnimatedElement';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    cv: null,
  });

  const [cvFileName, setCvFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [cvSubmitted, setCvSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // Reset submit status when user changes any input
    if (submitStatus) setSubmitStatus(null);

    if (name === 'cv') {
      const file = files[0];
      if (file && file.type === 'application/pdf') {
        setFormData(prevData => ({
          ...prevData,
          [name]: file,
        }));
        setCvFileName(file.name);
      } else if (file) {
        alert('Please upload a PDF file');
      }
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple required fields validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setCvSubmitted(formData.cv !== null);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        cv: null,
      });
      setCvFileName('');

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setCvSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <AnimatedElement animation="fade-right">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-700 dark:text-gray-300">youremail@example.com</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-700 dark:text-gray-300">+1 (123) 456-7890</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-700 dark:text-gray-300">Your City, Country</p>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Connect With Me</h4>
                <div className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                  <a
                    href="https://www.linkedin.com/in/yousry-ahmed-b5a8972b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.5 8h4v13h-4V8zM8 8h3.7v1.8h.05c.52-1 1.8-2 3.7-2 3.95 0 4.7 2.6 4.7 6v7h-4v-6c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3v6.1H8V8z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/uosry23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-[#333]/10 flex items-center justify-center text-[#333] dark:text-white hover:bg-[#333] hover:text-white transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.42 2.865 8.167 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.252-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.563 9.563 0 0112 6.844c.85.004 1.705.115 2.504.337 1.908-1.296 2.746-1.027 2.746-1.027.546 1.379.203 2.396.1 2.648.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.942.36.31.678.922.678 1.859 0 1.341-.012 2.423-.012 2.754 0 .268.18.58.688.481A10.017 10.017 0 0022 12.017C22 6.484 17.523 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Contact Form */}
          <AnimatedElement animation="fade-left" delay={200}>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>

              {submitStatus === 'success' && (
                <div
                  aria-live="polite"
                  className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg"
                >
                  Thank you for your message! {cvSubmitted ? 'Your CV has been received.' : ''} I'll get back to you as soon as possible.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    placeholder="Write your message here..."
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="cv"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer"
                  >
                    Upload your CV (PDF only)
                  </label>
                  <input
                    key={cvFileName} // force reset input when file changes
                    type="file"
                    id="cv"
                    name="cv"
                    accept="application/pdf"
                    onChange={handleChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="cv"
                    className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md cursor-pointer hover:bg-indigo-700 transition-colors"
                  >
                    {cvFileName || 'Choose a file'}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !formData.name.trim() ||
                    !formData.email.trim() ||
                    !formData.message.trim()
                  }
                  className={`w-full rounded-md py-3 px-5 font-semibold text-white transition-colors
                    ${isSubmitting
                      ? 'bg-indigo-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer'
                    }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Contact;
