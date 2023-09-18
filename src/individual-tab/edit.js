import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<RichText
				tagName="h4"
				value={ attributes.tabName }
				onChange={ ( tabName ) => setAttributes( { tabName } ) }
			/>
			<InnerBlocks />
		</div>
	);
}
