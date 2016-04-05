(function ($) {

	$.fn.validate = function (opt) {

		this.each(function (i) {

			var DOM = {},
				state = {},
				$self = $(this);

			// options
			if (!opt) {
				opt = {};
			}
			opt = $.extend({
			}, opt);

			// methods
			var plg = {
				init: function () {
					DOM.$fields = $self.find('[data-validate]');
					//$self.on('submit', plg.submit);
					$self.find('.btn.submit').on('click', plg.submit);
					//DOM.$fields.on('blur keyup', function () {
					// 	plg.validate( $(this) );
					// });
					DOM.$fields.on('focus', function () {
						plg.removeLabel( $(this) );
					})
				},

				test: function (data, type) {
					switch (type) {
						case 'name':
							return /^[а-яіїєґёА-ЯІЇЄҐЁa-zA-Z\-]+\s{0,1}[а-яіїєґёА-ЯІЇЄҐЁa-zA-Z\-]{0,}$/.test(data);
						case 'phone':
							return /^[\(\)0-9\-\s\+]{8,}/.test(data);
						case 'email':
							return /^[0-9a-zA-Z._-]+@[0-9a-zA-Z_-]+\.[a-zA-Z._-]+/.test(data);
						case 'number':
							return /^[0-9]/.test(data);
						case 'empty':
							return /^[а-яіїєґёА-ЯІЇЄҐЁa-zA-Z0-9]+/.test(data);
						default:
							return true;
					}
				},
				addLabel: function ($el) {
					$el.parent().addClass('error');
				},
				removeLabel: function ($el) {
					$el.parent().removeClass('error');
				},
				validate: function ($el) {
					if ( plg.test( $el.val(), $el.attr('data-validate') ) ) {
						plg.removeLabel( $el );
					} else {
						plg.addLabel( $el );
						state.errors++;
					}
				},
				submit: function (e) {
					state.errors = 0;
					$self.find('[data-validate]').each( function () {
						plg.validate( $(this) );
					} );
					if (state.errors) {
						e.preventDefault();
					} else {
						$self.trigger('submit');
					}
				}
			};

			plg.init();

			return plg;
		});
	};

})(jQuery);