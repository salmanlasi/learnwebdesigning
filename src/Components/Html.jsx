import AOS from "aos";
import "aos/dist/aos.css";

import React from 'react';

export default function Html(props) {


  return (
    <>
    <div id="homepage" className="animate__animated animate__fadeInRight">
    
  
    <h1 className="h1">HTML</h1>  

    <h1 id="wel">WELCOME</h1>

<h2 >Learn Webdesigning</h2>

<div className="d-grid gap-2 col-6 mx-auto " id='btn1' >
  <button className="btn btn-primary" id='btn' type="button">Start Now</button>
 
</div>
    </div>
 

  <h1 className="fchil" data-aos="zoom-y-out"> START HTML</h1>
    <p className='p1' data-aos="zoom-y-out">HTML is the standard markup language for Web pages. <br />

With HTML you can create your own Website.
<br />
HTML is easy to learn - You will enjoy it!
<br />
HTML is the standard markup language for creating Web pages.
<br />

<h1 className='h1'>What is HTML?</h1>
<ul>
  <li>
HTML stands for Hyper Text Markup Language
</li>
<li>
HTML is the standard markup language for creating Web pages
</li>
<li>
HTML describes the structure of a Web page
</li>
<li>
HTML consists of a series of elements
</li>
<li>
HTML elements tell the browser how to display the content
</li>
<li>
HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.
</li>
</ul>



</p>

<h1 className='h2' data-aos="zoom-y-out">A Simple HTML Document</h1>

<div className="two" data-aos="zoom-y-out">
  <img src="https://miro.medium.com/v2/resize:fit:498/1*5gJzummAqpBDGATo0fjU6Q.jpeg"  />
  <h1>HTML Basic Examples 
<br />
  <p>In this chapter we will show some basic HTML examples.
<br />
<p>
Don't worry if we use tags you have not learned about yet.</p>
<br />
All HTML documents must start with a document type declaration: !DOCTYPE html.
<br />
The HTML document itself begins with <html> and ends with </html>.
<br />
The visible part of the HTML document is between <body> and </body>.
</p>
  </h1>

</div>


<h1 className='tags' data-aos="zoom-y-out">HTML TAGS</h1>
<div id="tags">
<h2 data-aos="zoom-y-out">Basic Tags</h2>
<p>
<h1 data-aos="zoom-y-out">h1 tag</h1>
<h2 data-aos="zoom-y-out">h2 tag</h2>
<h3 data-aos="zoom-y-out">h3 tag</h3>
<h4 data-aos="zoom-y-out">h4 tag</h4>
<h5 data-aos="zoom-y-out">h5 tag</h5>
<h6 data-aos="zoom-y-out">h6 tag</h6>
<p data-aos="zoom-y-out">p tag</p>
<h1 data-aos="zoom-y-out">Table tag</h1>
<h1 data-aos="zoom-y-out">Form tag</h1>
<h1 data-aos="zoom-y-out">ul tag</h1>
<h1 data-aos="zoom-y-out">li tag</h1>
<h1 data-aos="zoom-y-out">ol tag</h1>
<h2 data-aos="zoom-y-out">other many tags you can see wschool3 website</h2>
</p>
</div>


<img src="https://codewithfaraz.com/img/a%20comprehensive%20list%20of%20html%20tags%20for%20web%20development.png" id='lastimg'  />



<div class="card-container">
        <div class="card" data-aos="zoom-y-out" data-aos-delay="100">
            <img src="s.student.png" alt="Image 1"/>
            <div class="card-content">
                <h3>Muhammad Salman</h3>
                <p>I am a webdeveloper</p>
            </div>
        </div>
        <div class="card" data-aos="zoom-y-out" data-aos-delay="200" >
            <img src="file.jpg" alt="Image 2"/>
            <div class="card-content">
                <h3>Muhammad Faizan</h3>
                <p>I am a webdesigner</p>
            </div>
        </div>
        <div class="card" data-aos="zoom-y-out"  data-aos-delay="300">
            <img src="salmaninoffice.png" alt="Image 3"/>
            <div class="card-content">
            <h3>Muhammad Salman</h3>
            <p>I am a webdeveloper</p>
            </div>
        </div>
    </div>

    <h5 id='lastcss' data-aos="zoom-y-out" >HTML</h5>
    </>
  )
}
