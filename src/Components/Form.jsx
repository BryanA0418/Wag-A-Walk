import "../ComponentsStyling/Form.css";
import image1 from "../assets/Pictures/0-featured-male-dog-walker-taking-three-dogs-for-a-walk-in-the-park.jpg";
import image2 from "../assets/Pictures/7-ways-to-show-appreciation-for-your-dog-walker.jpg";
import image3 from "../assets/Pictures/dog-hug.jpg";
import image4 from "../assets/Pictures/Untitled.jpg";
import image5 from "../assets/Pictures/Untitled2.jpg";

export default function Form() {
  return (
    <section className="dog-form">
        <img className="background-image" src={image1} />
        <form>
          <div className="animal">
            <p>Find a Walker for:</p>
            <label className="radio-buttons" for="cat">
              <input type="radio" id="cat" name="type" value="cat" />
              Cat
            </label>
            <label className="radio-buttons" for="dog">
              <input type="radio" id="dog" name="type" value="dog" />
              Dog
            </label>
            <br></br>
          </div>
          <p className="walker">Need A Walker or Sitter?</p>
          <div className="dog-form_services">
            <div className="dog-form_container">
              <img
                className="dog-form_icons"
                src="src\assets\Pictures\noun-dog-4868917.png"
              />
              <br />
              Walker
            </div>
            <div className="dog-form_container">
              <img
                className="dog-form_icons"
                src="src\assets\Pictures\noun-dog-4868917.png"
              />
              <br />
              Sitter
            </div>
          </div>
        </form>
    </section>
  );
}
