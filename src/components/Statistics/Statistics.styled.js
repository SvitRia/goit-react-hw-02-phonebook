import styled from 'styled-components';

export const Span = styled.span`
 
  padding: ${p => p.theme.spacing(1)};
  font-weight: 500; 
`;

export const SpanList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.spacing(4)} ;
`