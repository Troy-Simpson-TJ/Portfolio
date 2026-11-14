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
    },

    {
        title: "Pixel Dex",
        description:"This is a music player that is an android application I made using Android Studio, Java and XML. It is a music player that can play local music files and has a simple and clean user interface.",
        learned: "I learned how to create an android application using Android Studio, Java and XML. I also learned how to implement a simple and clean user interface.",
        tags: ["Android", "Java", "XML"],
        banner: "./projects/project-two.png",
        github: "https://github.com/Troy-Simpson-TJ/pixel-dex",
        live: "https://example.com/pixel-dex"
    }
]