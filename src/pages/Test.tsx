
import { Divider } from "antd";
import { useEffect } from "react";
import Typewriter from "../components/TypeWriter";

function Test(){

    

    return (
    <>
    <div>
       Welcome to <Typewriter text='Robotics and Coding' delay={150} /> 
    </div>
    <div>
        Here is <Typewriter text='another typewrite but going faster' delay={75}/>
    
    </div>    </>
    );
}

export default Test;

