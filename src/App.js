const Dog = (props) => {
    return React.createElement("div", {}, [
      React.createElement("h3", {}, props.name),
      React.createElement("h3", {}, props.weight),
      React.createElement("h3", {}, props.breed),
    ]);
  };
  
  const App = () => {
    var arr = [
      { name: "Bull Terrier", weight: "50.70 Kg", breed: "Terrier" },
      { name: "PitBull", weight: "50.70 Kg", breed: "Bull" },
      { name: "Puppy", weight: "5.70 Kg", breed: "husky" },
    ];
    return React.createElement(
      "div", // tag
      { id: "website-title" }, // attributes with the element
      [
  
          
        React.createElement("h1", {}, "Dog Website"),
        arr.map((item) => React.createElement(Dog, item)),
      ] // content can be another component also.
    );
  };
  
  ReactDOM.render(
    React.createElement(
      // component to render
      App
    ),
    document.getElementById("root") // place to render
  );