import React from 'react';

import Image from './AboutImage'

const About = () => {



    return ( 
        <div>
            <h1>this is a simple MERN STACK web application about your favorite article you have ever read </h1>
            <p> You can view add and delete article</p>
            <h4>Technology Used</h4>
            <ul>
                <li>React</li>
                <li>Redux & Redux Thunk</li>
                <li>Bootstrap</li>
                <li>Mongo DB || Mongo Atlas</li>
                <li>Express</li>
                <li>Node</li>
            </ul>
            <h6>Made By</h6>
            <h4> UGBODAGA IMONIKHEA FORTUNE</h4>
             <Image/>
        </div>
     );
}
 
export default About;