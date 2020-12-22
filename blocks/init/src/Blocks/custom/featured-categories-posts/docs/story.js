/* eslint-disable no-unused-vars */

import { Gutenberg, blockDetails } from '@eightshift/frontend-libs/scripts/storybook';
import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import manifest from './../manifest.json';
import globalManifest from './../../../manifest.json';
import readme from './readme.md';
import mockData from './mock.json';
import category from './category.json';
import pages from './pages.json';
import taxonomies from './taxonomies.json';
import types from './types.json';

// export default {
// 	title: `Blocks|${manifest.title}`,
// 	parameters: {
// 		notes: readme,
// 	},
// };

const mock = new MockAdapter(axios);


const API_REQUEST = 'http://localhost:50647/wp/v2/block-renderer/eightshift-boilerplate/featured-categories-posts';
const API_TYPE = 'http://localhost:50647/wp-json/wp/v2/types';
// const API_TYPE = 'http://localhost:50647/user';

class Test extends React.Component {

	constructor(props) {
		super(props);

		this.state = { data: {} };
	}

	componentDidMount() {

		const that = this;

		axios.get(API_REQUEST).then(function(response) {
			that.setState({ data: response.data });
			console.log('novi');
		});
		
	}

	render() {
		return (
			<div>
				Response is <pre>{JSON.stringify(this.state.data, null, '  ')}</pre>
			</div>
		);
	}
}

storiesOf('Mocking Api responses with Axios and axios-mock-adapter', module).add('Test', () => {

	// 4. create the mock inside the story
	// if this is outside it'll mess up with other axios instances/requests
	mock.onGet(API_TYPE).reply(200, types);

	axios.get(API_TYPE).then(function (response) {
		console.log(response.data);
	});

	return <Gutenberg props={blockDetails(manifest, globalManifest)} />;
});

// export const block = () => {
// 	const mock = (apiMock: MockAdapter) => {
// 		apiMock.onGet('/api/meetings/1').reply(200, {
// 			id: 1,
// 			title: 'A Meeting',
// 		});
// 	};
// 	return (
// 		<AxiosMock mock={mock}>
// 			<Gutenberg props={blockDetails(manifest, globalManifest)} />
// 		</AxiosMock>
// 	);
// };
