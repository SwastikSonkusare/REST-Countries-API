import React from "react";

import ClipLoader from "react-spinners/ClipLoader";

import { css } from "@emotion/react";

import './Loader.scss';

const Loader = () => {
  const color = '#111517'

  const override = css`
  display: block;
`;

  return (
    <span className="loader">
      <ClipLoader color={color}  css={override} size={100} />
    </span>
  );
};

export default Loader;
