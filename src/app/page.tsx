
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { clients } from "@/constants/clients";
import { features, featuresBlock } from "@/constants/features";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import FeatureBlock from "@/components/FeatureBlock";
import PricingCard from "@/components/PricingCard";
import { pricingItems } from "@/constants/pricing";
import PricingSection from "@/components/PricingSection";
import { testimonials } from "@/constants/testimonials";
import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  return <main className="overflow-x-hidden pt-24 lg`:pt-28 antialiased">
    <div className="relative container">
      <Image 
        src="/bg.png"
        width={1920}
        height={1080}
        alt="test"
        className="absolute -z-50 w-full min-h-screen md:max-h-[670px] md:h-full lg:min-h-screen -top-20 left-0 opacity-10"
      />
      {/* Home Section */}
      <section id="home" className="relative">
      <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40" />
      <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44  -right-20 md:right-20" />
        <div className="flex flex-col text-center space-y-12">
          <div className="flex flex-col items-center space-y-6">
            <p className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md">
              New Features Is On The Way Stay Tooned
              <ArrowRightCircle className="inline ml-1 w-4 h-4"/>
            </p>
            <Heading title="Better Modern Land App Dash For Internship"/>
            <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
            We are hereby to help you with your need upon Our ~App  you don't have to worry while we are with you since we will help you all your needs  through online Every time, Every where and Every condition We are with You
            </p>
            <div className="flex items-center gap-4">
                <Button>
                  get started
                <MoveRight className="w-4 h-4" />
                </Button>
                <Link
                  href="#pricing"
                >
                  <Button variant="outline">view pricing</Button>
                </Link>
              </div>
          </div>
          <Image 
          src="/Hero-image.svg"
          alt="banner"
          width={670}
          height={370}
          className="mx-auto"
          />
        </div>
      </section>

      {/* client section */}
      <section
          id="clients"
          className="max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client.imageUrl}
              width={120}
              height={80}
              alt={client.alt}
              className="w-40 md:w-full mx-auto"
            />
          ))}
      </section>

      {/* features section */}
      <section id="features" className="flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28">
        {/* part 1 */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <Image 
            src="/bg2.png"
            width={1920}
            height={1080}
            alt="second banner"
            className="absolute -z-50 w-full top-0 left-0 opacity-5"
          />
          <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
            <Heading title="Perfect Features To Help You Get Into Your Hopes" />
            <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
            You don't have to be rich to travel around the world just Say goodbye to scouring the internet in search of inspirational travel quotes to keep you focussed on saving for that next big trip. we are hearby to help you your next journey
            </p>
            <Button>Get Started</Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
            {features.map((feature,index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
        {/* part 2 */}
        {featuresBlock.map((item, index) => (
            <FeatureBlock key={index} {...item} isReversed/>
          ))}
      </section>
      {/* pricing section */}
      {/* <section id="pricing" className="flex flex-col gap-8">
        <Heading title="Find Best Plan For Your Projects" isCentered />
        <div className="max-w-[12rem] w-full mx-auto p-1 flex text-base bg-slate-800 rounded-lg">
          <p className="basis-1/2 text-center py-2 text-white capitalize font-semibold tracking-wide rounded-lg cursor-pointer bg-sky-600">Monthly</p>
          <p className="basis-1/2 text-center py-2 text-white capitalize font-semibold tracking-wide rounded-lg cursor-pointer">Annually</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pricingItems.map((item, index) => (
            <PricingCard key={index} {...item} />

          ))}
        </div>
      </section> */}
      <PricingSection />

      {/* Testimonial section */}
      <section id="testimonials" className="flex flex-col gap-8">
        <Heading title="Meet Our Customers" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>

      {/* contact section */}
      <section id="contact">
        <div className="bg-slate-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-4 text-center lg:text-start">
            <Heading title="Contact Us To Know Our Services" />
            <p className="max-w-[35rem] leading-normal text-lg">
              Experience The Power Of Land Dashboard For Enternship Teams. Boost Our Productivity Now.. Get Started Now!
            </p>
          </div>
          <Button>
            Get Started..!
            <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

    </div>
  </main>
}
