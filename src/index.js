import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('blocks-course/text-box', {
	/* icon: <svg version="1.1" viewBox="0 0 500 500" preserveAspectRatio='xMinYMin meet'>
			<circle cx="250" cy="250" r="200" />
		</svg>, */
	icon: {
		src: 'text-page',
		/* src: (<svg version="1.1" viewBox="0 0 500 500" preserveAspectRatio='xMinYMin meet'>
				<circle cx="250" cy="250" r="200" />
			</svg>), */
		foreground: '#c1001b',
	},
	edit: Edit,
	save,
});
