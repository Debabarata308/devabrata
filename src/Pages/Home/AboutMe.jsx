import expressicon from "../../assest/express Js.jpeg";
import mongodb from "../../assest/mongodb.jpeg";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="hero--section--img">
        <img src="./img/picture_deba.jpg" alt="Hero Section" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            Hi there! I'm Debabrata, a website developer with a passion for
            creating custom online experiences for my clients. With a skill set
            including HTML, CSS, JavaScript, and React, I have the tools to
            bring any website vision to life.
          </p>
          <p className="hero--section-description">
            In my journey as a developer, I've honed my skills across the entire
            MERN stack - from designing responsive user interfaces using
            React.js to building robust backend systems with Node.js and
            Express, and leveraging MongoDB for efficient data management. I'm
            proficient in integrating various APIs and third-party services to
            enhance functionality and user experience.
          </p>
          <p className="hero--section-description">
            So if you're in need of a new website or just looking to revamp your
            current online presence, I'd love to chat and see how I can help.
            Let's bring your website dreams to reality together!.
          </p>
          <p className="hero--section-description">Here are my main skills:</p>
          <div className="image_folder">
            <div className="image">
              <img src="https://satyasahoo.in/static/media/react-icon.a010f287ea79ad0673b610a223faa951.svg" />
            </div>
            <div className="image">
              <img src="https://satyasahoo.in/static/media/html-icon.185baee7db74b83bf22eec6a6def7644.svg" />
            </div>
            <div className="image">
              <img src="https://satyasahoo.in/static/media/typescript-icon.f3bc0fd998dea6b1266965436af97a49.svg" />
            </div>
            <div className="image">
              <img src="https://satyasahoo.in/static/media/js-icon.2d25723e91c8a9e057ae447ae6a73ecb.svg" />
            </div>
            <div className="image">
              <img src="https://satyasahoo.in/static/media/bootstrap-icon.09b773cc0f17dc078cc9864e5e8006ba.svg" />
            </div>
            <div className="image">
              <img src="https://satyasahoo.in/static/media/node-icon.cc3d45a160579a330a5c17cc2c8f1407.svg" />
            </div>
            <div className="image">
              <img
                src={expressicon}
                alt="express"
                style={{ height: "50px", width: "70px", marginTop: "28px" }}
              />
            </div>
            <div className="image">
              <img
                src={mongodb}
                alt="mongodb"
                style={{ height: "50px", width: "70px", marginTop: "28px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
