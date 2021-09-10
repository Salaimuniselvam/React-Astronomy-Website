import React from "react";

function Lesson1() {
  return (
    <div>
      <h1>A Pale Blue Dot</h1>
      <div className="responsive-youtube">
        <iframe
          src="https://www.youtube.com/embed/wupToqz1e2g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Lesson1;
