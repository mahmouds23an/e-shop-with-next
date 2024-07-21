import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between p-5">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, provident delectus est quae rerum optio animi sint
              enim quibusdam recusandae saepe incidunt possimus illo, voluptas
              labore vitae exercitationem maiores.
            </p>
            <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#" className="text-slate-500 hover:text-slate-200">
              Phones
            </Link>
            <Link href="#" className="text-slate-500 hover:text-slate-200">
              Laptops
            </Link>
            <Link href="#" className="text-slate-500 hover:text-slate-200">
              Desktops
            </Link>
            <Link href="#" className="text-slate-500 hover:text-slate-200">
              Watches
            </Link>
            <Link href="#" className="text-slate-500 hover:text-slate-200">
              TVs
            </Link>
            <Link href="#" className="text-slate-500 hover:text-slate-200">
              Accessories
            </Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#" className="text-slate-500 hover:text-slate-200">
              Contact Us
            </Link>
            <Link href="#" className="text-slate-500 hover:text-slate-200">
              Shipping Policy
            </Link>
            <Link href="#" className="text-slate-500 hover:text-slate-200">
              Returns & Exchanges
            </Link>
            <Link href="#" className="text-slate-500 hover:text-slate-200">
              Watches
            </Link>
            <Link href="#" className="text-slate-500 hover:text-slate-200">
              FAQs
            </Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#" className="text-slate-500 hover:text-slate-200">
                <MdFacebook size={24} />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-slate-200">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-slate-200">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-slate-200">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
