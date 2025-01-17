import React, { useMemo } from 'react';
import { outputCssVariables, getUnique, props } from '@eightshift/frontend-libs/scripts/editor';
import { ListsEditor as ListsEditorComponent } from '../../../components/lists/components/lists-editor';
import manifest from './../manifest.json';
import globalManifest from './../../../manifest.json';

export const ListsEditor = ({ attributes, setAttributes }) => {
	const unique = useMemo(() => getUnique(), []);

	const {
		blockClass,
	} = attributes;

	return (
		<div className={blockClass} data-id={unique}>
			{outputCssVariables(attributes, manifest, unique, globalManifest)}

			<ListsEditorComponent
				{...props('lists', attributes)}
				setAttributes={setAttributes}
			/>
		</div>
	);
};
