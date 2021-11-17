// 6 kyu: Ball Upwards
export function maxBall(v0: number): number {
  let maxHeight = 0;
  let height = 0;
  let timeInTenthOfSecond = 0;

  while (height >= maxHeight) {
    maxHeight = height;
    timeInTenthOfSecond++;
    height = heightOfBallAtTime(v0, timeInTenthOfSecond / 10);
    console.log(height, timeInTenthOfSecond);
  }

  return timeInTenthOfSecond;
}

function heightOfBallAtTime(initalSpeed: number, second: number): number {
  if (second === 0) {
    return 0;
  }

  const gravity = 9.81;
  return (
    ((initalSpeed * 1000) / 3600) * second - 0.5 * gravity * Math.pow(second, 2)
  );
}
