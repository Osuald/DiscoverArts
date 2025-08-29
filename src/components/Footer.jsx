import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-purple-950 py-8 text-white">
      <div className="container mx-auto px-20">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4 max-w-50">
            <h3 className="font-bold text-lg text-purple-600">Arts Gallery</h3>
            <p className="text-md"> 
              Discover the most amazing artworks from artists around the world.
              Join our community of art enthusiasts.
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: FaFacebookF,
                  link: "#",
                },
                {
                  icon: FaTwitter,
                  link: "#",
                },
                {
                  icon: FaInstagram,
                  link: "#",
                },
                {
                  icon: FaLinkedinIn,
                  link: "#",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-6 h-6 p-1 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 hover:bg-purple-800 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 text-md">
            <h3 className="font-bold text-lg">Categories</h3>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-purple-800 cursor-pointer">
                Paintings
              </li>
              <li className="hover:text-purple-800 cursor-pointer">
                Digital Art
              </li>
              <li className="hover:text-purple-800 cursor-pointer">
                Sculptures
              </li>
              <li className="hover:text-purple-800 cursor-pointer">
                Photography
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Help & Information</h3>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-purple-800 cursor-pointer">About Us</li>
              <li className="hover:text-purple-800 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-purple-800 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-purple-800 cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Newsletter</h3>
            <p className="max-w-xs">
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
            <div className="flex flex-col gap-2">
              <div className="relative flex-1">
                <HiMail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <button className="bg-gradient-to-r from-purple-700 to-orange-500 text-white px-4 py-2 rounded-lg hover:from-purple-800 hover:to-orange-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center">
          <hr className="w-1/2 border-gray-200" />
          <p className="mt-6">© 2023 DiscoverArts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
