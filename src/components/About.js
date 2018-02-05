import React from 'react';
import PropTypes from 'prop-types';

const About = props => (
  <div className="main-content">
    <h2>{this.props.title}</h2>
    <p>The front end course directory lists many of the technologies, languages, libraries and frameworks I already know like HTML, CSS, JavaScript and more! Be sure to visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
  </div>
);

About.propTypes = {
  title: PropTypes.string
}

export default About;