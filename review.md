# Code review: `noa/refund`

## Blocking: the service fee is refunded incorrectly

`calcRefund(qty)` applies the 90% refund rate to `TICKET_PRICE + SERVICE_FEE`. The requirement says the service fee is not refundable, so the calculation must apply the refund rate to ticket prices only. As written, one ticket returns 325.8 instead of 315, and two tickets return 651.6 instead of 630.

The refund tests fail on both cases. The separate `formatPrice` failures come from the existing regression on `main` and are unrelated to this branch.

**Recommendation:** do not merge `noa/refund` until the service fee is excluded from the refund calculation.