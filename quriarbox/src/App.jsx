import Banner from "./components/Banner/Banner"
import Contact from "./components/Contact/Contact"
import Copyright from "./components/Copyright/Copyright"
import Counter from "./components/Counter/Counter"
import Delivery from "./components/Delivery/Delivery"
import Footer from "./components/Footer/Footer"
import Location from "./components/Location/Location"
import Navbar from "./components/Navbar/Navbar"
import Service from "./components/Service/Service"
import Subscription from "./components/Subscription/Subscription"
import Testimonial from "./components/Testimonial/Testimonial"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Service></Service>
      <Counter></Counter>
      <Delivery></Delivery>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Location></Location>
      <Subscription></Subscription>
      <Footer></Footer>
      <Copyright></Copyright>

    </>
  )
}

export default App
