import React from "react";

const Posts = ({posts}) => {
  // let posts = [];
  // for (let i = 0; i < 40; i++) {
  //   posts.push(i + 1);
  // }
  // console.log(posts);
  return (
    <div className="grid grid-cols-3 gap-1 ">
      {posts.map((post) => (
        <div key={post}>
          <img className="" alt="post" src="./IMG_4574.JPG" />
        </div>
      ))}
    </div>
  );
};

export default Posts;
