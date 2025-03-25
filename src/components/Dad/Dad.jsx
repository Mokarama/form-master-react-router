import Brothers from "../Brothers/Brothers";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <Myself></Myself>
                <Brothers></Brothers>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;