import styled from "styled-components";
import StyledHeading from "./Heading";
import { useInView } from "react-intersection-observer";
import StyledHeadingBox from "./HeadingBox";
import useScrollTo from "../hooks/UseScrollTo";

import { useIsInView } from "../context/IsInViewContext";
import { useEffect } from "react";

const StyledContainer = styled.section`
  margin-bottom: 15.6rem;
  padding: 0 1rem;
  @media only screen and (max-width: 50em) {
    padding: 0;
  }
`;

const StyledText = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
  @media only screen and (max-width: 50em) {
    font-size: 2rem;
  }
`;

const StyledBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 0.45fr);
  justify-content: space-between;
  gap: 3rem 0;
  @media only screen and (max-width: 50em) {
    grid-template-columns: 0.6fr;
    justify-content: center;
    text-align: center;
  }
  @media only screen and (max-width: 42.5em) {
    grid-template-columns: 0.9fr;
  }
  @media only screen and (max-width: 26.5em) {
    grid-template-columns: 1fr;
  }
`;

function AboutMe() {
  const { ref: intRef, inView: intInView } = useInView();

  const { setSectionHandler } = useIsInView();

  useEffect(() => {
    if (intInView) {
      setSectionHandler("#aboutme");
    }
  }, [intInView, setSectionHandler]);

  const { ref: containerRef } = useScrollTo({
    hash: "#aboutme",
    scrollTo: "center",
  });

  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <StyledContainer ref={containerRef}>
      <StyledHeadingBox ref={intRef}>
        <StyledHeading $inView={headingInView} $aboutMe={true}>
          About Me
        </StyledHeading>
      </StyledHeadingBox>
      <StyledBox ref={headingRef}>
        <StyledText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          reprehenderit quisquam animi id voluptatem atque aperiam in voluptatum
          deserunt beatae. Asperiores ducimus doloremque neque ipsa consequuntur
          labore a excepturi commodi?
        </StyledText>
        <StyledText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          reprehenderit quisquam animi id voluptatem atque aperiam in voluptatum
          deserunt beatae. Asperiores ducimus doloremque neque ipsa consequuntur
          labore a excepturi commodi?
        </StyledText>
        <StyledText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          reprehenderit quisquam animi id voluptatem atque aperiam in voluptatum
          deserunt beatae. Asperiores ducimus doloremque neque ipsa consequuntur
          labore a excepturi commodi?
        </StyledText>
      </StyledBox>
    </StyledContainer>
  );
}

export default AboutMe;
