import "./newblog.css";
function Newblog(props) {
  return (
    <>
      <div className="blog">
        <img src={props.photo}/>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <div className="foot">
          <p>Masih Qenaat</p>
          <p>10Min</p>
        </div>
      </div>
    </>
  );
}
export default Newblog;
