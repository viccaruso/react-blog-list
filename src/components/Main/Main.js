import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { useBlogs } from '../../hooks/useBlogs';
export default function Main() {
  const { blogs } = useBlogs();
  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
}
