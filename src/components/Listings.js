import React from "react";
import styled from "styled-components";

const Listings = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <h1>View our newest Homes</h1>
        </Heading>
        <InfoRow>
          <InfoWrap>
            <Image src="" alt="home" />
            <h2>8 Bed 10 Bath House in Venice, California</h2>
            <InfoLink to="/homes">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
        </InfoRow>
      </Container>
    </Section>
  );
};

export default Listings;
