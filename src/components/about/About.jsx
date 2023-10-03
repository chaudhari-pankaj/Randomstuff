import React from 'react'
import fuck from '../../logo.svg';
import Back from '../common/back/Back'
// import AboutCard from './AboutCard'
import './About.css';

const About = (props) => {
  return (
    <>
    {props.details.map((value,index)=>(
    <div className='card' key={index}>
      <div className='cardimg'>
        <img src={value.img} alt='what the fuck'/>
      </div>
      <div>
        <p  className='cardtitle'>{value.title}</p>
        <p className='carddesc'>{value.description}</p>
      </div>
      <div className="cardbutton">
        <button onClick={'https://www.youtube.com/'}>view profile</button>
      </div>
    </div>
     ))}
    </>

)
}

export default About
 {/* <Back title="about us"/>
      <AboutCard title="aboutus" /> */}
    