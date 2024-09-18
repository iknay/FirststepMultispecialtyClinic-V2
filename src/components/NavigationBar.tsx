import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-16 shadow-md">
      <div className="flex items-center gap-4">
        Logo
        <p className="flex flex-col font-bold">
          <span className="text-primary-default text-2xl -mb-1.5">
            FirstStep
          </span>
          Multispecialty Clinic
        </p>
      </div>
      <div className="flex gap-4 uppercase font-bold">
        <Link
          className="hover:text-primary-default transition"
          href="/services"
        >
          Services
        </Link>
        <Link
          className="hover:text-primary-default transition"
          href="/services"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
