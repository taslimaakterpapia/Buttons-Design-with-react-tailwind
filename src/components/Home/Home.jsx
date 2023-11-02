import Button1 from "../Buttons/Button1"; 
import Button2 from "../Buttons/Button2";
import Button3 from "../Buttons/Button3";
import Button4 from "../Buttons/Button4";

const Home = () => {
    return (
        <div className="bg-black py-20">            
            <h1 className="text-center text-5xl mt-10 font-bold ">Button Design </h1>

            <div className="flex gap-16 ">
            <Button1></Button1>
            <Button2></Button2>
            <Button3></Button3>
            <Button4></Button4>
            </div>
        </div>
    );
};

export default Home;