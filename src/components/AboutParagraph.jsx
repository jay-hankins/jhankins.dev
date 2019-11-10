import React from 'react';

import { systemFontStack, rhythm } from '../utils/typography';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  margin-bottom: 1.2rem;
`;

const Emoji = styled.span`
  margin-top: 0.05rem;
  margin-right: 0.7rem;
`;

const AboutParagraph = ({ emoji, children }) => (
  <FlexDiv>
    <Emoji>{emoji}</Emoji>
    {children}
  </FlexDiv>
);

export default AboutParagraph;
