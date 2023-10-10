import styled from 'styled-components';

export const Button = styled.button`
  border: 2px solid color: ${p => p.theme.colors.borderGray};
  border-radius: ${p => p.theme.radius.sm};
  padding: ${p => p.theme.spacing(3)};
  backgraund-color: ${p => p.theme.colors.btn_color}
   &:hover {color: ${p => p.theme.colors.blue}}
    &:focus {color: ${p => p.theme.colors.blue}}
`;

export const ButtonList = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${p => p.theme.spacing(5)} ;

`