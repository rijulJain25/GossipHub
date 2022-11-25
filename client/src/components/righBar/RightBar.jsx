import "./rightBar.scss";
import { useTheme } from "/Users/rijuljain/Documents/photos/Web Development/react-social-media/client/src/components/UseTheme/useTheme.js";

const RightBar = () => {
 
  const theme = useTheme();

  return (
    <div className="rightbar ${theme}">
      <div className="container">
        <div className="item">
          <span><b>Suggestions For You</b></span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>Henil Jain</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>Henil Jain</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span><b>Latest Activities</b></span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
                 <span>Henil Jain </span> 
                 changed thrie cover picture
              </p>
            </div>
            <span className="timeAgo">1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
                 <span>Henil Jain </span> 
                 liked a post
              </p>
            </div>
            <span className="timeAgo">1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
                 <span>Henil Jain </span> 
                 liked a comment
              </p>
            </div>
            <span className="timeAgo">1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
                <span>Henil Jain </span> 
                posted
              </p>
            </div>
            <span className="timeAgo">1 min ago</span>
          </div>
        </div>
        
        <div className="item">
          <span><b>Online Friends</b></span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online" />
              <span>Henil Jain</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online" />
              <span>Henil Jain</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online" />
              <span>Henil Jain</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online" />
              <span>Henil Jain</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online" />
              <span>Henil Jain</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online" />
              <span>Henil Jain</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default RightBar
