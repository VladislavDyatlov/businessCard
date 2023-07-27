export interface Projects{
    project: Project[];
}

export interface Project{
    id: string;
    photo: string;
    title: string;
    number: string;
    date: string;
    text: string;
    image: Image[];
    comment: Comment[];
}
interface Image{
    id: string;
    photo: string;
}


export interface States{
    states: State[];
}

export interface State{
    id: string;
    photo: string;
    title: string;
    date: string;
    text: string;
    category: string;
    comment: Comment[];
}

interface Comment{
    id: string;
    name: string;
    text: string;
}