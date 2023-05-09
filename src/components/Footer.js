import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram />
        <Twitter />
        <Facebook />
        <LinkedIn />
      </div>
      <p> &copy; 2022 twitter.com/ahmet55uluisik </p>
    </div>
  );
};

export default Footer;
