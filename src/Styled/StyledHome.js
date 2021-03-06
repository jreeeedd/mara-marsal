import styled, { keyframes } from "styled-components";
import photo1 from "../Assets/Photos/shadows/photo1.jpg";
import photo2 from "../Assets/Photos/shine/photo1.jpg";
import photo3 from "../Assets/Photos/liquid/photo1.jpg";
import illustration1 from "../Assets/Svg/Shadows.svg";
import illustration2 from "../Assets/Svg/Shine.svg";

const StyledEnterGallery = styled.div`
  display: flex;
  margin: 0 10%;
  justify-content: center;
  height: 100vh;
  max-height: calc(100vh - 170px);
  cursor: pointer;

  & > a {
    flex: 1;
    overflow: hidden;
    transition: 0.5s;
    margin: 0 10px;
    line-height: 0;
    background-size: cover;
    width: 100%;
    min-height: 100%;
    object-fit: cover;

    &:hover {
      flex: 2 2 300px;
    }

    &:nth-child(1) {
      background-image: url(${photo1});
    }

    &:nth-child(2) {
      background-image: url(${photo2});
    }

    &:nth-child(3) {
      background-image: url(${photo3});
      background-position: 0 15%;
    }
  }
`;

export default StyledEnterGallery;
