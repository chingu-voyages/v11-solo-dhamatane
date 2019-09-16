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
                <h2>Mooya a start-up that aims to make digitalization a reality in Africa, more precisely in Ivory Coast</h2>
                {/* <p>
                Mooya a start-up which aims to make digitization and digitization a reality in Africa, more precisely in Ivory Coast
                </p> */}
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