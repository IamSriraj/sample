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
  
  
