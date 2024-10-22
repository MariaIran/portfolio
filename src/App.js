import React from 'react';

function App() {  
  return (  
    <div className="App">  
      <header className="header">  
        <h1>Maria Iran Bilan</h1>  
        <p>IT Student</p>  
        <nav>  
          <ul>  
            <li><a href="#about">About</a></li>  
            <li><a href="#projects">Projects</a></li>  
            <li><a href="#contact">Contact</a></li>  
          </ul>  
        </nav>  
      </header>  

      <main>  
        <section id="about" className="aboutme">  
          <h2>About Me</h2>  
          <p>Hi, I'm Maria Iran Bilan, a 3rd year student from Western Institute of Technology currently taking Bachelor of Science in Information Technology.
          I'm thrilled to introduce you to my digital portfolio, showcasing my innovative spirit and creative approach. With a background in HTML, CSS and React, 
          I've cultivated a distinctive way of thinking that combines logical analysis with creative problem-solving. 
          Throughout my college life, I've been fueled by a passion to create positive change. 
          My experiences have instilled in me the value of perseverance, and I'm dedicated to ongoing growth and development as an IT student.
            </p>  
        </section>  

        <section id="about" className="skills">  
          <h2>Skills</h2>  
          <p>I have a reasonable proficiency in Figma, HTML, and CSS, which enables me to create visually appealing and responsive user interfaces, along with a basic understanding of JavaScript and React for developing interactive web applications. My foundational knowledge of Java helps me grasp object-oriented programming concepts. To enhance my skills, I plan to deepen my React knowledge, build practical projects, learn version control with Git for better collaboration, explore full-stack development to understand backend technologies, and engage with online communities for continuous learning and feedback. My goal is to become a proficient web developer capable of delivering quality user experiences through effective design and development.
          </p>  
        </section> 

        <section id="projects" className="projectbg">  
          <h2>Projects</h2>  
          <div className="project-container">  
            <div className="project">  
              <h3><a href="https://aspera18.github.io/ElParaiso/index.html">El Paraiso De Fleur</a></h3>  
              <p>Website design for a restaurant.</p>  
            </div>  
            <div className="project">  
              <h3><a href="https://awesome-todos-app-dzxa.onrender.com/">Awesome Todos App</a></h3>  
              <p>A todo app.</p>  
            </div>
            <div className="project">  
              <h3><a href="https://www.figma.com/proto/r4kacPZdbBD5ubvGuWvQLI/WIT-Grade-Viewer?node-id=1-5&node-type=frame&t=9SN5zMhjUvqtYOML-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A5">WIT Grade Viewer</a></h3>  
              <p>A figma design for viewing your grades.</p> 
            </div>  
          </div>  
        </section>
       
        <section id="contact" className="contact">  
          <h2>Contact Me</h2>  
          <p>Email: mariairanbilan@gmail.com</p>  
          <p>Facebook: <a href="https://www.facebook.com/mariairanbilan?mibextid=ZbWKwL">Maria Iran Bilan</a></p> 
          <p>Instagram: <a href="https://www.facebook.com/mariairanbilan?mibextid=ZbWKwL">mriairnbln</a></p>  
          <p>Contact Number: 09660561016</p>
        </section>  
      </main>  

      <footer>  
        <p>&copy; 2024 Maria Iran Bilan. All rights reserved.</p>  
      </footer>  
    </div>  
  );  
}  

export default App;