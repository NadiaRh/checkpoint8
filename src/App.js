import React from 'react';
import daniel from "./daniel.jpg";
import harold from './harold.jpg';
import sarah from './sarah.jpg';

const ResultDaniel = (props) => {
  return (
    <div>
      <img style={{width:300}} src={daniel} alt=""></img>
      <p>I am a highly competent iT professional with a proven track record in designing websites,networking and managing databases.</p>
    </div>
  );
};

const ResultHarold = () => {
  return (
    <div>
      <img style={{width:400}} src={harold} alt=""></img>
      <p>I am a hardworking and ambitious individual with a great passion for the transport and logistics industry.</p>
    </div>
  );
}

const ResultSarah = () => {
  return (
    <div>
      <img  style={{width:500 }} src={sarah} alt=""></img>
     <p> I have a clear, logical mind with a practical approach to problem-solving and a drive te see things through to completion. I have more than 2 years of experience in managing and leading teams across multiple sectors.</p>
    </div>
  );
}

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedComponent: 'Daniel'
    };
  }

  buttonClickHandler (button) {
    this.setState({
      displayedComponent: button
    });
  }

  getDisplayedComponent () {
    let {displayedComponent} = this.state;

    if (displayedComponent === 'Harold') {
      return (
        <ResultHarold />
      );
    }

    if (displayedComponent === 'Sarah') {
      return (
        <ResultSarah />
      );
    }

    return (<ResultDaniel />);
  }


  render () {
    return (
      <div> 
        <input type="button" value=" Daniel" onClick={this.buttonClickHandler.bind(this, 'Daniel')} />
        <input type="button" value=" Harold" onClick={this.buttonClickHandler.bind(this, 'Harold')} />
        <input type="button" value=" Sarah" onClick={this.buttonClickHandler.bind(this, 'Sarah')}/>

        {this.getDisplayedComponent()}
      </div>
    );
  }
}

export default Main;