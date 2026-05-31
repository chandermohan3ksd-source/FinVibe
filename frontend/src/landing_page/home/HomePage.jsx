import OpenAccount from "../OpenAccount";
import Award from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";

export default function HomePage(){
    return (
        <>
        
        <Hero/>
        <Award/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        
        </>
    )
}