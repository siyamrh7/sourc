import Head from "next/head";

import SourcingHero from "@/components/SourcingHero";
import LogisticsFeatures from "@/components/LogisticsFeatures";
const UniqueFeatures = dynamic(() => import("@/components/UniqueFeatures"));
import BusinessCase from "@/components/BusinessCase";
import SourcingProcess from "@/components/SourcingProcess";
import Testimonial from "@/components/Testimonial";
import SourcingTeam from "@/components/SourcingTeam";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



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
