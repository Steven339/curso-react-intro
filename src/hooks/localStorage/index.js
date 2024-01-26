import React from "react";

function useLocalStorage(key, initialValue) {
	const [value, setValue] = React.useState(() => {
		try {
			let item = window.localStorage.getItem(key);
			const initValue = item ? JSON.parse(item) : initialValue;
			return initValue.length > 0 ? initValue : initialValue; // TODO delete this
		} catch (error) {
			return initialValue;
		}
	});
	React.useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);
	return [value, setValue];
}

export { useLocalStorage };