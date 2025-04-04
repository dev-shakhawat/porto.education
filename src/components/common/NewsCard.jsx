"use client";

import React from "react";

const NewsCard = ({
  imageUrl,
  date,
  commentCount,
  author,
  title,
  description,
}) => {
  return (
    <article className="p-4 bg-white shadow-2xl">
      <figure className="mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[167px] object-cover"
        />
      </figure>
      <div className="flex items-center mb-3 text-xs uppercase text-secondery">
        <time dateTime={date}>{date}</time>
        <span className="mx-2 opacity-30">|</span>
        <span>{commentCount} Comments</span>
        <span className="mx-2 opacity-30">|</span>
        <span>{author}</span>
      </div>
      <h3 className="cmnSubTitle mb-[14px]  ">
        {title}
      </h3>
      <p className="mb-3 text-sm leading-7 text-secondery mr-14 ">{description}</p>
      <a
        href="#"
        className="text-sm font-bold leading-5 text-brand "
      >
        READ MORE
      </a>
    </article>
  );
};

export default NewsCard;
