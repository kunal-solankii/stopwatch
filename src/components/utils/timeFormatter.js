export const timeFormatter = ({ currentTime = 0, returnType = 'object' }) => {

    const sec = Math.floor(currentTime / 1000);
    const min = Math.floor(sec / 60);
    const hour = Math.floor(min / 60);
    const milliSeconds = (currentTime % 1000).toString().padStart(3, "0");
    const seconds = (sec % 60).toString().padStart(2, "0");
    const minutes = (min % 60).toString().padStart(2, "0");
    const hours = (hour % 24).toString().padStart(2, "0");

    if (returnType === 'string') return `${hour}:${minutes}:${seconds}:${milliSeconds}`;

    return { hours, minutes, seconds, milliSeconds }
}