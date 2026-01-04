import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";
import logo from "@/public/hyve-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-[#1f1b17] text-[#fdfcf9]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="inline-flex bg-white px-4 py-2 items-center mb-6 transition-transform hover:scale-[1.02]"
            >
              <Image
                src={logo}
                alt="HYVE logo"
                width={140}
                height={48}
                priority
                className="
                  h-8 sm:h-9
                  w-auto
                  object-contain
                "
              />
            </Link>

            <p className="text-sm leading-relaxed text-white/60 mb-8">
              Building the future of collaborative freelancing. Join teams, grow together.
            </p>

            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Social link"
                  className="
                    w-9 h-9
                    rounded-full
                    bg-white/10
                    flex items-center justify-center
                    text-white/60
                    transition-colors
                    hover:bg-[#ffcc05]
                    hover:text-[#1f1b17]
                  "
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Teams", "Case Studies"],
            },
            {
              title: "Company",
              links: ["About", "Blog", "Careers", "Contact"],
            },
            {
              title: "Resources",
              links: ["Documentation", "Help Center", "Community", "API"],
            },
            {
              title: "Legal",
              links: ["Privacy", "Terms", "Cookies"],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm tracking-wide mb-4">
                {section.title}
              </h4>

              <ul className="space-y-3">
                {section.links.map((name) => (
                  <li key={name}>
                    <Link
                      href="#"
                      className="
                        text-sm
                        text-white/60
                        transition-colors
                        hover:text-[#ffcc05]
                      "
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} HYVE. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Made with collaboration in mind 💛
          </p>
        </div>
      </div>
    </footer>
  );
};
