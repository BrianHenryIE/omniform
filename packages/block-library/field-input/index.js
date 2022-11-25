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
import variations from './variations';
import { fieldInput as icon } from '../shared/icons';

import './style.scss';
import './index.scss';

const { name } = json;

registerBlockType( name, {
	edit: Edit,
	icon,
	variations,
	example: {
		attributes: {
			label: __( 'Example input', 'omniform' ),
		},
	},
	// Get block name from the option value.
	__experimentalLabel: ( { label } ) => label && decodeEntities( label ),
} );
