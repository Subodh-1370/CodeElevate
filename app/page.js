"use client"
import { Button } from "@/components/ui/button"
import Typed from 'typed.js';
import React, {useRef, useEffect} from 'react';

export default function Home() {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Coding', 'Web Development', 'Software Engineering', 'Data Science', 'Machine Learning'],
        typeSpeed: 50,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []); 

  return (
    <main className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-white">
  <section className="container px-4 py-16 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
    <div className="w-full text-center lg:text-left lg:w-1/2">
      <h1 className="text-4xl font-bold leading-snug md:text-5xl">
        A <span className="text-yellow-300">Free Library</span> of community-contributed<br className="hidden lg:block" />
        coding resources and components like 
        <span className="font-semibold underline decoration-white ml-1">
          <span ref={el} />
        </span>
      </h1>
      <p className="mt-6 text-lg text-gray-100">
        Discover a comprehensive learning platform designed for coders, beginners, and enthusiasts alike. <br />
        While <b className="text-white">enhancing your coding skills!</b>
      </p>
      <div className="mt-6 bg-white/10 border border-white/30 rounded-lg lg:w-2/3 focus-within:border-white focus-within:ring focus-within:ring-white/40">
        <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between p-2">
          {/* Add your input and button elements here */}
        </form>
      </div>
    </div>
    <div className="w-full mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
      <img
        src="https://i.pinimg.com/originals/d3/46/4a/d3464a4351fdf340ccb6bb37c281381a.gif"
        alt="Coding animation"
        className="w-full h-auto max-w-md rounded-xl shadow-xl"
      />
    </div>
  </section>



      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-up dark:from-indigo-300 dark:to-pink-300">
  Top Blogs
</h2>

            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="https://plus.unsplash.com/premium_photo-1706382043344-4a901b8e1864?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJsb2dnaW5nfGVufDB8fDB8fHww" className="w-full h-64 object-cover rounded-t-lg"/>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 1</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
                  <Button
  className="m-2 px-4 py-2 text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 transition-all duration-300 rounded-md shadow"
  href="/blog-post-2"
>
  Read More
</Button>

                </div>
              </div>
            </div>
            {/* Blog 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="https://images.unsplash.com/photo-1604933762023-7213af7ff7a7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg"/>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 2</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
                  <Button
  className="m-2 px-4 py-2 text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 transition-all duration-300 rounded-md shadow"
  href="/blog-post-2"
>
  Read More
</Button>

                </div>
              </div>
            </div>
            {/* Blog 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="https://images.unsplash.com/photo-1625123627242-97ef1000c6d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ2dpbmd8ZW58MHx8MHx8fDA%3D" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg"/>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 3</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
                  <Button
  href="/blog-post-2"
  className="m-2 px-4 py-2 text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 transition-all duration-300 rounded-md shadow dark:shadow-lg"
>
  Read More
</Button>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-white">Subscribe to Our Newsletter</h2>
      <p className="mt-4 text-lg text-gray-100">Stay updated with the latest blog posts and coding resources.</p>
    </div>
    <form className="flex justify-center">
      <input
        type="email"
        placeholder="Enter your email"
        className="p-2 rounded-l-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white"
        required
      />
      <Button
  type="submit"
  className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-r-lg hover:bg-gray-100 transition self-center"
>
  Subscribe
</Button>

    </form>
  </div>
</section>


      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">User Testimonials</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">What our users say about us</p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <p className="text-gray-600 dark:text-gray-400">"This platform has transformed my coding journey! The resources are top-notch."</p>
                <p className="mt-4 font-semibold text-gray-800 dark:text-gray-200">- User 1</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <p className="text-gray-600 dark:text-gray-400">"I love the community aspect and the variety of resources available."</p>
                <p className="mt-4 font-semibold text-gray-800 dark:text-gray-200">- User 2</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <p className="text-gray-600 dark:text-gray-400">"A fantastic place to learn and grow as a developer!"</p>
                <p className="mt-4 font-semibold text-gray-800 dark:text-gray-200">- User 3</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};