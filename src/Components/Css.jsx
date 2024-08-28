import React from 'react'

export default function Css() {


  return (
    <>
    


<div id="csspage" className="animate__animated animate__fadeInRight">
    
  
    <h1 >CSS</h1>  

<h2 >Learn Webdesigning</h2>

<div className="d-grid gap-2 col-6 mx-auto " id='btn1' >
  <button className="btn btn-primary" id='btn' type="button">Start Now</button>
 
</div>
    </div>
     <h1 className='st1' data-aos="zoom-y-out"> START CSS  </h1>

<p id='cssp1' data-aos="flip-left" >
CSS is the language we use to style an HTML document.
<br />
CSS describes how HTML elements should be displayed.
<br />
This tutorial will teach you CSS from basic to advanced.
<br />
<h1 className='whcss'> What is CSS? </h1>
<ul>
  <li>
CSS stands for Cascading Style Sheets
</li>
<li>
CSS describes how HTML elements are to be displayed on screen, paper, or in other media
</li>
<li>
CSS saves a lot of work. It can control the layout of multiple web pages all at once
</li>
<li>
External stylesheets are stored in CSS files
</li>
</ul>
</p>

<h1 className='h2' data-aos="flip-right">A Simple CSS Document</h1>

<div className="three">
  <img src="https://pressbooks.library.ryerson.ca/webdesign/wp-content/uploads/sites/25/2018/02/5.01_DW-W_Styles-1024x553.jpg" data-aos="flip-right"  />
  <h4 data-aos="zoom-y-out">This is External CSS
  <p>Inline CSS is useful for quick, specific changes but is not recommended for larger projects due to maintenance difficulties and code redundancy.</p>
  </h4>
  
  <img src="https://miro.medium.com/v2/resize:fit:1400/1*Ityx8O7-3QZHDwCUA75IDw.png" data-aos="flip-left" alt="" />
  <h4 data-aos="zoom-y-out">This is Inline CSS
  <p>Inline CSS is useful for quick, specific changes but is not recommended for larger projects due to maintenance difficulties and code redundancy.</p>
  </h4>
  
  <img src="https://miro.medium.com/v2/resize:fit:1400/1*J1qT2jIaj-AqsuhyIqcPbQ.png" data-aos="flip-right" alt="" />
  <h4 data-aos="zoom-y-out">This is Internal CSS
  <p>Internal CSS is suitable for single-page documents that require unique styling but can make HTML files larger and harder to manage.</p>
  </h4>


  

  

</div>
 
<h1 className='tags' data-aos="zoom-y-out">CSS :hover effects</h1>

<p className='cssp2' data-aos="zoom-y-out">
<h2> Definition and Usage </h2>
The :hover selector is used to select elements when you mouse over them.
<br />
Tip: The :hover selector can be used on all elements, not only on links.
<br />
Tip: Use the :link selector to style links to unvisited pages, the :visited selector to style links to visited pages, and the :active selector to style the active link.
<br />
Note: :hover MUST come after :link and :visited (if they are present) in the CSS definition, in order to be effective!
</p>

<table >
  <tr>
    <td><h1 data-aos="flip-right">Text hover effect</h1></td>
    <td><div class="container">
  <img src="https://images.alphacoders.com/107/107753.jpg" alt="Avatar" width={"30%"} className="image"/>
  <div className="overlay">
    <div className="text" data-aos="flip-right">Image hover effect</div>
  </div>
</div></td>
  </tr>
</table>

<h1 id='cssanim' data-aos="flip-right">CSS Animation</h1>

<p className='animp' data-aos="flip-right">CSS allows animation of HTML elements without using JavaScript!
<br />

<h1>What are CSS Animations?</h1>
An animation lets an element gradually change from one style to another.
<br />
You can change as many CSS properties you want, as many times as you want.
<br />
To use CSS animation, you must first specify some keyframes for the animation.
<br />
Keyframes hold what styles the element will have at certain times.

<h1> The @keyframes Rule </h1>

When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times.
<br />
To get an animation to work, you must bind the animation to an element.
<br />
The following example binds the "example" animation to the "div" element. The animation will last for 4 seconds, and it will gradually change the background-color of the "div" element from "red" to "yellow":
</p>

<h1 className='h2' data-aos="flip-right">CSS Animation with example</h1>


  <h1 className='animationeff' data-aos="flip-left">Animation</h1>


<h5 id='lastcss' data-aos="zoom-y-out">CSS</h5>

    </>
  
  )
}
