import MainSection from "../mainSection/MainSection"
import SectionAfiche from "../sectionAfiche/SectionAfiche"
import { ItemListWithSearch } from "../itemList/itemList"

const HomePage = () => {
    return(
        <section>
            <MainSection />
            <div className='divider-sections'></div>
                <SectionAfiche />
                <section className='section-marketstore'>

                <div className="container-grid-products">
                    <ItemListWithSearch />
                </div>
        </section>

        </section>
    )
}

export default HomePage