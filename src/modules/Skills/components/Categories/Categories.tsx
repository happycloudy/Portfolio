import React from 'react';
import {CategoriesContainer} from "../CategoriesContainer/CategoriesContainer";
import {Button} from "../Button/Button";
import {NormalText} from "../../../Texts";
import {ICategory} from "../../types/skillsHeadingsType";

interface IProps {
    handleCategory: (category: string) => void
    category: string
    categories: ICategory[]
}

const Categories = ({handleCategory, category, categories}: IProps) => {
    return (
        <CategoriesContainer className={categories.length < 2 ? 'hidden' : undefined}>
            {
                categories.map(categoriesItem => (
                    <Button key={categoriesItem.name}
                            className={category === categoriesItem.name ? 'active' : ''}
                            onClick={() => handleCategory(categoriesItem.name)}
                    >
                        <NormalText bold>
                            {categoriesItem.name}
                        </NormalText>
                    </Button>
                ))
            }
        </CategoriesContainer>
    );
};

export default Categories;