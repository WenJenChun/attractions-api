const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // 'db.json' 是您的 JSON 数据文件
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000; // 使用环境变量或默认端口

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});