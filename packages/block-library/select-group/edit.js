/**
 * WordPress dependencies
 */
import {
	RichText,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	Icon,
	__experimentalHStack as HStack,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { chevronDown, chevronRight } from '@wordpress/icons';
import { createBlock } from '@wordpress/blocks';
import { useDispatch, useSelect, useRegistry } from '@wordpress/data';

const Edit = ( props ) => {
	const {
		attributes,
		clientId,
		isSelected,
		mergeBlocks,
		onRemove,
		onReplace,
		setAttributes,
	} = props;
	const {
		fieldLabel,
	} = attributes;

	const hasSelectedInnerBlock = useSelect(
		( select ) => select( blockEditorStore ).hasSelectedInnerBlock( clientId ),
		[ clientId ]
	);

	const blockProps = useBlockProps( {
		className: 'omniform-select-group',
	} );

	const innerBlockProps = useInnerBlocksProps( {
		className: 'omniform-select-options-container',
	}, {
		allowedBlocks: [ 'omniform/select-option' ],
		template: [
			[ 'omniform/select-option' ],
		],
		renderAppender: false,
	} );

	const registry = useRegistry();

	const {
		getBlockRootClientId,
		getBlockOrder,
		getBlockIndex,
	} = useSelect( blockEditorStore );

	const {
		replaceBlock,
		moveBlocksToPosition,
	} = useDispatch( blockEditorStore );

	const onMerge = ( forward ) => {
		if ( forward ) {
			return mergeBlocks( forward );
		}

		const parentId = getBlockRootClientId( clientId );
		const nextOptionIndex = getBlockIndex( clientId ) + 1;

		registry.batch( () => {
			// Move existing omniform/select-option blocks out of group.
			moveBlocksToPosition(
				getBlockOrder( clientId ),
				clientId,
				parentId,
				nextOptionIndex
			);

			// Convert select-group to select-option.
			replaceBlock( clientId, createBlock( 'omniform/select-option', attributes ) );
		}, [] );
	};

	return (
		<div { ...blockProps }>
			<HStack alignment="left">
				<Icon icon={ ( isSelected || hasSelectedInnerBlock ) ? chevronDown : chevronRight } />
				<RichText
					identifier="fieldLabel"
					aria-label={ __( 'Help text', 'omniform' ) }
					placeholder={ __( 'Write the option text…', 'omniform' ) }
					allowedFormats={ [] }
					withoutInteractiveFormatting
					value={ fieldLabel }
					onChange={ ( html ) => setAttributes( { fieldLabel: html } ) }
					onSplit={ ( value, isOriginal ) => {
						let newAttributes;

						if ( isOriginal || value ) {
							newAttributes = {
								...attributes,
								fieldLabel: value.trim(),
							};
						}

						const block = createBlock( props.name, newAttributes );

						if ( isOriginal ) {
							block.clientId = clientId;
						}

						return block;
					} }
					onMerge={ onMerge }
					onReplace={ onReplace }
					onRemove={ onRemove }
				/>
			</HStack>
			{ ( isSelected || hasSelectedInnerBlock ) && (
				<div { ...innerBlockProps } />
			) }
		</div>
	);
};
export default Edit;
