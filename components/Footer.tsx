"use client";

import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-[#002F6C] text-white">
            <div
                className="
          mx-auto
          w-full
          px-[5%]
          py-[3rem]
        "
            >
                <div
                    className="
             grid
      grid-cols-1
      gap-[3.5rem]

      sm:grid-cols-2
      lg:grid-cols-[1fr_1.2fr_1.2fr]
      lg:gap-[5rem]
          "
                >
                    {/* Filters Section */}
                    <div>
                        <h3
                            className="
                mb-[1.5rem]
                text-[1.9rem]
                font-semibold
              "
                        >
                            Filters
                        </h3>

                        <div
                            className="
                flex
                flex-wrap
                items-center
                gap-[1rem]
              "
                        >
                            <span className="text-[1.15rem]">
                                All
                            </span>

                            <Image
                                src="/Footer_Logo.png"
                                alt="Electronik"
                                width={130}
                                height={30}
                                className="
                  h-auto
                  w-[7.5rem]
                  object-contain
                "
                            />
                        </div>

                        <p
                            className="
                mt-[3rem]
                text-[1.15rem]
              "
                        >
                            © 2024 American
                        </p>
                    </div>

                    {/* About Section */}
                    <div className="lg:ml-[5rem]">
                        <h3
                            className="
                mb-[1.5rem]
                text-[1.9rem]
                font-semibold

              "
                        >
                            About Us
                        </h3>

                        <ul
                            className="
                space-y-[1.25rem]
                text-[1.15rem]
              "
                        >
                            <li>
                                <a
                                    href="#"
                                    className="hover:underline"
                                >
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:underline"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div className="lg:ml-[5rem]">
                        <h3
                            className="
                mb-[1.5rem]
                text-[1.9rem]
                font-semibold
              "
                        >
                            Follow Us
                        </h3>

                        <div className="flex items-center gap-[1rem]">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-[#0B5FC1]"
                            >
                                <FaFacebookF size={20} />
                            </a>

                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-[#0B5FC1]"
                            >
                                <FaTwitter size={20} />
                            </a>

                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-[#0B5FC1]"
                            >
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}