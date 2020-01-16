import React, { Component } from 'react';
import commom from '../shared/common';
import './Footer.css'

class Footer extends Component {
  render() {
    return (

      <footer role="contentinfo" id="sticky-footer" className="bg-light">
        <div className="container footer-text">
          <span className="footer-text-body">{commom.text.footerText}</span>
        </div>
      </footer>

    );
  }
}
export default Footer;
