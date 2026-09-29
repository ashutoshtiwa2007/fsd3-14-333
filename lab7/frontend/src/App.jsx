const b1={
  picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWwfWh6zf4GGVfa-X5Wzcm6r7DVrLafyxdSquuwXOGw&s=10",
  bname: "React Design Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.8,
};
const b2={
  picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWwfWh6zf4GGVfa-X5Wzcm6r7DVrLafyxdSquuwXOGw&s=10",
  bname: "React Design Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.8,
};

function Book(props){
  console.log(props)
  return(
    <div>
      <img src={props.book.picUrl}
      alt={props.book.bname} ></img>
      
      <h1> Hello React</h1>
      <h2> Prices: 765.00</h2>
      <h3>Quality: {props.book.quantity}</h3>
      <h3> Rating : {props.book.rating}</h3>
  </div>
  );
}

export default function App(){
  return(
    <>
    <Book book={b1}/>
    <h1>Hello react</h1>
    <Book book={b2}/>
    <Book book={b1}/>
    <Book book={b2}/>
    </>
  )
  
  }
