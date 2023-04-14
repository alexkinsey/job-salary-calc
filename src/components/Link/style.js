import styled from 'styled-components';

export const LinkContainer = styled.a`
  display: ${({inline}) => inline ? 'inline-flex' : 'flex'};
  align-items: center;
  gap: 5px;
  margin: 0.5rem 0;
`;

export const LinkText = styled.span`
  font-size: 14px; 
`;
