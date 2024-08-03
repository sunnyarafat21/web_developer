import React from 'react';

import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';

export default function Socialicon() {
    return (
        <div className=" m-o pr-4">
            <ul className="flex  ">
                <a href="http://www.facebook.com/sunnyarafat021" target="blank">
                    <li className=" hover:bg-white rounded-md duration-700 p-2 ">
                        <FaFacebook color="#316FFF" fontSize="1.5em" />
                    </li>
                </a>
                <a href="https://github.com/sunnyarafat21" target="blank">
                    <li className=" hover:bg-white rounded-md duration-700 p-2 ">
                        <FaGithub color="#black" fontSize="1.5em" />
                    </li>
                </a>
                <a href="https://x.com/Yasirarafat1621" target="blank">
                    <li className=" hover:bg-white rounded-md duration-700 p-2 ">
                        <FaTwitter color="#1DA1F2" fontSize="1.5em" />
                    </li>
                </a>
            </ul>
        </div>
    );
}
