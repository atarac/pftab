import { InnerBlocks, RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { numberToDisplay, activeTab } = attributes;
	const blockProps = useBlockProps();
	const tabs = Array.from({ length: 10 }, (_, i) => i + 1);

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title="タブ設定">
					<RangeControl
						label={[
							"表示するタブの数",
							<br key="break" />,
							"(最大10個まで)"
						]}
						value={ numberToDisplay }
						onChange={ ( value ) => setAttributes( { numberToDisplay: value } ) }
						min={ 2 }
						max={ 10 }
					/>
				</PanelBody>
			</InspectorControls>
			<div className="tab-container">
				<div className="tab-menu">
					{tabs.slice(0, numberToDisplay).map((tabNumber) => {
						const menuName = `menu${tabNumber}`;
						return (
							<RichText
								key={menuName}
								tagName='li'
								className={`${menuName} ${activeTab === tabNumber ? 'active' : ''}`}
								value={attributes[menuName]}
								onChange={(newMenuName) =>
									setAttributes({
										[menuName]: newMenuName,
									})
								}
								onClick={() => setAttributes({ activeTab: tabNumber })}
							/>
						);
					})}
				</div>
				<div className="tab-contents">
					<InnerBlocks
						allowedBlocks={['create-block/individual-tab']}
						template={Array.from({ length: numberToDisplay }, (_, index) => [
							'create-block/individual-tab',
							{ tabNumber: index + 1 }
						])}
					/>
				</div>
			</div>
		</div>
	);
}
