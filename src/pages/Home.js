import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { AuthContext } from "../helpers/AuthContext";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);

  // 从 Context 中获取 authState(from app.js)
  const { authState } = useContext(AuthContext);
  // 现在可以访问：
  // authState.username - 当前登录用户的用户名
  // authState.id - 当前登录用户的ID
  // authState.status - 是否已登录

  let navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // 使用 authState.status 检查登录状态
    if (!localStorage.getItem("accessToken")) {
      //如果没有登陆，自动导入到login页面
      navigate("/login");
    } else {
      axios
        .get("https://social-wave-api-fei-2ff147133f84.herokuapp.com/posts", {
          headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((response) => {
          setListOfPosts(response.data.listOfPosts);
          setLikedPosts(
            response.data.likedPosts.map((like) => {
              return like.PostId;
            })
          );
        });
    }
  }, []);

  const likeAPOst = (postId) => {
    axios
      .post(
        "https://social-wave-api-fei-2ff147133f84.herokuapp.com/likes",
        { PostId: postId },
        { headers: { accessToken: localStorage.getItem("accessToken") } }
      )
      .then((response) => {
        setListOfPosts(
          listOfPosts.map((post) => {
            if (post.id === postId) {
              if (response.data.liked) {
                return { ...post, Likes: [...post.Likes, 0] };
              } else {
                const likeArray = post.Likes;
                likeArray.pop();
                return { ...post, Likes: likeArray };
              }
            } else {
              return post;
            }
          })
        );

        if (likedPosts.includes(postId)) {
          setLikedPosts(
            likedPosts.filter((id) => {
              return id !== postId;
            })
          );
        } else {
          setLikedPosts([...likedPosts, postId]);
        }
      });
  };

  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <div key={key} className="post">
            <div className="title">{value.title}</div>
            <div
              className="body"
              onClick={() => {
                navigate(`/post/${value.id}`);
              }}
            >
              {value.postText}
            </div>
            <div className="footer">
              <div className="username">
                <Link to={`/profile/${value.UserId}`}>{value.username}</Link>
              </div>
              <div className="buttons">
                <ThumbUpIcon
                  onClick={() => {
                    likeAPOst(value.id);
                  }}
                  className={
                    likedPosts.includes(value.id) ? "unlikeBttn" : "likeBttn"
                  }
                />

                <label>{value.Likes.length}</label>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
