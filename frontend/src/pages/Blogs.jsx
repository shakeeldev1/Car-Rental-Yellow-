import { useState } from "react";
import Heading from "../components/blogs/Heading";
import BlogCards from "../components/blogs/BlogCards";
import BlogLabel from "../components/blogs/BlogLabel";

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <div>
      <Heading />
      <div className="grid grid-cols-3">
        <div className="md:col-span-1">
          <BlogLabel 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="md:col-span-2 col-span-3">
          <BlogCards selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;