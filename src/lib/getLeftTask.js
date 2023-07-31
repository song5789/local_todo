/** Todo 리스트 내의 완료되지 않은 작업의 개수를 반환함. (인수는 todo 리스트) */
export default function getLeftTask(list) {
  return list.filter((v) => v.done === false).length;
}
