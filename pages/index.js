import React from 'react';
import styled from 'styled-components';

const Index = () => {
  return (
    <div>
      <Nav>
        <LogoText>New Release</LogoText>
      </Nav>
      <Container>
        <Card>
          <CardImageContainer>
            <Image src="/MinImage.png" alt="" />
          </CardImageContainer>
          <CardCategoryBox>
            <CardCategoryName>Brand Design</CardCategoryName>
          </CardCategoryBox>
          <CardTitle>
            Making the Brand: Asian American and Pacific Islander Heritage Month
          </CardTitle>
          <CardParagraph>
            Meet the creatives and hear the story behind this year’s Asian
            American and Pacific Islander Heritage Month (AAPIHM) campaign.
          </CardParagraph>
        </Card>
        <Card>
          <CardImageContainer>
            <Image src="/MinImage.png" alt="" />
          </CardImageContainer>
          <CardCategoryBox>
            <CardCategoryName>Brand Design</CardCategoryName>
          </CardCategoryBox>
          <CardTitle>
            Making the Brand: Asian American and Pacific Islander Heritage Month
          </CardTitle>
          <CardParagraph>
            Meet the creatives and hear the story behind this year’s Asian
            American and Pacific Islander Heritage Month (AAPIHM) campaign.
          </CardParagraph>
        </Card>
      </Container>
    </div>
  );
};

const Nav = styled.nav`
  height: 64;
  background-color: #fff;
  padding: 16px 20px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 24px;
`;

const LogoText = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Container = styled.div`
  padding: 0 16px;
`;

const Card = styled.div`
  margin-bottom: 24px;
`;

const CardImageContainer = styled.div`
  margin-bottom: 24px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
`;

const CardCategoryBox = styled.div`
  background-color: #161313;
  height: 32px;
  display: flex;
  width: 160px;
  align-items: center;
  padding: 2px 8px;
  margin-bottom: 24px;
`;

const CardCategoryName = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;

const CardTitle = styled.h1`
  font-size: 26px;
  color: #161313;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const CardParagraph = styled.p`
  font-size: 19px;
  line-height: 1.6;
`;

export default Index;
