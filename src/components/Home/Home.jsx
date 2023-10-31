import Button1 from "../Buttons/Button1"; 
import Button2 from "../Buttons/Button2";

const Home = () => {
    return (
        <div>            
            <h1 className="text-center text-5xl mt-10 font-bold ">Button Design </h1>

            <div className="flex gap-16 ">
            <Button1></Button1>
            <Button2></Button2>
            </div>
        </div>
    );
};

export default Home;