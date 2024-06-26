import React from "react";

const Loader = ({ loading }) => {
	if (!loading) return null;

	return (
		<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-50 z-50">
			<div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-maroonRed"></div>
		</div>
	);
};

export default Loader;
