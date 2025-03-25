import { useContext } from "react";
import { MoneyContext } from "../GrandPa/GrandPa";


const Brothers = () => {
    const [money]=useContext(MoneyContext)
    return (
        <div>
            <h2>Brother</h2>
            <p>Grandpa:{money}</p>
        </div>
    );
};

export default Brothers;