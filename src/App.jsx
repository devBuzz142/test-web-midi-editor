import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #f2f2f2;
  border-radius: 16px;
`;

const App = () => {
  return (
    <div>
      <Container>hello2</Container>
    </div>
  );
};

export default App;
