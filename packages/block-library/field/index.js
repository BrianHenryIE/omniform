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

import './style.scss';

const { name } = json;

registerBlockType( name, {
	edit: Edit,
	save: Save,
	example: {
		attributes: {
			fieldLabel: __( 'Field Label', 'omniform' ),
		},
	},
	merge: ( attributes, attributesToMerge ) => {
		return {
			fieldLabel:
				( attributes.fieldLabel || '' ) +
				( attributesToMerge.fieldLabel || '' ),
		};
	},
	// Get block name from the option value.
	__experimentalLabel: ( { fieldLabel } ) => fieldLabel && decodeEntities( fieldLabel ),
} );
