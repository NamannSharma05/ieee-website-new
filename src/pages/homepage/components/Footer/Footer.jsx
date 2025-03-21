import React from "react";
import ieee from "./Assets/ieee.png";
import wie from "./Assets/wie.png";
import sight from "./Assets/sight.png";
import sps from "./Assets/sps.png";
import "./ambient.css";
import "./wave_ani.css";
import "./Footer.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";
import Linkedin from "./Assets/linkedin.svg";

const Footer = () => {
  const options = {
    duration: 500,
    smooth: true,
  };
  const location = useLocation();
  const navigate = useNavigate();
  const handleScrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    animateScroll.scrollToTop(options);
  };
  return (
    <div id="footer">
      <div className="hero_area">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0,0,0,0.7" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0,0,0,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0,0,0,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#000" />
          </g>
        </svg>
      </div>
      <div className="footer-container">
        <footer className="bg-white lg:grid lg:grid-cols-5 dark:bg-black">
          <div className="hidden lg:block h-32 lg:col-span-2 lg:h-full">
            <div className="h-full w-full object-cover p-10">
              <div>
                <iframe
                  width="100%"
                  height="350"
                  src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=JUIT,%20Waknaghat,%20HP%20-%20173234,%20India+(JUIT)&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps trackers</a>
                </iframe>
              </div>
            </div>
          </div>

          <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p>
                  <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    E-mail
                  </span>

                  <a
                    href="mailto:ieee.juit@juitsolan.in"
                    className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl dark:text-white"
                  >
                    ieee.juit@juitsolan.in
                  </a>
                </p>

                <ul className="mt-8 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <strong>Call Us: </strong>
                    <a href="callto:+918221951947">+91-8221951947</a>
                  </li>
                  <li>
                    <strong>Address: </strong> Jaypee University Of Information
                    Technology Waknaghat, HP - 173234
                  </li>
                </ul>

                <ul className="mt-8 flex gap-6">
                  <li>
                    <Link
                      to="//www.facebook.com/ieeejuitsb/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      <span className="sr-only">Facebook</span>

                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="//www.instagram.com/ieeejuit/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      <span className="sr-only">Instagram</span>

                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="//x.com/ieee_juit?t=CodXDU6NRJbrsWKFKEgizw&s=08"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      <span className="sr-only">X</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        viewBox="0 0 512 462.799"
                        className="h-6 w-6"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill="#fff"
                          fill-rule="nonzero"
                          d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                        />
                      </svg>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="//github.com/IEEE-JUIT-SB"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      <span className="sr-only">GitHub</span>

                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </li>

                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <Link to="//www.linkedin.com/company/ieeejuit/mycompany/" target="_blank">
                        <img src={Linkedin} alt="" className="text-white" />
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Clubs
                  </p>

                  <ul className="mt-6 space-y-4 text-sm flex flex-wrap justify-between items-center lg:block">
                    <li>
                      <ScrollLink
                        to="home"
                        className="text-white cursor-pointer"
                        spy={true}
                        onClick={() => {
                          handleScrollToTop();
                        }}
                        {...options}
                      >
                        <img src={ieee} className="w-[100px]" />
                      </ScrollLink>
                    </li>

                    <li>
                      <Link
                        to="#"
                        target="_blank"
                        className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                      >
                        <img src={wie} className="w-[100px]" />
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="#"
                        target="_blank"
                        className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                      >
                        <img src={sight} className="w-[100px]" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        target="_blank"
                        className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                      >
                        <img src={sps} className="w-[100px]" />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Website
                  </p>

                  <ul className="mt-6 lg:space-y-4 text-sm flex flex-wrap justify-between items-center lg:block">
                    <li>
                      <ScrollLink
                        to="home"
                        className="text-white cursor-pointer"
                        spy={true}
                        onClick={() => {
                          handleScrollToTop();
                        }}
                        {...options}
                      >
                        HOME
                      </ScrollLink>
                    </li>

                    <li>
                      <ScrollLink
                        to="about"
                        className="text-white cursor-pointer"
                        spy={true}
                        onClick={() => {
                          handleScrollToTop();
                        }}
                        {...options}
                      >
                        ABOUT US
                      </ScrollLink>
                    </li>

                    <li>
                      <ScrollLink
                        to="upcoming-events"
                        className="text-white cursor-pointer"
                        spy={true}
                        onClick={() => {
                          handleScrollToTop();
                        }}
                        {...options}
                      >
                        EVENTS
                      </ScrollLink>
                    </li>

                    <li>
                      <ScrollLink
                        to="testimonial"
                        className="text-white cursor-pointer"
                        spy={true}
                        onClick={() => {
                          handleScrollToTop();
                        }}
                        {...options}
                      >
                        TESTIMONIALS
                      </ScrollLink>
                    </li>

                    <li>
                      <Link
                        to="/membership"
                        className="text-white cursor-pointer"
                        onClick={handleScrollToTop}
                      >
                        MEMBERSHIP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/gallery"
                        className="text-white cursor-pointer"
                        onClick={handleScrollToTop}
                      >
                        GALLERY
                      </Link>
                    </li>
                    <li>
                      <ScrollLink
                        to="contact-us"
                        className="text-white cursor-pointer"
                        spy={true}
                        onClick={() => {
                          handleScrollToTop();
                        }}
                        {...options}
                      >
                        CONTACT US
                      </ScrollLink>
                    </li>
                    <li>
                      <Link
                        to="/team"
                        className="text-white cursor-pointer"
                        onClick={handleScrollToTop}
                      >
                        TEAM
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-gray-100 pt-12 dark:border-gray-800">
              <div className="sm:flex sm:items-center sm:justify-between">
                <ul className="flex flex-wrap gap-4 text-xs">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                    >
                      IEEE
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/"
                      target="_blank"
                      className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                    >
                      IEEE WIE
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/"
                      target="_blank"
                      className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                    >
                      IEEE SIGHT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      target="_blank"
                      className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                    >
                      IEEE SPS
                    </Link>
                  </li>
                </ul>

                <p className="mt-8 text-xs text-gray-500 sm:mt-0 dark:text-gray-400">
                  &copy; 2024. IEEE JUIT SB. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
