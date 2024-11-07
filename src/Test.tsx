import { themeClass, otherThemeClass, title } from "./Test.css";
import { useState } from "react";

const Test = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <div
            className={toggle ? themeClass : otherThemeClass}
            onClick={() => setToggle((prev) => !prev)}
        >
            <div className={title}>Test</div>
        </div>
    );
};

export default Test;
