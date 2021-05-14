import React from "react";

export default function Footer() {
  return (
    <div>
      <ul className=" sticky bottom-0 flex flex-row justify-around items-center py-10 w-screen">
        <li>
          <a href="https://www.instagram.com/chabelle78/" target="_blank">
            <img
              src="src/IMAGES/instagram.svg"
              alt="instachabat"
              width="25rem"
            />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/estelle.chabat.9/" target="_blank ">
            <img
              src="src/IMAGES/facebook.svg"
              alt="facebookchabat"
              width="25rem"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Chabat78" target="_blank">
            <img
              src="src/IMAGES/twitter.svg"
              alt="twitterchabat"
              width="25rem"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/Chabelle78" target="_blank">
            <img
              src="src/IMAGES/github (1).svg"
              alt="githubchabat"
              width="25rem"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
