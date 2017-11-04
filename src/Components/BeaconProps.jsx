import React,{Component} from 'react';
import Footer from './Footer';

export default class BeaconProps extends Component{

    render(){
        return(
            <div>
                <br />
               
                <div className="container">
               
                        <div className="row">
                           
                           <div className="col-md-4">
                           <div className="beacon1">
                            <form>
                            <div className="form-group">
                            <h1 className="beaconTitle">Beacon #1</h1>
                            <label htmlFor="questionInput">Question:</label>
                            <textarea className="form-control" id="questionArea"></textarea>
                            <label htmlFor="trueAnswer">True Answer:</label>
                            <input type="text" id="trueAnswer" className="form-control" />
                            <label htmlFor="falseAnswers">False Answers:</label>
                            <input type="text" id="falseAnswers" className="form-control" />
                            <input type="text" id="falseAnswers" className="form-control" />
                            <input type="text" id="falseAnswers" className="form-control" />
                            <label htmlFor="hint">Hint:</label>
                            <input type="text"  className="form-control" id="hint"/>
                            <button type="submit" className="btn btn-success">Save</button>
                            </div>
                        </form>
                        </div>
                        </div>


                        <div className="col-md-4">
                        <div className="beacon2">
                            <form>
                            <div className="form-group">
                            <h1 className="beaconTitle">Beacon #2</h1>
                            <label htmlFor="questionInput">Question:</label>
                            <textarea className="form-control" id="questionArea"></textarea>
                            <label htmlFor="trueAnswer">True Answer:</label>
                            <input type="text" id="trueAnswer" className="form-control" />
                            <label htmlFor="falseAnswers">False Answers:</label>
                            <input type="text" id="falseAnswers" className="form-control" />
                            <input type="text" id="falseAnswers" className="form-control" />
                            <input type="text" id="falseAnswers" className="form-control" />
                            <label htmlFor="hint">Hint:</label>
                            <input type="text"  className="form-control" id="hint"/>
                            <button type="submit" className="btn btn-success">Save</button>
                            </div>
                        </form>
                        </div>
                        </div>


                        <div className="col-md-4">
                        <div className="beacon3">
                            <form>
                            <div className="form-group">
                            <h1 className="beaconTitle">Beacon #3</h1>
                            <label htmlFor="questionInput">Question:</label>
                            <textarea className="form-control" id="questionArea"></textarea>
                            <label htmlFor="trueAnswer">True Answer:</label>
                            <input type="text" id="trueAnswer" className="form-control" />
                            <label htmlFor="falseAnswers">False Answers:</label>
                            <input type="text" id="falseAnswers" className="form-control" />
                            <input type="text" id="falseAnswers" className="form-control" />
                            <input type="text" id="falseAnswers" className="form-control" />
                            <label htmlFor="hint">Hint:</label>
                            <input type="text"  className="form-control" id="hint"/>
                            <button type="submit" className="btn btn-success">Save</button>
                            </div>
                        </form>
                        </div>
                        </div>
                    </div>
                    </div>
                  <br />
               <Footer />
            </div>
           
        );
    }
}