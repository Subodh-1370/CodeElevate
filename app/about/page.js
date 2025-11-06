import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-in-out">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-900 shadow-xl rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg transition-transform duration-300 transform hover:scale-110 bg-gray-200 dark:bg-gray-700">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                  unoptimized
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-6xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 text-center transition-colors duration-300 hover:text-blue-500">
                About Me
              </h1>
              <p className="text-gray-700 dark:text-gray-200 text-lg mb-4 leading-relaxed">
                Hi there! Welcome to Code Elevate, your destination for comprehensive programming knowledge. I&apos;m Subodh, a dedicated software developer with a passion for Full Stack Development, AI/ML, and IIoT.
              </p>
              <p className="text-gray-700 dark:text-gray-200 text-lg mb-4 leading-relaxed">
                Whether you&apos;re a beginner or experienced coder, you&apos;ll find tutorials, insights, and resources here to help level up your skills.
              </p>
              <p className="text-gray-700 dark:text-gray-200 text-lg italic mt-4">
                &quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot; – Cory House
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 text-gray-800 dark:text-gray-100">
            <div>
              <h2 className="text-2xl font-semibold mb-2">🔧 Technologies &amp; Languages</h2>
              <ul className="list-disc list-inside text-lg">
                <li>JavaScript / TypeScript</li>
                <li>React / Next.js</li>
                <li>Node.js / Firebase / MongoDB</li>
                <li>Python / TensorFlow</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">🌐 Links</h2>
              <ul className="text-lg space-y-1">
                <li>
                  <Link
                    href="https://github.com/Subodh-1370/Pollify"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub: Pollify
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/subodh-singh-6523391a7/"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    LinkedIn: Subodh Singh
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/Subodh-1370"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
