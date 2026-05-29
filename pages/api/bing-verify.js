export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.status(200).send(`<!DOCTYPE html>
<html>
<head>
<meta name="msvalidate.01" content="0EDA385E3E0ABAA5AF9AB7B10733207D" />
<title>The Clarity Institute</title>
</head>
<body>
</body>
</html>`)
}
