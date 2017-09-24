import React, {Component} from 'react';
import Footer from './Footer';
import MemberBlock from './MemberBlock';

const headerBackground = {
    background: "url(images/bg-img.png) no-repeat center center scroll",
    "-webkit-background-size": "cover",
    "-moz-background-size": "cover",
    "background-size": "cover",
    "-o-background-size": "cover"
}

class Homepage extends Component{



    render(){
        return(
            <div>
                {/*starts:Header*/}   
                <header className="justHeader" style={headerBackground}> 
                    <div className="overlay">
                        <div className="container">
                        <h1 className="display-1 text-white">Hello World!</h1>
                        <h2 className="display-4 text-white">Here We Are</h2>
                    </div>
                </div>
                </header>
                {/*ends:Header*/}

                {/*starts:TeamMembers*/}
                <MemberBlock />
                {/*ends:TeamMembers*/}

                {/*starts:Footer*/}
                <Footer />
                {/*ends:Footer*/}
            </div>
        )
    }
} 
export default Homepage;