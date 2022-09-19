import { useEffect } from 'react';
import { useState } from 'react';
import { getBlogs } from '../services/client';

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchData();
  }, []);

  return blogs;
}
