import React from 'react';

const About = () => {
  return (
    // <section className="py-5 bg-light ">
        <div className="container d-flex flex-wrap justify-content-center border-bottom animate__animated animate__fadeInUp p-3" id="about">
            {/* <div className='mt-3 mb-5 col-12'></div> */}
            <div className='col-12 col-md-4 text-center d-flex flex-wrap justify-content-center'>
                <div className='col-12 d-flex flex-wrap justify-content-center'>
                    <div 
                        className="rounded-5 overflow-hidden border"
                        style={{
                            width: '150px',
                            height: '200px',
                            background: `url('/2211960_HinhThe.jpg') center/cover no-repeat`
                        }}
                    ></div>
                </div>
                <h2 className='text-center col-12 my-1'>Pham Gia Luong</h2>
                <p className='col-12'><i class="bi bi-cake"></i> 15/03/2004</p>
                <p className='col-12'><i class="bi bi-phone"></i> 0703953486</p>
                <p className='col-12'><i class="bi bi-envelope-at"></i> pham15032004@gmail.com</p>
                <p className='col-12'><i class="bi bi-geo-alt"></i> Thu Duc city, HCMC</p>
            </div>
            <div className='col-12 col-md-8 d-flex flex-wrap align-items-center'>
                <h3>Summary</h3>
                <p>A detail-oriented and motivated individual with a passion for software development, 
                    specializing in front-end technologies (HTML/CSS, Javascript, React.js). Quick learner with 
                    hands-on experience through academic projects and self-study, aiming to apply my 
                    knowledge in a real-world environment as a Software Engineer. Excited to collaborate 
                    with experienced engineers, contribute to innovative solutions, and grow both 
                    technically and professionally. 
                </p>
                <i className="fas fa-code fa-2x text-primary"></i> {/* Font Awesome icon */}

            </div>
        </div>
    // </section>
  );
};

export default About;