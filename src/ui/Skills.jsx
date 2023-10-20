import styled, { css } from "styled-components";
import StyledSkill from "./Skill";
import {
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiSass,
  SiStyledcomponents,
  SiSupabase,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";
import StyledHeading from "./Heading";
const StyledSkills = styled.section`
  margin: 12rem 0;
`;

const StyledText = styled.p`
  font-size: 1.8rem;
  width: 50%;
  padding-left: 3rem;
  line-height: 1.8;

  @media only screen and (max-width: 50em) {
    text-align: center;
    margin: 0 auto;
    width: 75%;
    padding: 0;
  }
  @media only screen and (max-width: 37.5em) {
    width: 95%;
  }
  @media only screen and (max-width: 26.5em) {
    width: 100%;
  }
`;

const StyledBox = styled.ul`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 24rem));
  gap: 3rem;
  justify-content: center;
  transform: translateY(15%);
  opacity: 0;
  visibility: hidden;
  transition: all 1s;

  ${(props) =>
    props.$inView === true &&
    css`
      transform: translateY(0%);
      opacity: 1;
      visibility: visible;
    `}

  @media only screen and (max-width: 53.5em) {
    gap: 3rem 1rem;
  }
  @media only screen and (max-width: 50em) {
    gap: 3rem;
  }

  @media only screen and (max-width: 26.5em) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 20rem));
    gap: 3rem 1rem;
    justify-content: space-between;
  }
  @media only screen and (max-width: 21.5em) {
    gap: 3rem 0;
    justify-content: center;
  }
`;

function Skills() {
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const { ref: boxRef, inView: boxInView } = useInView({
    threshold: 0.5,
    rootMargin: "-20px",
    triggerOnce: true,
  });

  return (
    <StyledSkills>
      <StyledHeading $inView={headingInView} $aboutMe={true}>
        My Skills
      </StyledHeading>
      <StyledText ref={headingRef}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        amet animi beatae iure dolore ipsa architecto expedita vel, est magnam
        doloremque iusto voluptate illum, optio hic, officia non voluptates
        delectus?
      </StyledText>
      <StyledBox ref={boxRef} $inView={boxInView}>
        <StyledSkill>
          <SiHtml5 />
          HTML
        </StyledSkill>
        <StyledSkill>
          <SiCss3 />
          CSS
        </StyledSkill>
        <StyledSkill>
          <SiJavascript />
          JavaScript ES6
        </StyledSkill>
        <StyledSkill>
          <SiSass />
          SASS
        </StyledSkill>

        <StyledSkill>
          <SiReact />
          React
        </StyledSkill>
        <StyledSkill>
          <SiReactrouter />
          ReactRouter
        </StyledSkill>
        <StyledSkill>
          <SiReactquery />
          ReactQuery
        </StyledSkill>
        <StyledSkill>
          <SiNextdotjs />
          NextJS
        </StyledSkill>
        <StyledSkill>
          <SiStyledcomponents />
          StyledComponents
        </StyledSkill>
        <StyledSkill>
          <SiSupabase />
          Supabase
        </StyledSkill>
        <StyledSkill>
          <SiGit />
          Git
        </StyledSkill>
        <StyledSkill>
          <SiGithub />
          GitHub
        </StyledSkill>
      </StyledBox>
    </StyledSkills>
  );
}

export default Skills;
