import React from "react";
import Get from "../../get/Get";
import './Button.css'

const Button = ({ onClick, children, className  }) => {
	return (
		<div>
			<button className={className} onClick={onClick}>{children}</button>
		</div>
	);
};

export default Button;
