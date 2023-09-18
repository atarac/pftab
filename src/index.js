// Import WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';

// Import the edit and save components for tab-container block
import editTabContainer from './tab-container/edit';
import saveTabContainer from './tab-container/save';
import metadataTabContainer from './tab-container/block.json';

// Import the edit and save components for individual-tab block
import editIndividualTab from './individual-tab/edit';
import saveIndividualTab from './individual-tab/save';
import metadataIndividualTab from './individual-tab/block.json';

// Register the tab-container block
registerBlockType(metadataTabContainer.name, {
	edit: editTabContainer,
	save: saveTabContainer,
});

// Register the individual-tab block
registerBlockType(metadataIndividualTab.name, {
	edit: editIndividualTab,
	save: saveIndividualTab,
});