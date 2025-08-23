import { Download } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import SectionContainer from './common/SectionContainer';
import Button from './common/Button';

const About = () => {
  return (
    <SectionContainer
      id="about"
      title="ABOUT"
      backgroundVariant="gradient"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hello! I'm Rafael Race, a Junior Full Stack Developer with a passion for building modern and interactive applications. 
              I enjoy working with both frontend and backend technologies to create seamless user experiences.
            </p>

            <p>
              My journey in tech has been fueled by curiosity and a love for problem-solving. 
              Currently, I'm focused on honing my skills in React Native and full-stack development while contributing to real-world projects. 
              I'm excited to keep growing, collaborate with innovative teams, and build meaningful digital solutions.
            </p>
          </div>
          
          <div>
            <Button
              href="/CV.pdf"
              variant="primary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-5 w-5" />
              <span>DOWNLOAD MY CV</span>
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="relative w-80 h-80 transform rotate-0 will-change-transform">
              <div
                className="relative w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 p-1 transition-transform duration-300 hover:scale-105"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                }}
              >
                <div
                  className="w-full h-full bg-background"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                  }}
                >
                  <img
                    src={profileImage}
                    alt="Rafael Race - Profile"
                    className="w-full h-full object-cover"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;