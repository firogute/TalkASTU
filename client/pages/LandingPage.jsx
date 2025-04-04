import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter, FaUserSecret } from "react-icons/fa6";
import NavBar from "../components/landing/NavBar";
import Footer from "../components/landing/Footer";
import FeaturesSection from "../components/landing/FeaturesSection";
import HeroSection from "../components/landing/HeroSection";
import ChannelTicker from "../components/landing/ChannelTicker";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-4">
        <NavBar />
        <ChannelTicker />
        <HeroSection />
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
