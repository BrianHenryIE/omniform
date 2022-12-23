/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	fieldCheckbox,
	// fieldColor,
	fieldDate,
	fieldEmail,
	// fieldFile,
	fieldHidden,
	fieldInput,
	fieldNumber,
	// fieldPassword,
	fieldRadio,
	// fieldRange,
	// fieldSearch,
	fieldTel,
	fieldTime,
	fieldUrl,
} from '../shared/icons';

const variations = [
	{
		// This is a default to improve variation transforms.
		name: 'field-text',
		icon: { foreground: '#D92E83', src: fieldInput },
		title: __( 'Short Text', 'omniform' ),
		description: __( 'A text field for brief responses.', 'omnigroup' ),
		attributes: { fieldType: 'text', fieldValue: '' },
		scope: [ 'transform' ],
	},
	{
		name: 'field-email',
		icon: { foreground: '#D92E83', src: fieldEmail },
		title: __( 'Email', 'omniform' ),
		description: __( 'A field for collecting an email address.', 'omnigroup' ),
		attributes: { fieldType: 'email', fieldValue: '' },
	},
	{
		name: 'field-url',
		icon: { foreground: '#D92E83', src: fieldUrl },
		title: __( 'URL', 'omniform' ),
		description: __( 'A field for collecting a website address or URL.', 'omnigroup' ),
		attributes: { fieldType: 'url', fieldValue: '' },
	},
	{
		name: 'field-number',
		icon: { foreground: '#D92E83', src: fieldNumber },
		title: __( 'Number', 'omniform' ),
		description: __( 'A field for collecting a numerical value.', 'omnigroup' ),
		attributes: { fieldType: 'number', fieldValue: '' },
	},
	{
		name: 'field-checkbox',
		icon: { foreground: '#D92E83', src: fieldCheckbox },
		title: __( 'Checkbox', 'omniform' ),
		description: __( 'A field that allows for multiple options and choices.', 'omnigroup' ),
		attributes: { fieldType: 'checkbox', isRequired: false, fieldValue: '' },
	},
	{
		name: 'field-radio',
		icon: { foreground: '#D92E83', src: fieldRadio },
		title: __( 'Radio', 'omniform' ),
		description: __( 'A field that can be grouped, from which a single choice can be made.', 'omnigroup' ),
		attributes: { fieldType: 'radio', isRequired: false, fieldValue: '' },
	},
	// {
	// 	name: 'field-color',
	// 	icon: { foreground: '#D92E83', src: fieldColor },
	// 	title: __( 'Color Picker', 'omniform' ),
	// 	description: __( 'A field for collecting a color value from a color picker.', 'omnigroup' ),
	// 	attributes: { fieldType: 'color', fieldValue: '' },
	// },
	{
		name: 'field-date',
		icon: { foreground: '#D92E83', src: fieldDate },
		title: __( 'Date', 'omniform' ),
		description: __( 'A field for collecting a formatted date.', 'omnigroup' ),
		attributes: { fieldType: 'date', fieldValue: '' },
	},
	{
		name: 'field-datetime-local',
		icon: { foreground: '#D92E83', src: fieldDate },
		title: __( 'Datetime', 'omniform' ),
		description: __( 'A field for collecting a localize date and time.', 'omnigroup' ),
		attributes: { fieldType: 'datetime-local', fieldValue: '' },
	},
	// {
	// 	name: 'field-file',
	// 	icon: { foreground: '#D92E83', src: fieldFile },
	// 	title: __( 'File Upload', 'omniform' ),
	// 	description: __( 'A field for uploading files.', 'omnigroup' ),
	// 	attributes: { fieldType: 'file', fieldValue: '' },
	// },
	{
		name: 'field-month',
		icon: { foreground: '#D92E83', src: fieldDate },
		title: __( 'Month', 'omniform' ),
		description: __( 'A field for collecting a month formatted date.', 'omnigroup' ),
		attributes: { fieldType: 'month', fieldValue: '' },
	},
	// {
	// 	name: 'field-password',
	// 	icon: { foreground: '#D92E83', src: fieldPassword },
	// 	title: __( 'Password', 'omniform' ),
	// 	description: __( 'A field for collecting a password.', 'omnigroup' ),
	// 	attributes: { fieldType: 'password', fieldValue: '' },
	// },
	// {
	// 	name: 'field-range',
	// 	icon: { foreground: '#D92E83', src: fieldRange },
	// 	title: __( 'Range', 'omniform' ),
	// 	description: __( 'A field for selecting a number from a range of numbers.', 'omnigroup' ),
	// 	attributes: { fieldType: 'range', fieldValue: '' },
	// },
	// {
	// 	name: 'field-search',
	// 	icon: { foreground: '#D92E83', src: fieldSearch },
	// 	title: __( 'Search', 'omniform' ),
	// 	description: __( 'A field for collecting a search query.', 'omnigroup' ),
	// 	attributes: { fieldType: 'search', fieldValue: '' },
	// },
	{
		name: 'field-tel',
		icon: { foreground: '#D92E83', src: fieldTel },
		title: __( 'Phone', 'omniform' ),
		description: __( 'A field for collecting a telephone number.', 'omnigroup' ),
		attributes: { fieldType: 'tel', fieldValue: '' },
	},
	{
		name: 'field-time',
		icon: { foreground: '#D92E83', src: fieldTime },
		title: __( 'Time', 'omniform' ),
		description: __( 'A field for collecting a formatted time.', 'omnigroup' ),
		attributes: { fieldType: 'time', fieldValue: '' },
	},
	{
		name: 'field-week',
		icon: { foreground: '#D92E83', src: fieldDate },
		title: __( 'Week', 'omniform' ),
		description: __( 'A field for collecting a week formatted date.', 'omnigroup' ),
		attributes: { fieldType: 'week', fieldValue: '' },
	},
	{
		name: 'field-current-user-id',
		icon: { foreground: '#D92E83', src: fieldHidden },
		title: __( 'Current User ID', 'omniform' ),
		description: __( 'A hidden field with the current user\'s ID', 'omniform' ),
		attributes: { fieldType: 'hidden', isRequired: false, fieldValue: '{{get_current_user_id}}', fieldPlaceholder: '' },
	},
	{
		name: 'field-hidden',
		icon: { foreground: '#D92E83', src: fieldHidden },
		title: __( 'Hidden', 'omniform' ),
		description: __( 'A field that is not displayed.', 'omniform' ),
		attributes: { fieldType: 'hidden', isRequired: false, fieldValue: '', fieldPlaceholder: '' },
	},
];

variations.forEach( ( variation ) => {
	variation.isActive = ( blockAttributes, variationAttributes ) => {
		// Detect which "hidden" variation is active based on the preset fieldValue.
		if (
			'hidden' === blockAttributes.fieldType &&
			blockAttributes.fieldType === variationAttributes.fieldType
		) {
			return blockAttributes.fieldValue === variationAttributes.fieldValue ||
				( '' !== blockAttributes.fieldValue && '' === variationAttributes.fieldValue );
		}

		return blockAttributes.fieldType === variationAttributes.fieldType;
	};

	if ( ! variation.scope ) {
		variation.scope = [ 'inserter', 'block', 'transform' ];
	}
} );

export default variations;
