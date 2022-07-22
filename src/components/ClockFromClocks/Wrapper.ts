import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 20px;
  display: grid;

  grid-template-columns: repeat(6, calc(4 * 50px));
  grid-template-rows: repeat(2, calc(6 * 50px));
`

export default Wrapper;