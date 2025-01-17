import React from 'react';
import { __, sprintf } from '@wordpress/i18n';
import _ from 'lodash';
import { useSelect } from '@wordpress/data';
import { PanelBody, RangeControl, Icon, SelectControl, Spinner } from '@wordpress/components';
import { icons } from '@eightshift/frontend-libs/scripts/editor';
import { checkAttr, getAttrKey } from '@eightshift/frontend-libs/scripts/helpers';
import { CustomSelect } from '@eightshift/frontend-libs/scripts/components';
import manifest from './../manifest.json';

export const FeaturedCategoriesOptions = ({ attributes, setAttributes }) => {
	const {
		attributes: manifestAttributes,
		options: manifestOptions
	} = manifest;

	const {
		featuredCategoriesQuery,
		featuredCategoriesQuery: {
			taxonomy,
			terms,
		},
	} = attributes;

	const featuredCategoriesItemsPerLine = checkAttr('featuredCategoriesItemsPerLine', attributes, manifest);

	// Fetch all taxonomies.
	// Filter allowed taxonomies defined in the block manifest.
	const taxonomyOptions = useSelect((select) => {
		const { getTaxonomies } = select('core');

		const items = getTaxonomies() ?? [];

		const data = items.filter((element) => manifest.allowed.taxonomies.find((item) => element.slug === item)) ?? [];

		return data.map((item) => {
			return {
				label: item.labels.name,
				value: item.slug,
			};
		});
	});

	// Fetch all taxonomy terms based on the selected taxonomy.
	const termsOptions = useSelect((select) => {
		const { getEntityRecords } = select('core');

		const termsList = getEntityRecords(
			'taxonomy',
			taxonomy,
			{
				per_page: -1,
			}
		) ?? [];

		return [
			{
				label: __('No Filter used', 'eightshift-frontend-libs'),
				value: '',
			},
			...termsList.map((item) => {
				return {
					label: item.name,
					value: item.id,
				};
			}),
		];
	});

	return (
		<PanelBody title={__('Featured Categories', 'eightshift-frontend-libs')}>

			{taxonomyOptions[0] ?
				<SelectControl
					label={__('Categories', 'eightshift-frontend-libs')}
					value={taxonomy}
					options={taxonomyOptions}
					onChange={(value) => {
						setAttributes({
							featuredCategoriesQuery: {
								...featuredCategoriesQuery,
								taxonomy: value,
								terms: [],
							},
						});
					}}
				/> :
				<Spinner />
			}

			{(taxonomyOptions[0] && taxonomy) ?
				<CustomSelect
					label={sprintf(__('Filter by %s', 'eightshift-frontend-libs'), _.startCase(_.toLower(taxonomy)))}
					help={sprintf(__('If `No Filter` value is selected your %s posts will not be filtered.', 'eightshift-frontend-libs'), _.startCase(_.toLower(taxonomy)))}
					options={termsOptions}
					value={terms}
					multiple={true}
					onChange={(value) => {
						setAttributes({
							featuredCategoriesQuery: {
								...featuredCategoriesQuery,
								terms: value[0] ? value : [],
							},
						});
					}}
				/> :
				<Spinner />
			}

			<RangeControl
				label={
					<>
						<Icon icon={icons.itemsPerRow} />
						{__('Items per one row', 'eightshift-frontend-libs')}
					</>
				}
				help={__('Option to change the number of items showed in one row.', 'eightshift-frontend-libs')}
				allowReset={true}
				value={featuredCategoriesItemsPerLine}
				onChange={(value) => setAttributes({ [getAttrKey('featuredCategoriesItemsPerLine', attributes, manifest)]: value })}
				min={manifestOptions.featuredCategoriesItemsPerLine.min}
				max={manifestOptions.featuredCategoriesItemsPerLine.max}
				step={manifestOptions.featuredCategoriesItemsPerLine.step}
				resetFallbackValue={manifestAttributes.featuredCategoriesItemsPerLine.default}
			/>

		</PanelBody>
	);
};
