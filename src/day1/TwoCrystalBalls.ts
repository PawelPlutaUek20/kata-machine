export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmout = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmout;

    for (; i < breaks.length; i += jumpAmout) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAmout;

    for (let j = 0; j < jumpAmout && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
