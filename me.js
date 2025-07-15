const fib = (n) => {
  if (n <= 1) return n
  return fib(n - 1) + fib(n - 2)
}

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const words = shuffle([
  "i love to be happy when", // 0
  "sweat", // 1
  "make love", // 2
  "show me", // 3
  "money", // 4
  "upside down", // 5
  "smile", // 6
  "the sun makes me", // 7
  "doomscroll", // 8
  "ride around", // 9
])

let poem = []
const iterations = 20

for (let i = 1; i < iterations; i++) {
  const f = Array.from(String(fib(i)), Number)
  poem.push(f.length < 2 ? words[Number(f)] : f.map((d) => words[d]).join(" "))
  Math.random() > 0.5 && poem.push("\n")
}

console.log(poem.join("\n"))
