import React from 'react';
import {CategoriesContainer} from "../CategoriesContainer/CategoriesContainer";
import {Button} from "../Button/Button";
import {NormalText} from "../../../Texts";

const Categories = () => {
    return (
        <CategoriesContainer>
            <Button className={'active'}>
                <NormalText bold>
                    HTML & CSS
                </NormalText>
            </Button>
            <Button>
                <NormalText bold>
                    Javascript
                </NormalText>
            </Button>
        </CategoriesContainer>
    );
};

export default Categories;