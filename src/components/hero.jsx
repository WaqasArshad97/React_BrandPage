const Hero=()=>{
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU <br/>WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE<br/> HERE TO HELP YOU WITH OUR SHOES.
                </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button id="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also Avaliable On</p>
                <div className="brand-icons">
                    <img src="/images/flipkart.png" alt="flipcart-icon" />
                    <img  id="secondery-img"src="/images/amazon.png" alt="amazon-icon" />
                </div>
            </div>
            </div>
            <div className="shoe-image">
            <img src="/images/shoe_image.png" alt="shoe-image" />
            </div>
        </main>
    )
}
export default Hero;