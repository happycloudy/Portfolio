export type SkillsHeadingsType = 'FRONTEND' | 'BACKEND'

export interface ICategory {
    name: string,
    list: string[]
}

export interface ISkill {
    name: SkillsHeadingsType
    categories: ICategory[]
}