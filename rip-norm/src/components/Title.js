import pic from "../images/GettyImages-74699261c.webp";

function Title() {
  return (
    <div>
      <div className="title-cont">
        <div className="title-text-cont">
          <h2>Tribute page</h2>
          <h1 className="title-text">RIP Norm Macdonald </h1>
          <p className="subtitle">17 October 1959 - 14 September 2021 </p>
        </div>
        <div className="img-cont">
          <img src={pic} alt="norm macdonald black and white"></img>
        </div>
      </div>
      <div className="quote-background">
        <div className="quote-cont">
          <q className="quote">
            Comedy is surprises. So if you're intending to make somebody laugh
            and they don't laugh, that's funny.
          </q>
          <p className="author">-Norm Macdonald</p>
        </div>
      </div>
    </div>
  );
}

export default Title;
