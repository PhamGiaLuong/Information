import React from 'react';

const Education = () => {
  return (
    <div className='container d-flex flex-wrap border-bottom animate__animated animate__fadeInUp py-3' id='education'>
        <div className='col-12 col-md-3'>
            <h2>Education</h2>
        </div>
        <div className='col-12 col-md-9 d-flex flex-wrap'>
            <div className='col-12 col-md-3 p-2 d-flex justify-content-md-end justify-content-center'>
                <a href='https://hcmut.edu.vn'>
                <img src="/logoVienTrang.png" alt="HCMUT_logo" 
                        style={{
                            width: '70px',
                            height: '70px'
                        }}/>

                </a>
            </div>
            <div className='col-12 col-md-9'>
                <strong>Ho Chi Minh city University of Technology (HCMUT)</strong>
                <p>Bachelor's Degree in Computer Engineering</p>
                <p>09/2022 - now</p>
            </div>
        </div>
    </div>
  );
};

export default Education;