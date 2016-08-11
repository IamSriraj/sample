 /*
 React component to render
 Hello world looks as follows:
 */

 class HelloWorld extends React.Component {
    render() {
      return (
        <h1>Hello World!</h1>
      );
    }
 }
  
 //To render the component use React.render method:
  
  React.render(
    <HelloWorld />,
    document.getElementById("greeting")
  );
    
//The below example shows how to render two tags:

 class HelloWorld extends React.Component {
    render() {
      return (
       <div id="two">
         <h1>Hello World!</h1>
         <a href="#" id="hit">Hit Me!</a>
       </div> 
      );
    }
 }
 
 //To render the component use React.render method:
  
  React.render(
    <HelloWorld />,
    document.getElementById("greeting")
  );
  
  /*
  The below example shows how to render component with argument.
  I am taking a name instead of world.
  */

 class HelloWorld extends React.Component {
    render() {
      return (
       <div id="two">
         <h1>Hello {this.props.name}</h1>
         <a href="#" id="hit">Hit Me!</a>
       </div> 
      );
    }
 }
 
 //To render the component use React.render method:
  
  React.render(
    <HelloWorld name="sri" />,
    document.getElementById("greeting")
  );
  
 /*
 With the below example I would like to show 
 how to create click events
 */ 

//To provide a component with a click handler function,
//We need to pass it as an argument to onClick property

class HelloWorld extends React.Component {
  linkClicked(event) {
    console.log(event);
  }
  render() {
    return (
      <div id="two">
       <h1>Hello {this.props.name}</h1>
       <a href="#" id="hit" onClick={this.linkClicked}>Hit me</a>
      </div> 
     );
  }
}

 React.render(
   <HelloWorld name="sri" />,
   document.getElementById("greeting")
 );

/*
I defined linkClicked method that logs the event with above example.
Now with below example I would like to show how to change,
content with click event.
*/

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};
    this.linkClicked = this.linkClicked.bind(this);
  }
  
  linkClicked(event) {
    this.setState({clicked: true});
  }
  
  render() {
    if (this.state.clicked === false) {
     return (
      <div id="two">
       <h1>Hello {this.props.name}</h1>
       <a href="#" id="hit" onClick={this.linkClicked}>Hit me</a>
      </div> 
     );
    } else {
      return (
       <div id="two">
        <h1>Hello {this.props.name}</h1>
        <span>You hit me!</span>
       </div> 
      );
    }
  }
}

React.render(
  <HelloWorld name="sri" />,
  document.getElementById("greeting")
 );
