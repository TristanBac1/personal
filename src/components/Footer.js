import Image from "react-bootstrap/Image";
import LinkedIn from "../img/linkedin.svg";
import GitHub from "../img/github.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Powered by React.
        <br />
        Created by Tristan Bacolod
        <br /> <br />
        2023 (Github Link here)
      </p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/tristan-bacolod-981174160/">
          <Image src={LinkedIn} alt="LinkedIn Link" width={24} height={24} />
        </a>
        <a href="https://github.com/TristanBac1">
          <Image src={GitHub} alt="Github Link" width={24} height={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
