import { DateTime } from 'luxon';

export default function (dateTime: DateTime): boolean {
    const today = DateTime.now();
    return today.hasSame(dateTime, 'day');
}
