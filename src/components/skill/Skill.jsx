import React from "react";
import "./skill.css";
import { BiBadgeCheck } from "react-icons/bi";
const Skill = () => {
  return (
    <section id="skill">
      <h5>What Skill I have</h5>
      <h2>My Skills</h2>
      <div className="skill_container container">
        <div className="skill_frontend">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">skilld</small>
              </div>
            </article>
            <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>Java Script</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skill_backend">
          <h3>Backend Development</h3>
          <div className="skill_content">

          <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>Django</h4>
                <small className="text-light">skilld</small>
              </div>
            </article>

            <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>Spring Boot</h4>
                <small className="text-light">skilld</small>
              </div>
            </article>

            <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>Flask</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
            <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Novice</small>
              </div>
            </article>

          </div>
        </div>

        <div className="skill_languages">
          <h3>Programming Languages</h3>
          <div className="skill_content">

          <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>Java</h4>
                <small className="text-light">skilld</small>
              </div>
            </article>

            <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>C</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>
        </div>

        <div className="skill_others">
          <h3>Others</h3>
          <div className="skill_content">

          <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>GIT</h4>
                <small className="text-light">skilld</small>
              </div>
            </article>

            <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>Selenium</h4>
                <small className="text-light">skilld</small>
              </div>
            </article>

            <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>Postman</h4>
                <small className="text-light">skilld</small>
              </div>
            </article>

            <article className="skill_details">
              <BiBadgeCheck className="skill_details-icons" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Novice</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skill;
