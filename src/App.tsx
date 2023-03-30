import React, {useEffect} from "react";
import {Header} from "./modules/Header";
import {sections} from "./constants/sections";
import {scroller} from "react-scroll";
import {store} from "./constants/store";

const threshold = 10

function App() {
    const handleScroll = (event: WheelEvent) => {
        if (store.scrolled > threshold) {
            const sectionIndex = sections.reduce(
                (prev, curr, id) => curr.id === store.sectionId ? id : prev,
                -1
            )

            if (sectionIndex + 1 < sections.length) {
                store.sectionId = sections[sectionIndex + 1].id
                store.scrolled = 0
                scroller.scrollTo(store.sectionId, {
                    duration: 500,
                    smooth: true,
                })
            } else {
                store.scrolled = 0
            }
        } else if(store.scrolled < -threshold) {
            const sectionIndex = sections.reduce(
                (prev, curr, id) => curr.id === store.sectionId ? id : prev,
                -1
            )
            if (sectionIndex - 1 >= 0) {
                store.sectionId = sections[sectionIndex - 1].id
                store.scrolled = 0
                scroller.scrollTo(store.sectionId, {
                    duration: 500,
                    smooth: true,
                })
            } else {
                store.scrolled = 0
            }
        }



        if (event.deltaY > 0) {
            if (store.scrolled < 0) {
                store.scrolled = 0
            }
            store.scrolled += 1
        } else if (event.deltaY < 0) {
            if (store.scrolled > 0) {
                store.scrolled = 0
            }
            store.scrolled -= 1
        }
    }

    useEffect(() => {
        document.addEventListener('wheel', handleScroll)
    }, [])

    return (
        <main>
            <Header/>
            {sections.map(Section => <Section.section key={Section.id}/>)}
        </main>
    )
}

export default App
