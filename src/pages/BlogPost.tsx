// src/pages/BlogPost.tsx
import { useParams } from "react-router-dom";
import remarkGfm from 'remark-gfm';
import ReactMarkdown from "react-markdown";
import { blogs } from "../data/blogs";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import rehypeRaw from "rehype-raw";

export default function BlogPost() {
  const { id } = useParams();
  const blog = blogs.find((b) => String(b.id) === id);

  if (!blog) return <div className="text-white text-center py-20">Blog not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-white">
   <div className="mb-4 mt-8">
  <a
    href="/knowledge-hub"
    className="inline-flex items-center px-4 py-2 rounded-md text-white font-medium bg-gradient-to-r from-purple-500 to-blue-500 shadow hover:opacity-90 transition"
  >
    <ArrowLeft className="w-4 h-4 mr-2" />
    Back to Blogs
  </a>
</div>

      <article>
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        <div className="flex items-center text-sm text-gray-400 mb-6 space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(blog.date).toLocaleDateString("en-GB")}</span>
          </div>
          <span>{blog.readTime}</span>
        </div>

        <img
          src={blog.image}
          alt={blog.title}
          className={`rounded-lg mb-6 w-full h-auto ${
    blog.id === 11 ? "max-h-64 object-contain bg-gray-100 p-2" : "max-h-96 object-cover"
  }`}
         />


        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center space-x-1 px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
            >
              <Tag className="w-3 h-3" />
              <span>{tag}</span>
            </span>
          ))}
        </div>

        <div className="mt-6 text-sm text-gray-400">
                Written by{" "}
                <a
                  href={blog.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:underline"
                >
                  {blog.author}
                </a>
        </div><br />
<div className="prose prose-invert max-w-none text-gray-300 mb-6">
 <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  rehypePlugins={[rehypeRaw]}
  >
  {blog.content}
</ReactMarkdown>
</div>

      </article>
    </div>
  );
}
