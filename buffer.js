const buffer = new Buffer.from("Subham", "utf-8");
buffer.write("svarcoder");

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
