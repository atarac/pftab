import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const tabs = Array.from({ length: 10 }, (_, i) => i + 1);

	return (
		<div {...blockProps}>
			<div className="tab-container">
				<div className="tab-menu">
					{tabs.map((tabNumber) => {
						const menuName = `menu${tabNumber}`;
						return (
							<RichText
								key={menuName}
								tagName='li'
								className={menuName}
								value={attributes[menuName]}
								onChange={(newMenuName) =>
									setAttributes({
										[menuName]: newMenuName,
									})
								}
							/>
						);
					})}
				</div>
				<div className="tab-content">
					<InnerBlocks
						allowedBlocks={['create-block/individual-tab']}
						template={tabs.map((tabNumber) => [
							'create-block/individual-tab',
							{ tabNumber },
						])}
					/>
				</div>
			</div>
		</div>
	);
}
