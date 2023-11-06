


import GitBtn1 from "../Buttons/Github/GitBtn1";
import GitBtn2 from "../Buttons/Github/GitBtn2";
import GitBtn3 from "../Buttons/Github/GitBtn3";
import GitBtn4 from "../Buttons/Github/GitBtn4/GitBtn4";
import SavePostBtn1 from "../Buttons/SavePost/SavePostBtn1";


const Home = () => {
    return (
        <div className="bg-neutral-800 py-10 px-10">
            <h1 className="text-center text-white text-5xl font-bold pb-20 underline">Button Design </h1>


            <h3 className="text-2xl text-white font-semibold pb-10 underline">GitHub Buttons</h3>
            <div className="flex gap-16  items-center">
                <GitBtn1></GitBtn1>
                <GitBtn2></GitBtn2>
                <GitBtn3></GitBtn3>
                <GitBtn4></GitBtn4>



            </div>




            <h3 className="text-2xl text-white font-semibold pt-20 pb-10 underline">Save Post Buttons</h3>
            <div className="flex gap-16  items-center pb-20">
                <SavePostBtn1></SavePostBtn1>

            </div>





            <h3 className="text-2xl text-white font-semibold pt-20 pb-10 underline">Close / Cut Buttons</h3>
            <div className="flex gap-16  items-center pb-20">

                

            </div>







        </div>
    );
};

export default Home;