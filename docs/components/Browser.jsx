import React from 'react';
import styled, { css } from 'styled-components';

const CircleWrapper = styled.div`
  display: flex;
  width: 54px;
  justify-content: space-between;
`;

const Search = styled.div`
  margin-left: 10px;
  background-color: #FFFFFF;
  border-radius: 2px;
  padding: 2px;
  flex: 1;
  padding-left: 10px;
  color: #5C6975;
`;

const Circle = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  display: block;
  ${props => props.color === 'green' && css`
    background-color: #58cb42;
  `}

  ${props => props.color === 'orange' && css`
    background-color: #fbbe3c;
  `}

  ${props => props.color === 'red' && css`
    background-color: #f25f58;
  `}
`;

const HeaderWrapper = styled.div`
  background-color: #F5F7F9;
  display: flex;
  padding: 10px;
  align-items: center;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  box-sizing: border-box;
`;

const BodyWrapper = styled.div`
  border-left: 4px solid #F5F7F9;
  border-right: 4px solid #F5F7F9;
  border-bottom: 4px solid #F5F7F9;
  padding: 10px;
  background-color: #FFFFFF;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
`;


export const CustomBrowser = ({ route, children }) => {
  return(
    <>
      <HeaderWrapper>
        <CircleWrapper>
          <Circle color="red"/>
          <Circle color="orange"/>
          <Circle color="green"/>
        </CircleWrapper>
        <Search>{route}</Search>
      </HeaderWrapper>
      <BodyWrapper>
      {children}
      </BodyWrapper >
    </>
  )
}