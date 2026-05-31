export default function RightSection({
  productName,
  productDiscription,
  imageUrl,
  learnUrl,
}) {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-6 p-5" style={{marginTop:"0px"}}>
            <h2 className="mt-5">{productName}</h2>
            <p>{productDiscription}</p>
            <a href={learnUrl} style={{ textDecoration: "none" }}>
              Learn More <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="col-6 mt-0">
            <img src={imageUrl} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
