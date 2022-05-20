const NewsItem = () => {
  return (
    <>
      <div className="news-item-div">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Square_200x200.svg/768px-Square_200x200.svg.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
