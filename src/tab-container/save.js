import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
  const blockProps = useBlockProps.save(); // 注意: save 関数を使用する
  const tabs = Array.from({ length: 10 }, (_, i) => i + 1);
  
  return (
    <div {...blockProps}>
      <div className="tab-container">
        <div className="tab-menu">
          {tabs.map((tabNumber) => {
            const menuName = `menu${tabNumber}`;
            return (
              <RichText.Content
                tagName="li"
                className={menuName}
                value={attributes[menuName]}
                key={menuName}
              />
            );
          })}
        </div>
        <div className="tab-contents">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}
