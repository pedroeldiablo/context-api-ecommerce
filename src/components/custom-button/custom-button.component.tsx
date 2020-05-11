import React from 'react';

import './custom-button.styles.scss';

interface CustomButton {
	children: any;
	isGoogleSignIn?: boolean;
	inverted?: boolean;
	onClick?: () => void;
}

export const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }: CustomButton) => (
	<button
		className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);
