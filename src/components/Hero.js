import React from "react";
import Slider from "rc-slider";

export default function Hero({ isOpen }) {
  const heroItems = [
    "Music",
    "Gaming",
    "Movies",
    "News",
    "Sports",
    "Learning",
    "Fashion",
    "Live",
    "Trending",
    "Subscriptions",
    "Anime",
    "Manga",
    "Cricket",
    "Computer Programming",
    "Software Engineering",
  ];

  return (
    <div className="hero-main">

    <div className="hero-items">
      {heroItems.map((item, index) => (
        <button key={index} className="hero-item">
          {item}
        </button>
      ))}
    </div>
    </div>
  );
}
