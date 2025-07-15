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
  "love",
  "cup",
  "book",
  "feel",
  "sweat",
  "money",
  "kill",
  "wet",
  "plane",
  "flower",
])

let poem = []
const iterations = 40

for (let i = 1; i < iterations; i++) {
  const f = Array.from(String(fib(i)), Number)
  poem.push(f.length < 2 ? words[Number(f)] : f.map((d) => words[d]).join(" "))
}

console.log(poem.join("\n"))
