import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";


const Special = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Special</h2>
            <p>Also has:{gift}</p>
        </div>
    );
};

export default Special;