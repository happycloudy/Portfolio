import React from 'react';
import {SelectorContainer} from "../SelectorContainer/SelectorContainer";
import {SelectorItem} from "../SelectorItem/SelectorItem";
import {Arrow} from "../../../Figures";

interface IProps {
    pages: number
    page: number
    setPage: (page: number | ((prev: number) => number)) => void
}

const Selector = ({pages, setPage, page}: IProps) => {
    const pagesArray = new Array(pages).fill(1)

    return (
        <SelectorContainer>
            <Arrow onClick={() => setPage(page > 0 ? page - 1: page + 1)} left/>
            {
                pagesArray.map((_, index) => (
                    <SelectorItem key={index}
                                  onClick={() => setPage(index)}
                                  className={page === index ? 'active' : undefined}
                    />
                ))
            }
            <Arrow onClick={() => setPage(page + 1 < pages ? page + 1: 0)}/>
        </SelectorContainer>
    );
};

export default Selector;