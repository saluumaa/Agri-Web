import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../config/blogPost'
import { ChevronLeft } from 'lucide-react';

const BlogDetails = () => {
  const { postId } = useParams();
  const post = blogPosts.find((post) => post.id === postId);

  if (!post) {
    return <div className="text-center py-8">Post not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg shadow-md" />
      <div className="mt-6">
        <div className="text-sm text-gray-500 mb-2">{post.date}</div>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>
      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-green-500 hover:text-green-600 transition-colors duration-300"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;