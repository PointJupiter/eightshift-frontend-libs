import React from 'react';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { PanelBody, RangeControl } from '@wordpress/components';
import { Responsive, HelpModal, icons, ucfirst, IconLabel, getAttrKey, getOption } from '@eightshift/frontend-libs/scripts';
import manifest from './../manifest.json';
import globalManifest from '../../../manifest.json';

export const ColumnsOptions = ({ attributes, setAttributes }) => {
	const {
		attributes: manifestAttributes,
	} = manifest;

	const breakpoints = Object.keys(globalManifest.globalVariables.breakpoints).reverse();

	return (
		<PanelBody title={__('Columns', 'newboilerplate')}>
			<HelpModal
				type="columns"
				buttonLabel={__('How to use Columns?', 'newboilerplate')}
				modalLabel={__('Columns', 'newboilerplate')}
			/>

			<br /><br />

			<Responsive label={<IconLabel icon={icons.gutter} label={__('Gutter', 'newboilerplate')} />}>
				{breakpoints.map((keyName) => {
					const point = ucfirst(keyName);
					const attr = `${getAttrKey('columnsGutter', attributes, manifest)}${point}`;
					const { min, max, step } = getOption('columnsGutter', attributes, manifest);

					return (
						<Fragment key={keyName}>
							<RangeControl
								label={<IconLabel icon={icons[`screen${point}`]} label={point} />}
								onChange={(value) => setAttributes({ [attr]: value })}
								resetFallbackValue={manifestAttributes[attr].default}
								value={attributes[attr]}
								min={min}
								max={max}
								step={step}
								allowReset
							/>
						</Fragment>
					);
				})}
			</Responsive>

			<Responsive label={<IconLabel icon={icons.verticalSpacing} label={__('Vertical spacing', 'newboilerplate')} />}>
				{breakpoints.map((keyName) => {
					const point = ucfirst(keyName);
					const attr = `${getAttrKey('columnsVerticalSpacing', attributes, manifest)}${point}`;
					const { min, max, step } = getOption('columnsVerticalSpacing', attributes, manifest);

					return (
						<Fragment key={keyName}>
							<RangeControl
								label={<IconLabel icon={icons[`screen${point}`]} label={point} />}
								onChange={(value) => setAttributes({ [attr]: value })}
								resetFallbackValue={manifestAttributes[attr].default}
								value={attributes[attr]}
								min={min}
								max={max}
								step={step}
								allowReset
							/>
						</Fragment>
					);
				})}
			</Responsive>
		</PanelBody>
	);
};
