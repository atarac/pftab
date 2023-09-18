import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Save() {
	const blockProps = useBlockProps.save();

	const tabs = Array.from({ length: 10 }, (_, i) => i + 1);

	return (
		<div {...blockProps}>
			<div className="tab-container">
				<div className="tab-menu">
					{tabs.map((tabNumber) => (
						<div key={`menu-${tabNumber}`} className={`tab-menu-item tab-menu-item-${tabNumber}`}>
							Menu{tabNumber}
						</div>
					))}
				</div>
				<div className="tab-content">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
