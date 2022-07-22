import styled from "styled-components";

const Clock = styled.span<{ delay?: number, p1: number, p2: number }>`
  width: 50px;
  height: 50px;

  display: block;
  position: relative;
  
  overflow: hidden;
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.05),
        inset 0px 0px 15px 2px rgba(0,0,0,0.05);

  &:before, &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 25px;
    width: 3px;
    background-color: #5c5c5c;
    transition: ${p => `${p.delay || 1}s`};
    transform-origin: bottom;
  }

  &:before
  {
    background-color: red;
    transform: rotate(${p => `${p.p1}deg`});
  }

  &:after
  {
    background-color: green;
    transform: rotate(${p => `${p.p2}deg`});
  }
`

export default Clock;