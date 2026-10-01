import Book from "./components/Book"
import Pen from "./components/Pen"
import {p1,p2} from "./components/Pen_lib"
const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY218_.jpg",
  bname: "React Design Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};
const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY218_.jpg",
  bname: "The Road to React",
  price: 2886,
  quantity: 3,
  rating: 4.5,
};


// export default function App() {
//   return (
//     <>
//       <h1>Online book Store
//       </h1>
//       <div className="container">
//       <Book book={b1} />
//       <Book book={b2} />
//       <Book book={b1} />
//       <Book book={b2} />
//       </div>
//     </>
//   );
// }

export default function App() {
  return (
    <>
      <h1>Online book Store
      </h1>
      <div className="container">
      <Pen pen={p1} />
      <Pen pen={p2} />
      <Pen pen={p1} />
      <Pen pen={p2} />
      </div>
    </>
  );
}