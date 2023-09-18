// import {
// 	RichText,
// 	InnerBlocks,
// 	useBlockProps
// } from '@wordpress/block-editor';

// import './editor.scss';

// const ALLOWED_BLOCKS = ['create-block/individual-tab-block']

// export default function Edit( { attributes, setAttributes } ) {
// 	const blockProps = useBlockProps();

// 	return (
// 		<div {...blockProps}>
// 			<ul class="tab-menu">
// 				{Array.from({ length:10 }, (_, i) => i + 1).map((num) =>{
// 					const menuName = `menu${num}`;
// 						return (
// 							<RichText
// 								key={menuName}
// 								tagName='li'
// 								className={`menu-${num}`}
// 								value={ attributes[menuName] }
// 								onChange={ (newMenu) =>
// 									setAttributes( {
// 										[menuName]: newMenu
// 									})
// 								}
// 							/>
// 						);
// 				})}
// 			</ul>
// 			<div class="tab-content">
// 			</div>
// 		</div>
// 	);
// }

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
	const blockProps = useBlockProps();

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
