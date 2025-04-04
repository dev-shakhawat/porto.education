
import React from "react";
import NewsCard from "./common/NewsCard";

import blog1 from "../assets/blog-1.jpg"
import blog2 from "../assets/blog-2.jpg"
import blog3 from "../assets/blog-3.jpg"

const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      imageUrl: blog1,
      date: "10 Jan 2025",
      commentCount: 3,
      author: "John Doe",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra lorem , consectetur adipiscing elit...",
    },
    {
      id: 2,
      imageUrl: blog2,
      date: "10 Jan 2025",
      commentCount: 3,
      author: "John Doe",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra lorem , consectetur adipiscing elit...",
    },
    {
      id: 3,
      imageUrl: blog3,
      date: "10 Jan 2025",
      commentCount: 3,
      author: "John Doe",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra lorem , consectetur adipiscing elit...",
    },
  ];

  return (
    <div className="  py-18 w-full bg-[#E1E2E5]">
      <div className="container">
        <h2 className="cmnTitle">
          Latest News
        </h2>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1 mt-6  ">
          {newsItems.map((item) => (
            <NewsCard
              key={item.id}
              imageUrl={item.imageUrl}
              date={item.date}
              commentCount={item.commentCount}
              author={item.author}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
