import { GhostBusterGif, CourseApp, PortfolioGif } from './image'


export default [
    {
        title: 'Python',
        imgUrl: '/SkillsImg/Python-Symbol.png',
        description: (
            <>
              A real-time IoT system using <strong className="text-yellow-300">Arduino</strong> and <strong className="text-yellow-300">Socket.IO</strong> to control LED lighting remotely using a <strong className="text-yellow-300">web-based interface</strong>.
            </>
          ),
    },
    {
        title: 'GhostBuster Game',
        imgUrl: GhostBusterGif,
        description: (
            <>
              A fun, interactive 2D game built with <strong className="text-yellow-300">MonoGame Framework</strong> and <strong className="text-yellow-300">C#</strong>, featuring smooth animations and dynamic gameplay.
            </>
          ),
    },
    {
        title: 'Course Management System',
        imgUrl: CourseApp,
        description: (
            <>
               A web-based application developed using <strong className="text-yellow-300">ASP.NET Core</strong> and <strong className="text-yellow-300">MS SQL Server</strong>, designed to help students and instructors manage courses, assignments, and grading efficiently.            </>
          ),

    },
    {
        title: 'Portfolio',
        imgUrl: PortfolioGif,
        description: (
            <>
                A personal portfolio website built with <strong className="text-yellow-300">React</strong> and <strong className="text-yellow-300">Tailwind CSS</strong>, showcasing projects, skills, and experience in a modern, responsive design.
            </>
        )
    },
]