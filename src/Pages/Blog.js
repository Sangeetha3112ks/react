import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Our Blog</h1>

      <div className="blog-post">
        <h2>Latest Fashion Trends</h2>
        <p>Discover the newest styles and fashion tips for this season.</p>
        <p className="date">Published: October 26, 2024</p>
      </div>

      <div className="blog-post">
        <h2>Accessory Guide</h2>
        <p>Learn how to choose the perfect accessories to complement your outfits.</p>
        <p className="date">Published: October 20, 2024</p>
      </div>

      <div className="blog-post">
        <h2>Sustainable Shopping Tips</h2>
        <p>Tips for making eco-friendly choices when shopping for clothes and accessories.</p>
        <p className="date">Published: October 15, 2024</p>
      </div>

    </div>
  );
};

export default Blog;