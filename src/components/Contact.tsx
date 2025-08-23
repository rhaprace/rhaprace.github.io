import SectionContainer from './common/SectionContainer';

const Contact = () => {
  return (
    <SectionContainer
      id="contact"
      title="GET IN TOUCH"
      backgroundVariant="gradient"
    >
      <div className="text-center">
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          If you'd like to collaborate on projects or have any inquiries, feel
          free to reach out to me via email:
        </p>
        <div>
          <a
            href="mailto:rhaprace@gmail.com"
            className="text-neon-blue hover:text-neon-green transition-colors duration-300 text-lg font-medium"
          >
            rhaprace@gmail.com
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;