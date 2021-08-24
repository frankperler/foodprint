import React from 'react'
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";


const spinnerStyle = css`
display: block;
margin: 0 auto;
color: #36D7B7;
`;



export const LoadSpinner = (): JSX.Element => {


  return (
    <PuffLoader css={spinnerStyle} size="200" color="#36D7B7"></PuffLoader>
  )
}