import React, { useMemo } from 'react';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { selector, checkAttr, getAttrKey } from '@eightshift/frontend-libs/scripts/helpers';
import { pasteInto, outputCssVariables, getUnique } from '@eightshift/frontend-libs/scripts/editor';
import manifest from './../manifest.json';
import globalManifest from './../../../manifest.json';

export const ParagraphEditor = (attributes) => {
	const unique = useMemo(() => getUnique(), []);

	const {
		componentClass: manifestComponentClass,
		options: manifestOptions,
	} = manifest;

	const {
		setAttributes,
		componentClass = manifestComponentClass,
		selectorClass = componentClass,
		blockClass,
		placeholder = __('Add Content', 'eightshift-frontend-libs'),

		onSplit,
		mergeBlocks,
		onReplace,
		onRemove,
	} = attributes;

	const options = {...manifestOptions, ...attributes.options};

	const paragraphUse = checkAttr('paragraphUse', attributes, manifest);
	const paragraphContent = checkAttr('paragraphContent', attributes, manifest);

	const paragraphClass = classnames([
		componentClass,
		selector(blockClass, blockClass, selectorClass),
	]);

	return (
		<>
			{paragraphUse &&
				<>
					{outputCssVariables(attributes, manifest, unique, globalManifest)}

					<RichText
						identifier={getAttrKey('paragraphContent', attributes, manifest)}
						className={paragraphClass}
						placeholder={placeholder}
						value={paragraphContent}
						onChange={(value) => {
							setAttributes({ [getAttrKey('paragraphContent', attributes, manifest)]: value })
						}}
						allowedFormats={['core/bold', 'core/link', 'core/italic']}
						onSplit={onSplit}
						onMerge={mergeBlocks}
						onReplace={onReplace}
						onRemove={onRemove}
						onPaste={(event) => pasteInto(event, attributes, setAttributes, options.pasteAllowTags, 'p')}
						deleteEnter={true}
						data-id={unique}
					/>
				</>
			}
		</>
	);
};
