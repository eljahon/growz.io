"use client";
import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css"; // You can also use <link> for styles

/// Import Components:
import Image from "next/image";
import CountdownTimer from "./timer";

/// Import Image:
import Cloude1 from "../assets/images/cloud1.png";
import Cloude2 from "../assets/images/cloud2-full.png";
import Cloude3 from "../assets/images/cloud3.png";
import GrowzLogo from "../assets/images/growz.png";
import Hill1 from "../assets/images/hill-1.png";
import Hill2 from "../assets/images/hill-2.png";
import Tracktor from "../assets/images/tracktor.png";
import Home from "../assets/images/home.png";
import Sketch from "../assets/images/sketch.png";

/// Import Icon:
import BottomArrow from "../assets/icons/bottom-arrow.svg";
import PreArrowIcon from "../assets/icons/presentation-arrow.svg";
import QRCode from "../assets/icons/QR.svg";
import Telegram from "../assets/icons/telegram.svg";
import YouTube from "../assets/icons/you-tube.svg";
import Instagram from "../assets/icons/instagram.svg";
import TikTok from "../assets/icons/tik-tok.svg";

export const MainPage = () => {
  const [activeLang, setActiveLang] = useState("En");

  const languages = ["En", "Ru", "Uz"];
  const socialMedia = [
    {
      icon: Instagram,
    },
    {
      icon: YouTube,
    },
    {
      icon: TikTok,
    },
    {
      icon: Telegram,
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section>
        <div className="relative">
          <span
            className="absolute top-[100px] left-[-80px] lg:left-0 lg:top-[200px]"
            data-aos="fade-right"
          >
            <Image className="w-[294px]" src={Cloude1} alt="cloud" />
          </span>

          <span
            className="absolute right-[-50px] lg:right-[100px] lg:top-[90px]"
            data-aos="fade-down-left"
          >
            <Image className="w-[324px] " src={Cloude2} alt="cloud2" />
          </span>
          <span
            className="absolute top-[90px] right-[-180px] lg:top-[190px] lg:right-0"
            data-aos="fade-left"
          >
            <Image className="w-[374px]" src={Cloude3} alt="cloud3" />
          </span>
        </div>

        <div className="pt-[200px]" data-aos="fade-down">
          <Image
            className="mx-auto lg:w-[244px] lg:mt-[40px]"
            src={GrowzLogo}
            alt="growz"
            width={193}
            height={138}
          />
          <button className="w-[48px] mx-auto h-[48px] block rounded-full bg-[#cce2d3] mt-[24px]">
            <Image className="ml-[13px]" src={BottomArrow} alt="arrow" />
          </button>
        </div>

        <div className="relative mt-[50px] max-w-[1500px]" data-aos="fade-up">
          <span className="absolute z-10 bottom-[-235px] lg:bottom-[-275px]">
            <Image
              src={Hill1}
              alt="hill"
              className="h-[100px] sm:h-full xlg:h-[226px] xlg:w-[1200px]"
            />
          </span>
          <span className="absolute bottom-[-210px] -rotate-6 sm:right-[-10px] lg:right-[-40px]">
            <Image src={Hill2} alt="hill" className="h-[100px] sm:h-full" />
          </span>
          <span className="absolute right-[50px] bottom-[-120px] lg:bottom-[-5px] -rotate-6 sm:bottom-[-20px]">
            <Image
              src={Tracktor}
              alt="tracktor"
              className="h-[33px] w-[51px] lg:w-[185px] lg:h-[115px] sm:w-[80px] sm:h-[60px]"
            />
          </span>
          <span className="absolute left-0 bottom-[-160px] lg:z-20 lg:bottom-[-100px] sm:bottom-[-110px]">
            <Image
              src={Home}
              alt="tracktor"
              className="h-[121px] w-[202px] lg:w-[402px] lg:h-[265px]"
            />
          </span>

          <div>
            <span className="absolute left-[130px] bottom-[-230px] z-40 sm:left-[280px] lg:left-[600px]">
              <Image
                src={Sketch}
                alt="tracktor"
                className="h-[39px] w-[50px] lg:w-[90px] lg:h-[60px] sm:w-[80px] sm:h-[50px]"
              />
            </span>
            <span className="absolute left-[150px] bottom-[-226px] z-30 sm:left-[300px] lg:left-[630px]">
              <Image
                src={Sketch}
                alt="tracktor"
                className="h-[39px] w-[50px] sm:w-[80px] sm:h-[50px] lg:w-[80px] lg:h-[60px]"
              />
            </span>
          </div>
        </div>
      </section>

      <section className="mt-[320px] lg:mt-[400px] container">
        <div className="flex items-center">
          <Image
            src={GrowzLogo}
            alt="logo"
            className="hidden lg:block w-[200px]"
          />

          <div className="flex items-center justify-center gap-x-[6px] mx-auto bg-translateBtnBox p-[6px] rounded-[14px] w-[154px]">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={` px-[11px] py-[7px] rounded-[11px] ${
                  activeLang === lang
                    ? "bg-translateBtnActive text-white"
                    : "bg-translateBtnInActive text-[#007E2733]"
                } transition duration-200`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-x-[100px] mt-[77px] pb-9">
          <div className="max-w-[660px] mx-auto lg:m-0 mt-[28px]">
            <h3 className="text-Clr007E font-bold text-[19px] lg:text-[30px] text-center">
              The website is under construction
            </h3>
            <p className="text-center text-Clr0C97 lg:text-[20px]">
              We’re working hard to make this website available again. You can
              learn more about Growz from the presentation You will find a new
              design
            </p>

            <CountdownTimer targetDate="2024-12-31T23:59:59" />
          </div>
          <div className="relative mt-[43px]">
            <h3 className="text-Clr007E font-semibold text-[22px] text-center">
              Presentation
            </h3>
            <span className="absolute right-[60px] top-[20px] lg:right-[-30px]">
              <Image src={PreArrowIcon} alt={"arrow"} />
            </span>
            <div className="w-[165px] mx-auto mt-2">
              <Image src={QRCode} alt={"QR"} />
            </div>
          </div>
          <div className="flex items-center lg:hidden justify-center gap-x-[24px] mt-[45px]">
            {socialMedia.map((item) => (
              <button>
                <Image src={item.icon} alt={"icon"} />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
