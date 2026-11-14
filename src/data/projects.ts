// Each project is one object . Add a new one to add acard to the site.
export interface Project{
    title: string;
    description: string;
    learned: string;   // the  "quick learner" angle: what you picked up
    tags: string[];
    github: string;
    live: string;    //live demo link
}

export const projects: Project[] = [
    {
        title: "Porfolio Website",
        description:"This is my personal porfolio made into a website to showcase my skills as a programmer and to excercise my web development skills. It is made with React, TailwindCSS and Vite.",
        learned: " I learned how to create and deploy a website using React, TailwindCSS and Vite. I also learned how to use Netlify  to host my website.",
        tags: ["React", "TailwindCSS", "Vite", "Netlify "],
        github: "https://github.com/Troy-Simpson-TJ/portfolio",
        live: "https://troyportfoliowebapp.netlify.app/"
    }
]