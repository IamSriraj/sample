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
    
