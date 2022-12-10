import React from "react";

const FooterSocial = ({ SocialIcon, title, href }) => {
  return (
    <a
      title={title}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <SocialIcon size={28}/>
    </a>
  );
};

export default FooterSocial;
