const { joinWaitlist } = require('../js/waitlist');

test('normalizes and adds a valid email without mutating the list', function () {
  const originalList = ['first@example.com'];
  const updatedList = joinWaitlist(originalList, '  Dana@Mail.COM ');

  assertEq(originalList.length, 1);
  assertEq(updatedList.join(','), 'first@example.com,dana@mail.com');
});

test('does not add invalid or duplicate emails', function () {
  assertEq(joinWaitlist(['first@example.com'], 'not-an-email').length, 1);
  assertEq(joinWaitlist(['first@example.com'], 'FIRST@example.com').length, 1);
});