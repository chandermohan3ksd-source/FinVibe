import Universe from "./Universe";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import Hero from "./Hero";



export default function ProductPage(){
    return (
        <>
        <Hero/>
        <LeftSection 
        imageUrl="Media/Images/kite.png"
  productName="Kite"
  productDiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
  trydemoUrl=""
  learnUrl=""
  googleUrl=""
  appStoreUrl=""
  />
   <RightSection
  productName="Console"
  productDiscription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
  imageUrl="Media/Images/console.png"
  learnUrl=""
  />
  <LeftSection 
        imageUrl="Media/Images/coin.png"
  productName="Coin"
  productDiscription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices"
  trydemoUrl=""
  learnUrl=""
  googleUrl=""
  appStoreUrl=""
  />
    <RightSection
  productName="Kite Connect API"
  productDiscription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
  imageUrl="Media/Images/kiteconnect.png"
  learnUrl=""
  />
 
  <LeftSection 
        imageUrl="Media/Images/varsity.png"
  productName="Varsity mobile"
  productDiscription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
  trydemoUrl=""
  learnUrl=""
  googleUrl=""
  appStoreUrl=""
  />
  <p className="text-center fs-5">Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
        <Universe/>
        </>
    )
}