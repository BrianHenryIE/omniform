<?php
/**
 * The Form block class.
 *
 * @package OmniForm
 */

namespace OmniForm\BlockLibrary\Blocks;

/**
 * The Form block class.
 */
class Form extends BaseBlock {
	/**
	 * Renders the block on the server.
	 *
	 * @return string Returns the block content.
	 */
	public function render() {
		if ( 'omniform' === $this->get_block_context( 'postType' ) ) {
			$entity_id = $this->get_block_context( 'postId' );
		}

		if ( ! empty( $this->attributes['ref'] ) ) {
			$entity_id = $this->attributes['ref'];
		}

		if ( empty( $entity_id ) ) {
			return '';
		}

		// Setup the Form object.
		$form = omniform()->get( \OmniForm\Plugin\Form::class )->get_instance( $entity_id );

		if ( ! $form ) {
			// Display notice for logged in editors, render nothing for visitors.
			return current_user_can( 'edit_posts' )
				? sprintf(
					'<p style="color:var(--wp--preset--color--vivid-red,#cf2e2e);">%s</p>',
					/* translators: %d: Form ID. */
					esc_html( sprintf( __( 'Form ID &#8220;%d&#8221; has been removed.', 'omniform' ), $entity_id ) )
				)
				: '';
		}

		if ( ! $form->is_published() || $form->is_private() ) {
			// Display notice for logged in editors, render nothing for visitors.
			return current_user_can( 'edit_post', $form->get_id() )
				? sprintf(
					'<p style="color:var(--wp--preset--color--vivid-red,#cf2e2e);">%s<br/><a href="%s">%s</a></p>',
					/* translators: %s: Form title. */
					esc_html( sprintf( __( 'You must publish the "%s" form for visitors to see it.', 'omniform' ), $form->get_title() ) ),
					esc_url( admin_url( sprintf( 'post.php?post=%d&action=edit', $form->get_id() ) ) ),
					esc_html( __( 'Edit the form', 'omniform' ) )
				)
				: '';
		}

		$content     = do_blocks( $form->get_content() );
		$nonce_field = wp_nonce_field( 'omniform', 'wp_rest', true, false );

		// Add a container for the response message.
		$response_container = '<div class="omniform-response-container wp-block-group is-layout-flow" style="display:none;border-left-width:6px;padding-top:0.5em;padding-right:1.5em;padding-bottom:0.5em;padding-left:1.5em"></div>';

		/**
		 * Fires when the form is rendered.
		 *
		 * @param int $form_id The form ID.
		 */
		do_action( 'omniform_form_render', $form->get_id() );

		return sprintf(
			'<form method="post" action="%s" %s>%s</form>',
			esc_url( rest_url( 'omniform/v1/forms/' . $form->get_id() . '/responses' ) ),
			get_block_wrapper_attributes(),
			$response_container . $content . $nonce_field
		);
	}
}
