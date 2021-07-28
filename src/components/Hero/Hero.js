import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm HJ Miranda
        </SectionTitle>
        <SectionText>
        I am passionate in developing websites and I value the importance of creating a project that will meet the client's needs.
        </SectionText>
        <Button><Link href="#footer">Contact me</Link></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;