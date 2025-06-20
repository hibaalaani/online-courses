// src/data/curriculumData.ts

export interface CurriculumContent {
    title: string;
    subtitle: string;
    description: string;
    learningGoals: string[];
    topics: { name: string; icon: string }[];
    projects: { name: string; image: string }[];
    callToAction: string;
    // Add a unique ID that matches your route parameter for easy lookup
    id: string;
  }
  
  export const allCurriculumPaths: Record<string, CurriculumContent> = {
    "ages-7-9": {
      id: "ages-7-9",
      title: "Ages 7-9: Creative Coders Curriculum",
      subtitle: "Unleash imagination with visual programming and playful coding challenges.",
      description: "This foundational path introduces young learners to the exciting world of coding through engaging, project-based activities using Scratch and other visual tools. They'll build interactive stories, design their own games, and learn problem-solving skills in a fun and supportive environment. Perfect for absolute beginners!",
      learningGoals: [
        "Understand basic sequencing and loops.",
        "Develop logical thinking and debugging skills.",
        "Create interactive stories and animations.",
        "Design simple games with characters and movement.",
        "Foster creativity and computational thinking.",
        "Introduce concepts of variables and conditionals."
      ],
      topics: [
        { name: "Introduction to Visual Blocks (Scratch)", icon: "🧱" },
        { name: "Sequencing & Algorithms", icon: "➡️" },
        { name: "Loops & Repetition", icon: "🔄" },
        { name: "Events & Interactivity", icon: "👆" },
        { name: "Variables & Scoring", icon: "🔢" },
        { name: "Conditional Logic (If/Else)", icon: "🤔" },
        { name: "Storytelling with Code", icon: "📖" },
        { name: "Game Design Basics", icon: "🕹️" }
      ],
      projects: [
        { name: "My First Animated Story", image: "/projects/story_app.webp" }, // Placeholder
        { name: "Catch the Star Game", image: "/projects/star_app.webp" }, // Placeholder
        { name: "Musical Instrument Creator", image: "/projects/music_app.webp" } // Placeholder
      ],
      callToAction: "Ready to spark your child's coding adventure? Sign up for a free trial today!"
    },
    "ages-10-13": {
      id: "ages-10-13",
      title: "Ages 10-13: Project Builders Curriculum",
      subtitle: "Transition from visual to text-based coding, building exciting web and Python applications.",
      description: "For pre-teens and early teens, this curriculum bridges the gap from visual programming to foundational text-based languages like Python and HTML/CSS. Students will build more complex projects, learn core programming concepts, and develop problem-solving skills applicable to real-world scenarios.",
      learningGoals: [
        "Master Python basics: data types, control flow, functions.",
        "Understand HTML structure and CSS styling.",
        "Develop basic web pages and interactive elements.",
        "Create command-line games and simple data processing tools.",
        "Learn about modular programming and code organization.",
        "Begin exploring basic object-oriented concepts."
      ],
      topics: [
        { name: "Python Fundamentals (Variables, Operators)", icon: "🐍" },
        { name: "Control Flow (If/Else, Loops)", icon: " decisiones" },
        { name: "Functions & Modules", icon: "⚙️" },
        { name: "Introduction to HTML & CSS", icon: "🌐" },
        { name: "Responsive Web Design Basics", icon: "📱" },
        { name: "Basic Web Interaction (JavaScript Intro)", icon: "✨" },
        { name: "Debugging Text-Based Code", icon: "🐞" },
        { name: "Introduction to Data Structures (Lists, Dictionaries)", icon: "🗄️" }
      ],
      projects: [
        { name: "Interactive 'Choose Your Own Adventure' Story", image: "/projects/story_game_app.webp" }, // Placeholder
        { name: "Personalized Portfolio Website", image: "/projects/portf_app.webp" }, // Placeholder
        { name: "Number Guessing Game (Python)", image: "/projects/guess_app.webp" } // Placeholder
      ],
      callToAction: "Is your child ready to level up their coding skills? Explore our intermediate programs!"
    },
    "ages-14-17": {
      id: "ages-14-17",
      title: "Ages 14-17: Future Developers Curriculum",
      subtitle: "Master advanced programming concepts, build dynamic web applications, and explore specialized fields.",
      description: "Designed for ambitious teens, this curriculum delves into advanced programming techniques, modern web development frameworks (like React), and introduces concepts in data science, artificial intelligence, or game development. Students will build robust applications, prepare for higher education, and gain valuable portfolio projects.",
      learningGoals: [
        "Advanced Python: OOP, data manipulation, APIs.",
        "Front-end development with React (components, state, props).",
        "Back-end basics with Node.js/Express (API creation, databases).",
        "Version control with Git & GitHub.",
        "Introduction to algorithms and data structures.",
        "Explore specialized tracks: AI/ML basics, game development, or chatbot building."
      ],
      topics: [
        { name: "Object-Oriented Programming (Python)", icon: "🧩" },
        { name: "Data Structures & Algorithms", icon: "🧠" },
        { name: "Version Control with Git & GitHub", icon: "🐙" },
        { name: "Modern JavaScript (ES6+)", icon: "⚡" },
        { name: "React.js Fundamentals", icon: "⚛️" },
        { name: "API Integration & RESTful Services", icon: "🔗" },
        { name: "Database Concepts (SQL/NoSQL)", icon: "🗄️" },
        { name: "Project Management Methodologies", icon: "📊" }
      ],
      projects: [
        { name: "Full-Stack To-Do Application (React + Node.js)", image: "/projects/basic_todo_app.webp" }, // Placeholder
        { name: "Scraper Intro", image: "/projects/scrape_app.webp" }, // Placeholder
        { name: "Simple AI Chatbot or Image Classifier", image: "/projects/chat_app.webp" } // Placeholder
      ],
      callToAction: "Ready to build your tech future? Enroll in our advanced programs and make an impact!"
    },
    "adult-beginners": {
      id: "adult-beginners",
      title: "Adult Beginners: Career Kickstart Program",
      subtitle: "Accelerated, practical coding courses for career changers and aspiring tech professionals.",
      description: "Our adult beginner program is designed for rapid skill acquisition, focusing on the most in-demand technologies for web development or data analysis. Learn with a project-first approach, gain a solid portfolio, and receive career guidance to confidently enter the tech industry.",
      learningGoals: [
        "Foundational Web Development (HTML, CSS, JavaScript).",
        "Proficiency in a core language (e.g., Python or JavaScript).",
        "Build a portfolio of practical applications.",
        "Understand modern development workflows and tools.",
        "Prepare for entry-level tech roles.",
        "Develop problem-solving and logical reasoning for coding."
      ],
      topics: [
        { name: "Web Fundamentals (HTML5, CSS3)", icon: "📄" },
        { name: "JavaScript Core Concepts", icon: "📝" },
        { name: "Introduction to Front-end Frameworks (e.g., React basics)", icon: "🌟" },
        { name: "Python for Data Analysis / Web Development", icon: "🐍" },
        { name: "Version Control (Git & GitHub)", icon: "🔗" },
        { name: "Basic Command Line Interface", icon: "💻" },
        { name: "Debugging & Troubleshooting", icon: "🔍" },
        { name: "Portfolio Building Strategies", icon: "📈" }
      ],
      projects: [
        { name: "Responsive Business Website", image: "/projects/proweb_app.webp" }, // Placeholder
        { name: "Simple Calculator App (JavaScript)", image: "/projects/calc_app.webp" }, // Placeholder
        { name: "Data Analysis Script (Python)", image: "/projects/task_app.webp" } // Placeholder
      ],
      callToAction: "Ready to start your new career in tech? Book a consultation to find your perfect path!"
    }
  };