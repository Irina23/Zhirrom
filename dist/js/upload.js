// try {
// 	document.body.scrollTo(0, 0);
// } catch (e) {
// 	console.log(e);
// }
(function scrollTopWhenBack () {

	var scrolled = null;

	$(window).one('wheel onmousewheel DOMMouseScroll touchmove', function () {
		scrolled = true;
		$('html, body').stop(false, false);
	});

	(function () {
		var top;
		try {
			top = localStorage.getItem('scrollTo');
			top = parseInt(top);
			if (!(isNaN(top)) && typeof top === "number") {
				if (!scrolled) {
					$('html, body').stop(false, false).animate({
						'scrollTop': top
					});
				}
				localStorage.removeItem('scrollTo');
			}
			$(window).one('load popstate', function () {
				if (!scrolled) {
					$('html, body').stop(false, false).animate({
						'scrollTop': top
					});
				}
			});
		} catch (error) {
			console.log(error);
		}
	})();

	$('.block_color').find('a').on('click', function () {
		var $self,
			top;
		try {
			$self = $(this);
			top = $self.closest('.block_info').offset().top;
			localStorage.setItem('scrollTo', top - 80);
		} catch (error) {
			console.log(error);
		}
	});

})();
(function calculateTotalPrice () {
	var opt = {
		$totalItems: $('#total_items'),
		tableWidthOrdersSelector: '.js-table-desktop',
		productIdSelector: 'data-item-id',
		deleteSelector: '.delete',
		currency: ' руб.'
	};

	var status = {};
	var cartItems = {};

	$(opt.tableWidthOrdersSelector).each(function () {
		var _ = $(this);
		var _opt = {
			priceHolderSelector: '.item-price',
			quantityHolderSelector: '.quantity',
			summHolderSelector: '.item-summ',
			totalSummSelector: '.total_price .price',
			addToCartButtonSelector: '.total_price .submit'
		};

		var $trigger, $totalSumm, $prices, $quantitys, $summs, $addToCartButton, $delete;

		var changeSumm = function (id, value) {
			var price = $prices.find('[' + opt.productIdSelector + '=' + id + ']').text();
			price = parseInt(price);

			if (!price) price = 0;
			$summs.find('[' + opt.productIdSelector + '=' + id + ']').text( price * value );

			if (opt.$totalItems.length) updateCartItems();
			totalSumm(id);
		};

		var totalSumm = function (id) {
			var s,
				summ = 0,
				total = 0;
			$summs.find('[' + opt.productIdSelector + '=' + id + ']').each(function () {
				status[id] = parseInt($(this).text());
			});
			for (s in status) {
				total += status[s];
			}
			$totalSumm.html(total + opt.currency);
		};

		var defineTotalSumm = function () {
			_.children().each(function () {
				var id;
				id = $(this).find('[type="number"]').attr(opt.productIdSelector);
				totalSumm(id);
			});
		};

		var updateCartItems = function () {
			var s,
				total = 0,
				cartItems = {};
			_.find(_opt.quantityHolderSelector).find('input').each(function () {
				var __ = $(this),
				vl,
				id;

				vl = __.val();
				vl = parseInt(vl);
				if (isNaN(vl)) vl = 0;

				id = __.attr(opt.productIdSelector);

				cartItems[id] = vl;

			});
			cartItems.undefined = 0;
			for (s in cartItems) {
				total += cartItems[s];
			}
			opt.$totalItems.html(total);
		};

		var triggerOctober = function () {
			$trigger.trigger('click');
		};

		var checkCart = window.checkCart = function () {
			var $cartItems = _.children('.order');
			if ($cartItems.length < 1) {
				$('.cart_empty').css({
					'display': 'block'
				});
				$('#checkout-buttom').css({
					'display': 'none'
				});
				_.remove();
			}
		};

		$trigger = _.find('.update').eq(0);
		$totalSumm = $(_opt.totalSummSelector);
		$prices = _.find(_opt.priceHolderSelector);
		$quantitys = _.find(_opt.quantityHolderSelector);
		$summs = _.find(_opt.summHolderSelector);
		$delete = _.find(opt.deleteSelector);

		defineTotalSumm();

		$delete.on('click', function (e) {
			var $order = $(this).parent(),
				$curSumm = $order.find(_opt.summHolderSelector).find('[' + opt.productIdSelector + ']'),
				$quant = $order.find(_opt.quantityHolderSelector).find('[type="number"]'),
				id = $curSumm.attr(opt.productIdSelector);
			$curSumm.text('0');
			$quant.val(0);
			totalSumm(id);
			updateCartItems();
		});

		$quantitys.on('change', function (e) {
			triggerOctober();
		});
		$quantitys.on('change keyup', function (e) {

			var $target, value, id, max, type;
			type = e.type;
			$target = $(e.target);
			id = $target.attr(opt.productIdSelector);
			max = $target.attr('max');
			value = $target.val();
			value = parseInt(value);
			if (isNaN(value)) value = 0;
			if (value > max) {
				value = max;
				$target.val(value);
			}

			changeSumm(id, value, type);
		});
	});

})();