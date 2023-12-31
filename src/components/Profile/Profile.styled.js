import styled from 'styled-components';


export const Wrapper = styled.div`
  border: 1px solid #c0c0c0;
  width: 350px;
  margin: 0px auto;
  padding-top: 50px;
  border-radius: 8px;
  text-align: center;
  background-color: #fff;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;
export const Images = styled.img`
  width: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid #dfdfdf;
`;
export const Text = styled.p`
  color: #808080;
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
  align-items: center;
  padding: 30px 0px;
  border: 1px solid #c0c0c0;
  background-color: #f3f6f9;
  .label {
    text-transform: capitalize;
    color: #808080;
  }
`;
export const Statistics = styled.span`
  margin-top: 5px;
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;
