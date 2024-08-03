import styled from "styled-components";
import { AboutSectionProps } from "./AboutSection.types";

const SectionWrapper = styled.section<{
  backgroundColor?: string;
  isVisible?: boolean;
  disabled?: boolean;
}>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  padding: 8rem 1.5rem 5rem 1.5rem;
  width: 100%;
  margin-top: 1px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#000"};
  color: #fff;
  font-family: "Poppins", sans-serif;
  transition: background-color 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 500px;
  height: auto;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const TextWrapper = styled.div`
  max-width: 600px;
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;
  color: #ff0077;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #ccc;
  margin-bottom: 20px;
  line-height: 1.5; /* Added line height for better readability */

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CVButton = styled.a<{ disabled?: boolean }>`
  display: inline-block;
  padding: 10px 20px;
  background-color: #1e90ff;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  border-radius: 5px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.05)")};
    color: #fff;
    background-color: #ff0077;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

function AboutSection({
  title,
  cvLabel,
  cvLink,
  profileImage,
  backgroundColor,
  isVisible = true,
  disabled = false,
}: AboutSectionProps) {
  return (
    <SectionWrapper
      id="about"
      backgroundColor={backgroundColor}
      isVisible={isVisible}
      disabled={disabled}
    >
      <ContentWrapper>
        {profileImage && (
          <ProfileImage
            src={profileImage}
            alt="Profile"
          />
        )}
        <TextWrapper>
          <SectionTitle>{title}</SectionTitle>
          <Description>
            Hello! I'm Fadlullah Jamiu-Imam, a Full-Stack Web Developer with a
            passion for front-end development. Over the past two years, I've
            honed my skills in creating functional and visually appealing web
            projects.
            <br />
            <br />
            My journey began with learning HTML, CSS, and JavaScript, which led
            me to explore front-end frameworks like React. I enjoy bringing
            ideas to life through clean, efficient code and ensuring my projects
            are responsive and user-friendly.
            <br />
            <br />
            One of the things I enjoy most about front-end development is the
            ability to bring ideas to life. Seeing a project evolve from a
            simple wireframe to a fully functional and interactive website is
            incredibly rewarding. I take pride in writing clean, efficient code
            and ensuring that my projects are responsive and user-friendly.
            <br />
            <br />
            While I focus on front-end development, I also have experience with
            back-end technologies like Java, Ruby, Php and PostgreSQL. This
            full-stack knowledge allows me to work on all aspects of web
            applications.
            <br />
            <br />
            If you're looking for someone who is passionate and dedicated, let's
            connect!
          </Description>
          {cvLabel && cvLink && (
            <CVButton
              href={cvLink}
              target="_blank"
              disabled={disabled}
            >
              {cvLabel}
            </CVButton>
          )}
        </TextWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
}

export default AboutSection;
