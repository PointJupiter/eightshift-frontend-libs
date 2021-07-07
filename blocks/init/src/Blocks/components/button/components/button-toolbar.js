import React from 'react'; // eslint-disable-line no-unused-vars
import { __, sprintf } from '@wordpress/i18n';
import { AlignmentToolbar } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { checkAttr } from '@eightshift/frontend-libs/scripts/helpers';
import { capitalize } from '../../../assets/scripts/helpers/capitalize';
import manifest from './../manifest.json';
import { SVG, Path } from '@wordpress/primitives';

const { options } = manifest;

export const ButtonToolbar = (attributes) => {
	const {
		setAttributes,
		componentName = manifest.componentName,
		buttonShowControls = true,

		buttonUse = checkAttr('buttonUse', attributes, manifest, componentName),
		buttonAlign = checkAttr('buttonAlign', attributes, manifest, componentName),

		showButtonAlign = true,
	} = attributes;

	const justifyLeft = (
		<SVG xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
			<Path d='M9 9v6h11V9H9zM4 20h1.5V4H4v16z' />
		</SVG>
	);

	const justifyCenter = (
		<SVG xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
			<Path d='M20 9h-7.2V4h-1.6v5H4v6h7.2v5h1.6v-5H20z' />
		</SVG>
	);

	const justifyRight = (
		<SVG xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
			<Path d='M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z' />
		</SVG>
	);

	const alignmentControls = [
		{
			icon: justifyLeft,
			title: __('Align button to the left', 'tfa'),
			align: 'left',
		},
		{
			icon: justifyCenter,
			title: __('Align button to the center', 'tfa'),
			align: 'center',
		},
		{
			icon: justifyRight,
			title: __('Align button to the right', 'tfa'),
			align: 'right',
		},
	];

	if (!buttonShowControls) {
		return null;
	}

	return (
		<Fragment>
			{buttonUse && (
				<Fragment>
					{showButtonAlign && (
						<AlignmentToolbar
							value={buttonAlign}
							options={options.aligns}
							alignmentControls={alignmentControls}
							label={sprintf(__('%s alignment', 'tfa'), capitalize(componentName))}
							onChange={(value) =>
								setAttributes({ [`${componentName}Align`]: value })
							}
						/>
					)}
				</Fragment>
			)}
		</Fragment>
	);
};
