const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Fofura",
      animal: "Dog",
      breed: "Yorkshire",
    }),
    React.createElement(Pet, {
      name: "Lilith",
      animal: "Cat",
      breed: "Siamês",
    }),
    React.createElement(Pet, { 
      name: "Pipoca", 
      animal: "Cat", 
      breed: "Persa" }),
  ]);
};
        
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));