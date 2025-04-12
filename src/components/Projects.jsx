import React from 'react';

const Projects = () => {
    const projects = [
    {
        id: "1",
        title: "Traffic Light Control System project",
        course: "Microprocessors - Microcontrollers course",
        time: "5th semester, 11/2024 - 12/2024",
        position: "individual",
        role: "Embedded Software Engineer",
        link: "https://drive.google.com/file/d/1qY3yJsNnhqR-R-nd7vGkVwVmtNhFCY7o/preview",
        technology: "C, STM32, LEDs, LCD, I2C, Scheduler, Button debouncing",
        description: "I designed and implemented a traffic light control system using the STM32F103RB microcontroller. The system was built around well-defined state machines to manage transitions and behaviors effectively. I incorporated switch debounce handling for reliable input, established LCD communication via the I2C protocol, and developed a non-preemptive scheduler to efficiently manage multiple tasks. The entire system was programmed in C, ensuring high performance and reliability on resource-constrained hardware."
    },
    {
        id: "2",
        title: "Design Fashion Website for Business project",
        course: "Web Programming course",
        time: "5th semester, 10/2024 - 12/2024",
        position: "team member",
        role: "Front-end Developer",
        link: "https://drive.google.com/file/d/12FzeA98fRu9ywYC-iqeOyNwLqWXT70bA/preview",
        technology: "HTML, CSS, Javascript, Bootstrap, jQuery",
        description: "I developed a responsive and mobile-friendly user interface for an e-commerce fashion website using HTML, CSS, and Bootstrap 5.3. I implemented dynamic product displays, filtering functions, and interactive features using JavaScript and jQuery to enhance user engagement. As part of the UI/UX team, I designed key components such as the navigation bar, product cards, modal forms, and user dashboards, with a strong focus on usability and accessibility. I also contributed to user experience optimization by tailoring the interface across different user roles, including guest, member, and admin views."
    },
    {
        id: "3",
        title: "Smart Study Space Management and Reservation System project",
        course: "Software Engineering course",
        time: "6th semester, 02/2025 - 05/2025",
        position: "team leader",
        role: "Full Stack Developer",
        link: "https://drive.google.com/file/d/1zD7WsolNfqZRyrj8_hriaMztvcolZG3B/preview",
        technology: "HTML, CSS, Javascript, PHP, RESTful API, Bootstrap, AJAX, MVC, Figma, UML",
        description: "I researched and implemented the project from initial system specification through to full-stack development. This included designing core system features and modeling system behavior using Use Case Diagrams, Use Case Scenarios, Activity Diagrams, and Sequence Diagrams. I applied the MVC architectural pattern to ensure code clarity, maintainability, and scalability. For the user interface, I created wireframes and visual designs using Figma, then developed the frontend using HTML, CSS, JavaScript, and AJAX, with Bootstrap to ensure a responsive and user-friendly experience. To enable dynamic and efficient communication between the client and server, I utilized RESTful APIs and exchanged data in JSON format using AJAX with the POST method. On the backend, I used PHP and deployed the system on a local XAMPP environment with Apache."
    }
];

    return (
        <div className='container d-flex flex-wrap border-bottom animate__animated animate__fadeInUp py-3' id='projects'>
            <div className='col-12 col-md-3'>
                <h2>Projects</h2>
            </div>
            <div className='col-12 col-md-9 d-flex flex-wrap gap-3'>
                {projects.map((project, index) => (
                    <div key={index} className="col-12 p-2 border rounded-3 text-start">
                        <strong>{project.title}</strong>
                        <p>{project.course} - <i>{project.position}</i></p>
                        <p>{project.time}</p>
                        <strong><i>{project.role}</i></strong>
                        <hr></hr>
                        <p><strong>Technologies:</strong> {project.technology}</p>
                        <p><strong>Description:</strong> {project.description}</p>
                        
                        <div class="col-12 d-flex justify-content-end mx-2">
                            <button class="btn btn-custom m-0 px-3 py-0" data-bs-toggle="collapse" 
                                    data-bs-target={`#collapse-${project.id}`}
                                    aria-expanded="false"
                                    aria-controls={`#collapse-${project.id}`}>
                                <i class="bi bi-eye fs-4"></i> Report
                            </button>
                        </div>
                        <div class="collapse" id={`collapse-${project.id}`}>
                            <iframe
                                src={project.link}
                                width="100%"
                                height="600px"
                                style={{ border: 'solid 1px', marginTop: '5px' }}
                                allow="autoplay"
                                title={`PDF Viewer - ${project.title}`}
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;