import Image from "next/image";
import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
// import { Link } from "react-scroll";

export default function page() {
  return (
    // main
    <div className="bg-stone-200 min-h-screen relative">
      <div className=" fixed top-0 left-0 right-0 h-[54px] pb-2 pt-3 pl-10 bg-gray-900 text-xl  border-amber-600 border-b-2">
        <h1 className="font-bold font-serif">
          My<span className="text-amber-600">Portfolio</span>
        </h1>
      </div>

      <div className="flex ">
        {/* Left */}

        <div className=" fixed top-[3.37rem] left-0 min-h-screen w-[25%] bg-gray-800 text-center hidden sm:block">
          <Image
            className="object-cover mx-auto mt-9 mb-6 rounded-full border-2 border-orange-200"
            src="/dp.png"
            width={180}
            height={100}
            alt="profile pic"
            priority
          />
          <ul className="space-y-4 text-[1.2rem] font-serif ">
            <li className="hover:font-bold">
              <a href="#about">About</a>
            </li>
            <li className="hover:font-bold">
              <a href="#edu">Education</a>
            </li>
            <li className="hover:font-bold">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:font-bold">
              <a href="#interest">Interests</a>
            </li>
            <li className="hover:font-bold">
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div
          id="about"
          className=" sm:ml-[5%] bg-red-10 text-black md:ml-[25%] pt-[15%] pl-[5%] bg-white-400 min-h-screen "
        >
          <h1 className="text-[45px] font-serif font-bold pb-5">
            Dawood <span className="text-amber-700">Ayub</span>
          </h1>
          <p className="pb-5">
            +923020447030 Lahore' Pakistan .
            <span className="text-amber-700">
              mehar.dawood.official@gmail.com
            </span>
          </p>

          <p className="w-[80%] mb-[50px] font-serif">
            I am student of Software Engineering with passion to learn something
            interesting related technology. Learning new frameworks to enhance
            my experties in web development
          </p>
          <ul className="flex space-x-3 pl-4 mb-[90px]">
            <a
              href="https://www.linkedin.com/in/mehar-dawood-885a7b2"
              target="_blank"
            >
              <FaLinkedin className="text-[40px]" />
            </a>
            <a href="https://github.com/itsmehardawood" target="_blank">
              {" "}
              <IoLogoGithub className="text-[40px]" />
            </a>
            <a
              href="https://www.instagram.com/Itsmehardawood/?fbclid=IwY2xjawFKzblleHRuA2FlbQIxMAABHe5mQmh1MQP5ikW0dJRUag1Y3JdK-GimQ1SCgd2gNeim5JpSWby7s6EMQA_aem_PIwZWQcwwxi8KBYVGqnpDg"
              target="_blank"
            >
              {" "}
              <FaInstagram className="text-[40px]" />
            </a>
            <a href="https://www.facebook.com/maher.dawood.7/" target="_blank">
              {" "}
              <TiSocialFacebook className="text-[40px]" />
            </a>
          </ul>

          <hr className="bg-amber-500  h-[0.1rem] w-[70%]"></hr>

          {/* Educaion */}
          <h2
            id="edu"
            className="text-[2.6rem] mb-4 pt-[60px] font-bold font-serif"
          >
            Education
          </h2>

          <div className="flex justify-between w-[90%]">
            <h3 className="text-[20px] font-serif">Bachelor's in Software Engineering</h3>
            <span className="text-amber-700">
              <p className="m-0 o-0"> November 2022 - Present </p>
            </span>
          </div>

          <h4>Superior Univeristy, Lahore</h4>
          <h5 className="pt-2 pb-5">[CGPA: 3.5]</h5>
          <p className="w-[80%] mb-7 font-serif">
            As a software engineering student, you’re driven by curiosity and
            creativity, adept at solving complex problems with precision. You
            thrive in collaborative settings, adapt quickly to new technologies,
            and manage your time effectively. Your passion for innovation and
            resilience in overcoming challenges underscore your commitment to
            mastering software engineering.{" "}
          </p>
          <hr className="bg-amber-500  h-[0.1rem] w-[50%]"></hr>
          <div className="flex justify-between w-[90%]">
            <h3 className="text-[20px] mt-4 font-serif">Intermediate (Pre-Engineering)</h3>
            <span className="text-amber-700">
              <p> August 2019 - Oct 2021 </p>
            </span>
          </div>
          <h4>Punjab Group of Colleges, Lahore</h4>
          <h5 className="mt-2 mb-4">[Grade: A+]</h5>
          <p className="pb-10 w-[75%] font-serif">
            Being a college student. I got selected as a class representative
            candidate that role bring me soft skills like leadership and
            management qualities that has a huge impact on my daily life.
          </p>

          {/* skills */}

          <div id="skills">
            <hr className="bg-amber-500  h-[0.1rem] w-[70%]"></hr>

            <h2 className="text-[40px] font-bold font-serif mt-[100px] mb-[40px] ">
              Skills
            </h2>
            <h3 className="text-[25px] font-bold font-serif mt-3">
              Programming Languages & tools
            </h3>
            <ul className="flex space-x-3 mt-11 pt-11 mb-[100px] pb-11">
              <Image src="/c++.svg" width={50} height={50} alt="c++" />

              <Image src="/html.svg" width={50} height={50} alt="html" />

              <Image src="/git.svg" width={50} height={50} alt="git" />

              <Image src="/java.svg" width={50} height={50} alt="java" />

              <Image src="/python.svg" width={50} height={50} alt="python" />

              <RiTailwindCssFill className="text-[50px]" />
            </ul>
          </div>

          {/* interest */}
          <hr id="interest" className="bg-amber-500  h-[0.1rem] w-[70%]"></hr>
          <div>
            <h2 className="text-[40px] font-bold font-serif pt-[120px] mb-[40px] ">
              Interests
            </h2>
            <p className="mt-6 w-[80%] font-serif">
              As a software engineer, I am passionate about exploring
              cutting-edge technologies, solving complex problems, and
              optimizing code for performance. I have a strong interest in web
              development, cloud computing, AI, and cybersecurity. Constantly
              learning new programming languages and frameworks fuels my drive
              for innovation and efficient solutions.
            </p>

            <ol className="list-disc mt-10 pl-8 mb-[120px] font-bold">
              <li>Web development</li>
              <li>Artifical Intelegence</li>
              <li>Mobile Application development</li>
            </ol>
          </div>

          {/* footer */}
          <hr id="footer" className="bg-amber-500  h-[0.1rem] w-[70%]"></hr>
          <footer className="text-center space-y-2">
            <h2 className=" text-[35px] font-serif font-bold mt-[150px] mb-[20px]">
              Contact:{" "}
            </h2>
            <p>
              <b>Email:</b> mehar.dawood.official@gmail.com
            </p>
            <p>
              <b>Phone: </b>9203020447030
            </p>
            <p>
              <b>Location:</b> Lahore' Pakistan
            </p>
            <p className="pt-[190px]">
              &copy; itsmehardawood 2024. All rights Reserved
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
