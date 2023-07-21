export default function sum(...nums:number[]){
  return nums.reduce((prev, curr) => prev + curr, 0)
}