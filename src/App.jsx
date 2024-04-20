import { useState } from "react";
import "./App.css";
import Student from "./Student.jsx";
import Card from "./components/Card.jsx";
import Counter from "./components/Counter.jsx";
import Product from "./components/Product.jsx";
import add, { mul as multi, sub } from "./utils.js";
import LifeCycle from "./components/LifeCycle.jsx";
import LifeCycleHook from "./components/LifeCycleHook.jsx";
// import Parent from "./components/PropDrilling.jsx";\
// import Parent from "./components/PropDrilling-Optimized.jsx";
import Parent from "./components/Context.jsx";
import ReactForm from "./components/ReactForm.jsx";
import Reference from "./components/Reference.jsx";
import ReducerComp from "./components/Reducer.jsx";

const data = [
  {
    name: "Rossy",
    id: 6543,
    imageUrl:
      "https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg",
    age: 21,
    isSenior: true,
  },
  {
    id: 9876,
    age: 21,
    imageUrl: undefined,
    isSenior: false,
  },
  {
    id: 1234,
    isSenior: false,
  },
];

const prodData = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
    bestSeller: true,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
    bestSeller: true,
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
    bestSeller: false,
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
    bestSeller: false,
  },
];

const cardData = [
  {
    type: "description",
    title: "Fully Responsive Design",
    description:
      "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
  },
  {
    type: "image",
    title: "Image 1",
    image:
      "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg",
  },
  {
    type: "description",
    title: "Updated For Bootstrap 5",
    description:
      "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
  },
  {
    type: "image",
    title: "Image Two",
    image:
      "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg",
  },
  {
    type: "description",
    title: "Easy to Use & Customize",
    description:
      "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
  },
  {
    type: "image",
    title: "Image 3",
    image:
      "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg",
  },
];

function App() {
  const mentorName = "Sanjay Saravanan";
  const val = 999;

  const [mountComponent, setMountVal] = useState(false);

  // Cart State
  const [cartCount, setCartCount] = useState(0);

  const [cart, setCart] = useState([]);

  const handleMount = (e) => {
    console.log(e);
    setMountVal(true);
  };

  const handleUnmount = () => {
    setMountVal(false);
  };

  const addToCart = (prodName) => {
    console.log("line 150");
    // display added <prod-name> to the cart
    // filter the prod data using the above initial data
    const prod = prodData.find(({ title }) => title === prodName);
    setCart([...cart, prod]);
  };

  return (
    <>
      {console.log("Rendring", cart)}
      {/* <button
        style={{ position: "absolute", top: 10, right: 10, fontSize: 32 }}
        onClick={() => {}}
      >
        {cart.length}
        <span
          style={{
            position: "absolute",
            border: "1px solid",
            top: "75px",
            left: "0px",
          }}
        >
          {cart.length === 0 ? (
            "No Products"
          ) : (
            <div>{cart.map(({ title }) => title)}</div>
          )}
        </span>
      </button> */}
      {/* <h1 className="bg-primary">Weekend Tamil Batch</h1>
      <h1>Mentor: {mentorName}</h1>
      <h1>Batches: {sub(1, 2)}</h1>
      <h1>Batches: {multi(1, 2)}</h1>
      <h1>Batches: {add(1, 2)}</h1> */}
      {/* <button onClick={handleMount}>Click To Mount</button>
      <button onClick={handleUnmount}>Click To Unmount </button> */}
      {/* {Student("Kumaravel")} */}
      {/* <Student
        name={data[0].name}
        image={data[0].image}
        id={data[0].id}
        age={data[0].age}
      />
      <Student
        name={data[1].name}
        image={data[1].image}
        id={data[1].id}
        age={data[1].age}
      /> */}
      {/* {[
        <Student
          name={data[0].name}
          image={data[0].image}
          id={data[0].id}
          age={data[0].age}
          key={data[0].key}
        />,
        <Student
          name={data[1].name}
          image={data[1].image}
          id={data[1].id}
          age={data[1].age}
          key={data[1].key}
        />,
      ]} */}
      {/* {data.map((stu) => {
        return (
          <Student
            name={stu.name}
            age={stu.age}
            id={stu.id}
            image={stu.image}
            key={stu.id}
          />
        );
      })} */}
      {/* {data.map((stu) => {
        return <Student {...stu} image={stu.imageUrl} key={stu.id} />;
      })} */}
      {/* {prodData.map((pd) => (
        // passing a function as prop ( addToCart )
        <Product {...pd} addToCart={addToCart} key={pd.id} />
      ))} */}
      {/* <Counter initialValue={val} />
      {cardData.map((cd) => (
        <Card {...cd} key={cd.title} />
      ))} */}
      {/* {mountComponent && <LifeCycle />} */}
      {/* {mountComponent && <LifeCycleHook />} */}
      {/* <Parent /> */}
      {/* <ReactForm /> */}
      {/* <Reference /> */}
      <ReducerComp />
    </>
  );
}

export default App;
