import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	border: solid 1px rebeccapurple;
	border-radius: 4px;
	margin: 0 4px;
	paddin: 1rem;
`;

const Button = props => {
	const { clickHandler, name } = props;
	return <StyledButton onClick={clickHandler}>{name}</StyledButton>;
};

export default Button;
