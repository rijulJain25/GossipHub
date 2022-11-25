import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";
import Stories from "../../components/stories/Stories";
import "./home.scss";
import { useTheme } from "/Users/rijuljain/Documents/photos/Web Development/react-social-media/client/src/components/UseTheme/useTheme.js";

const Home = () => {
  
  const theme = useTheme();
  
  return (
    <div className="home ${theme}">
      <Stories />
      <Share />
      <Posts />
      
    </div>
   
  )
}

export default Home
