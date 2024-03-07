import styled from "styled-components";

const AppLayout = styled.div`
  display: flex;
  height: 100vh; // Opcional, dependiendo del diseño que busques
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
`;

const MainContent = styled.div`
  flex-grow: 1;
  background-color: #f7f7fa;
  font-family: 'Poppins', sans-serif;
`;

export { AppLayout, MainContent };
