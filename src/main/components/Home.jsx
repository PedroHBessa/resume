import hero from "../../assets/note-home.jpg";
import "../../main/ui/style.css";

function Home() {
  return (
    <div className="home">
      <div className="home-img">
        <img src={hero} alt="hero" />
      </div>
      <div className="home-text">
        <p>WELCOME TO MY WEBSITE!</p>
        <p>PLEASE, SCROLL DOWN AND TAKE A LOOK</p>
      </div>
    </div>
  );
}

export default Home;
