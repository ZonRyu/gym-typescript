export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    OurClasses = 'ourclasses',
    ContactUs = 'contactus'
}

export interface BenefitType {
    icon: JSX.Element,
    title: string,
    desc: string
}

export type ClassType = {
    name: string,
    desc?: string,
    image: string
}