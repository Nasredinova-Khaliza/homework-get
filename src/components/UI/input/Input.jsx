import React from "react";
import './Input.css'

const Input = ({ text, placeholder, value, onChange, className }) => {
	return (
		<div>
			<input className={className} type={text} placeholder={placeholder} value={value} onChange={onChange} />
		</div>
	);
};

export default Input;
