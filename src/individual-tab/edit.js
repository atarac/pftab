import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

export default function Edit( { attributes, clientId } ) {
	const { tabNumber } = attributes;

	// 親ブロックのactiveTab属性を取得
	const { activeTab } = useSelect((select) => {
		const { getBlock, getBlockRootClientId } = select('core/block-editor');
		const parentClientId = getBlockRootClientId(clientId);
		const parentBlock = getBlock(parentClientId);
		return parentBlock ? parentBlock.attributes : {};
	}, [clientId]);

	const blockProps = useBlockProps({
		className: `tab-content content${tabNumber} ${tabNumber === activeTab ? 'active' : ''}`,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks />
		</div>
	);
}
