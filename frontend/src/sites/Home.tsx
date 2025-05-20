import "../styles/sites/Home.scss"
import Start from '../components/Start'
import Services from '../components/Services'
import About from '../components/About'
import Technologies from '../components/Technologies'
import Realizations from '../components/Realizations'
import Contact from '../components/Contact'

function Home(){
    return (
        <section className="main-container">

            <section className={"start"} id={"start"}>
                <Start/>
            </section>

            <section className={"services"} id={"services"}>
                <Services/>
            </section>

            <section className={"about"} id={"about"}>
                <About/>
            </section>

            <section className={"technologies"} id={"technologies"}>
                <Technologies/>
            </section>

            <section className={"realizations"} id={"realizations"}>
                <Realizations/>
            </section>

            <section className={"contact"} id={"contact"}>
                <Contact/>
            </section>

        </section>
    )
}

export default Home;