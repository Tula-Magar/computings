import React from 'react';
import ComingSoon from '../../img/ComingSoon.png';
import NewUpdate from '../../img/NewUpdate.png';
import  Version from '../../img/Version.PNG';
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import {BrowserView, MobileView} from 'react-device-detect';
import LazyLoad from 'react-lazyload';




import ScrollAnimation from 'react-animate-on-scroll';
import {Helmet} from "react-helmet";
//https://www.react-reveal.com/examples/common/lightspeed/
//https://bestofreactjs.com/repo/dbramwell-react-animate-on-scroll

//https://www.codegrepper.com/code-examples/javascript/reveal+text+on+hover+react
function About() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>about</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div className="container pt-5 p-5 text-white">

            <h1>Coming Soon Microsoft Outlook Navigation Panel</h1> <br/>
            <p classNames="pt-3 p-3 my-3"> &emsp;&emsp; Recently, Microsoft has been updating software as usual. This time Microsoft plan to update the outlook navigation panel
                display style to vertical panel on the left side. Before this new update, we used to see navigation panel display on the buttom left side of outlook. Now, Microsoft are letting to use some user who has turn
                on "Comming Soon" feature. People has "Comming Soon" feature are having confusion over this new update. You can turn off the "Comming Soon" and don't use it until new feature are
                permenently avaiable to everyone or get use it ahead than most people. I would suggest IT professional to use this feature as soon as possible and get familiar with the new navigation panel 
                display style so, you will assist other people fast and concise way. 
            </p>

    </div>

    <div className="container pt-5 p-5 my-5 border">

            <div className="container pt-5 p-5 my-5 border text-white">
                <h2 className="text-black">Still Confusion</h2>

                <p className="pt-3 p-3 my-3"> 
                    &emsp;&emsp; Below, I will solve show the picture to visually understand what I am saying above. I will explain little on the top of the pictures. 
                </p>
        
            </div>


        <div  className="container pt-5 p-5 bg-info bg-gradient my-5 border text-black">
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <h3>&emsp;&emsp;Microsoft Outlook Version</h3>
                <p className='text-white'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;As I know this new navigation display style only affect to later 2020 version. I am using 2022 version </p>
                <LazyLoad>
                    <BrowserView>
                        <img className="img-fluid mx-auto d-block" src={Version} alt="version img not found" width="100%"/>
                    </BrowserView>
                </LazyLoad>

                <LazyLoad>
                    <MobileView>
                        <img className="img-fluid mx-auto d-block" src={Version} alt="version img not found" width="100%"/>
                    </MobileView>
                </LazyLoad>
            </ScrollAnimation>
        </div>

        <div>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
            <h3>&emsp;&emsp;Microsoft Outlook Version</h3>
            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;If you don't want to use the preview of upcoming microsoft update then you can simply click on Coming Soon to turn off </p>
            <LazyLoad>
                <Image className="img-fluid mx-auto d-block" src={ComingSoon} alt="version img not found" width="300vh"/>   
            </LazyLoad>       
            </ScrollAnimation > 
        </div>

        <div className="container pt-5 p-5 bg-info bg-gradient my-5 border text-black">
                <h3>&emsp;&emsp;Microsoft Outlook View</h3>
                <p className='text-white'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;As I know this new navigation display style only affect to later 2020 version. I am using 2022 version </p>
                <LazyLoad>
                    <BrowserView>
                        <img className="img-fluid mx-auto d-block" src={NewUpdate} alt="version img not found" width="100%"/>
                    </BrowserView>
                </LazyLoad>

                <LazyLoad>
                    <MobileView>
                        <img className="img-fluid mx-auto d-block" src={NewUpdate} alt="version img not found"/>
                    </MobileView>
                </LazyLoad>
            
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <h1>
                    React Animate On Scroll
                </h1>
                <h2>
                    Using:
                </h2>
            </ScrollAnimation>
                
            <ScrollAnimation animateIn='bounceInRight'
                animateOut='bounceOutLeft'>
                <h2>
                    <a href='https://daneden.github.io/animate.css/'>
                    Animate.css
                    </a>
                </h2>
            </ScrollAnimation>
        </div>
        
      </div>
      </>
  );
}

export default About;
