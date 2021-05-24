import React from 'react';
import classnames from 'classnames';
import { selector, checkAttr } from '@eightshift/frontend-libs/scripts/helpers';
import manifest from './../manifest.json';

export const VideoButtonEditor = (attributes) => {
	const {
		componentName: manifestComponentName,
		componentClass: manifestComponentClass,
		options: manifestOptions,
	} = manifest;

	const {
		componentName = manifestComponentName,
		componentClass = manifestComponentClass,
		selectorClass = componentClass,
		blockClass,

		videoButtonUse = checkAttr('videoButtonUse', attributes, manifest, componentName),

		videoButtonModalId = checkAttr('videoButtonModalId', attributes, manifest, componentName),
		videoButtonLabel = checkAttr('videoButtonLabel', attributes, manifest, componentName),
	} = attributes;

	const options = {...manifestOptions, ...attributes.options};

	const videoButtonClass = classnames(
		componentClass,
		selector(blockClass, blockClass, selectorClass),
	);

	return (
		<>
			{videoButtonUse &&
				<>
					{videoButtonModalId &&
						<button
							className={`${videoButtonClass}`}
							dangerouslySetInnerHTML={{ __html: options.icons }}
							aria-label={videoButtonLabel}
						></button>
					}
				</>
			}
		</>
	);
};
