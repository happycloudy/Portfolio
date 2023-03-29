import React from 'react';
import {SelectorContainer} from "../SelectorContainer/SelectorContainer";
import {SelectorItem} from "../SelectorItem/SelectorItem";

interface IProps {
    pages: number
    page: number
    setPage: (page: number | ((prev: number) => number)) => void
}

const Selector = ({pages, setPage, page}: IProps) => {
    const pagesArray = new Array(pages).fill(1)

    return (
        <SelectorContainer>
            {
                pagesArray.map((_, index) => (
                    <SelectorItem key={index}
                                  onClick={() => setPage(index)}
                                  className={page === index ? 'active' : undefined}
                    />
                ))
            }
        </SelectorContainer>
    );
};

export default Selector;