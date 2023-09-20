import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Edit( { attributes } ) {
	const { tabNumber } = attributes;
	const blockProps = useBlockProps({
		className: `tab-content content${tabNumber}`,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks />
		</div>
	);
}
