import { registerBlockType } from '@wordpress/blocks';

import './tab-container/style.scss';
import editTabContainer from './tab-container/edit';
import saveTabContainer from './tab-container/save';
import metadataTabContainer from './tab-container/block.json';

registerBlockType(metadataTabContainer.name, {
	edit: editTabContainer,
	save: saveTabContainer,
});
