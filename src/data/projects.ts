// Each project is one object . Add a new one to add acard to the site.
export interface Project{
        title: string;
        description: string;
        learned: string;
        tags: string[];
        banner: string;    // NEW: image path inside /public
        github: string;
        live: string;
}

export const projects: Project[] = [
    {
        title: "Porfolio Website",
        description:"This is my personal porfolio made into a website to showcase my skills as a programmer and to excercise my web development skills. It is made with React, TailwindCSS and Vite.",
        learned: " I learned how to create and deploy a website using React, TailwindCSS and Vite. I also learned how to use Netlify  to host my website.",
        tags: ["React", "TailwindCSS", "Vite", "Netlify "],
        banner: "./projects/project-one.png",
        github: "https://github.com/Troy-Simpson-TJ/portfolio",
        live: "https://troyportfoliowebapp.netlify.app/"
    }
]