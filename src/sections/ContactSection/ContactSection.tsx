import React from "react";
import styled from "styled-components";
import { ContactSectionProps } from "./ContactSection.types";

const SectionWrapper = styled.section<{
  backgroundColor?: string;
  $isVisible?: boolean;
  disabled?: boolean;
}>`
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  padding: 8rem 1.5rem 5rem 1.5rem;
  width: 100%;
  margin-top: 1px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#000"};
  color: #fff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  transition: background-color 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #ff0077;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2.5rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }
`;

const ContactCard = styled.div`
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 24rem;
  box-sizing: border-box;
  text-align: left;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #fff;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 0.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-top: 0.75rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ff0077;
  }
`;

const FormWrapper = styled.div`
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 45rem;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 24rem;
  }
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #000;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #000;
`;

const SubmitButton = styled.button`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #1e90ff;
  color: #fff;
  text-decoration: none;
  font-size: 1.125rem;
  border-radius: 0.5rem;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #1c7cd6;
  }
`;

function ContactSection({
  title,
  contactInfo,
  backgroundColor,
  isVisible = true,
  disabled = false,
}: ContactSectionProps) {
  return (
    <SectionWrapper
      id="contact"
      backgroundColor={backgroundColor}
      $isVisible={isVisible}
      disabled={disabled}
      data-testid="contact-section"
      aria-label="contact"
    >
      <SectionTitle>{title}</SectionTitle>
      <ContentWrapper>
        <ContactCard>
          <CardImage
            src={"./images/first.png"}
            alt="Contact"
          />
          <CardTitle>{contactInfo.name || "Name"}</CardTitle>
          <CardText>{contactInfo.position || "Position"}</CardText>
          <CardText>{contactInfo.description || "Description"}</CardText>
          <CardText>Phone: {contactInfo.phone || "Phone"}</CardText>
          <CardText>Email: {contactInfo.email || "Email"}</CardText>
          <SocialLinks>
            {contactInfo.socialLinks &&
              contactInfo.socialLinks.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.url}
                  target="_blank"
                  aria-label={link.icon}
                >
                  <i className={`fab fa-${link.icon}`} />
                </SocialLink>
              ))}
          </SocialLinks>
        </ContactCard>
        <FormWrapper>
          <FormField>
            <Label htmlFor="name">Your Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              disabled={disabled}
            />
          </FormField>
          <FormField>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              type="text"
              id="phone"
              name="phone"
              disabled={disabled}
            />
          </FormField>
          <FormField>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              disabled={disabled}
            />
          </FormField>
          <FormField>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              disabled={disabled}
            />
          </FormField>
          <FormField>
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              disabled={disabled}
            />
          </FormField>
          <SubmitButton
            type="submit"
            disabled={disabled}
          >
            Send Message
          </SubmitButton>
        </FormWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
}

export default ContactSection;
