import Friend from "../Friend/Friend";


const Cousin = ({name}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <h2>{name}</h2>
            <section>
                {name ==='Mim' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;