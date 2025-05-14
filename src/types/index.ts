export interface NavItem {
    name: string;
    path: string;
  }
  
  export interface Experience {
    title: string;
    company: string;
    location: string;
    duration: string;
    description: string[];
    image: string;
  }
  
  export interface Education {
    school: string;
    degree: string;
    duration: string;
    gpa: string;
    details: string[];
  }
  
  export interface Skill {
    category: string;
    items: string[];
  }