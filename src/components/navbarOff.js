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
} from "lucide-react";

export default function NavbarOff({ onSearch, onOpenChange }) {
  const [isOpen, setIsOpen] = React.useState(true);

  const [createIsOpen, setCreateIsOpen] = useState(false);

  const handleCreate = () => {
    setCreateIsOpen(!createIsOpen);
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
        
      </div>
    </div>
  );
}
