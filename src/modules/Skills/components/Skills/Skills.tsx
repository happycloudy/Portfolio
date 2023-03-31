import React, {useEffect, useMemo, useState} from 'react';
import {CustomText, Title} from "../../../Texts";
import {TitleWrap} from "../TitleWrap/TitleWrap";
import {SkillsWrap} from "../SkillsWrap/SkillsWrap";
import Categories from "../Categories/Categories";
import SkillsList from "../SkillsList/SkillsList";
import {ICategory, SkillsHeadingsType} from "../../types/skillsHeadingsType";
import Selector from "../Selector/Selector";
import {ITEMS_PER_PAGE_DESKTOP, ITEMS_PER_PAGE_PHONE} from "../../constants/SkillsItemsAmount";


interface IProps {
    type: SkillsHeadingsType
    categories: ICategory[]
    initialCategory: string
}



export const Skills = ({type, categories, initialCategory}: IProps) => {
    const [category, setCategory] = useState<string>(initialCategory)
    const [currentPage, setCurrentPage] = useState<number>(0)
    const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE_DESKTOP)

    const categoryItem = useMemo(() => categories.find(item => item.name === category), [category])
    const pages = useMemo(() => Math.ceil(categoryItem!.list.length / itemsPerPage), [categoryItem])

    const handleCategory = (category: string) => setCategory(category)

    useEffect(() => {
        setCategory(initialCategory)
    }, [type])

    useEffect(() => {
        setCurrentPage(0)
    }, [type, category])

    useEffect(() => {
        if(window.innerWidth < 768) {
            setItemsPerPage(ITEMS_PER_PAGE_PHONE)
        }
    }, [])

    return (
        <SkillsWrap className={type === 'BACKEND' ? 'right' : 'left'}>
            <TitleWrap>
                <Title tall>
                    Навыки в <CustomText color={' '} weight={600}>{type}</CustomText>
                </Title>
            </TitleWrap>
            <Categories categories={categories} category={category} handleCategory={handleCategory}/>
            <SkillsList skills={categoryItem!.list} currentPage={currentPage} itemsPerPage={itemsPerPage}/>
            <Selector pages={pages} setPage={setCurrentPage} page={currentPage}/>
        </SkillsWrap>
    );
};