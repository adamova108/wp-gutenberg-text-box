import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes }) {
	const { text } = attributes;
	return (
		<RichText
		  { ...useBlockProps() }
          tagName='h4'
          className='card-heading'
		  value={text}
          onChange={(newVal) => setAttributes({text: newVal})}
          placeholder="Heading Goes Here"
        />
	);
}
