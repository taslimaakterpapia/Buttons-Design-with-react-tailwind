import Button1 from "../Buttons/Button1"; 
import Button2 from "../Buttons/Button2";
import Button3 from "../Buttons/Button3";
import Button4 from "../Buttons/Button4";
import Button5 from "../Buttons/Button5";

const Home = () => {
    return (
        <div className="bg-neutral-800 py-10">            
            <h1 className="text-center text-white text-5xl font-bold pb-20 ">Button Design </h1>

            <div className="flex gap-16  items-center">
            <Button1></Button1>
            <Button2></Button2>
            <Button3></Button3>
            <Button4></Button4>
            <Button5></Button5>
            </div>
        </div>
    );
};

export default Home;