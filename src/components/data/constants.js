import whitehat from "../assests/career/whh.png";
import kl from "../assests/career/kl.png";
import segura from "../assests/career/segura.png";
import tjk from "../assests/career/tjk.png";
import aks from "../assests/career/aks.png";
import nptel from "../assests/career/nptel.png";
import jpmc from "../assests/career/jpmc.png";
import eduskills from '../assests/career/eduskills.jpeg';
import paloalto from "../assests/career/paloalto.png";
import codeclause from "../assests/career/codeclause.png";
import aws from "../assests/career/aws.png";
import pcap from "../assests/career/pcap.png";
import oracle from "../assests/career/oracle.png";
import redhat from "../assests/career/redhat.png";
import sih from '../assests/career/sih.jpg';


import logalyzer from "../assests/project/logalyzer.png";
import goku from "../assests/project/goku.jpg";
import hms from "../assests/project/hms.png";

import mypic from "../assests/person/mypic.png";
import jayasai from "../assests/person/jayasai.jpg";
import sohan from "../assests/person/sohan.jpg";
import balakrishna from "../assests/person/balakrishna.jpg";
import sarvan from "../assests/person/sarvan.jpg";

import jpmc_cfg_23 from "../assests/document/jpmc_cfg_23.pdf";
import code_clause from "../assests/document/code_clause.pdf";
import oracle_ml from "../assests/document/oracle_ml.pdf";
import programming_in_java from "../assests/document/Programming_in_java.pdf";
import paloalto_cys from "../assests/document/palo_alto_cys.pdf";
import juniper_cert from "../assests/document/juniper_cert.pdf";

export const experiences = [
  {
    id: 5,
    img: whitehat,
    role: "President",
    company: "White Hat Hackers Club",
    date: "Aug 2023 - Present",
    desc: "Leads a team of 50+ members in developing and executing projects related to Cyber Security, Ethical Hacking, and Web Dev.Responsible for organizing workshops, webinars, and competitions to enhance the technical skills of the members.",
    skills: ["Cyber Security", "Python", "Kali Linux", "Try Hack Me"],
    //doc: "",
  },
  {
    id: 6,
    img: segura,
    role: "Backend Developer",
    company: "Segura Invendors",
    date: "October 2023 - December 2023",
    desc: "Worked on a real-time project that is useful for the company and developed a backend for the project using Django and MySQL",
    skills: ["Python", "MySQL", "Django", "Chart JS"],
    //doc: "",
  },
  {
    id: 9,
    img: sih,
    role: "Smart India Hackathon Finalist",
    company: "Smart India Hackathon by AICTE",
    date: "December 2023",
    desc: "Worked on a real time project that is useful for 8th Class Students",
    skills: ["ReactJS", "Python", "Django", "PHP", "XAMP", "Postman", "sqlite3"],
    doc: "https://raw.githubusercontent.com/baludbr/My_Achievements/main/social.png",
  },
  {
    id: 9,
    img: jpmc,
    role: "Code for Good 2023 Winner",
    company: "JPMorgan Chase & Co.",
    date: "July 2023",
    desc: "I am a Code for Good 2023 Winner, recognized by JPMorgan Chase & Co. for my contributions to the community. I was part of a team that developed a web application for a non-profit organization, which was selected as the winning project.",
    skills: ["React", "sqlite3", "Django"],
    doc: jpmc_cfg_23,
  },
  {
    id: 8,
    img: paloalto,
    role: "Palo alto CyberSecurity Virtual Intern",
    company: "EduSkills Foundation",
    date: "December 2022 - March 2023",
    desc: "Learn the fundamentals of Cloud and AI & ML using AWS Academy",
    skills: [
      "CyberSecurity",
      "Network Security",
      "Cloud Security",
      "SOC",
    ],
    doc: paloalto_cys,
  },
  {
    id: 8,
    img: codeclause,
    role: "Python Development Intern",
    company: "Code Clause",
    date: "June 2023 - July 2023",
    desc: "Worked on a real-time project that is useful mini projects using Python",
    skills: [
      "Python",
      "Pygame",
      "tkinter",
    ],
    doc: code_clause,
  },
  {
    id: 7,
    img: eduskills,
    role: "Juniper Networks Networking Virtual Intern",
    company: "EduSkills Foundation",
    date: "May 2023 - July 2023",
    desc: "Learn the fundamentals of Data Analytics using AWS Academy",
    skills: ["Networking", "Networks", "Routing", "Switching"],
    doc: juniper_cert,
  },
  {
    id: 10,
    img: aws,
    role: "AWS Developer Associate",
    company: "Amazon Web Services(AWS)",
    date: " Nov 2023 - Nov 2026",
    desc: "I am an AWS Certified Developer Associate with expertise in designing and implementing scalable and efficient cloud solutions",
    skills: ["AWS","Cloud Computing"],
    doc: "https://www.credly.com/badges/f50cc086-c5ef-41dd-9547-f075a26256ab/linked_in_profile",
  },
  {
    id: 11,
    img: oracle,
    role: "Oracle Machine Learning using Autonomous Database 2023 Certified",
    company: "Oracle",
    date: " Aug 2023 - Aug 2025",
    desc: "I am certified in Oracle Machine Learning using Autonomous Database 2023, demonstrating proficiency in leveraging machine learning within Oracle's Autonomous Database, valid until August 2025.",
    skills: ["Oracle", "Machine Learning", "SQL", "Python"],
    doc: oracle_ml,
  },
  {
    id: 12,
    img: redhat,
    role: "Red Hat Certified Enterprise Application Developer",
    company: "Red Hat",
    date: " Aug 2023 - Aug 2026",
    desc: "I am a Red Hat Certified Enterprise Application Developer, proficient in application development, certified in August 2023.",
    doc: "https://www.credly.com/badges/c128c952-ee4d-4c23-a6cd-dbf72b542eef/linked_in_profile",
  },
  {
    id: 13,
    img: aws,
    role: "AWS Certified Cloud Practitioner",
    company: "Amazon Web Services(AWS)",
    date: " Jun 2023 - Jun 2026",
    desc: "I am an AWS Certified Cloud Practitioner, officially recognized by Amazon Web Services (AWS). I obtained this certification in June 2023, and it remains valid until June 2026.",
    doc: "https://www.credly.com/badges/a0fdf9f6-30f0-4d46-93fe-7a1fc5a21698/linked_in_profile",
  },
  {
    id: 14,
    img: pcap,
    role: "PCAP-Programming Essentials in Python",
    company: "OpenEDG Python Institute",
    date: "Spetember 2022",
    desc: "I have successfully completed the PCAP-Programming Essentials in Python certification from the OpenEDG Python Institute. This certification was issued in September 2022.",
    skills: ["Python"],
    doc: "https://www.credly.com/badges/4087e64e-b975-43d8-a7d8-5b29d10043d1/linked_in_profile",
  },
  {
    id: 15,
    img: nptel,
    role: "Programming In Java",
    company: "NPTEL",
    date: "November 2022",
    desc: "I Got Excellent in the Java programming exam conducted by NPTEL.",
    skills: ["java"],
    doc: programming_in_java,
  },
  {
    id: 16,
    img: kl,
    company: "KL University, Vijayawada",
    role: "Student",
    date: "August 2021 - July 2025",
    desc: "Currently pursuing a Bachelor of Technology degree in Computer Science and Engineering, with a CGPA of 9.88 after completing four semesters. My coursework includes Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks. ",
  },
  {
    id: 17,
    img: tjk,
    company: "Tirumala Junior College, Rajamahendravaram",
    role: "Student",
    date: "July 2019 - July 2021",
    desc: "Obtained a outstanding score of 98.4% in my Intermediate (MPC) from the Board of Intermediate Education, Andhra Pradesh.  This experience has provided me crucial skills and information, which will improve my academic career.",
  },
  {
    id: 18,
    img: aks,
    company: "Akshara Sri Vidyaniketan, Rajamahendravaram",
    role: "Student",
    date: "July 2019 - July 2021",
    desc: "Completed my schooling with a commendable 9.8 CGPA, accredited by the Board of Secondary Education, Andhra Pradesh. This achievement underscores my early commitment to academic excellence and reflects my dedication throughout my educational journey.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Harvest Link",
    date: "Jul 2022 - Dec 2022",
    description:
      "Despite the benefit made from selling the crop, farmers often sell their crops as quickly as possible after harvest because of particular circumstances and meteorological conditions.Therefore, we create an app that serves as a liaison between godown management and farmers, enabling the farmers to preserve and benefit from the sale of their crops.",
    image: goku,
    tags: [
      "React",
      "Firebase",
      "Netlify",
      "Redux",
    ],
    category: "web app",
    github: "https://github.com/Venky2004/MernFrontend",
    webapp: "https://harvestlink-btech.netlify.app/",
    member: [
      {
        name: "Venkata Sai Ram Reddy",
        img: mypic,
        linkedin: "https://www.linkedin.com/in/venkata-sai-ram-reddy/",
        github: "https://github.com/Venky2004",
      },
      {
        name: "Jaya Sai Pillagolla",
        img: jayasai,
        linkedin:
          "https://www.linkedin.com/in/durga-jayasai-pillagolla-863828235/",
        github: "https://github.com/Durgajayasai1/",
      },
    ],
  },
  {
    id: 2,
    title: "Dictionary Using TRIE DataStructure",
    date: "March 2024",
    description:
      "This application is a dictionary that uses the TRIE data structure to store words and their meanings. It allows users to search for words and their meanings, as well as add new words and meanings to the dictionary. The application also includes a feature that allows users to search for words based on a prefix, making it easier to find words that begin with a specific set of letters.",
    image: "",
    tags: ["ReactJS", "DSA"],
    category: "Other",
    webapp: "https://dictionary-react-venky.netlify.app/",
    member: [
      {
        name: "Venkata Sai Ram Reddy",
        img: mypic,
        linkedin: "https://www.linkedin.com/in/venkata-sai-ram-reddy/",
        github: "https://github.com/Venky2004",
      },
    ],
  },
  {
    id: 3,
    title: "Reservalnnovate",
    date: "Sep 2023 - Dec 2023",
    description:
      "ReservaInnovate seeks to completely transform the way hotels handle reservations. The project addresses problems associated with conventional booking procedures, such as incorrect reservations, inaccurate room availability data, and lengthy check-in/check-out processes that annoy visitors and reduce hotel revenues. The ReservaInnovate system is implemented to address these problems head-on. All reservations are combined into one simple-to-use platform by the system, which also provides accurate real-time updates on room availability and facilitates smooth guest arrivals and departures. Hotels can improve guest satisfaction through ReservaInnovate maximise room occupancy, and provide administrators with precise data to help them make better business decisions.",
    image: hms,
    tags: ["SpringBoot", "RestAPIS", "MySQL", "MongoDB", "React", "Hibernate"],
    category: "web app",
    webapp: "https://hms-bvr.netlify.app/",
    github:"https://github.com/Venky2004/reservalnnovate",
    member: [
      {
        name: "Reddy Venkata Sai Ram",
        img: "https://raw.githubusercontent.com/baludbr/My_Achievements/main/projects/venkat.jpg",
        linkedin: "https://www.linkedin.com/in/venkata-sai-ram-reddy/",
        github: "https://github.com/venky2004/",
      },
      {
        name: "Dwarampudi Balaji Reddy",
        img: "https://raw.githubusercontent.com/baludbr/My_Achievements/main/projects/balaji.jpg",
        linkedin: "https://www.linkedin.com/in/dwarampudi-balaji-reddy/",
        github: "https://github.com/baludbr",
      },
      {
        name: "Chandragiri Revanth",
        img: "https://raw.githubusercontent.com/baludbr/My_Achievements/main/projects/revanth.jpg",
        linkedin: "https://www.linkedin.com/in/revanth-chandragiri/",
        github: "https://github.com/2100031890/",
      },
    ],
  },
  {
    id: 4,
    title: "Digital Assistant for Legal Awareness",
    date: "Oct 2023",
    description:
      "A user-friendly digital assistant offering legal information in multiple languages, addressing common queries, and covering topics like family law and labor law. Integrate it into a comprehensive Know-Your-Rights framework for India, simplifying legal language, categorizing rights, and ensuring regional language support. The solution aims to improve legal awareness, access to justice, and collaboration between citizens and legal aid providers.",
    image:
      "https://raw.githubusercontent.com/baludbr/My_Achievements/main/projects/kyc.png",
    tags: [
      "Django",
      "RestAPIS",
      "Python",
      "MongoDB",
      "PythonAnyWhere",
      "PostgresSQL",
      "React",
      "HTML",
      "CSS",
      "Javascript",
    ],
    category: "web app",
    //webapp: "https://baludbr14.pythonanywhere.com/",
    member: [
      {
        name: "Reddy Venkata Sai Ram",
        img: "https://raw.githubusercontent.com/baludbr/My_Achievements/main/projects/venkat.jpg",
        linkedin: "https://www.linkedin.com/in/venkata-sai-ram-reddy/",
        github: "https://github.com/venky2004/",
      },
      {
        name: "Dwarampudi Balaji Reddy",
        img: "https://raw.githubusercontent.com/baludbr/My_Achievements/main/projects/balaji.jpg",
        linkedin: "https://www.linkedin.com/in/dwarampudi-balaji-reddy/",
        github: "https://github.com/baludbr",
      },
    ],
  },
  {
    id: 5,
    title: "URL Analyser",
    date: "Jan 2024 - Mar 2024",
    description:"URL Analyser is a web-based application that allows users to analyze URLs. It can be used to check the safety of a URL, analyze the content of a URL, and generate reports based on the URL. This work is associated with Kognitiv Club",
    image:"",
    tags: ["MachineLearning", "Python", "Django", "Pickle", "HTML","CSS"],
    category: "Other",
    //webapp: "https://baludbr14.pythonanywhere.com/",
    member: [
      {
        name: "Venkata Sai Ram Reddy",
        img: mypic,
        linkedin: "https://www.linkedin.com/in/venkata-sai-ram-reddy/",
        github: "https://github.com/Venky2004",
      },
      {
        name: "Drashan Jain",
        img: "https://raw.githubusercontent.com/baludbr/My_Achievements/main/projects/pavan.jpg",
        linkedin: "https://www.linkedin.com/in/pavan-sekhar-mandavilli/",
        github:"https://github.com/baludbr",
      },
    ],
  },
  {
    id: 6,
    title: "Logalyzer",
    date: "Dec 2023",
    description:
      "Logalyzer is a tool that can be used to analyze log files. It can be used to search for specific log entries, filter log entries based on a specific date range, and generate reports based on the log entries. This work is associated with Kognitiv Club",
    image: logalyzer,
    tags: ["ReactJS", "Python", "Django", "PHP", "XAMP", "Postman", "sqlite3"],
    category: "Other",
    //webapp: "https://baludbr14.pythonanywhere.com/",
    github: "https://github.com/Venky2004/logalyzer",
    member: [
      {
        name: "Venkata Sai Ram Reddy",
        img: mypic,
        linkedin: "https://www.linkedin.com/in/venkata-sai-ram-reddy/",
        github: "https://github.com/Venky2004",
      },
      {
        name: "Arjun S",
        img: jayasai,
        linkedin:
          "https://www.linkedin.com/in/durga-jayasai-pillagolla-863828235/",
        github: "https://github.com/Durgajayasai1/",
      },
      {
        name: "Nivas Chowdary V",
        img: sohan,
        linkedin: "https://www.linkedin.com/in/sohan-tummalapalli/",
        github: "https://github.com/soha507",
      },
      {
        name: "Durjoy Majumdar",
        img: "https://raw.githubusercontent.com/baludbr/My_Achievements/main/projects/pavan.jpg",
        linkedin: "https://www.linkedin.com/in/pavan-sekhar-mandavilli/",
        github: "https://github.com/Durjoy-majumdar",
      },
      {
        name: "Pranavi B",
        img: "https://raw.githubusercontent.com/baludbr/My_Achievements/main/projects/pavan.jpg",
        linkedin: "https://www.linkedin.com/in/pavan-sekhar-mandavilli/",
      },
      {
        name: "Sai Priya R",
        img: "https://raw.githubusercontent.com/baludbr/My_Achievements/main/projects/pavan.jpg",
        linkedin: "https://www.linkedin.com/in/pavan-sekhar-mandavilli/",
      },
    ],
  },
  {
    id: 7,
    title: "Employee Management System",
    date: "Jun 2023 - Jul 2023",
    description:
      "An Employee Management System is a web-based application that allows an organization to manage its employees. It is a simple and easy-to-use application that can be used to manage and track employees. This work is associated with Kognitiv Club",
    image:
      "https://raw.githubusercontent.com/baludbr/My_Achievements/main/projects/pms.png",
    tags: [
      "CoreJava",
      "JPA",
      "JSP",
      "JSF",
      "MySQL",
      "HTML",
      "CSS",
      "Javascript",
      "JDBC",
    ],
    category: "web app",
    github: "",
    //webapp: "https://baludbr14.pythonanywhere.com/",
    member: [
      {
        name: "Venkata Sai Ram Reddy",
        img: mypic,
        linkedin: "https://www.linkedin.com/in/venkata-sai-ram-reddy/",
        github: "https://github.com/Venky2004",
      },
      {
        name: "Jaya Sai Pillagolla",
        img: jayasai,
        linkedin:
          "https://www.linkedin.com/in/durga-jayasai-pillagolla-863828235/",
        github: "https://github.com/Durgajayasai1/",
      },
      {
        name: "Sohan Tummalapalli",
        img: sohan,
        linkedin: "https://www.linkedin.com/in/sohan-tummalapalli/",
        github: "https://github.com/soha507",
      },
    ],
  },
  {
    id: 8,
    title: "Horizon Bank",
    date: "Dec 2022 - May 2023",
    description:
      "Horizon Bank is a web-based application that allows users to manage their bank accounts. It is a simple and easy-to-use application that can be used to manage and track bank accounts.",
    image: goku,
    tags: [
      "Django",
      "Python",
      "MongoDB",
      "PythonAnyWhere",
      "PostgresSQL",
      "HTML",
      "CSS",
      "Javascript",
    ],
    category: "web app",
    webapp: "https://venky.pythonanywhere.com/",
    member: [
      {
        name: "Venkata Sai Ram Reddy",
        img: mypic,
        linkedin: "https://www.linkedin.com/in/venkata-sai-ram-reddy/",
        github: "https://github.com/Venky2004",
      },
      {
        name: "Sarvan Surya Namburi",
        img: sarvan,
        linkedin: "https://www.linkedin.com/in/sarvansurya/",
        github: "https://github.com/SarvanSurya",
      },
      {
        name: "BalaKrishna Reddy",
        img: balakrishna,
        linkedin: "https://www.linkedin.com/in/sandeep2603/",
        github: "https://github.com/sandy300/",
      },
    ],
  },
  {
    id: 9,
    title: "Farm Link",
    date: "Jul 2022 - Dec 2022",
    description:
      "Despite the benefit made from selling the crop, farmers often sell their crops as quickly as possible after harvest because of particular circumstances and meteorological conditions.Therefore, we create an app that serves as a liaison between godown management and farmers, enabling the farmers to preserve and benefit from the sale of their crops.",
    image: goku,
    tags: [
      "React",
      "Node js",
      "MongoDB",
      "Netlify",
      "Cyclic.sh",
      "ExpressJS",
      "Redux",
    ],
    category: "web app",
    github: "https://github.com/Venky2004/MernFrontend",
    webapp: "https://agricultureandaquaculture.netlify.app/",
    member: [
      {
        name: "Venkata Sai Ram Reddy",
        img: mypic,
        linkedin: "https://www.linkedin.com/in/venkata-sai-ram-reddy/",
        github: "https://github.com/Venky2004",
      },
      {
        name: "Jaya Sai Pillagolla",
        img: jayasai,
        linkedin:
          "https://www.linkedin.com/in/durga-jayasai-pillagolla-863828235/",
        github: "https://github.com/Durgajayasai1/",
      },
      {
        name: "Sohan Tummalapalli",
        img: sohan,
        linkedin: "https://www.linkedin.com/in/sohan-tummalapalli/",
        github: "https://github.com/soha507",
      },
    ],
  },
];
