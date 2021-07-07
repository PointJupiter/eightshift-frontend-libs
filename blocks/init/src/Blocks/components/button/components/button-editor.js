import React from 'react'; // eslint-disable-line no-unused-vars
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { checkAttr, selector } from '@eightshift/frontend-libs/scripts/helpers';
import { IconEditor } from './../../icon/components/icon-editor';
import manifest from './../manifest.json';

export const ButtonEditor = (attributes) => {
	const {
		setAttributes,
		componentName = manifest.componentName,
		componentClass = manifest.componentClass,
		selectorClass = componentClass,
		blockClass,
		placeholder = __('Add Content', 'Ingov'),

		buttonUse = checkAttr('buttonUse', attributes, manifest, componentName),

		buttonContent = checkAttr('buttonContent', attributes, manifest, componentName),
		buttonUrl = checkAttr('buttonUrl', attributes, manifest, componentName),
		buttonAlign = checkAttr('buttonAlign', attributes, manifest, componentName),
		buttonSize = checkAttr('buttonSize', attributes, manifest, componentName),
		buttonColor = checkAttr('buttonColor', attributes, manifest, componentName),
		buttonWidth = checkAttr('buttonWidth', attributes, manifest, componentName),
		buttonIconUse = checkAttr('iconUse', attributes, manifest, componentName),
		buttonIconPosition = checkAttr(
			'buttonIconPosition',
			attributes,
			manifest,
			componentName,
		),
	} = attributes;

	const buttonWrapClass = classnames([
		selector(componentClass, componentClass, 'wrap'),
		selector(buttonAlign, componentClass, 'align', buttonAlign),
		selector(blockClass, blockClass, `${selectorClass}-wrap`),
	]);

	const buttonClass = classnames([
		componentClass,
		selector(buttonSize, componentClass, 'size', buttonSize),
		selector(buttonColor, componentClass, 'color', buttonColor),
		selector(buttonWidth, componentClass, 'size-width', buttonWidth),
		selector(buttonIconUse, componentClass, '', 'has-icon'),
		selector(
			buttonIconUse && buttonIconPosition,
			componentClass,
			'',
			`icon-position-${buttonIconPosition}`,
		),
		selector(!(buttonContent && buttonUrl), `${componentClass}-placeholder`),
		selector(blockClass, blockClass, selectorClass),
	]);

	const buttonContentClass = classnames([selector(buttonContent, componentClass, 'content')]);

	return (
		<Fragment>
			{buttonUse && (
				<div className={buttonWrapClass}>
					<div className={buttonClass}>
						<IconEditor
							{...attributes}
							setAttributes={setAttributes}
							blockClass={componentClass}
						/>

						{buttonIconPosition !== 'center' && (
							<RichText
								className={buttonContentClass}
								placeholder={placeholder}
								value={buttonContent}
								onChange={(value) =>
									setAttributes({ [`${componentName}Content`]: value })
								}
								keepPlaceholderOnFocus
								formattingControls={[]}
							/>
						)}
					</div>
				</div>
			)}
		</Fragment>
	);
};
