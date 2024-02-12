export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Debabrata sahoo</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Dynamic and results-driven MERN stack developer with 2.5+ years of
            comprehensive experience in designing, implementing, and deploying
            cutting-edge web applications. Proficient in React ,Node.js, with a
            strong focus on delivering scalable solutions.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/picture_deba.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
