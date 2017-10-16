import React, {Component} from 'react';
import Homepage from './Homepage';
import ProjectPage from './ProjectPage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Header extends Component{

    render(){
        return(
          <Router>
            <div>
           {/* Header Navigation*/}
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
             <div className="container">
               <Link to="/" className="navbar-brand nav-link active">Gilfoyle Prime</Link>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarResponsive">
                 <ul className="navbar-nav ml-auto">
                   <li className="nav-item active">
                     <a className="nav-link" >
                       <Link to="/projectpage" className="nav-link active">About Project</Link>
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
           </nav>
            {/*Homepage component*/}
        
           <Route exact path="/" component={Homepage} />  
           <Route path='/projectpage' component={ProjectPage} />
    </div>
    </Router>
        )
    }
}

export default Header;