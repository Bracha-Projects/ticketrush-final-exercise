function joinWaitlist(list, email) {
  const updatedList = list.slice();
  const normalizedEmail = String(email == null ? '' : email).trim().toLowerCase();

  if (!/^[^@\s]+@[^@\s.]+(?:\.[^@\s.]+)+$/.test(normalizedEmail)) {
    return updatedList;
  }

  const alreadyListed = updatedList.some(function (currentEmail) {
    return String(currentEmail).trim().toLowerCase() === normalizedEmail;
  });

  return alreadyListed ? updatedList : updatedList.concat(normalizedEmail);
}

if (typeof module !== 'undefined') {
  module.exports = { joinWaitlist };
}