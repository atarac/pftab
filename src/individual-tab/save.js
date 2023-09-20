import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { tabNumber } = attributes;
	const blockProps = useBlockProps.save({
		className: `tab-content content${tabNumber}`,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
