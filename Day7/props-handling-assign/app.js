/*
const domRoot = document.getElementById("root");
const reactRoot= ReactDOM.createRoot(domRoot);


const arr = [
  {
    name: "Rishi",
    score: 29,
  },
  {
    name: "Mohan",
    score: 21,
  },
  {
    name: "Abhi",
    score: 24,
  },
  {
    name: "Arun",
    score: 20,
  },
  {
    name: "Ramu",
    score: 17,
  },
  {
    name: "Priya",
    score: 21,
  },
];

const Card = (props) =>{
    const {name , score} = props;
    return(
        <div>
            <h1>{name}</h1>
            <p>{score}</p>
        </div>
    )
}

const App = () =>{
    return (
      <div>
        <h1>Hello</h1>
        <Card name={arr[0].name} score={arr[0].score} />
        <Card name={arr[1].name} score={arr[1].score} />
      </div>
    );
};

reactRoot.render(App());

*/


const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const arr = [
  {
    name: "Rishi",
    score: 29,
  },
  {
    name: "Mohan",
    score: 21,
  },
  {
    name: "Abhi",
    score: 24,
  },
  {
    name: "Arun",
    score: 20,
  },
  {
    name: "Ramu",
    score: 17,
  },
  {
    name: "Priyam",
    score: 21,
  },
];


const styleObj = {
    color: "red",
    fontSize: "1rem",
    fontWeight: "600"
}

const Card = (props) => {
  const {  score , title} = props;
  return (
    <div className="card">
      <h2 style={{color : "purple"}}>{title}</h2>
      <p style={styleObj}>{score}</p>
    </div>
  );
};

const App = () => {
  return (
    <div  className="parent">
      {arr.map((element) => (
        <Card title={element.name} score={element.score} key={element.name} />
      ))}
    </div>
  );
};

reactRoot.render(App());
