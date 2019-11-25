import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>
}

export default Button;

const ButtonWrapper = styled.button`
  display: inline-block;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #5867dd;
  border-color: #5867dd;
  color: #fff;
  border: 1px solid transparent;
  padding: 0.65rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #2e40d4;
    border-color: #293ccc;
  }
`