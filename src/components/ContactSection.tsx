import {
  EnvelopeIcon,
  MapPinIcon,
  ArrowDownTrayIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-70 bg-ink px-6 pt-16 pb-5 text-cream md:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        {/* ================= LEFT SIDE (CV) ================= */}
        <div>
          <h2 className="text-3xl font-bold text-cream">Let’s Work Together</h2>

          <p className="mt-4 text-sm text-cream/70 leading-7 max-w-lg">
            I am open for internship, freelance, or collaboration projects. Feel
            free to download my CV or connect with me through social media.
          </p>

          {/* CV BUTTON */}
          <div className="mt-8">
            <a href="/portofolio/cv.pdf" download>
              <Button
                className="
                px-5 py-3 
                bg-mauve 
                text-white 
                rounded-full 
                hover:bg-blush 
                transition
              "
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
                Download CV
              </Button>
            </a>
          </div>

          {/* SOCIAL */}
          <div className="mt-8 flex gap-3">
            <a
              href="https://github.com/annisayulia12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Button
                isIconOnly
                variant="outline"
                className="
                    text-cream
                    hover:bg-mauve
                    hover:text-white
                    transition
                  "
              >
                <CodeBracketIcon className="w-5 h-5" />
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/annisa-yulia-vita-0b485432a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Button
                isIconOnly
                variant="outline"
                className="
                  text-cream
                  hover:bg-mauve
                  hover:text-white
                  transition
                "
              >
                <BriefcaseIcon className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-cream">Contact Info</h2>

          <div className="space-y-6 text-cream/70">
            {/* LOCATION */}
            <div className="flex items-start gap-4">
              <MapPinIcon className="w-5 h-5 text-blush" />
              <p>
                Banyumas, Central Java
                <br />
                Indonesia
              </p>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-4">
              <EnvelopeIcon className="w-5 h-5 text-blush" />
              <p>annisa.vita07@gmail.com</p>
            </div>

            {/* WHATSAPP */}
            <div className="flex items-center gap-4">
              <ChatBubbleLeftRightIcon className="w-5 h-5 text-blush" />
              <p>+62 838-2672-7850</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mx-auto mt-2 max-w-7xl border-t border-cream/20 pt-5 text-center text-sm text-cream/50">
        © 2026 Portfolio - Frontend Enthusiast. All Rights Reserved.
      </div>
    </section>
  );
}
