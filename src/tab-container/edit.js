import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

<<<<<<< HEAD
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

import './editor.scss';

export default function Edit() {
=======
export default function Edit({ attributes, setAttributes }) {
>>>>>>> development3
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
        <div className="tab-contents">
					<InnerBlocks
						allowedBlocks={['create-block/individual-tab']}
						template={Array.from({ length: 10 }, (_, index) => [
							'create-block/individual-tab',
							{ tabNumber: index + 1 },
						])}
					/>
        </div>
			</div>
		</div>
	);
}
