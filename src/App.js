import Header from "./component/Layouts/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartShown, setCartShown] = useState(false);
  const showCartHandler = () => {
    setCartShown(true);
  };

    const closeCartHandler = () => {
      setCartShown(false)
    }
  return (
    <>
      {cartShown && <Cart onClose={closeCartHandler} />}
      <Header onClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
