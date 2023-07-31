export default function dayColor(day) {
  switch (day) {
    case "토요일":
      return "#3662f5";
    case "일요일":
      return "#f72a31";
    default:
      return "#a8a8a8";
  }
}
