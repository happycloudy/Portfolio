import React, {useEffect, useState} from "react";
import {Header} from "./modules/Header";
import {HomeSection} from "./sections/HomeSection";
import {SkillsSection} from "./sections/SkillsSection";
import {LinksSection} from "./sections/LinksSection";

function App() {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    return (
        width > 1000 ?
            <main>
                <Header/>
                <HomeSection/>
                <SkillsSection/>
                <LinksSection/>
            </main> :
            <div>
                Используйте компьютер для просмотра этого сайта =)
            </div>
    )
}

export default App
