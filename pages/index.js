import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SourcingHero from "@/components/SourcingHero";
import LogisticsFeatures from "@/components/LogisticsFeatures";
import UniqueFeatures from "@/components/UniqueFeatures";
import BusinessCase from "@/components/BusinessCase";
import SourcingProcess from "@/components/SourcingProcess";
import Testimonial from "@/components/Testimonial";
import SourcingTeam from "@/components/SourcingTeam";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Sourc. - Comprehensive Sourcing & Logistics Management</title>
        <meta name="description" content="Comprehensive Sourcing & Logistics Management" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <SourcingHero />
      <LogisticsFeatures/>
      <UniqueFeatures/>
      <BusinessCase/>
      <Testimonial/>
      <SourcingProcess/>
      <SourcingTeam/>
      <ContactForm/>
      <Footer/>
    </>
  );
}
