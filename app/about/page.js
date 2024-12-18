import NavBar from "../components/NavBar"
import HomePage from "./HomePage"
import Footer from "../components/Footer"
export default function Home() {
  return (
    <div className="container mx-auto">
        <NavBar />
        <HomePage />
        <Footer />
    </div>
  );
}