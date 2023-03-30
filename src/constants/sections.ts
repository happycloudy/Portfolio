import {HomeSection} from "../sections/HomeSection";
import {SkillsSection} from "../sections/SkillsSection";
import {LinksSection} from "../sections/LinksSection";
import {ISection} from "../interfaces/ISection";

export const sections: ISection[] = [
    {
        id: 'home',
        section: HomeSection
    },
    {
        id: 'skills',
        section: SkillsSection
    },
    {
        id: 'links',
        section: LinksSection
    },
]