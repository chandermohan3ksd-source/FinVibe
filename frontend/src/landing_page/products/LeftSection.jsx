export default function LeftSection({
  imageUrl,
  productName,
  productDiscription,
  trydemoUrl,
  learnUrl,
  googleUrl,
  appStoreUrl
}) {
  return <>
  <div className="container mt-5 ">
    <div className="row">
        <div className="col-6  p-5">
        <img src={imageUrl} className="" />
        </div>
        <div className="col-6 mt-5 fs-6 p-5">
            <h2>{productName}</h2>
            <p>{productDiscription}</p>
            <div className="mt-5">
            <a href={trydemoUrl} style={{textDecoration:"none"}}>Try demo <i class="fa-solid fa-arrow-right-long"></i> </a>
            <a href={learnUrl} style={{textDecoration:"none", marginLeft:"50px"}}>Learn more <i class="fa-solid fa-arrow-right-long"></i> </a>
            </div>
            <div className="mt-3">
                <a href={googleUrl}>
                <img src="Media/Images/googlePlayBadge.svg"/>
            </a> 
            <a href={appStoreUrl} style={{marginLeft:"50px"}}>
                <img src="Media/Images/appstoreBadge.svg"/>
            </a>
            </div>
            


        </div>
    </div>
    </div>
    </>;
}
