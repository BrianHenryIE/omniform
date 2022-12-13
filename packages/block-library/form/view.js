/* global FormData */
import tinycolor from 'tinycolor2';

( function() {
	'use strict';

	document.addEventListener( 'DOMContentLoaded', function() {
		const formSubmissionHandler = ( event ) => {
			event.preventDefault();

			const formElement = event.target;
			const { action, method } = formElement;
			const body = new FormData( formElement );

			console.debug( { action, method, body } );

			// fetch( action, { method, body } )
			// 	.then( ( response ) => console.debug( response ) )
			// 	.catch( ( error ) => console.debug( error ) );
		};

		// document.querySelectorAll( 'form.wp-block-omniform-form' )
		// 	.forEach( ( form ) => form.addEventListener( 'submit', formSubmissionHandler ) );

		const isDark = ( elm ) => {
			const context = document.defaultView.getComputedStyle( elm, null );
			return tinycolor( context.getPropertyValue( 'color' ) ).isDark();
		};

		document.querySelectorAll( 'body' ).forEach(
			( elm ) => ! isDark( elm ) && elm.classList.add( 'is-dark-theme' )
		);
	} );
}() );
