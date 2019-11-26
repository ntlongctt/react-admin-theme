import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  children: ReactNode,
  styleType: ButtonStyleType;
  size?: ButtonSizeType;
}

const Button: React.FC<ButtonProps> = ({ children, styleType, size }) => {
  const styles = getStyle(styleType, size);
  console.log(`%c HOVER_TEXT`, `background: ${styles.hover.backgroundColor}`);
  
  return <ButtonStyled styles={styles}>{children}</ButtonStyled>
}

export default Button;

//================Styled Component===================

type ButtonStyleType = 'primary' | 'secondary' | 'success';
type ButtonSizeType = 'small' | 'medium' | 'large';

interface IButtonStyle {
  static: {
    backgroundColor: string;
    color: string;
    borderColor?: string;
  };
  hover: {
    backgroundColor: string;
    color: string;
    borderColor?: string;
  };
  size?: number;
}

interface IButtonStyleProp {
  styles: IButtonStyle;
}

const BUTTON_STYLE = {
  primary: {
    static: {
      backgroundColor: 'rgba(88, 103, 221, 1)',
      borderColor: 'rgba(88, 103, 221, 1)',
      color: 'rgba(255, 255, 255, 1)'
    },
    hover: {
      backgroundColor: 'rgba(56, 74, 215, 1)',
      borderColor: 'rgba(56, 74, 215, 1)',
      color: 'rgba(255, 255, 255, 1)'
    },
  },
  secondary: {
    static: {
      backgroundColor: 'transparent',
      borderColor: 'rgba(226, 229, 236, 1)',
      color: 'rgba(89, 93, 110, 1)'
    },
    hover: {
      backgroundColor: 'rgba(93, 120, 255, 1)',
      borderColor: 'rgba(93, 120, 255, 1)',
      color: 'rgba(255, 255, 255, 1)'
    },
  },
  success: {
    static: {
      backgroundColor: 'rgba(10, 187, 135, 1)',
      borderColor: 'rgba(10, 187, 135, 1)',
      color: 'rgba(255, 255, 255, 1)'
    },
    hover: {
      backgroundColor: 'rgba(8,151,109,1)',
      borderColor: 'rgba(8,151,109,1)',
      color: 'rgba(255, 255, 255, 1)'
    },
  }
}

const BUTTON_SIZE = {
  small : {
    size: 10,
  },
  medium : {
    size: 10,
  },
  large : {
    size: 10,
  },
}

const getStyle = (styledType: ButtonStyleType, size?: ButtonSizeType) => {
  return {...BUTTON_STYLE[styledType], ...BUTTON_SIZE[size || 'medium']};
}

const ButtonStyled = styled.button<IButtonStyleProp>`
  display: inline-block;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: ${props => props.styles.static.backgroundColor};
  color: ${props => props.styles.static.color};
  border: 1px solid ${props => props.styles.static.borderColor};
  padding: 0.65rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  outline: none !important;

  &:hover {
    color: ${props => props.styles.hover.color};
    background-color: ${props => props.styles.hover.backgroundColor};
    border: 1px solid ${props => props.styles.hover.borderColor};
  }
`