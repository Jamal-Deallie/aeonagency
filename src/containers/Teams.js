import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as ImIcons from 'react-icons/im';
import { TeamData as Data } from '../shared/TeamData';
import { AwardData as Award } from '../shared/AwardData';

export default function TeamsContainer() {
  return (
    <TeamSection>
      <Container>
        <Subheader>
          <img src='/images/stars/star_4.svg' />
          <p>Our Leaders</p>
          <h3>
            Veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia
          </h3>
        </Subheader>
        <TeamWrapper>
          {Data.map(d => {
            return (
              <div key={d.id}>
                <WrapperImage>
                  <Image src={d.src} alt={d.name} />
                  <Socials>
                    <SocialMedia>
                      <ImIcons.ImPinterest2 />
                      <FaIcons.FaInstagram />
                      <FaIcons.FaDribbble />
                      <FiIcons.FiYoutube />
                      <FiIcons.FiTwitter />
                    </SocialMedia>
                  </Socials>
                </WrapperImage>
                <Name>{d.name}</Name>
                <Title>{d.title} </Title>
              </div>
            );
          })}
        </TeamWrapper>
      </Container>
      <LifeSection>
        <LifeImage>
          <img src='/images/misc/aeon.png' alt='Aeon Workplace' />
        </LifeImage>
        <Desc>
          <img src='/images/stars/star_3.svg' alt='' />
          <h3>Life at Aeon</h3>
          <p>
            Aeon Life Here to Win, Here to Have Fun. At Creative Edge, we want
            to seriously change the world—or at the very least, impact it, one
            kick-ass brand at a time. Over the years, we have built a team that
            is success-driven and loves seeing one another thrive and grow.
            Sure, we’re here to succeed, work hard, grow personally and
            professionally, but we’re also here to have a blast while we do it.
            At Creative Edge, work never feels like work—in fact, we have a ton
            of fun, goof off maybe a little more than we should, and we make
            sure that we have an exciting, diverse, and harmonious environment
            built on trust and friendship.
          </p>
        </Desc>
      </LifeSection>
      <Awards>
        <Subheader>
          <img src='/images/stars/star_9.svg' />
          <p>Our Leaders</p>
          <h3>
            Veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia
          </h3>
        </Subheader>
        <Contents>
          {Award.map(award => {
            return <img src={award.src} alt='' />;
          })}
        </Contents>
      </Awards>
    </TeamSection>
  );
}

const TeamSection = styled.section`
  padding-top: 5rem;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: ${props => props.theme.variant.secondary};
`;

const Container = styled.div`
  max-width: 1420px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Subheader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h3 {
    margin: 2.5rem 0;
    font-size: ${props => props.theme.font.size.heading4};
    width: 400px;
    text-align: center;
  }
  & img {
    height: 6rem;
  }
  & p:last-child {
    padding-bottom: 2.5rem;
    width: 600px;
    text-align: center;
  }
`;

const Image = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  display: block;
`;

const WrapperImage = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 66.66666666666667%;
  width: 40rem;
`;

const Socials = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  background: ${props => props.theme.variant.quaternary};
  align-items: center;
  justify-content: center;
  transition: opacity 0.02s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;

const TeamWrapper = styled.div`
  padding-top: 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10rem;
`;
const Name = styled.p`
  padding: 1rem 0;
`;

const Title = styled.p``;

const SocialMedia = styled.div`
  width: 80%;
  padding: 0 45px;
  font-size: 200px;
  color: ${props => props.theme.variant.primary};
  height: 9.5rem;
  padding-bottom: 4.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  & svg {
    cursor: pointer;
  }
`;

const LifeSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  margin-top: 10rem;
`;

const LifeImage = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 66.66666666666667%;
  & img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

const Desc = styled.div`
  background: ${props => props.theme.variant.quaternary};
  padding: 0 12rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  & h3 {
    color: ${props => props.theme.variant.primary};
    font-size: ${props => props.theme.font.size.heading3};
  }
  & p:first-of-type {
    padding: 2.5rem 0;
    font-style: italic;
  }
  & img {
    height: 3rem;
  }
`;

const Awards = styled.div`
  background: ${props => props.theme.variant.quinary};
  width: 100%;
  color: white;
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  padding-top: 7.5rem;
  display: flex;
  gap: 15rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 50vw;
  & img {
    width: 17.5rem;
  }
`;
