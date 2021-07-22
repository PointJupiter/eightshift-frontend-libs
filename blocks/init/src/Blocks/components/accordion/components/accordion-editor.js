import React from 'react';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { selector, checkAttr, getAttrKey } from '@eightshift/frontend-libs/scripts';
import manifest from './../manifest.json';

export const AccordionEditor = (attributes) => {
	const {
		componentClass,
		options: manifestOptions,
	} = manifest;
	
	const {
		setAttributes,
		selectorClass = componentClass,
		additionalClass,
		blockClass,
		placeholder = __('Add Content', 'eightshift-frontend-libs'),
	} = attributes;

	const accordionUse = checkAttr('accordionUse', attributes, manifest);
	const accordionTitle = checkAttr('accordionTitle', attributes, manifest);
	const accordionContent = checkAttr('accordionContent', attributes, manifest);

	const accordionClass = classnames([
		selector(componentClass, componentClass),
		selector(blockClass, blockClass, selectorClass),
		selector(additionalClass, additionalClass),
	]);

	return (
		<>
			{accordionUse &&
				<div
					className={accordionClass}
					data-accordion-open={true}>
					<button className={`${componentClass}__trigger`}>
						<RichText
							placeholder={placeholder}
							value={accordionTitle}
							onChange={(value) => setAttributes({ [getAttrKey('accordionTitle', attributes, manifest)]: value })}
							keepPlaceholderOnFocus
							allowedFormats={[]}
						/>
						<div className={`${componentClass}__icon`} dangerouslySetInnerHTML={{ __html: manifestOptions.icon }}></div>
					</button>
					<section className={`${componentClass}__panel`}>
						<div className={`${componentClass}__content`}>
							{accordionContent}
						</div>
					</section>
				</div>
			}
		</>
	);
};
