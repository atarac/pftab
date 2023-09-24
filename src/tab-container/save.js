import { InnerBlocks, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { numberToDisplay, activeTab } = attributes;
	const tabs = Array.from({ length: 10 }, (_, i) => i + 1);

	return (
		<div className="wp-block-your-block-name">
			<div className="tab-container">
				<div className="tab-menu">
					{tabs.slice(0, numberToDisplay).map((tabNumber) => {
						const menuName = `menu${tabNumber}`;
						return (
							<RichText.Content
								key={menuName}
								tagName='li'
								className={`${menuName} ${activeTab === tabNumber ? 'active' : ''}`}
								value={attributes[menuName]}
							/>
						);
					})}
				</div>
				<div className="tab-contents ">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
