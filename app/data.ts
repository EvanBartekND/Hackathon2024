


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
    },
    {
        time: "09:00 am", 
        timeBlock:1,
        desc:"running for a cause",
        name:"half marathon for diversity",
        location:"south quad"        
    },        
    {
        time: "05:00 pm", 
        timeBlock:4,
        desc:"experience yummy food",
        name:"south African dinnner",
        location:"duncan student center"        
    },
    {
        time: "05:00 pm", 
        timeBlock:4,
        desc:"go for a walk with other players",
        name:"walk and talk",
        location:"st. Mary lake"        
    }
];


export async function getActivites(): Promise<Activity[]> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const activites3:Activity[] = [];
    const activites = acts.slice();
    for (let i=0;i<3;i++){
        if(activites.length<1) break;
        const num = Math.floor(Math.random() * activites.length);
        activites3[i] = activites[num];
        activites.splice(num,1);
        
    }
    return activites3.sort();
}