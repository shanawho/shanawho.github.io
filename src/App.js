import React from 'react';
import './App.css';
import SmoothImage from 'react-smooth-image';


function App() {
  return (
    <div className="App">


    <div className="header">
      <svg version="1.1" id="Layer_1"  x="0px" y="0px"
      	 viewBox="0 0 479 451" enable-background="new 0 0 479 451">
         <path fill="none" stroke="#FFFFFF" stroke-miterlimit="10" d="M295,123.5c22,0,44.6-61.5,32.6-61.5c-16,0-56.1,111-30,111c17.9,0,30.9-37.5,30.9-37.5 M331,126.5
          	c14,0,53.6-64.5,33.6-64.5c-16,0-71,135-15,135c37.9,0,57.9-73,22-73c-9.1,0-16,9-16,9 M260,207.5c4,0,7,3,7,9c0,20-19,39-19,56
          	c0,6,4,8.5,8.6,8.5c16,0,35.9-45.5,35.9-45.5 M325.5,214.5c0,0-20,66.5-36.9,66.5c-19.1,0,8-45,8-65 M308.5,195.5
          	c0,0,0,21.5,34,21.5c12,0-21.9,64-3.9,64c9,0,23.9-33.5,23.9-33.5 M232.6,224c0,0,2.4-10-7-10c-18.6,0-49.1,69-21,69
          	c23.4,0,53.4-66.5,40.4-66.5c-12,0-8.5,117-60.5,117c-36,0-54.5-25-85.5-25c-50,0-50,77,2,77c45,0,68-96,51-96c-15,0-42,95.5-6,95.5
          	c23,0,35.5-47.5,35.5-47.5 M195,300.5c0,0-37,85-8,85c12,0,19-16,19-16 M383,297.5c0.4,0.4-43,103,6,103c36,0,56.5-67,23-67
          	c-12.5,0-20,13-20,13 M238.5,329.5c0,0-8.5,16-8.5,31s7.5,25.5,20.6,25.5c21.6,0,39.2-36,39.2-62.9c0-16.6-11.3-29.6-27.8-29.6
          	c-29.5,0-31.5,46,10.5,46c29,0,37-18.5,42.1-18.5c11.9,0-16.6,39.5-16.6,56.5c0,5,4,8.5,8.6,8.5c16,0,35.9-48.5,35.9-48.5
          	 M345.6,321c0,4.3-1.1,9.9-2.8,16c-5.9,21.6-17.8,49-3.8,49c13,0,31.5-49.5,31.5-49.5 M180.5,126.5c0,0-10.5,11-10.5,30
          	c0,7.9,5,16.5,13.6,16.5c26,0,40.8-66,13.4-66c-18.5,0-21.5,30,4.6,30c20,0,30.4-28.5,36.4-28.5c11.6,0-16,41-16,56
          	c0,6,3.9,8.5,8.6,8.5c16,0,36.9-49.5,36.9-49.5 M270.6,108c0,20-27,65-11,65c12,0,33.9-44.5,33.9-44.5 M130,225.5c0,0,8.5,4,27.5,4
          	c12,0,18-4,21-4c12,0-31,56-9.5,56c10,0,26.5-27,26.5-27 M77.5,117.5c-48,0-43-81.1,15-81.1c21,0,36,14.1,36,32.1
          	c0,33-26.9,59-26.9,83.5c0,12.5,7.4,17,14,17c34,0,73-98,59-98c-15.6,0-31.1,182.5-86.1,182.5c-46,0-43-68,10-68
          	c34,0,60.5,19,86.5,19c25,0,25-23,5-23c-41,0-37.5,107-92,107c-19.5,0-29-10-29-10 M362.6,247c28,0,38-33,24-33
          	C362,214,334,327.5,382,327.5c40,0,58.5-76,24-76c-16.5,0-23,19-23,19"/>
        </svg>


        <div className="info">
          <h1>
            Shana Hu is a product&nbsp;designer and letterer.
          </h1>

          <h2>
            She works on building better tools for people who maintain design&nbsp;systems at <TextLink text="Figma" link="https://www.figma.com" /> during the day, 
            and spends her spare time making things like clothes, prints, plots, and <TextLink text="this typeface" link="https://www.myfonts.com/fonts/shana-hu/lark/" />.
          </h2>

          <h2>
            Shana studied type design at Type@Cooper West and is available for custom lettering commissions. 
          </h2>

          <h2>
            Get in touch at <TextLink text="hello@shanahu.com" link="mailto:hello@shanahu.com" />
          </h2>
        </div>
      </div>



      <div className="images">
        <ul>
          <ImageLi imageName="25" title="25" subtitle="Lasercut custom lettering" alt="Wood panel with the number 25 lasercut" />
          <ImageLi imageName="numbergestures" title="Chinese Number Gestures" subtitle='Risograph prints, 11x17' />
          <ImageLi imageName="notes" title="Notes to self"  subtitle="Pen-plotted custom lettering on Post-its" alt="Three post-its that read: 'You'll figure it out', 'What's the worst that could happen?', and 'Make it happen'"/>
          <ImageLi imageName="hongbao" title="Red envelopes" subtitle="Pen-plotted custom lettering with generated fills and patterns" alt="A pile of red envelopes decorated with Chinese characters that mean 'Wishing you good fortune' and 'Prosper'" />
          <ImageLi imageName="holiday" title="Holiday card" subtitle="Pen-plotted custom lettering" alt="A card with illustrative lettering that reads 'Hope you have a cozy and relaxing holiday'" />
          <ImageLi imageName="birthday" title="Happy birthday" subtitle="Hand-lettered and pulled screen print" alt="Paper card with Chinese characters meaning 'Happy birthday'"/>

        </ul>
      </div>


    </div>
  );
}

function ImageLi(props) {
return (
    <li>
      <img
        src={process.env.PUBLIC_URL + '/images/'+props.imageName+'.jpg'}
        alt={props.alt}
        // transitionTime={0.3}
        // imageStyles={{overflow: "visible"}}
      />
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </li>
  )

}

function SmoothImageLi(props) {
  return (
    <li>
      <SmoothImage
        src={process.env.PUBLIC_URL + '/images/'+props.imageName+'.jpg'}
        alt={props.alt}
        transitionTime={0.3}
        imageStyles={{overflow: "visible"}}

        //Other props if you choose to use them
      />
      <p>{props.title}</p>
      <p>{props.subtitle}</p>
    </li>
  )
}

function TextLink(props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">{props.text}</a>
  )
}

export default App;
