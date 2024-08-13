import React from "react";
import Slider from "rc-slider";
import {
  AlignJustify,
  Youtube,
  Home,
  PlayCircle,
  Clock,
  ThumbsUp,
  Settings,
  HelpCircle,
  Film,
  Music,
  Gamepad2,
  Podcast,
  Bell,
  ChevronRight,
  ListVideo,
  SquarePlay,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen }) {
  const sidebarItems = [
    {
      title: "Home",
      icon: <Home />,
      link: "/",
      content: [],
    },
    {
      title: "Shorts",
      icon: <Film />,
      link: "/shorts",
      content: [],
    },
    {
      title: "Subscriptions",
      icon: <Bell />,
      link: "/subscriptions",
      content: [],
    },

    {
      title: "You",
      icon: <ChevronRight />,
      link: "/library",
      content: [
        { title: "History", icon: <Clock />, link: "/You/history" },
        { title: "Playlist", icon: <ListVideo />, link: "/You/playlist" },
        {
          title: "Your Videos",
          icon: <PlayCircle />,
          link: "/You/your-videos",
        },
        { title: "Watch Later", icon: <Clock />, link: "/You/watch-later" },
        {
          title: "Liked Videos",
          icon: <ThumbsUp />,
          link: "/You/liked-videos",
        },
      ],
    },
    {
      title: "Subscriptions",
      // icon: <Bell />,
      link: "/subscriptions",
      content: [
        { title: "Channel 1", icon: <Home />, link: "/subscriptions/channel1" },
        { title: "Channel 2", icon: <Home />, link: "/subscriptions/channel2" },
        { title: "Channel 3", icon: <Home />, link: "/subscriptions/channel3" },
        // Add more subscribed channels
      ],
    },
    {
      title: "Explore",
      icon: <Film />,
      link: "/explore",
      content: [
        { title: "Music", icon: <Music />, link: "/explore/music" },
        { title: "Gaming", icon: <Gamepad2 />, link: "/explore/gaming" },
        { title: "News", icon: <Film />, link: "/explore/news" },
        { title: "Podcasts", icon: <Podcast />, link: "/explore/podcasts" },
      ],
    },
    {
      title: "Settings",
      icon: <Settings />,
      link: "/settings",
      content: [],
    },
    {
      title: "Help",
      icon: <HelpCircle />,
      link: "/help",
      content: [],
    },
  ];

  const sidebarItemsToggle = [
    {
      title: "Home",
      icon: <Home />,
      link: "/",
    },
    {
      title: "Shorts",
      icon: <Film />,
      link: "/shorts",
    },
    {
      title: "Subscriptions",
      icon: <Bell />,
      link: "/subscriptions",
    },
    {
      title: "You",
      icon: <SquarePlay />,
      link: "/library",
    },
  ];

  return (
    <div
      className="sidebar-main"
      style={{ minWidth: isOpen ? "250px" : "100px" }}
    >
      {isOpen ? (
        <>
          {sidebarItems.map((item, index) => (
            <div key={index} className="sidebar-group">
              <div className="sidebar-items">
                <Link to={item.link} className="sidebar-link">
                  <div className="sidebar-item">
                    {item.title !== "You" && item.icon}
                    <span className="item-title">{item.title}</span>
                    {item.title === "You" && item.icon}
                  </div>
                </Link>
              </div>

              {item.content.length > 0 && (
                <div className="sidebar-sub-items">
                  {item.content.map((c_item, subIndex) => (
                    <Link
                      to={c_item.link}
                      key={subIndex}
                      className="sidebar-sub-link"
                    >
                      <div className="sidebar-sub-item">
                        {c_item.icon}
                        <span className="sub-item-title">{c_item.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        <>
          {sidebarItemsToggle.map((item, index) => (
            <div className="sidebarToggleItems">
              <Link to={item.link} className="sidebarToggleLink">
                <button className="sidebarToggleItem">
                  {item.icon}
                  <span className="itemToggleTitle">{item.title}</span>
                </button>
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
