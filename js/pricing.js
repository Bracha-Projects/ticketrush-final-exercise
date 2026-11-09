// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה
const STUDENT_DISCOUNT = 0.15; // מבצע סטודנטיות: 15% על מחיר הכרטיס

function maxTickets(isMember) {
  return isMember ? 6 : MAX_TICKETS;
}

function calcTotal(qty, isMember, isStudent) {
  if (qty < 1 || qty > maxTickets(isMember)) return null;
  const discount = isMember ? 0.2 : isStudent ? STUDENT_DISCOUNT : 0;
  return qty * (TICKET_PRICE * (1 - discount) + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, STUDENT_DISCOUNT, maxTickets, calcTotal };
}
