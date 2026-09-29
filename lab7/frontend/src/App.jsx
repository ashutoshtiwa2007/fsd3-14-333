const b1={
  picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k5F0SrRDhbdYcIV2FGx0qygjgEhBrHFBu_0EppraBw&s=10",
  bname: "React Design Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.8,
};

function Book(){
  return(
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4LQTn0vRq4ydPLp-uTj_lEUHOHYWUU18JlCq5KuMw&s=10"
      alt="Titli" ></img>
      <h1> Hello React</h1>
      <h2> Prices: 765.00</h2>
      <h3>Quality: 5</h3>
      <h3> Rating : 5.0</h3>
  </div>
  );
}

export default function App(){
  return(
    <>
    <Book />
    <h1>Hello react</h1>
    <Book />
    <Book />
    <Book />
    </>
  )
  
  }
