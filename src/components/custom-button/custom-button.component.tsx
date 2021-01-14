import React from 'react';

import './custom-button.styles.scss';

interface CustomButtonInterface {
	children: any;
	isGoogleSignIn?: boolean;
	inverted?: boolean;
	onClick?: () => void;
}

export const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }: CustomButtonInterface) => (
	<button
		className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);
