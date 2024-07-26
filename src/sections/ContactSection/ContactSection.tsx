import styled from "styled-components";
import { ContactSectionProps } from "./ContactSection.types";

const SectionWrapper = styled.section<{
  backgroundColor?: string;
  isVisible?: boolean;
  disabled?: boolean;
}>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  padding: 60px 20px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#000"};
  color: #fff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  transition: background-color 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.05)")};
  }
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #ff0077;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 40px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

const ContactCard = styled.div`
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  max-width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  text-align: left;

  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #fff;
`;

const CardText = styled.p`
  font-size: 16px;
  color: #ccc;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  margin-top: 10px;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ff0077;
  }
`;

const FormWrapper = styled.div`
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
  color: #fff;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #000;
`;

const Textarea = styled.textarea`
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #000;
`;

const SubmitButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #1e90ff;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

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
      backgroundColor={backgroundColor}
      isVisible={isVisible}
      disabled={disabled}
      data-testid="contact-section"
    >
      <SectionTitle>{title}</SectionTitle>
      <ContentWrapper>
        <ContactCard>
          <CardImage
            src={contactInfo.image || "https://via.placeholder.com/300"}
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
