import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
  display: block;
  text-decoration: none; 
  color: inherit; 
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  max-width: 300px;
  transition: transform 0.3s ease;
  cursor: pointer;
  will-change: transform;
  height: 180px;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 50px;
  color: #ffffff;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #ffffff;
`;

const Card = ({ title, description, imageUrl }) => {
  return (
    <CardContainer> 
      <CardTitle>{title}</CardTitle>
      {imageUrl}
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default Card;
