export interface Skill {
    name: string;
    description: string;
    level: number;
}

export interface Employee {
    username: string;
    name: string;
    company_position: string;
    avatar: string; // URL of the employee's avatar image
    skills: Skill[];
}