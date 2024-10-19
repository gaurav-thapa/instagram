import React from "react";

const Story = () => {
  let stories = [];
  // for (let i = 0; i < 3; i++) {
  //   stories.push({
  //     id: i + 1,
  //     title: "my clicks",
  //   });
  // }
  return (
    <div className="flex items-center gap-14 p-5">
      {stories.map((story) => (
        <div className="flex flex-col items-center gap-2" key={story.id}>
          <img
            className="h-20 w-20 rounded-full"
            src="./IMG_4574.JPG"
            alt="story"
          />
          <div className="text-sm">{story.title}</div>
        </div>
      ))}
      <div className="flex flex-col items-center gap-2">
        <div className="h-20 w-20 rounded-full bg-gray-900 flex justify-center items-center">
          <i className="text-4xl bi bi-plus-lg"></i>
        </div>
        <div className="text-sm">New</div>
      </div>
    </div>
  );
};

export default Story;
