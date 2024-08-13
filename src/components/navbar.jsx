import React, { useState } from "react";
import {
  AlignJustify,
  Youtube,
  Search,
  Plus,
  Mic,
  Bell,
  UserRoundPen,
  Upload,
  Video,
  Edit,
  User,
  LogOut,
  Settings,
  Wallet,
  Shield,
  Moon,
  Globe,
  Lock,
  LayoutGrid,
  HelpCircle,
  MessageSquare,
  CircleUserRound,
} from "lucide-react";

export default function Navbar({ onSearch, onOpenChange }) {
  const [isOpen, setIsOpen] = React.useState(true);

  const [createIsOpen, setCreateIsOpen] = useState(false);

  const [profileIsOpen, setProfileIsOpen] = useState(false);

  const handleProfile = () => {
    setProfileIsOpen(!profileIsOpen);
    {createIsOpen && setCreateIsOpen(!createIsOpen)}
  };

  const handleCreate = () => {
    setCreateIsOpen(!createIsOpen);
    {profileIsOpen && setProfileIsOpen(!profileIsOpen)}
  };

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
    onOpenChange(isOpen);
  };

  const [query, setQuery] = React.useState("");

  const handleInputCharge = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className="navbar-main">
      <div className="navbar-title">
        <div className="toggle">
          <a onClick={toggleSidebar} className="toggle-btn">
            <AlignJustify />
          </a>
        </div>
        <div className="yotube-icon">
          <a href="/" className="youtube-btn">
            <Youtube />
          </a>
        </div>
        <span className="youtube-title">Youtube</span>
      </div>

      <div className="search">
        <form className="search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleInputCharge}
          />
          <button className="search-btn">
            <Search size={16} />
          </button>
        </form>
        <button className="microphone-btn">
          <Mic />
        </button>
      </div>
      <div className="sidebar-rigth">
        <div className="createDropdown">
          <button className="create-btn" onClick={handleCreate}>
            <Plus size={20} />
            <span>Create</span>
          </button>
          {createIsOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item">
                <Upload size={18} />
                <span>Upload Video</span>
              </button>
              <button className="dropdown-item">
                <Video size={18} />
                <span>Go Live</span>
              </button>
              <button className="dropdown-item">
                <Edit size={18} />
                <span>Create Post</span>
              </button>
            </div>
          )}
        </div>
        <button className="bell-btn">
          <Bell />
        </button>
        <div className="profile-dropdown">
          <button className="profile-btn" onClick={handleProfile}>
            <UserRoundPen />
          </button>

          {profileIsOpen && (
            <div
              className="dropdown-menu"
              style={{ right: "0", minWidth: "250px" }}
            >
              <div className="profile-header">
                <div className="profile-avatar">
                  <img src="your-avatar-url" />
                </div>
                <div className="profile-info">
                  <h4>Arth Agrawal</h4>
                  <p>@arthagrawal1661</p>
                  <a href="/channel">View your channel</a>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-buttons">
                <button className="dropdown-item">
                  <User size={18} />
                  <span>Google Account</span>
                </button>
                <button className="dropdown-item">
                  <CircleUserRound size={18} />
                  <span>Switch Account</span>
                </button>
                <button className="dropdown-item">
                  <LogOut size={18} />
                  <span>Sign out</span>
                </button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item">
                  <Video size={18} />
                  <span>YouTube Studio</span>
                </button>
                <button className="dropdown-item">
                  <Wallet size={18} />
                  <span>Purchases and memberships</span>
                </button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item">
                  <Shield size={18} />
                  <span>Your data in YouTube</span>
                </button>
                <button className="dropdown-item">
                  <Moon size={18} />
                  <span>Appearance: Dark</span>
                </button>
                <button className="dropdown-item">
                  <Globe size={18} />
                  <span>Language: British English</span>
                </button>
                <button className="dropdown-item">
                  <Lock size={18} />
                  <span>Restricted Mode: Off</span>
                </button>
                <button className="dropdown-item">
                  <LayoutGrid size={18} />
                  <span>Location: India</span>
                </button>
                <button className="dropdown-item">
                  <Settings size={18} />
                  <span>Keyboard shortcuts</span>
                </button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item">
                  <Settings size={18} />
                  <span>Settings</span>
                </button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item">
                  <HelpCircle size={18} />
                  <span>Help</span>
                </button>
                <button className="dropdown-item">
                  <MessageSquare size={18} />
                  <span>Send feedback</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
