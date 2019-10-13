import React, {Component} from 'react';

class Banner extends Component {
  render() {
    return (
      // <!-- banner part start-->
    <section className="banner_part">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 offset-lg-1">
            <div className="banner_text">
              <div className="banner_text_iner">
                <h5>We are digital agency</h5>
                <h1>Make digital a reality in West Africa</h1>
                <a href="#" className="btn_1">Explore Work</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- banner part start-->
    );
  }
}

export default Banner;