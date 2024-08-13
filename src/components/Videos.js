import { Link } from "react-router-dom";

export default function Videos() {
  const videoData = [

      {
        id: "abc123",
        thumbnail: "47b92ae3cd92f797aa1e9af3d40a396c.jpg",
        title: "Example Video Title",
        channelName: "Channel Name",
        channelImage: "CloudsConvert_high-1723375892.jpg",
        views: "1.2M",
        uploadTime: "2 days ago",
      } 

]
    

  return (
    <div className="video-main">
      {videoData.map((video)=>
      Array.from({length:12}).map((_,index)=>(
        <div className="video-card">
          <Link to={`/video/${video.id}`}>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="video-thumbnail"
            />
          </Link>
          <div className="video-info">
            <img
              src={video.channelImage}
              alt={video.channelName}
              className="channel-image"
            />
            <div className="video-details">
              <span className="video-title">{video.title}</span>
              <span className="channel-name">{video.channelName}</span>
              <span className="video-stats">
                {video.views} views • {video.uploadTime}
              </span>
            </div>
          </div>
        </div>
        )))}
    </div>
  );
}
