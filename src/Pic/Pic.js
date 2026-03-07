import "./Pic.css";
import Newblog from "../NewBlog/newblog";
import post1 from './post-1.jpg'
import post2 from './post-2.jpg'
import post3 from './post-3.jpg'

function Pic() {
  let blogs = [
    {
      photo: post1,
      title: "Post Title 1",
      text: "(1)Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis suscipit eveniet quae ab placeat eos itaque quibusdam. Quam, iure quasi!",
    },
    {
      photo: post2,
      title: "Post Title 2",
      text: "(2)Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis suscipit eveniet quae ab placeat eos itaque quibusdam. Quam, iure quasi!",
    },
    {
      photo: post3,
      title: "Post Title 3",
      text: "(3)Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis suscipit eveniet quae ab placeat eos itaque quibusdam. Quam, iure quasi!",
    },
  ];
  return (
    <>
      <div className="container2">
        <div className="pic">
          <h1>Blog</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>
      <div className="Newblog">
        <Newblog {...blogs[0]} />
        <Newblog {...blogs[1]} />
        <Newblog {...blogs[2]} />
      </div>
    </>
  );
}
export default Pic;
