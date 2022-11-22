/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

const Edit = ( {
	attributes,
	setAttributes,
} ) => {
	const {
		label,
	} = attributes;

	const blockProps = useBlockProps();
	const innerBlockProps = useInnerBlocksProps();

	return (
		<div
			{ ...blockProps }
			className={ classNames( blockProps.className, 'inquirywp-fieldset is-layout-flow' ) }
		>
			<RichText
				className="inquirywp-field-label"
				tagName="legend"
				aria-label={ __( 'Legend text', 'inquirywp' ) }
				placeholder={ __( 'Enter a title to the field…', 'inquirywp' ) }
				withoutInteractiveFormatting
				multiple={ false }
				value={ label }
				onChange={ ( html ) => setAttributes( { label: html } ) }
			/>
			{ innerBlockProps.children }
		</div>
	);
};
export default Edit;
