import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Zunairajavaid" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/zunairajavaid200",
  },
  // { icon: <FaYoutube />, path: "" },
  {
    icon: <FaTwitter />,
    path: "https://x.com/zunairx2",
  },
];

export default function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
