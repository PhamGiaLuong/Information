import React from 'react';

const Skills = () => {
  const languages = [
    { logo:'/html.png', name: 'HTML'},
    { logo:'/css.png', name: 'CSS'},
    { logo:'/js.jpg', name: 'JavaScript'},
    { logo:'/php.png', name: 'PHP'},
    { logo:'/c.jpg', name: 'C'},
    { logo:'/cpp.png', name: 'C++'},
    { logo:'/python.png', name: 'Python'}
  ];
  
  const frameworks = [
    { logo:'/logo512.png', name: 'React'},
    { logo:'/bootstrap.png', name: 'Bootstrap'},
    { logo:'/jquery.png', name: 'jQuery'},
  ];
  
  const tools = [
    { logo:'/figma.png', name: 'Figma'},
    { logo:'/drawio.png', name: 'Drawio'},
    { logo:'/github.png', name: 'Github'},
  ];
  
  return (
      <div className="container d-flex flex-wrap animate__animated animate__fadeInUp border-bottom py-3" id="skills">
        <div className='col-12 col-md-3'>
            <h2>Skills</h2>
        </div>
        <div className="col-12 col-md-9 d-flex flex-wrap justify-content-evenly gap-3">
          <div className='col-12 border-bottom'>
            <strong>Programming Languages</strong>
          </div>
          {languages.map((skill, index) => (
            <div key={index} className="p-2 d-flex flex-wrap justify-content-center" id='item'>
              <img src={skill.logo} alt="language_logo" 
                        style={{
                            maxwidth: '50px',
                            height: '50px'
                        }}/>
              <p className='col-12'>{skill.name}</p>
            </div>
          ))}
          
          <div className='col-12 border-bottom'>
            <strong>Frameworks</strong>
          </div>
          {frameworks.map((skill, index) => (
            <div key={index} className="p-2 d-flex flex-wrap justify-content-center" id='item'>
              <img src={skill.logo} alt="language_logo" 
                        style={{
                            maxwidth: '50px',
                            height: '50px'
                        }}/>
              <p className='col-12'>{skill.name}</p>
            </div>
          ))}
          
          <div className='col-12 border-bottom'>
            <strong>Tools</strong>
          </div>
          {tools.map((skill, index) => (
            <div key={index} className="p-2 d-flex flex-wrap justify-content-center" id='item'>
              <img src={skill.logo} alt="language_logo" 
                        style={{
                            maxwidth: '50px',
                            height: '50px'
                        }}/>
              <p className='col-12'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Skills;