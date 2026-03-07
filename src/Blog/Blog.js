import "./blog.css";
function blog(props) {
  return (
    <>
    <div className="masih">
      <div className="contain">
        <div className="circle"></div>
        <h1>{props.serviceTitle}</h1>
        <p> {props.serviceText}
        </p>
      </div>
    </div>
    </>
  );
}
export default blog;
