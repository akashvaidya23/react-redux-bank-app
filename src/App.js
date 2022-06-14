import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrementby5, decrementby10 } from "../src/features/bank/bankSlice";

const App = () => {
  const count = useSelector((state) => state.bankSlice.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(2500701);
  return (
    <div className="App">
      <div className="App">
        <img
          className="App__userpic"
          src={"https://image.ibb.co/nC8vGp/girl.png"}
          alt="photographer"
        />
        {/* <p className="App__username">Hello, {username}! </p> */}
        <div className="App__amount">
          {/* {totalAmount} */}
          {count}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={() => dispatch(decrementby10())}>
            WITHDRAW $10,000
          </button>
          <button data-amount="5000" onClick={() => dispatch(decrementby5())}>
            WITHDRAW $5,000
          </button>
        </section>
        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    </div>
  );
};

export default App;
