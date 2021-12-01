import React from 'react';
import styled from 'styled-components';

export default function CTAContainer() {
  return (
    <CTASection>
      <Container>
        <Subheader>
          <img src='/images/stars/star_5.svg' />
          <p> REQUEST A CALL BACK</p>
          <h3>We are always ahead of you Professional Solutions</h3>
          <p>
            Eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut
          </p>
        </Subheader>
        <Form>
          <div>
            <Input type='text' id='Name' name='Name' placeholder='Name' />
          </div>
          <div>
            <Input type='text' id='Email' name='Email' placeholder='Email' />
          </div>
          <div>
            <Input
              type='text'
              id='Contact Number'
              name='Contact Number'
              placeholder='Contact Number'
            />
          </div>
          <Textarea
            id='message'
            name='message'
            rows='4'
            cols='50'
            placeholder='Message'
          />
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </Container>
    </CTASection>
  );
}

const CTASection = styled.section`
  padding-top: 5rem;
  background: ${props => props.theme.variant.quaternary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 5rem;
  margin: 0 auto;
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
    color: white;
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

const Form = styled.form`
  width: 30vw;
`;

const Input = styled.input`
  width: 100%;
  padding: 25px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #bb97c9;
  color: #bb97c9;
  text-transform: uppercase;
  outline: none;
  transition: border-color 0.2s;
  &::placeholder {
    color: #bb97c9;
  }
  &:focus {
    border-bottom-color: #ed738a;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 25px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #bb97c9;
  color: #bb97c9;
  text-transform: uppercase;
  outline: none;
  transition: border-color 0.2s;
  &::placeholder {
    color: #bb97c9;
    font-family: 'Roboto', sans-serif;
  }
  &:focus {
    border-bottom-color: #ed738a;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  margin: 25px 0;
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
  color: ${props => props.theme.variant.primary};
  font-weight: 600;
  font-size: ${props => props.theme.font.medium};
  background: ${props => props.theme.variant.tertiary};
  border: solid 2px ${props => props.theme.variant.primary};
  padding: 9px 23px;
  text-decoration: none;
  transition: background 0.02s ease-in-out;
  &:hover {
    background: #be5c6e;
  }
`;

