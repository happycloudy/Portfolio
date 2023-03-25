import React, {useEffect, useState} from "react";
import {Header} from "./modules/Header";
import HomeSection from "./sections/HomeSection/components/HomeSection/HomeSection";

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
            </main> :
            <div>
                Используйте компьютер для просмотра этого сайта =)
            </div>
    )
}

export default App
