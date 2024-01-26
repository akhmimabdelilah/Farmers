import Header from "../components/Header";
import Footer from './../components/Footer';
import Welcome from "../components/Welcome";
// import About from "../components/About";
// import Subscription from "../components/Subscription";
// import Contact from "../components/Contact";

const Home = () => {
    return (
        <div className="flex-box flex-col bg-slate-700">
            <Header />
            <Welcome />
            {/*
            <About />
            <Subscription />
            <Contact /> */}
            <Footer />
        </div>
    )
}

export default Home