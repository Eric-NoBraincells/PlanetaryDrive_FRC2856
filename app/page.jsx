"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  AOS.init();
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() { AOS.refresh(); }, 500);
  });
  AOS.refresh();


  return (
    <main className="overflow-x-hidden">
      <section className="w-full flex justify-center flex-col items-center">
        <Image
            src="/team_pics/main-banner5.png"
            width={5000}
            height={10}
            className="w-auto lg:w-full"
            alt={"group picture of robotics team in front of a river in knoxville"}>
        </Image>

        <h1 className="text-center text-8xl font-semibold mt-6 mb-2">
          Planetary Drive Robotics
        </h1>

        <p className="text-center	text-2xl mb-4 m-2">
          First Robotics Team #2856
        </p>
        <br/><br/><br/>
        <h2 className="text-2xl mt-2">
          Thanks to all the sponsors that allow us to keep working!
        </h2>

        <Link href="/sponsors">
          <Button variant="outline" className="dark m-4">
            Our Sponsors
          </Button>
        </Link>
        <br/><br/>
      </section>

      <section className="flex flex-col lg:flex-row justify-center items-center mt-8 aos-init aos-animate" data-aos={"fade-right"} data-aos-duration={1000} data-aos-offset={400} data-aos-delay={50}>
        <div className="lg:mr-20 flex flex-col justify-center">
          <h2 className="text-center text-4xl font-semibold mb-2">Our Team</h2>
          <p className="text-center max-w-96  leading-loose">
            Established in 2009, Planetary Drive is a robotics team
            participating in the annual First Robotics Competition. We are a
            group of STEM driven high school students that design, code, and
            build a robot each year to compete. We give our members the
            opportunity to have fun and gain experience with by engineering and
            programming our yearly robot.
          </p>
          <Link className="dark self-center m-4" href="/about">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
        <Image
          src="/home/home2.png"
          width={100000}
          height={100}
          className="w-1/2 mt-8 lg:mt-0 lg:w-1/3 lg:ml-20 rounded-md"
          alt={"two team members working on the robot at the competetion"}>
        </Image>
      </section>

      <section className="flex flex-col lg:flex-row justify-center items-center mt-16 aos-init aos-animate" data-aos={"fade-left"} data-aos-duration={1000} data-aos-offset={400} data-aos-delay={300}>
        <Image
          src="/robot2024NotCropped.jpg"
          width={100000}
          height={100}
          className="w-1/2 mt-8 lg:mt-0 lg:w-1/3 rounded-md"
          alt={"a team member next to the robot at the competetion"}>
        </Image>

        <div className="lg:ml-20 flex flex-col justify-center">
          <h2 className="text-center text-4xl font-semibold mb-2">
            Our Sponsors
          </h2>

          <p className="text-center  w-96  leading-loose">
            The sponsors of Team Planetary Drive are the ones who allow our team
            to build a robot and compete each year in FRC! Sponsoring us comes
            with many benefits. We encourage you to check out our sponsors. If
            you are willing to sponsor us, please contact us!
          </p>

          <p className="max-w-96 flex flex-col items-center mt-4">
            Special thanks to our current biggest sponsor:{" "}
            <span className="">
              <Link href="https://www.se.com/us/en/" target="_blank">
                <Button
                  variant="link"
                  className="dark p-0 m-0 text-md font-semibold"
                  size="lg">
                  Schneider Electric
                </Button>
              </Link>
            </span>
          </p>

          <Link className="dark self-center m-4" href="/sponsors">
            <Button variant="outline" size="lg">
              Our Sponsors
            </Button>
          </Link>

        </div>
      </section>

    </main>
  );
}
