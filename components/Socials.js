// links
import Link from "next/link";

// icons
import {
  RiLinkedinLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.linkedin.com/in/moshoodraji/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://www.instagram.com/honeybadgerng"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/honeybadgerng"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={""}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiDribbbleLine />
      </Link>
      <Link
        href={""}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiBehanceLine />
      </Link>
      <Link
        href={""}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiPinterestLine />
      </Link>
      <Link
        href={"https://www.twitter.com/honeybadgerng01"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiTwitterLine />
      </Link>
      <Link
        href={"https://github.com/honeybadgerng"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
