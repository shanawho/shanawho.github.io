import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import json from './components/books.json'

function NavOption(props) {
  return (
        <li>
          <NavLink to={'/'+props.title.toLowerCase()} className={'nav-'+props.title.toLowerCase()} activeClassName="active">
            {props.title}
          </NavLink>
        </li>

  )
}

function Header() {
  return (
    <nav className="nav">
      <ul>            
        <NavOption title="Lettering" />
        <NavOption title="Type" />
        <Logo />
        <NavOption title="Product" />
        <NavOption title="Library" />
      </ul>
    </nav>
  )
}

function Footer() {
  return (
    <footer>      
      <TextLink text="hello@shanahu.com" url="mailto:hello@shanahu.com" />
      <TextLink text="Pinterest" url="http://pinterest.com/shanahu" />
      <TextLink text="Twitter" url="http://twitter.com/shanawho" />
      <TextLink text="Github" url="http://github.com/shanawho" />
      <TextLink text="LinkedIn" url="http://linkedin.com/in/shanahu" />
    </footer>
  )
}

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/lettering' component={Lettering}/>
        <Route path='/type' component={Type}/>
        <Route path='/product' component={Product}/>
        <Route path='/Library' component={Library}/>
      </Switch>
      <Footer />
    </main>
  )
}

function TextLink(props) {
  return  (
      <a href={props.url} target="_blank">{props.text}</a>

    )
}


// P5 INTEGRATION
function sketch(p) {
  var r = (window.innerHeight-180)/2;
  var startX = window.innerWidth/2
  var startY = window.innerHeight/2
  var dotSize = 10

  var num = 60
  var angle = 360/num

  var points = [];
  var randomTargets = [];
  var fromInCircle = true;
    
  var targetX,
    targetY;

  function getRandomColor() {
    var colors = [
      ['07','C8','A0'], 
      ['22','B3','FB'], 
      ['FF','C3','DC'], 
      ['FF','62','72'], 
      ['FF','D7','69'], 
      ['FF','99','6E']
    ];
    return p.unhex(colors[(Math.floor(Math.random()*colors.length))]);
  }
  p.setup = function() {
    var canvas = p.createCanvas(window.innerWidth, window.innerHeight);

    for (var i=0; i<num; i++) {
      var rgb = getRandomColor()
      var randomX = p.random(0, p.width)
      var randomY = p.random(0, p.height)
      points.push({x:randomX, y:randomY})
      p.fill(rgb[0],rgb[1],rgb[2])
      p.noStroke()
      p.ellipse(randomX,randomY,dotSize,dotSize)
    }
    // window.onresize = function() {
    //   p.canvas.size(window.innerWidth, window.innerHeight)
    // }
  }

  function mouseInCircle(mouseX,mouseY) {
    return ((mouseX < window.innerWidth/2+r && mouseX > window.innerWidth/2-r) && 
      (mouseY < window.innerHeight/2+r && mouseY > window.innerHeight/2-r))
  }



  p.draw = function() {
    p.background(255)
    if (mouseInCircle(p.mouseX,p.mouseY)) {
      for (var i=0; i < points.length; i++) {
        var a = i*angle
        targetX = startX+r*p.cos(p.radians(a))
        targetY = startY+r*p.sin(p.radians(a))

        var dx = targetX - points[i].x
        points[i].x += dx * 0.1

        var dy = targetY - points[i].y
        points[i].y += dy * 0.1

        p.ellipse(points[i].x,points[i].y,dotSize,dotSize)
      }
      fromInCircle = true;
    } else {
      if(fromInCircle) {
        randomTargets = []
        for (var i=0; i < points.length; i++) {
          targetX = p.random(0, p.width)
          targetY = p.random(0, p.height)
          randomTargets.push({x:targetX, y:targetY})
          // console.log(i)
        }
        fromInCircle = false;
      };
      for (var j=0; j<randomTargets.length;j++) {
        var target = randomTargets[j]
        // console.log(j)
        var dx = target.x - points[j].x
        points[j].x += dx * 0.05

        var dy = target.y - points[j].y
        points[j].y += dy * 0.05

        p.ellipse(points[j].x,points[j].y,dotSize,dotSize)
      }
    }
  }
}

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Hu",
      blurb: this.defaultBlurb()
    }
  }

  swapBlurb() {
    if (this.state.name == "Hu") {
      this.setState({name: "Who?"})
      this.setState({blurb: this.longBlurb()})

    } else {
      this.setState({name: "Hu"})
      this.setState({blurb: this.defaultBlurb()})
    }
  }
  defaultBlurb() {
    return( 
      <div>
        <div className="about">
          <div className="smallcaps">NOW</div>
            Product designer at <TextLink text="Pinterest" url="http://pinterest.com" /><br />
            Type design student at <TextLink text="Type@Cooper West" url="http://coopertype.org/west" />
        </div>
        <div className="about">
          <div className="smallcaps">THEN</div>
            Intern at <TextLink text="Facebook" url="http://facebook.com" />, <TextLink text="FiftyThree" url="http://fiftythree.com" />, <TextLink text="LinkedIn" url="http://linkedin.com" /> < br/ >
            Computer science 2016 from <TextLink text="UC Berkeley" url="http://berkeley.edu" />
        </div>

        <div className="about">
          <a className="smallcaps" onClick={() =>this.swapBlurb()}>STILL CURIOUS?</a>
        </div>
      </div>
    )
  }

  longBlurb() {
    return ( 
      <div>
        <div className="about">
          I design, code, letter, and teach. I always loved both art and science but only realized I didn’t have to choose between the two when I discovered digital product design.
          <br /><br />
          I’m at my best when making things or learning something new.
        </div>

        <div className="about">
          <a className="smallcaps" onClick={() =>this.swapBlurb()}>BACK</a>
        </div>
      </div>
    
    )
  }

  


  render() {
    return (
      <div className="home-wrap">

        <P5Wrapper sketch={sketch} />


        <div className="home">
          <h1>Shana {this.state.name}</h1>

          {this.state.blurb}

        </div>
      </div>

    )
  }
}

function Thumbnail(props) {
  return (
    <img className={props.pos} src={require('./images/' + props.url + '.png')}/>
  )
}

function renderThumbnail(url, pos) {
  return (
    <Thumbnail url={url} pos={pos} />
  );
}

class Lettering extends Component {

  render() {
    return (
      <div className="feed">
        {renderThumbnail("fake", "half half-left")}
        {renderThumbnail("amperhands", "half")}
        {renderThumbnail('allonsy', "wide")}
        {renderThumbnail("portland", "half half-left")}
        {renderThumbnail("ideate", "half")}
        {renderThumbnail("scared", "half")}
      </div>
    )
  }
}

function Type() {
    return(
      <div className="feed">
        {renderThumbnail("type/beatrice", "wide")}

        <p>
          As a student at <TextLink text="Type@Cooper West" url="http://coopertype.org/west" />, I worked on a revival of a Garamond typeface found in a letterpressed book printed in 1960. The revival process gave me my first exposure to the detail-oriented dedication needed to create a comprehensive and cohesive character set.
        </p>

        {renderThumbnail("type/cities", "wide")}
        {renderThumbnail("type/cities2", "half half-left")}
        {renderThumbnail("type/caps", "half")}


        {renderThumbnail("type/alphabet", "wide")}

      </div>
    )
}
function Product() {
  return(
    <div className="feed">

        <p>
          My current work on new user experiences at Pinterest is ongoing, but here is some older onboarding work in the meantime.
        </p>
      <FiftyThree />
    </div>
  )
}

function Book(props) {
  return (
    <div className="book">
      <a href={props.link} target="_blank">
        <img src={require('./images/library/' + props.image + '.png')} alt={"Book cover of "+ props.title}/>
      </a>
    </div>
  )
}


class Library extends Component {
  render() {
    var bookArr = json["data"];
    return (
      <div className="feed">


        <p>
          I am always working on becoming a better reader. 
          Here are some of my favorite books which have inspired, 
          taught, challenged, and consoled me over the years. 
          If any of these spark your interest, consider buying a copy from your local bookstore.
        </p>

        <div className="list">
          {bookArr.map(book => <Book title={book.title} author={book.author} link={book.link} image= {book.image} />)}
        </div>

      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />

      </div>

    );
  }
}

function Logo() {
  return (
    <li>
      <NavLink exact to='/' className='nav-home'>
        <svg id="logo" width="32px" height="32px" viewBox="0 0 50 51" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-805.000000, -31.000000)">
              <g id="s-1" transform="translate(205.000000, 31.000000)" fill="#333333" fillRule="nonzero">
                  <g id="s" transform="translate(599.000000, 0.000000)">
                      <g id="Vector" transform="translate(16.000000, 0.000000)">
                          <g id="path0_fill-link" transform="translate(0.062000, 0.000000)">
                              <path d="M10.0629,0 C15.5389,2.03835e-15 20.7577,4.27015 25.6204,4.28803 C31.4814,4.30957 33.0544,0.538697 34.5134,0.538697 C34.6872,0.538697 34.7943,0.594624 34.8575,0.668284 C34.9676,0.796607 34.9443,0.978746 34.9075,1.01275 C34.3257,1.55145 27.6774,11.0723 20.3196,10.8601 C13.9306,10.6759 10.975,6.73055 5.96876,6.83067 C6.67317,16.567 29.3815,19.5572 28.5078,32.0632 C28.3411,34.4495 27.4339,36.6902 26.3583,38.5302 C24.702,41.3636 22.6463,43.2466 22.2805,43.2466 C21.9944,43.2466 21.8064,43.133 21.8064,42.8587 C21.8064,42.2884 22.8931,41.5738 22.8838,38.4414 C22.8407,23.8535 -3.74983e-15,23.6183 0,11.248 C1.43687e-15,6.50788 5.02235,-1.87622e-15 10.0629,0 Z" id="path0_fill"></path>
                          </g>
                      </g>
                      <g id="Vector" transform="translate(0.000000, 6.000000)">
                          <g id="path0_fill-link" transform="translate(18.438000, 22.142000) rotate(180.000000) translate(-18.438000, -22.142000) translate(0.938000, 0.142000)">
                              <path d="M10.0629,0 C15.5389,2.03835e-15 20.7577,4.27015 25.6204,4.28803 C31.4814,4.30957 33.0544,0.538697 34.5134,0.538697 C34.6872,0.538697 34.7943,0.594624 34.8575,0.668284 C34.9676,0.796607 34.9443,0.978746 34.9075,1.01275 C34.3257,1.55145 27.6774,11.0723 20.3196,10.8601 C13.9306,10.6759 10.975,6.73055 5.96876,6.83067 C6.67317,16.567 29.3815,19.5572 28.5078,32.0632 C28.3411,34.4495 27.4339,36.6902 26.3583,38.5302 C24.702,41.3636 22.6463,43.2466 22.2805,43.2466 C21.9944,43.2466 21.8064,43.133 21.8064,42.8587 C21.8064,42.2884 22.8931,41.5738 22.8838,38.4414 C22.8407,23.8535 -3.74983e-15,23.6183 0,11.248 C1.43687e-15,6.50788 5.02235,-1.87622e-15 10.0629,0 Z" id="path0_fill"></path>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
        </svg>
      </NavLink>
    </li>
  )
}


class Video extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = {
      path: props.path
    }
  }

  componentWillReceiveProps(nextProps) {

    this.setState({ path: nextProps.path });  
    this.forceUpdate();
    var vid = document.getElementById(this.id);
    vid.load();
    vid.play();

  }
  render() {
    return(
    <div class="vid-screen">
      <img src={require("./images/iphone.png")} />
      <video id={this.props.id} >
        <source src={require('./video/' + this.state.path + '.mp4')} type="video/mp4"></source>
      </video>
    </div>
  )
  }
  
}

function Toggle(props) {
  return(
    <button onClick={props.onClick}>click</button>
  )
}


class PlayModule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      path: props.path,
      playing: false
    }
  }

  render() {
    return (
      <div className="playModule" onClick={this.props.onClick}>
        <div className="play-info">
          <span className="proto-num smallcaps">PLAY 0{this.props.num}</span>
          <span>{this.props.description}</span>
        </div>
      </div>
    )
  }
}

class VidParent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currPlaying: this.props.path,
      firstPath: this.props.path,
      secondPath: this.props.path2
    }
  }
  
  toggle(playPath) {
    this.setState({
      currPlaying: playPath
    })
  }

  render() {
    var vidDescriptions = {
      "paper-gray": "Text canvas landing, grey pulser, tip with icon",
      "paper-orange": "Grid landing, orange pulser, smaller tip",
      "paper-tip": "Non-modal tip",
      "paper-modal-tip": "Modal tip",
      "tip-center-long": "Scrolling tip center",
      "tip-center-hierarchy": "Hierarchical tip center",
      "final": "Final onboarding seen in Paper on launch in 2015"
    }
    return (
    <div className="wide-vid">
      <Video path={this.state.currPlaying} id={this.props.id} />
      <div className="wide-right">
        {this.props.header && <h2>{this.props.header}</h2>}
        <p>{this.props.text1}</p>
        <PlayModule num={this.props.num} path={this.state.firstPath} description={vidDescriptions[this.state.firstPath]} onClick={() => this.toggle(this.state.firstPath)} />
        {this.props.path2 && <PlayModule num={this.props.num+1} path={this.state.secondPath} description={vidDescriptions[this.state.secondPath]} onClick={() => this.toggle(this.state.secondPath)} /> }
        {this.props.text2 && <p>{this.props.text2}</p>}
      </div>
    </div>  
    )
  }
}


function FiftyThree() {

    return(
      <div className="feed">
        {renderThumbnail("fiftythree/paper2", "wide")}

        <p>
          During the summer of 2015, I was a design intern 
          on the prototyping team at <TextLink text="FiftyThree" url="fiftythree.com" />, 
          where I worked on onboarding for the first iPhone release of <TextLink text="Paper" url="https://itunes.apple.com/us/app/paper-by-fiftythree/id506003812?mt=8" />.
        </p>


        <h2>Initial Prototyping</h2>
        <p>We wanted to introduce small pulsers at opportune times to let users discover helpful tips voluntarily. Tips lead to the Tip Center, letting people know where to find more help.</p>

        <VidParent path="paper-gray" path2="paper-orange" id="vid1" 
          num={1} text1="I built two fully interactive prototypes and tested them with new and returning users. The two prototypes differed in app entry point, pulser color, and tip design." 
          text2="We quickly learned that starting in the text canvas was confusing and that the pulsers were unnoticeable next to the sample content."/>


        <h2>Rapid Iteration</h2>

        <p>
          We decided to skip the pointers and directly introduce tips. I quickly iterated in between user testing sessions to build a prototype which would introduce tips at opportune moments. These tips lived directly on top of the app content, allowing users to directly interact with the content if they wished.
        </p>

        <VidParent path="paper-tip" path2="paper-modal-tip" id="vid2" 
          num={3} text1="However, more testing revealed that most people tapped or swiped away the tips without reading them. For the next iteration, I added a modal backdrop."
          text2="The modal design tested better, but some users still instinctively dismissed the tip pointer." />


        <VidParent path="tip-center-long" path2="tip-center-hierarchy" id="vid3" 
          num={5} text1="I also worked on making the tip center 
            contextual, surfacing the most relevant tips 
            first. I prototyped both a long 
            and a hierarchical tip center, as well as interactions for tip to tip navigation." />


        <VidParent num={7} path="final" id="vid4" header="Final designs" text1="Prototyping allowed us to quickly test designs with real users and iterate toward a better experience. The final onboarding design featured large tips with explicit dismissal buttons, a contextual long tip center, and smooth tip-to-tip gestural navigation." />


        <h2>Credit</h2>
          <p>
          I worked in a Javascript stack and built out an interactive onboarding experience on top of an existing prototype by <TextLink text="James Paterson" url="https://twitter.com/presstube" />. I also worked closely with <TextLink text="Paula Guntaur" url="https://twitter.com/pollybirdy" /> who led design for our onboarding experience. 
          </p>

        <h2>My Summer Internship</h2>
        <p>
          I wrote a blog post about my internship experience at FiftyThree. You can see it on <TextLink text="The Open Studio" url="http://blog.fiftythree.com/posts/my-summer-internship-at-fiftythree" />.
        </p>
      </div>
    )
  }




export default App;
