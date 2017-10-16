import React,{Component} from 'react';
import MemberBlock from './MemberBlock';
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
                    <h1>About Idea</h1>
                    <h4>Our project is about an interactive game, that doesn't require users to use their smartphones for long periods of time. Instead, it makes them focus on completing the particular task in a group with other participants that will require them all to socialize.  
                    
                    Our "Scavenger Hunt"-like quiz game, will make studying more fun, by the teacher placing URL Sharing Beacons in random places with each showing a list of questions. If the students in the group, answer the questions correctly, they will get a hint to where the next beacon is. The team that reaches and answers the questions to the last beacon, first - wins the game. For example, Art/History teacher could place beacons near art/historical museums just like Literature teacher could place some in libraries raising the awareness of where these places are. 
                    
                    We want our game to be inclusive, so we decided to build a reactive web application that will work on any device regardless of platform or price tag of the hardware. 
                    
                    Our project is about an interactive game, that doesn't require users to use their smartphones for long periods of time. Instead, it makes them focus on completing the particular task in a group with other participants that will require them all to socialize.  

                    Our "Scavenger Hunt"-like quiz game, will make studying more fun, by the teacher placing URL Sharing Beacons in random places with each showing a list of questions. If the students in the group, answer the questions correctly, they will get a hint to where the next beacon is. The team that reaches and answers the questions to the last beacon, first - wins the game. For example, Art/History teacher could place beacons near art/historical museums just like Literature teacher could place some in libraries raising the awareness of where these places are. 

                    We want our game to be inclusive, so we decided to build a reactive web application that will work on any device regardless of platform or price tag of the hardware. 

                    
                    </h4>

                    <h1>What is the purpose of the project ?</h1>
                   
                    <h4>- Make a platform agnostic and inclusive educational game</h4> 
                    <h4>- Make learning experience of students more interesting and fun</h4> 
                    <h4>- Promote group work and socialization among students</h4>
                    <h4>- Help bring down the walls of hate and fear by letting random students from diverse backgrounds work together</h4>
                  

                    <h1>How it works?</h1>
                    <img className="centered" src="images/class.png" alt=""/>
                    <br />
                    <img className="centered" src="images/path.png" alt=""/>


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