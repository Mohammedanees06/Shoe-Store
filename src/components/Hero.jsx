const Herosection = () => {
    return (
      <main className="hero">
        <div className="hero-content">
          <h1>YOU DESERVE THE BEST</h1>
          <p>
          Step into comfort and style with our premium shoes, designed to give your feet the care they deserve
          </p>
          
          <div className="hero-btns">
            <button>Explore</button>
            <button>Shop Now</button>
          </div>
  
          {/* Moved the shopping section inside hero-content */}
          <div className="shopping">
            <p>Also available now</p>
            <div className="brand-icons">
              <img src="/images/amazon.png" alt="Amazon" />
              <img src="/images/flipkart.png" alt="Flipkart" />
            </div>
          </div>
        </div>
  
        <div className="hero-img">
          <img src="/images/shoe_image.png" alt="Hero Shoe" />
        </div>
      </main>
    );
  };
  
  export default Herosection;
  