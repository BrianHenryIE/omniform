/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { createBlock, getDefaultBlockName } from '@wordpress/blocks';
import {
	RichText,
	useBlockProps,
	__experimentalUseColorProps as useColorProps,
	__experimentalGetElementClassName,
} from '@wordpress/block-editor';

const Edit = ( {
	attributes,
	setAttributes,
	onReplace,
	mergeBlocks,
	clientId,
} ) => {
	const {
		className,
		text,
	} = attributes;

	const colorProps = useColorProps( attributes );
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<RichText
				className={ classnames(
					className,
					colorProps.className,
					__experimentalGetElementClassName( 'button' ),
				) }
				style={ {
					...colorProps.style,
				} }
				tagName="button"
				aria-label={ __( 'Button text', 'omniform' ) }
				placeholder={ __( 'Add text…', 'omniform' ) }
				value={ text }
				withoutInteractiveFormatting
				onChange={ ( value ) => setAttributes( { text: value } ) }
				onSplit={ ( value, isOriginal ) => {
					let block;

					if ( isOriginal || value ) {
						block = createBlock( 'omniform/button-submit', {
							...attributes,
							text: value,
						} );
					} else {
						block = createBlock(
							getDefaultBlockName() ?? 'omniform/button-submit'
						);
					}

					if ( isOriginal ) {
						block.clientId = clientId;
					}

					return block;
				} }
				onReplace={ onReplace }
				onRemove={ () => onReplace( [] ) }
				onMerge={ mergeBlocks }
			/>
		</div>
	);
};
export default Edit;
