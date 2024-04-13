


type Activity = {
    time: string;
    timeBlock: int; //0: fri evening, 1:sat day, 2: sat eve, 3: sun day, 4: sun eve
    desc: string;
    name: string;
    location: string;
};

// const activites = {
//     // activities: [{time: 1800, timeBlock:3,desc:"fun time with games",name:"game night",location:"hesburgh"} ];

//     async getAll(): Promise<Activity[]> {
//         return [{time: 1800, timeBlock:3,desc:"fun time with games",name:"game night",location:"hesburgh"}];
//     },

// }


export async function getActivites(): Promise<Activity[]> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const acts:Activity[] = [
        {
            time: "03:00 pm", 
            timeBlock:3,
            desc:"dont be racist lmao",
            name:"Lecture on anit-racism",
            location:"hesburgh"
        },
        {
            time: "07:00 pm", 
            timeBlock:2,
            desc:"we lover cultre and stuff",
            name:"explore meuseum",
            location:"snite meuseum"        
        }
    ];
    return acts.sort();
}