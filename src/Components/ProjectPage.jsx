import React,{Component} from 'react';
import Footer from './Footer';

const headerBackground = {
    background: "url(images/project-bg.png) no-repeat center center scroll",
    "-webkit-background-size": "cover",
    "-moz-background-size": "cover",
    "background-size": "cover",
    "-o-background-size": "cover"
}

class ProjectPage extends Component{
    
    render(){
        return(
          
            <div>
                {/*starts:Header*/}   
                <header className="justHeader" style={headerBackground}> 
                    <div className="overlay">
                        <div className="container">
                        <h1 className="display-1 text-white">Guess What's Next</h1>
                    </div>
                </div>
                </header>
                {/*ends:Header*/}

                {/*starts:ProjectInfo*/}
                <div className="text-center">
                <br />
                <br />
                    <h1>About Idea</h1>
                    <h4>Our project is about an interactive game, that doesn't require users to use their smartphones for long periods of time. Instead, it makes them focus on completing the particular task in a group with other participants that will require them all to socialize.  
                    
                    Our "Scavenger Hunt"-like quiz game, will make studying more fun, by the teacher placing URL Sharing Beacons in random places with each showing a list of questions. If the students in the group, answer the questions correctly, they will get a hint to where the next beacon is. The team that reaches and answers the questions to the last beacon, first - wins the game. For example, Art/History teacher could place beacons near art/historical museums just like Literature teacher could place some in libraries raising the awareness of where these places are. 
                    
                    We want our game to be inclusive, so we decided to build a reactive web application that will work on any device regardless of platform or price tag of the hardware. 
                    
                    Our project is about an interactive game, that doesn't require users to use their smartphones for long periods of time. Instead, it makes them focus on completing the particular task in a group with other participants that will require them all to socialize.  

                    Our "Scavenger Hunt"-like quiz game, will make studying more fun, by the teacher placing URL Sharing Beacons in random places with each showing a list of questions. If the students in the group, answer the questions correctly, they will get a hint to where the next beacon is. The team that reaches and answers the questions to the last beacon, first - wins the game. For example, Art/History teacher could place beacons near art/historical museums just like Literature teacher could place some in libraries raising the awareness of where these places are. 

                    We want our game to be inclusive, so we decided to build a reactive web application that will work on any device regardless of platform or price tag of the hardware. 

                    
                    </h4>
                    <br />
                    <br />
                    <br />

                    <h1>What is the purpose of the project ?</h1>
                   
                    <h4>- Make a platform agnostic and inclusive educational game</h4> 
                    <h4>- Make learning experience of students more interesting and fun</h4> 
                    <h4>- Promote group work and socialization among students</h4>
                    <h4>- Help bring down the walls of hate and fear by letting random students from diverse backgrounds work together</h4>
                    <br />
                    <br />
                    <br />

                    <h1>How it works?</h1>
                    <img className="centered" src="images/class.png" alt=""/>
                    <br />
                    <img className="centered" src="images/path.png" alt=""/>
                    <br />
                    <br />
                    <br />

                    <h1>Functional Requirements</h1>
                    <br />
                    <h4>-This platform must handle events among competitors and beacons.</h4>
                    <br />
                    <h4>-Beacons must be configured  with URL’s including the list of  questions  that are located in random places.</h4>
                    <br />
                    <h4>-Application should group students in the random teams.</h4>
                    <br />
                    <h4>-Application must give a hint about the next beacon to the  team that  answers the questions correctly. </h4>
                    <br />
                    <h4>-All players will stop playing and get notified about the winner the moment one of the team’s answers all of the last beacon’s questions.</h4>
                    <br />
                    <br />
                    <br />

                    <h1>Non-Functional Requirements</h1>
                    <br />
                    <h3>Performance</h3>
                    <br />
                    <h4>The sole purpose of this project is to have a fast and inclusive web application that would not lag on any type of device. To accomplish this, we use web technologies such as Javascript ECMA 6, React Native, Redux, mongoDB and nodeJS. We also use Chrome network emulation to test how our website works on networks as slow as possible to ensure our customers are fully satisfied with performance. </h4>
                    <br />
                    <h3>Efficiency</h3>
                    <br />
                    <h4>The initial version of the system must accommodate 100 simultaneous users or less within the peak load period within all day time. However, it can be scaled to more upon demand.</h4>
                    <br />
                    <h3>Flexibility</h3>
                    <br />
                    <h4>Project can easily be modified to adapt to different environments, configurations, and user expectations due to its component based structure.</h4>
                    <br />
                    <h3>Security</h3>
                    <br />
                    <h4>Due to the fact that our project will be hosted on Google Cloud, it won’t have any major security issues on the hardware and authentication side. We shall make penetration tests on the software side to insure there are no bugs that could cause system breach.</h4>
                    <br />
                    <h3>Scalability</h3>
                    <br />
                    <h4>Our component based approach will help us make our project modular that would make implementation of the project easier, also allowing it to scale from 100 to 1 million users in a blink of an eye. Using cloud services like Google Cloud, hardware scaling is just a click away.</h4>
                    <br />
                    <h3>Maintainability</h3>
                    <br />
                    <h4>Our project will be easy to maintain due to its nature of being a reactive web application. This type of applications are built on top of components that communicate asynchronously as they react to user and system events. As a result, they become scalable, responsive, and fault-tolerant. </h4>
                    <br />
                    <h3>Usability</h3>
                    <br />
                    <h4>Our service is designed from scratch to be very simple to use. As matter of fact, we put latest UI design principles into the consideration while sketching the looks of each page and menu. To ensure high usability among users of all ages, we shall test the “beta” version with users of different age groups </h4>
                    <br />
                    <h3>Availability </h3>
                    <br />
                    <h4>The project will be highly available due to its nature of being platform agnostic progressive web application that will be hosted on a cloud service no to have any hardware or internet latency issues.</h4>
                    <br />


                </div>
                {/*ends:ProjectInfo*/}

                {/*starts:Footer*/}
                <Footer />
                {/*ends:Footer*/}
            </div>
        
   
        )
    }
}

export default ProjectPage;