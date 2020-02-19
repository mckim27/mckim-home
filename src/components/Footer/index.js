import React from 'react';

import ExternalLink from '../ExternalLink';
import { config } from '../../../data';

import './index.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <p className="architecture">
            Build with&nbsp;
            <ExternalLink href="https://www.gatsbyjs.org/" title="GatsbyJS" />
            &nbsp;and&nbsp;
            <ExternalLink
              href="https://reactjs.org/"
              title={`React ${React.version}`}
            />
            .&nbsp;Hosted on&nbsp;
            <ExternalLink href="https://www.netlify.com/" title="Netlify" />
            <br />
            The code is open source and is a modification of&nbsp;
            <ExternalLink
              href="https://github.com/calpa/gatsby-starter-calpa-blog"
              title="calpa's blog."
            />
          </p>
          <p className="copyright">
            Copyright&nbsp;
            <ExternalLink href="https://mckim27.github.io/" title="&copy;Mckim27" />
            &nbsp;
            {config.title}
            &nbsp;
            {new Date().getFullYear()}
            &nbsp;
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
