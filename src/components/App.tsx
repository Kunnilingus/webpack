import { FC, useState } from "react";
import classes from "./app.module.scss";
import { Link } from "react-router-dom";
import About from "@/pages/About/About";
import jpg from "@/assets/1.jpg";
import png from "@/assets/2.png";
import Svg from "@/assets/3.svg";

export const App: FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1 data-testid={"Platform"}>PLATFORM={__PLATFORM__}</h1>
      <Link to="/about">About</Link>
      <Link to="/shop">Shop</Link>
      <p>SOSAT' LOXI</p>
      <p>{count}</p>
      <button
        className={classes.buttonIncrease}
        onClick={() => setCount((prev) => prev + 1)}
      >
        increase
      </button>
      <button
        className={classes.buttonDecrease}
        onClick={() => setCount((prev) => prev - 1)}
      >
        decrease
      </button>
      <About />
      <div>
        <img width={500} src={jpg} alt="1" />
        <img width={500} src={png} alt="1" />
      </div>
      <div>
        <Svg color={"green"} width={550} height={550} />
      </div>
    </div>
  );
};
