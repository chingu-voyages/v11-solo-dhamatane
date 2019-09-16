import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <section className="about_part section_padding">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6">
              <div className="about_part_text">
                <h5>About Us</h5>
                <h2>Digital design and development company</h2>
                <p>
                  There winged grass midst moving earth seed herb fifth you're
                  multiply, you divide cattle stars first cattle was had spirit
                  you're thing, night darkness. Which itself stars creature.
                </p>
                <a href="#" className="btn_1">explore us</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_part_img">
                <img src="images/about_part_img.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;