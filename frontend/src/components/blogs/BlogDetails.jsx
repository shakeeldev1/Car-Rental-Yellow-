import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../Button";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  useAddCommentMutation,
  useGetSingleBlogQuery,
  useLikeBlogMutation,
  useLikeCommentMutation,
  useGetAllBlogsQuery,
} from "../../redux/slices/BlogSlice";

function BlogDetails() {
  const { id } = useParams();
  const { 
    data: blog, 
    isLoading: isBlogLoading, 
    error: blogError,
    refetch: refetchBlog 
  } = useGetSingleBlogQuery(id);
  
  const { data: allBlogsData } = useGetAllBlogsQuery();
  const [addComment] = useAddCommentMutation();
  const [likeBlog, { isLoading: isLikeLoading }] = useLikeBlogMutation();
  const [likeComment, { isLoading: isCommentLikeLoading }] = useLikeCommentMutation();

  const [newComment, setNewComment] = useState("");
  const [optimisticLikedBlog, setOptimisticLikedBlog] = useState(false);
  const [optimisticLikedComments, setOptimisticLikedComments] = useState({});

  // Sync with server data when it changes
  useEffect(() => {
    if (blog) {
      setOptimisticLikedBlog(blog.isLiked || false);
      const initialLikedComments = {};
      blog.comments?.forEach((comment) => {
        initialLikedComments[comment._id] = comment.isLiked || false;
      });
      setOptimisticLikedComments(initialLikedComments);
    }
  }, [blog]);

  const handleLikeBlog = async () => {
    const newLikedState = !optimisticLikedBlog;
    try {
      // Optimistic update
      setOptimisticLikedBlog(newLikedState);
      
      // Actual API call
      await likeBlog({ blogId: id }).unwrap();
      
      // Refresh data to ensure sync with server
      await refetchBlog();
    } catch (error) {
      // Revert on error
      setOptimisticLikedBlog(!newLikedState);
      toast.error(error.data?.message || "Error liking blog!", {
        position: "top-center",
      });
    }
  };

  const handleLikeComment = async (commentId) => {
    const currentState = optimisticLikedComments[commentId] || false;
    const newState = !currentState;
    
    try {
      // Optimistic update
      setOptimisticLikedComments(prev => ({
        ...prev,
        [commentId]: newState
      }));
      
      // Actual API call
      await likeComment({ blogId: id, commentId }).unwrap();
      
      // Refresh data
      await refetchBlog();
    } catch (error) {
      // Revert on error
      setOptimisticLikedComments(prev => ({
        ...prev,
        [commentId]: currentState
      }));
      toast.error(error.data?.message || "Error liking comment!", {
        position: "top-center",
      });
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) {
      toast.error("Comment cannot be empty!", { position: "top-center" });
      return;
    }

    try {
      await addComment({ blogId: id, commentText: newComment }).unwrap();
      setNewComment("");
      await refetchBlog(); // Refresh to show new comment
    } catch (error) {
      toast.error(error.data?.message || "Error adding comment!", {
        position: "top-center",
      });
    }
  };

  const allBlogs = Array.isArray(allBlogsData) ? allBlogsData : allBlogsData?.blogs || [];
  const popularBlogs = allBlogs.filter((popularBlog) => popularBlog._id !== id);

  if (blogError) return <h2 className="text-red-500 text-center py-10">Error loading blog</h2>;
  if (isBlogLoading) return <h2 className="text-center py-10">Loading...</h2>;
  if (!blog) return <h2 className="text-center py-10">Blog not found</h2>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {blog?.blogImage ? (
                <img
                  src={blog.blogImage}
                  alt="Cover image"
                  className="w-full h-96 object-cover"
                />
              ) : (
                <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Image unavailable</p>
                </div>
              )}

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm text-gray-500">
                    {blog?.publishDate || "Date unavailable"}
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {blog?.category || "Uncategorized"}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {blog?.title || "Title unavailable"}
                </h1>

                <div className="prose max-w-none text-gray-700 mb-6">
                  <p className="text-lg">
                    {blog?.description || "Description unavailable"}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 mb-6">
                  <button
                    onClick={handleLikeBlog}
                    disabled={isLikeLoading}
                    className={`flex items-center gap-2 transition-colors ${
                      optimisticLikedBlog ? "text-red-500" : "text-gray-700 hover:text-red-500"
                    }`}
                  >
                    {optimisticLikedBlog ? (
                      <FaHeart className="text-2xl text-red-500" />
                    ) : (
                      <CiHeart className="text-2xl" />
                    )}
                    <span>{blog?.likes?.length || 0} Likes</span>
                  </button>
                </div>

                {/* Comments Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Comments
                  </h3>
                  <div className="mb-6">
                    <textarea
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      rows="4"
                      placeholder="Share your thoughts..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <div className="mt-3">
                      <Button
                        text="Post Comment"
                        bgHover="black"
                        textHover="white"
                        cutHover="white"
                        onClick={handleAddComment}
                      />
                    </div>
                  </div>

                  {blog?.comments?.length > 0 ? (
                    <div className="space-y-4">
                      {blog.comments.map((comment) => (
                        <div
                          key={comment._id}
                          className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-xs text-gray-500">
                              {comment.date
                                ? new Date(comment.date).toLocaleString()
                                : "Date unavailable"}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-3">
                            {comment.text || "Comment text unavailable"}
                          </p>
                          <button
                            disabled={isCommentLikeLoading}
                            className={`flex items-center gap-1 transition-colors ${
                              optimisticLikedComments[comment._id] 
                                ? "text-red-500" 
                                : "text-gray-500 hover:text-red-500"
                            }`}
                            onClick={() => handleLikeComment(comment._id)}
                          >
                            {optimisticLikedComments[comment._id] ? (
                              <FaHeart className="text-red-500" />
                            ) : (
                              <CiHeart />
                            )}
                            <span className="text-sm">
                              {comment?.likes?.length || 0} Likes
                            </span>
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                      <p className="text-blue-800">
                        No comments yet. Be the first to share your thoughts!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden md:block md:w-1/3">
            <div className="sticky top-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="bg-gray-800 text-white px-4 py-3">
                  <h3 className="font-semibold text-lg">Recent Blogs</h3>
                </div>
                <div className="p-4">
                  {popularBlogs.length > 0 ? (
                    <ul className="space-y-4">
                      {popularBlogs.slice(0, 5).map((popularBlog) => (
                        <li
                          key={popularBlog._id}
                          className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                        >
                          <a
                            href={`/blog/${popularBlog._id}`}
                            className="block hover:bg-gray-50 p-2 rounded transition-colors"
                          >
                            {popularBlog.blogImage && (
                              <img
                                src={popularBlog.blogImage}
                                alt={popularBlog.title}
                                className="w-full h-32 object-cover rounded mb-2"
                              />
                            )}
                            <h4 className="font-medium text-gray-900 line-clamp-2">
                              {popularBlog.title}
                            </h4>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs text-gray-500">
                                {popularBlog.category}
                              </span>
                              <span className="text-xs text-gray-500">
                                {popularBlog.likes?.length || 0} likes
                              </span>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 text-center py-4">
                      No blogs found
                    </p>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-gray-800 text-white px-4 py-3">
                  <h3 className="font-semibold text-lg">Categories</h3>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      Technology
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                      Travel
                    </span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                      Food
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
                      Lifestyle
                    </span>
                    <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">
                      Health
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;