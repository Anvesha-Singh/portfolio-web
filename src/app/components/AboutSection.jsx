"use client";
import React, { useState, useEffect } from "react";
import { useTransition } from "react";
import styles from '../../../styles/Education.module.css';
import TabButton from './TabButton';

const education = [
  {
    "institution": "Vellore Institute of Technology",
    "degree": "B. Tech in CSE with spec. in AI and Robotics",
    "marks": "9.19 CGPA",
    "year": "2026",
    "location": "Chennai, Tamil Nadu"
  },
  {
    "institution": "Shannen School HSC",
    "degree": "PCM in Gujarat State Board",
    "marks": "97 %ile",
    "year": "2022",
    "location": "Vadodara, Gujarat"
  },
  {
    "institution": "Shannen School SSC",
    "degree": "Gujarat State Board",
    "marks": "99 %ile",
    "year": "2020",
    "location": "Vadodara, Gujarat"
  },
];

const experience = [
  {
    jobTitle: 'Data Intern',
    company: 'PGP Glass Pvt Ltd',
    location: 'Vadodara, Gujarat',
    duration: 'June 2024 - July 2024',
    description: [
      'Learnt Data Fundamentals like data analysis, visualisation, cleaning and AI modeling.',
      'Built a project with Microsoft Azure and Power BI.',
    ],
    technologies: ['Azure', 'Power BI', 'SQL', 'Machine Learning'],
  },
  {
    jobTitle: 'General Secretary',
    company: 'IEEE Computer Society VIT Chennai Student Chapter',
    location: 'Chennai, Tamil Nadu',
    duration: 'Dec 2022 - Present',
    description: [
      'Organised a Competitive Coding event with 400+ college student participants called BitWars Algorithm ShowDown as the Student Coordinator.',
      'Managing and Ensuring the smooth running of a club with 125+ members.',
    ],
    technologies: ['Leadership', 'Communication', 'Event and Time Management', 'Teamwork'],
  },
];

const getScreenSize = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth < 640) return "small";
    if (window.innerWidth < 1024) return "medium";
    return "large";
  }
  return "large"; // Default value for server-side rendering
};

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [screenSize, setScreenSize] = useState("large");

  useEffect(() => {
    setScreenSize(getScreenSize());
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white w-full" id="about">
    <div className="md:grid md:grid-cols-1 gap-5 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-pink-600 mb-8">About Me</h2>
        <div className="flex flex-wrap gap-4 mb-8">
          <TabButton id="education" activeTab={tab} onClick={handleTabChange}>
            Education
          </TabButton>
          <TabButton id="skills" activeTab={tab} onClick={handleTabChange}>
            Skills
          </TabButton>
          <TabButton id="experience" activeTab={tab} onClick={handleTabChange}>
            Experience
          </TabButton>
          <TabButton id="achievements" activeTab={tab} onClick={handleTabChange}>
            Achievements
          </TabButton>
          <TabButton id="certifications" activeTab={tab} onClick={handleTabChange}>
            Certifications
          </TabButton>
        </div>
        <div className="tab-content">
          {tab === "education" && (
            <section className={styles.section}>
              <h2 className={styles.h2}>Education 🎓</h2>
              <div className="overflow-x-auto">
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th className={styles.th}>Institution</th>
                      <th className={styles.th}>Degree</th>
                      <th className={styles.th}>Marks</th>
                      <th className={styles.th}>Year</th>
                      <th className={styles.th}>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {education.map((edu, index) => (
                      <tr key={index} className={styles.tr}>
                        <td className={styles.td}>{edu.institution}</td>
                        <td className={styles.td}>{edu.degree}</td>
                        <td className={styles.td}>{edu.marks}</td>
                        <td className={styles.td}>{edu.year}</td>
                        <td className={styles.td}>{edu.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {tab === "skills" && (
              <section className={styles.section}>
                <h2 className={styles.h2}>Skills 🤹</h2>

                <div className={styles.skillsCategory}>
                  <div className={styles.skillsList}>
                    <h3 className={styles.skillsCategoryTitle}>Languages:</h3>
                    <div className={styles.skillsItem}>C</div>
                    <div className={styles.skillsItem}>C++</div>
                    <div className={styles.skillsItem}>Python</div>
                    <div className={styles.skillsItem}>Java</div>
                    <div className={styles.skillsItem}>HTML</div>
                    <div className={styles.skillsItem}>CSS</div>
                    <div className={styles.skillsItem}>JavaScript</div>
                    <div className={styles.skillsItem}>SQL</div>
                  </div>
                </div>

                <div className={styles.skillsCategory}>
                  <div className={styles.skillsList}>
                    <h3 className={styles.skillsCategoryTitle}>Soft Skills:</h3>
                    <div className={styles.skillsItem}>Leadership</div>
                    <div className={styles.skillsItem}>Event and Time Management</div>
                    <div className={styles.skillsItem}>Teamwork</div>
                    <div className={styles.skillsItem}>Communication</div>
                    <div className={styles.skillsItem}>Adaptability</div>
                  </div>
                </div>

                <div className={styles.skillsCategory}>
                  <div className={styles.skillsList}>
                    <h3 className={styles.skillsCategoryTitle}>Tools:</h3>
                    <div className={styles.skillsItem}>Github</div>
                    <div className={styles.skillsItem}>Jupyter</div>
                    <div className={styles.skillsItem}>Figma</div>
                    <div className={styles.skillsItem}>Arduino</div>
                    <div className={styles.skillsItem}>Visual Studio Code</div>
                    <div className={styles.skillsItem}>Microsoft Azure</div>
                    <div className={styles.skillsItem}>AWS Cloud Services</div>
                  </div>
                </div>

                <div className={styles.skillsCategory}>
                  <div className={styles.skillsList}>
                    <h3 className={styles.skillsCategoryTitle}>Frameworks:</h3>
                    <div className={styles.skillsItem}>React</div>
                    <div className={styles.skillsItem}>NextJS</div>
                    <div className={styles.skillsItem}>Tailwind CSS</div>
                  </div>
                </div>

                <div className={styles.skillsCategory}>
                  <div className={styles.skillsList}>
                    <h3 className={styles.skillsCategoryTitle}>Core Concepts: </h3>
                    <div className={styles.skillsItem}>Design and Analysis of Algorithms</div>
                    <div className={styles.skillsItem}>Object-Oriented Programming</div>
                    <div className={styles.skillsItem}>Operating Systems</div>
                    <div className={styles.skillsItem}>Computer Networks</div>
                    <div className={styles.skillsItem}>Cloud Computing</div>
                    <div className={styles.skillsItem}>Technical Report Writing</div>
                  </div>
                </div>
              </section>
          )}   

          {tab === "experience" && (
            <section className={styles.section}>
              <h2 className={styles.h2}>Experience 💼</h2>
              <div className={styles.experienceList}>
                {experience.map((exp, index) => (
                  <div key={index} className={styles.experienceItem}>
                    <h3 className={styles.jobTitle}>{exp.jobTitle} @ {exp.company}</h3>
                    <p className={styles.duration}>{exp.location}</p>
                    <p className={styles.duration}>{exp.duration}</p>
                    <ul className={styles.description}>
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                    <div className={styles.technologies}>
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className={styles.tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {tab === "achievements" && (
            <section className={styles.section}>
              <h2 className={styles.h2}>Achievements 🏆</h2>
              <div className={styles.achievementsList}>
                <div className={`${styles.achievementItem} ${styles.achievementBackground}`}>
                  <div className={styles.achievementImage} style={{ backgroundImage: "url('/images/cohort-5.jpg')" }} />
                  <p className={styles.achievementText}>Google WE Scholar: Selected in the Top 200 out of 23 thousand applicants for Women Engineers Scholarship Program by TalentSprint sponsored by Google.</p>
                </div>
                <div className={`${styles.achievementItem} ${styles.achievementBackground}`}>
                  <div className={styles.achievementImage} style={{ backgroundImage: "url('/images/bitwars.jpg')" }} />
                  <p className={styles.achievementText}>Organised a Competitive Coding event with 400+ college student participants called BitWars Algorithm ShowDown as the Student Coordinator.</p>
                </div>
              </div>
            </section>
          )}

          {tab === "certifications" && (
            <section className={styles.section}>
              <h2 className={styles.h2}>Certifications 📜</h2>
              <div className={styles.achievementsList}>
                <div className={`${styles.achievementItem} ${styles.achievementBackground}`}>
                  <div className={styles.certificationImage} style={{ backgroundImage: "url('/images/azure-ai-fundamentals.png')" }} />
                  <a href="https://www.credly.com/badges/f880575e-dc2a-4254-b101-83e629788b02/linked_in_profile"><h3 className={styles.skillsCategoryTitle}>Microsoft Certified: Azure AI Fundamentals</h3></a>
                  <p className={styles.achievementText}>Foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services.</p>
                </div>
                <div className={`${styles.achievementItem} ${styles.achievementBackground}`}>
                  <div className={styles.certificationImage} style={{ backgroundImage: "url('/images/databricks.png')" }} />
                  <a href="https://credentials.databricks.com/1f17decf-a94f-49d0-9b35-576ea6a1bbe3"><h3 className={styles.skillsCategoryTitle}>Databricks Accredited LakeHouse Fundamentals</h3></a>
                  <p className={styles.achievementText}>Understanding of fundamental concepts related to Databricks Lakehouse Platform.</p>
                </div>
              </div>
            </section>
          )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
