import { Link } from "react-router-dom";
import "./index.scss";
import Logo from "./Logo";
import LogoN from '../../assets/images/fullAClogo.png'
const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1 className="welcome-img">
          {/* Add your image here */}
          <img src={LogoN} alt="Welcome to Awristocrats" />
        </h1>
        <h2>
          Welcome to Awristocrats, where time meets elegance! Step into a world
          of luxury and sophistication, where each tick of the clock resonates
          with timeless style and prestige. We're delighted to have you join our
          exclusive community of watch enthusiasts and connoisseurs. At
          Awristocrats, we believe that a watch is not just a timekeeping
          device; it's a reflection of your unique personality and a symbol of
          your discerning taste. Our curated collection of exquisite luxury
          watches is designed to cater to your desire for the finest
          craftsmanship, precision, and unparalleled beauty. Whether you're
          seeking a classic timepiece that exudes tradition or a modern marvel
          that pushes the boundaries of design and technology, our carefully
          selected range offers something for every aficionado. Our commitment
          to quality, authenticity, and customer satisfaction ensures that your
          experience with Awristocrats will be as exceptional as the watches we
          offer. As you explore our online store, immerse yourself in the world
          of horological excellence, and discover the perfect companion to adorn
          your wrist. We invite you to indulge in the art of timekeeping and
          elevate your style with Awristocrats. Thank you for choosing
          Awristocrats. Time waits for no one, so let's make every second count
          in style and luxury. Welcome to Awristocrats—where luxury meets your
          wrist.
        </h2>
        {/* <Link to="/contact" className="flat-button">
          Contact me
        </Link> */}
      </div>
      <Logo />
    </div>
  );
};

export default Home;
