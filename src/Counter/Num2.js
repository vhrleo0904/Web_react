import React from 'react';

const Num2 = (props) => {
	return (
		<div>
			<input value={props.num2} onChange={props.handleChangeNum2} />
		</div>
	);
};

export default Num2;