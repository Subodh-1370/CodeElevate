import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-in-out">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-900 shadow-xl rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg transition-transform duration-300 transform hover:scale-110">
                <Image
                  src="/images/profile.jpg" // Make sure this image is in public/images/profile.jpg
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-6xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 text-center transition-colors duration-300 hover:text-blue-500">
                About Me
              </h1>
              <p className="text-gray-700 dark:text-gray-200 text-lg mb-4 leading-relaxed">
                Hi there! I'm Subodh, a dedicated software developer and tech enthusiast with a flair for DSA, Full Stack Development, Machine Learning, AI, and IIoT. This blog is my canvas to share insights, experiences, and tutorials on a myriad of programming languages and cutting-edge technologies. I firmly believe that learning is a lifelong adventure, and I'm excited to guide others on their journey to coding mastery.
              </p>
              <p className="text-gray-700 dark:text-gray-200 text-lg mb-4 leading-relaxed">
                Whether you're a novice eager to learn or a seasoned coder looking to refine your skills, you'll discover a treasure trove of resources and insights here. Together, let's embark on an exhilarating exploration of the programming universe!
              </p>
              <p className="text-gray-700 dark:text-gray-200 text-lg italic mt-4">
                "Code is like humor. When you have to explain it, it’s bad." - Cory House
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
