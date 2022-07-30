import React from "react";
import PropTypes from "prop-types";

export const Footer = (props) => {
  const { title, website, postcode, developer, isOpen } = props;

  return (
    <div>
      <hr />
      <h4 style={styles.title}>
        {title}&copy; {new Date().getFullYear()}
      </h4>
      <p style={{ color: "green", fontSize: 16 }}>
        {website} {developer} {postcode} {isOpen.toString()}
      </p>
      <p style={styles.title}>MydevTH</p>
    </div>
  );
};

const styles = {
  title: {
    color: "Red",
  },
};

Footer.propTypes = {
  title: PropTypes.string,
  developer: PropTypes.string,
  postcode: PropTypes.number,
  isOpen: PropTypes.bool,
};
