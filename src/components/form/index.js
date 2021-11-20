import React from "react";
import styled from "styled-components";


export default function ContactForm() {
  return (
    <Form>
      <div>
        <Input type="text" id="Name" name="Name" placeholder="Name" />
      </div>
      <div>
        <Input type="text" id="Email" name="Email" placeholder="Email" />
      </div>
      <div>
        <Input
          type="text"
          id="Contact Number"
          name="Contact Number"
          placeholder="Contact Number"
        />
      </div>
      <Textarea
        id="message"
        name="message"
        rows="4"
        cols="50"
        placeholder="Message"
      />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
}



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
    font-family: "Roboto", sans-serif;
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
  color: ${(props) => props.theme.variant.primary};
  font-weight: 600;
  font-size: ${(props) => props.theme.font.medium};
  background: ${(props) => props.theme.variant.tertiary};
  border: solid 2px ${(props) => props.theme.variant.primary};
  padding: 9px 23px;
  text-decoration: none;
  transition: background 0.02s ease-in-out;
  &:hover {
    background: #be5c6e;
  }
`;
