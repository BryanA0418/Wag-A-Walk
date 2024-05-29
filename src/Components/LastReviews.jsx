import "../ComponentsStyling/LastReviews.css"
import profile1 from "../assets/Pictures/Profile1.jpg"

export default function LastReviews(){
    return(
    <div className="reviews">
        <h1 className="reviews_h1">Testimonials</h1>
        <div className="reviews_container">
            <div className="section-header">
                <h2 className="title">What our Clients say</h2>
            </div>
            <div className="testimonials-content">
                <div className="testimonials-slider js-testimonials-sliders">
                    <div>
                        <div className="testimonials-items">
                            <div className="info">
                                <img src={profile1} alt="Man smiling" />
                                <div className="text-box">
                                    <h3 className="name">John doe</h3>
                                    <span className="job">Web Developer</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione tempora mollitia atque facere dicta saepe eligendi repellendus modi libero quasi. Distinctio, beatae voluptates laboriosam deleniti saepe animi temporibus? Rerum, doloremque.</p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}