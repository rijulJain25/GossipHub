import React, { useState, useContext, } from 'react';
import "./post.scss";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';
import moment from "moment";
import {
  useMutation,
  useQuery, useQueryClient,
} from "@tanstack/react-query";
import { makeRequest } from '../../axiosFile';
import { AuthContext } from '../../context/authContext';

const Post = ({ post }) => {

  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    makeRequest.get("/likes?postId=" + post.id).then((res) => {
      return res.data;
    })
  );

    const queryClient = useQueryClient();
  
    const mutation = useMutation(
      (liked) => {
        if (liked) return makeRequest.delete("/likes?postId=" + post.id);
        return makeRequest.post("/likes", { postId: post.id });
      },
      {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries(["likes"]);
        },
      }
    );
    const deleteMutation = useMutation(
      (postId) => {
        return makeRequest.delete("/posts/" + postId);
      },
      {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries(["posts"]);
        },
      }
    );
  
    const handleLike = (e) => {
      e.preventDefault();
      mutation.mutate( data.includes(currentUser.id) );
    };

    const handleDelete = () => {
      deleteMutation.mutate(post.id);
    };

  return (
    <div className='post '>
    <div className='container'>
      <div className='user'>
        <div className='userInfo'>
          <Link to={`/profile/${post.userId}`} >
            <img src={post.profilePic} alt="" />
          </Link>
          <div className='details'>
            <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }} >
              <span>{post.name} </span>
            </Link>
            <span className='date'>{moment(post.createdAt).fromNow()}</span>
          </div>
        </div>
        <MoreHorizOutlinedIcon onClick={() => setMenuOpen(!menuOpen)} />
          {menuOpen && post.userId === currentUser.id && (
            <button onClick={handleDelete}>delete</button>
          )}
      </div>
      <div className='content'>
        <p>{post.desc}</p>
        <img src={"./upload/"+post.img} alt="" />
      </div>
      <div className='info'>
        <div className='item'>
        {isLoading ? (
              "loading..."
            ) : data.includes(currentUser.id) ? (
              <FavoriteOutlinedIcon
                style={{ color: "red" }}
                onClick={handleLike}
              />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={handleLike} />
            )}
            {data?.length} Likes
        </div>
        <div className='item' onClick={() => setCommentOpen(!commentOpen)}>
        <AddCommentOutlinedIcon />
        7 Comments
        </div>
        <div className='item'>
        <IosShareOutlinedIcon />
        Share
        </div>
      </div>
      {commentOpen && <Comments postId={post.id}/>}
    </div>
    </div>
  )
}

export default Post
