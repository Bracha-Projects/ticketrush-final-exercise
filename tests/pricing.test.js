const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('members may buy up to 6 tickets', function () { assertEq(maxTickets(true), 6); });
test('member quota boundary is enforced', function () {
	assertEq(calcTotal(6, true), 1752);
	assertEq(calcTotal(7, true), null);
});
