export default function ConversationTime(timeInteraction) {
  try {
    const addZeroBefore = (time) => (time < 10 ? `0${time}` : time);

    const dt = timeInteraction.getTime() / 1000;
    const now = Date.now() / 1000;

    const diffInSeconds = Math.floor(now - dt);

    const hours = Math.floor(diffInSeconds / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = Math.floor(diffInSeconds % 60);

    let res = "";

    if (hours > 0) {
      res = `${addZeroBefore(hours)}:${addZeroBefore(minutes)}:${addZeroBefore(seconds)}`;
    } else {
      res = `${addZeroBefore(minutes)}:${addZeroBefore(seconds)}`;
    }

    return res;
  } catch (e) {
    console.log(e);
    return "";
  }
}
