import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Weather from "../components/Weather";



const Home = () => {
    return(
        <>
            <Navigation />
            <Header />
            <Weather />
            <Footer />
        </>
    );
}

export default Home;