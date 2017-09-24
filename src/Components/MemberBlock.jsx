import React, {Component} from 'react';
import teamMembers from './team.json';

class MemberBlock extends Component{

    render(){
        return(
            <div>
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-2">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src="images/anton.png" alt=""/>
            </div>
          </div>
          <div className="col-md-6 order-1">
            <div className="p-5">
              <h2 className="display-4">Anton Olkhovskiy</h2>
              <h3>Web Developer</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src="images/belemir.png" alt=""/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-5">
              <h2 className="display-4">Belemir Çilingir</h2>
              <h3>Mobile Developer</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-2">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src="images/natig.png" alt=""/>
            </div>
          </div>
          <div className="col-md-6 order-1">
            <div className="p-5">
              <h2 className="display-4">Natig Kurbanov</h2>
              <h3>Software Architect</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src="images/dovik.png" alt=""/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-5">
              <h2 className="display-4">Dovlet Amanov</h2>
              <h3>IoT Developer</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
            </div>
        )
    }
}

export default MemberBlock;