import React from 'react';
import { LinkedinFilled, GithubFilled, DribbbleCircleFilled  } from "@ant-design/icons";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank"><LinkedinFilled /></a>
      <a href="https://github.com" target="_blank"><GithubFilled /></a>
      <a href="https://dribble.com" target="_blank"><DribbbleCircleFilled /></a>
    </div>
  )
}

export default HeaderSocials