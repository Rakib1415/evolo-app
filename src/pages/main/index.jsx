import React from 'react';
import About from '../components/about';
import Contact from '../components/contact';
import CopyRight from '../components/copyRight';
import Customers from '../components/customers';
import Details from '../components/details';
import Footer from '../components/footer';
import Header from '../components/Header';
import Navigation from '../components/nav';
import Pricing from '../components/pricing';
import Request from '../components/request';
import Services from '../components/Services';
import Testimonials from '../components/testimonials';
import Video from '../components/Video';

const MainPage = () => (
    <div>
        {/* <Preloader /> */}
        <Navigation />
        <Header />
        <Customers />
        <Services />
        <Details />
        <Pricing />
        <Request />
        <Video />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
        <CopyRight />
    </div>
);

export default MainPage;
