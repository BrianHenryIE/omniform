<?php
/**
 * The Fieldset block class.
 *
 * @package OmniForm
 */

namespace OmniForm\BlockLibrary\Blocks;

/**
 * The Fieldset block class.
 */
class Fieldset extends BaseBlock {
	/**
	 * Renders the block on the server.
	 *
	 * @return string
	 */
	protected function render() {
		if ( empty( $this->getBlockAttribute( 'fieldLabel' ) ) ) {
			return '';
		}

		$allowed_html = array(
			'strong' => array(),
			'em'     => array(),
		);

		return sprintf(
			'<fieldset %s><legend class="omniform-field-label">%s</legend>%s</fieldset>',
			get_block_wrapper_attributes(),
			wp_kses( $this->getBlockAttribute( 'fieldLabel' ), $allowed_html ),
			$this->content
		);
	}
}
