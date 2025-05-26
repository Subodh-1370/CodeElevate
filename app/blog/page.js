import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import fs from "fs";
import matter from 'gray-matter';

// Load all blog post metadata
const dirContent = fs.readdirSync("content", "utf-8");
const blogs = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 dark:text-gray-100">
  Our Latest{' '}
  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
    Blog Posts
  </span>
</h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {blog.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {blog.description}
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                <span>By {blog.author}</span> |{" "}
                <span>
                  {new Date(blog.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <Link
                href={`/blogpost/${blog.slug}`}
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 rounded-md shadow transition-all duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
