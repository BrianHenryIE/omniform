/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { decodeEntities } from '@wordpress/html-entities';

/**
 * Internal dependencies
 */
import json from './block.json';
import Edit from './edit';
import Save from './save';
import variations from './variations';
import { fieldSelect as icon } from '../shared/icons';

import './style.scss';
import './index.scss';

const { name } = json;

registerBlockType( name, {
	edit: Edit,
	save: Save,
	icon,
	example: {
		attributes: {
			label: __( 'Example input', 'omniform' ),
		},
	},
	variations,
	// Get block name from the option value.
	__experimentalLabel: ( { label } ) => label && decodeEntities( label ),
} );
