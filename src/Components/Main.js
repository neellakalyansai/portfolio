import React from 'react';

const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Main = () => {
    return <div>
       {/* <body id="page-top"> */}
       
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
           <a className="navbar-brand js-scroll-trigger" href="#page-top">
               <span className="d-block d-lg-none">N Kalyan Sai</span>
               <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="kalyan.jpg" alt="..." /></span>
           </a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
           <div className="collapse navbar-collapse" id="navbarResponsive">
               <ul className="navbar-nav">
                   <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                   <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                   <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                   <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                   <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                   <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                   <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#Projects">Projects</a></li>
               </ul>
           </div>
       </nav>
     
       <div className="container-fluid p-0">
          
           <section className="resume-section" id="about">
               <div className="resume-section-content">
                   <h1 className="mb-0">
                       Neella
                       <span className="text-primary"> Kalyan Sai</span>
                   </h1>
                   <div className="subheading mb-5">
                       vempalle,Kadapa(Dist),Andhra Pradesh,India 516329.
                       <a href="mailto:name@email.com">neellakalyansai@gmail.com</a>
                   </div>
                   <p className="lead mb-5">Self-motivated Developer adds high level of experience over more than 2 years collaborating and working on
multiple web-based projects. Passionate, hardworking coder with penchant for developing customized interfaces
that factor in unique demands for accessibility, reachability and security</p>
                   <div className="social-icons">
                       <a className="social-icon" target= "_blank"href="https://www.linkedin.com/in/neella-kalyan-sai-916bb9207/"><i className="fab fa-linkedin-in"></i></a>
                       <a className="social-icon" href="#!"><i className="fab fa-github"></i></a>
                       <a className="social-icon" href="#!"><i className="fab fa-twitter"></i></a>
                       <a className="social-icon" href="#!"><i className="fab fa-facebook-f"></i></a>
                   </div>
               </div>
           </section>
           <hr className="m-0" />
         
           <section className="resume-section" id="experience">
               <div className="resume-section-content">
                   <h2 className="mb-5">Experience</h2>
                   <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                       <div className="flex-grow-1">
                           <h3 className="mb-0"> Web Developer Intern</h3>
                           <div className="subheading mb-3">Digi-Media Solutions</div>
                           <p>• Developed successful project goals and strategies in collaboration with team members<br></br>
                            • Enhanced operations as lead on different development and integration projects.<br></br>
                            • Used Javascript, SQL ,BOOTSTRAP and HTML to develop app-solutions.<br></br>
                            • Oversaw back-end development using PHP to maintain website integrity.<br></br>
                            • Validated third-party code to comply with internal standards and technical requirements<br></br></p>
                       </div>
                       <div className="flex-shrink-0"><span className="text-primary">April 2021 - May 2021
</span></div>
                   </div>
                   <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                       <div className="flex-grow-1">
                           <h3 className="mb-0">Python Associate Intern</h3>
                           <div className="subheading mb-3">The Entrepreneurship Network</div>
                           <p>• Completed internship as a Python Developer Associate.<br></br>
                                • Prioritized tasks and accomplished in order of importance.<br></br>
                                • Worked varied hours to meet seasonal and business needs.<br></br>
                                • Wrote clear, clean code for various projects.<br></br>
                                • Collaborated effectively with members of software development team and personnel in other departments.<br></br></p>
                       </div>
                       <div className="flex-shrink-0"><span className="text-primary">Aug 2021 - Oct 2021</span></div>
                   </div>
                   <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                       <div className="flex-grow-1">
                           <h3 className="mb-0"> Web Developer Intern</h3>
                           <div className="subheading mb-3">Central Institute of Indian Languages</div>
                           <p>•Worked on live multiple projects.<br></br>
                                •Built dynamic websites the helped the company to increase its production by 8%.<br></br>
                                • Redesigned and developed an existing web sites.<br></br>
                                • Developed user interface with modern JavaScript technologies,Bootstrap,css<br></br></p>
                       </div>
                       <div className="flex-shrink-0"><span className="text-primary">Jul 2022 - Oct 2022</span></div>
                   </div>
                   
               </div>
           </section>
           <hr className="m-0" />
        
           <section className="resume-section" id="education">
               <div className="resume-section-content">
                   <h2 className="mb-5">Education</h2>
                   <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                       <div className="flex-grow-1">
                           <h3 className="mb-0">Rgukt IIIT Ongole</h3>
                           <div className="subheading mb-3">Bachelor of Technology</div>
                           <div>Computer Science </div>
                           <p>GPA: 9.23</p>
                       </div>
                       <div className="flex-shrink-0"><span className="text-primary">July 2019 - Present</span></div>
                   </div>
                   <div className="d-flex flex-column flex-md-row justify-content-between">
                       <div className="flex-grow-1">
                           <h3 className="mb-0">JJawahar Navodaya Vidyalaya Chittoor</h3>
                           <div className="subheading mb-3">High School</div>
                           <p>GPA: 10.0</p>
                       </div>
                       <div className="flex-shrink-0"><span className="text-primary">July 2016 - April 2017</span></div>
                   </div>
               </div>
           </section>
           <hr className="m-0" />
           
           <section className="resume-section" id="skills">
               <div className="resume-section-content">
                   <h2 className="mb-5">Skills</h2>
                   <div className="subheading mb-3">Programming Languages & Tools</div>
                   <ul className="list-inline dev-icons">
                       <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                       <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                       <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                       <li className="list-inline-item"><i className="fab fa-php"></i></li>
                       <li className="list-inline-item"><i className="fab fa-react"></i></li>
                       <li className="list-inline-item"><i className="fab fa-docker"></i></li>
                       <li className="list-inline-item"><i className="fab fa-java"></i></li>
                   
                 
                   </ul>
                   <div className="subheading mb-3">Workflow</div>
                   <ul className="fa-ul mb-0">
                       <li>
                           <span className="fa-li"><i className="fas fa-check"></i></span>
                           Responsive Web Pages
                       </li>
                       <li>
                           <span className="fa-li"><i className="fas fa-check"></i></span>
                          Dynamic websites
                       </li>
                       <li>
                           <span className="fa-li"><i className="fas fa-check"></i></span>
                           Cross Functional Teams
                       </li>
                       <li>
                           <span className="fa-li"><i className="fas fa-check"></i></span>
                           Agile Development & Scrum
                       </li>
                   </ul>
               </div>
           </section>
           <hr className="m-0" />
          
           <section className="resume-section" id="interests">
               <div className="resume-section-content">
                   <h2 className="mb-5">Interests</h2>
                   <p>Apart from being a web developer, I enjoy most of my time being outdoors. I enjoy playing badminton,during my free time i preder to read books and play badminton.Listening songs keeps to stay active and Strength my patience</p>
               </div>
           </section>
           <hr className="m-0" />
          
           <section className="resume-section" id="awards">
               <div className="resume-section-content">
                   <h2 className="mb-5">Awards & Certifications</h2>
                   <ul className="fa-ul mb-0">
                       <li>
                           <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            Cleared PYTHON GLOBAL CERTIFICATION from MICROSOFT.
                       </li>
                       <li>
                           <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                           Received Certificate from my  University as a University Web Developer.

                       </li>
                       <li>
                           <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                          
                           Completed PYTHON CERTIFICATION from IIT MADRAS.
                       </li>
                       <li>
                           <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                           Finished Web Development Training from Internshala
                       </li>
                       <li>
                           <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                           National Level Badminton Player
                       </li>
                   </ul>
               </div>
           </section>
           
           <section className="resume-section" id="Projects">
               <div className="resume-section-content">
<h2 className="mb-5">Projects</h2>
                 <h3 className="mb-0"> <a target="_blank" href="https://quiz-man-ia.000webhostapp.com/">Quiz App</a></h3>
                    <div className="subheading mb-3">
                        • Build a Web page that allows students/users to Sign-up with their emails and login to attend a quiz.
                        based on the Topic they have selected.<br></br>
                        • Results will be displayed after students/users submit their answers.<br></br>
                        • Technologies used: <b>Front-end:-HTML,BOOTSTRAP,CSS,JavaScript Back-end:-PHP,MySQL.</b><br></br>
                    </div>
                    <br></br><br></br><br></br>


                    <h3 className="mb-0"> <a href="#">E-commerce Website</a></h3>
                    <div className="subheading mb-3">
                    • Developed an E-commerce Website in which users can place order for a product they are interested<br></br>
                    • Added a Product landing page for the better description of a product’s features and prices.<br></br>
                    • Also integrated a payment gateway using RAZRO Payment Gateway<br></br>
                    • Technologies used: <b>Front-end:-HTML,BOOTSTRAP,CSS,JavaScript Back-end:-CodeIgniter,MySQL.</b><br></br>
                    </div>
                    <br></br><br></br><br></br>


                    <h3 className="mb-0"> <a target="_blank" href="https://www.linkedin.com/posts/neella-kalyan-sai-916bb9207_letsgrowmore-internship-activity-6820660913188691968-ij5c?utm_source=share&utm_medium=member_desktop">University Results Management website
                    </a></h3>
                    <div className="subheading mb-3">
                    • Created a University Results Management WebPage.<br></br>
                    • Management can Create/Update/Read/Delete Students Records<br></br>
                    • Students can login with their college E-mail and check their their results<br></br>
                    • Results will be displayed year and semester wise<br></br>
                    • Technologies used: <b>Front-end:-HTML,BOOTSTRAP,CSS,JavaScript Back-end:-PHP,MySQL.</b><br></br>
                    </div>
               </div>
           </section>
       </div>
       
      
      


    </div>;
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;
// #endregion

export default Main;