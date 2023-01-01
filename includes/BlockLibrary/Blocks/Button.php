<?php
/**
 * The Button block class.
 *
 * @package OmniForm
 */

namespace OmniForm\BlockLibrary\Blocks;

use OmniForm\BlockLibrary\Blocks\Traits\HasColors;

/**
 * The Button block class.
 */
class Button extends BaseBlock {
	use HasColors;

	/**
	 * Renders the block on the server.
	 *
	 * @return string Returns the block content.
	 */
	public function render() {
		$block_supports = \WP_Block_Supports::get_instance()->apply_block_supports();

		$wrapper_attributes          = array();
		$wrapper_attributes['class'] = array_filter(
			explode( ' ', $block_supports['class'] ),
			function( $classname ) {
				return str_starts_with( $classname, 'is-style' ) ||
					str_starts_with( $classname, 'wp-block-omniform' );
			}
		);

		$button_attributes            = array();
		$button_attributes['class']   = array_diff(
			explode( ' ', $block_supports['class'] ),
			$wrapper_attributes['class']
		);
		$button_attributes['class'][] = wp_theme_get_element_class_name( 'button' );
		$button_attributes['class'][] = 'wp-block-button__link';

		$button_attributes['style'] = $block_supports['style'] ?? '';

		$allowed_html = array(
			'strong' => array(),
			'em'     => array(),
		);

		return sprintf(
			'<div %s><button type="%s" %s>%s</button></div>',
			$this->getElementAttribute( 'class', $wrapper_attributes['class'] ),
			esc_attr( $this->attributes['buttonType'] ),
			implode(
				' ',
				array(
					$this->getElementAttribute( 'class', $button_attributes['class'] ),
					$this->getElementAttribute( 'style', $button_attributes['style'] ),
				)
			),
			wp_kses( $this->attributes['buttonLabel'], $allowed_html ),
		);
	}
}
