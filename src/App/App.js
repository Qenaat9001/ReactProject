import "./App.css";
import About from "../about/About";
import Services from "../Services/Services";
import Blog from "../Blog/Blog";
import Pic from "../Pic/Pic";
import Footer from "../Footer/Footer";

function Header() {
  let servicesItem = [
    {
      serviceTitle: "Web Design",
      serviceText:
        "(1)Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,  vitae! Magni tempora perferendis eum non .",
    },
    {
      serviceTitle: "Web Devlopment",
      serviceText:
        "(2)Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,  vitae! Magni tempora perferendis eum non .",
    },
    {
      serviceTitle: "Photography",
      serviceText:
        "(3)Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,  vitae! Magni tempora perferendis eum non .",
    },
    {
      serviceTitle: "Programming",
      serviceText:
        "(4)Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,  vitae! Magni tempora perferendis eum non .",
    },
    {
      serviceTitle: "Artificial Intiligance",
      serviceText:
        "(5)Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,  vitae! Magni tempora perferendis eum non .",
    },
    {
      serviceTitle: "ICDL",
      serviceText:
        "(6)Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,  vitae! Magni tempora perferendis eum non .",
    },
  ];
  return (
    <div className="container">
      <header>
        <div className="head">
          <h1>Masih Qenaat</h1>

          <div className="info">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="name">
          <h1>I am Masih Qenaat</h1>
          <p>Hello World!</p>
        </div>
      </header>

      <About></About>
      <Services></Services>
      <div className="blog-contain">
        <Blog {...servicesItem[0]} />
        <Blog {...servicesItem[1]} />
        <Blog {...servicesItem[2]} />
      </div>
      <div className="blog-contain">
        <Blog {...servicesItem[3]} />
        <Blog {...servicesItem[4]} />
        <Blog {...servicesItem[5]} />
      </div>
      <Pic />

      <Footer />
    </div>
  );
}
export default Header;
