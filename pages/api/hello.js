// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

const Handler = (req, res) => {
  res.status(200).json({ name: 'John Doe' });
  // res.redirect('http://localhost:3000/');
}

export default Handler;
