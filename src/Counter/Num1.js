import React from 'react';

const Num1 = (props) => {
	return (
		<div>
			<input value={props.num1} onChange={props.handleChangeNum1} />
		</div>
	);
};

export default Num1;