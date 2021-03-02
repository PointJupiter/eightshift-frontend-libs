import React from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { ColorPaletteCustom } from '@eightshift/frontend-libs/scripts/components';
import { icons, getOptionColors, getOptions } from '@eightshift/frontend-libs/scripts/editor';
import { SelectControl, Icon, ToggleControl } from '@wordpress/components';
import { checkAttr } from '@eightshift/frontend-libs/scripts/helpers';
import manifest from './../manifest.json';

const { title } = manifest;

export const HeadingOptions = (attributes) => {
	const {
		setAttributes,
		componentName = manifest.componentName,
		label = title,
		options = options,
		headingShowControls = true,

		headingUse = checkAttr('headingUse', attributes, manifest, componentName),

		headingColor = checkAttr('headingColor', attributes, manifest, componentName),
		headingSize = checkAttr('headingSize', attributes, manifest, componentName),

		showHeadingColor = true,
		showHeadingSize = true,
	} = attributes;

	if (!headingShowControls) {
		return null;
	}

	return (
		<Fragment>

			{label &&
				<h3 className={'options-label'}>
					{label}
				</h3>
			}

			<ToggleControl
				label={sprintf(__('Use %s', 'eightshift-frontend-libs'), label)}
				checked={headingUse}
				onChange={(value) => setAttributes({ [`${componentName}Use`]: value })}
			/>

			{headingUse &&
				<Fragment>
					{showHeadingColor &&
						<ColorPaletteCustom
							label={
								<Fragment>
									<Icon icon={icons.color} />
									{__('Color', 'eightshift-frontend-libs')}
								</Fragment>
							}
							colors={getOptionColors(getOptions(manifest, componentName, 'color', options))}
							value={headingColor}
							onChange={(value) => setAttributes({ [`${componentName}Color`]: value })}
						/>
					}

					{showHeadingSize &&
						<SelectControl
							label={
								<Fragment>
									<Icon icon={icons.textSize} />
									{__('Text size', 'eightshift-frontend-libs')}
								</Fragment>
							}
							value={headingSize}
							options={getOptions(manifest, componentName, 'size', options)}
							onChange={(value) => setAttributes({ [`${componentName}Size`]: value })}
						/>
					}
				</Fragment>
			}

		</Fragment>
	);
};
