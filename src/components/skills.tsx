/**
 * The `Skills` component displays a list of skill categories and their associated skills.
 * 
 * The component uses an array of `SkillCategory` objects to define the skill categories and their corresponding skills.
 * Each skill category is displayed in a separate section with a title and a list of skills.
 * 
 * The component is used to showcase the developer's technical skills and expertise.
 */
import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'Dart', 'Swift', 'SQL', 'Python'],
    },
    {
      title: 'Frameworks',
      skills: ['React JS', 'React Native', 'Flutter', 'SwiftUI'],
    },
    {
      title: 'Development Tools',
      skills: ['Git', 'GitHub', 'JSON', 'API Integration'],
    },
    {
      title: 'Web Development',
      skills: ['WordPress', 'Webflow', 'HTML', 'CSS', 'Node.js'],
    },
    {
      title: 'Mobile Development',
      skills: ['iOS', 'Android', 'Cross-Platform App Development'],
    },
    {
      title: 'Other Skills',
      skills: ['Problem Solving', 'Data Analysis', 'Debugging', 'Code Review', 'UX/UI Design'],
    },
  ];

  return (
    <section className="skills-section" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="skills-section-title">Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 id={`category-${index}`} className="category-title">{category.title}</h3>
            <ul className="skill-chips" aria-labelledby={`category-${index}`}>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="skill-item">
                  <span className="skill-chip">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
