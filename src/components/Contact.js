import React, {Component} from 'react';

class Contact extends Component {
  render() {
    return(
      <div className="cta_part pb-5" id="contact">

        <div className="row">
          <div className="container">
            <h1 className="h1-responsive font-weight-bold text-white">
              Contact us
            </h1>

            <p className="text-center w-responsive mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
              a matter of hours to help you.
            </p>
            <div className="col-md-12 mb-md-0 mb-5">
              <form name="contact">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="firstName" name="firstName" placeholder="Your Name *" className="form-control"/>
                    </div>
                    
                    <div className="form-group">
                      <input type="text" id="lastName" name="lastName" placeholder="Your last name *" className="form-control"/>
                    </div>

                    <div className="form-group">
                      <input type="text" id="phone" name="phone" placeholder="Your phone number *" className="form-control"/>
                    </div>

                    <div class="form-group">
                      <input type="submit" name="btnSubmit" className="btn btn-danger text-left" value="Send Message" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea className="form-control" id="message" name="message" placeholder="Your message *" style={{ height: 150 }}></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;