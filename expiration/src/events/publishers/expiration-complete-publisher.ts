import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent
} from '@rltickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
