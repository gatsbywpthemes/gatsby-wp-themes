import React from "react";
import { FiShare2 } from "react-icons/fi";
import Facebook from "./Facebook";
import Linkedin from "./Linkedin";
import Pinterest from "./Pinterest";
import Twitter from "./Twitter";
export default function SocialShare({ url, title, media }) {
  return (
    <div className="flex flex-col space-y-4 justify-center">
      <div className="sh flex items-center justify-center ">
        <span
          aria-label="Share on social networks"
          className="bg-gray-700 p-2 rounded-full text-white"
        >
          <FiShare2 />
        </span>
      </div>
      <ul className="flex justify-center">
        <li className="separateWithSlashes ">
          <Twitter url={url} title={title}>
            Twitter
          </Twitter>
        </li>
        <li className="separateWithSlashes">
          <Facebook url={url} quote={title}>
            Facebook
          </Facebook>
        </li>
        <li className="separateWithSlashes">
          <Pinterest url={url} media={media}>
            Pinterest
          </Pinterest>
        </li>
        <li className="separateWithSlashes">
          <Linkedin url={url}>Linkedin</Linkedin>
        </li>
      </ul>
    </div>
  );
}
