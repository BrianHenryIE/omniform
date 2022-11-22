<?php
/**
 * The FieldInput block class.
 *
 * @package InquiryWP
 */

namespace InquiryWP\BlockLibrary\Blocks;

use InquiryWP\Plugin\FormIngestionEngine;

/**
 * The FieldInput block class.
 */
class FieldInput extends BaseFieldBlock {
	/**
	 * Renders the block on the server.
	 *
	 * @param array  $attributes Block attributes.
	 * @param string $content    Block default content.
	 *
	 * @return string Returns the block content.
	 */
	public function renderBlock( $attributes, $content ) {
		parent::renderBlock( $attributes, $content );

		if ( empty( $this->renderFieldLabel() ) ) {
			return '';
		}

		$form_ingestion = inquirywp()->get( FormIngestionEngine::class );

		$field_attributes = array(
			'id'          => esc_attr( $this->field_name ),
			'name'        => esc_attr( $this->field_name ),
			'placeholder' => empty( $attributes['placeholder'] ) ? '' : esc_attr( $attributes['placeholder'] ),
			'value'       => esc_attr( $form_ingestion->formValue( $this->field_name ) ),
		);

		if ( in_array( $attributes['type'], array( 'checkbox', 'radio' ) ) ) {
			unset( $field_attributes['placeholder'] );
			$field_attributes['value'] = esc_attr( true );

			if ( ! empty( $form_ingestion->formValue( $this->field_name ) ) ) {
				$field_attributes['checked'] = 'checked';
			}
		}

		// Nest form data within a fieldset.
		if ( ! empty( $attributes['group'] ) ) {
			$field_attributes['name'] = $attributes['group'] . '[' . sanitize_title( $field_attributes['name'] ) . ']';
		}

		// Stitch together the input's attributes.
		$field_attributes = array_map(
			function( $attr, $val ) {
				return sprintf( '%1$s="%2$s"', esc_attr( $attr ), esc_attr( $val ) );
			},
			array_keys( $field_attributes ),
			$field_attributes
		);

		$field_control = sprintf(
			'<input class="inquirywp-field-control" type="%s" %s />',
			esc_attr( $attributes['type'] ),
			implode( ' ', $field_attributes )
		);

		return sprintf(
			'<div class="wp-block-inquirywp-%1$s inquirywp-field-%2$s">%3$s</div>',
			esc_attr( $this->blockTypeName() ),
			esc_attr( $attributes['type'] ),
			$this->renderFieldLabel() . $field_control . $this->renderFieldHelpText() . $this->renderFieldError() . $content
		);
	}
}
