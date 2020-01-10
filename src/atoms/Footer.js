import React, { Component } from 'react';
import commom from '../shared/common';

class Footer extends Component {
  render() {
    return (

      <footer role="contentinfo" id="sticky-footer" className="bg-light">
        <div className="container text-left">
          <small className="text-body">{commom.text.footerText}</small>
        </div>
      </footer>

    );
  }
}
export default Footer;
