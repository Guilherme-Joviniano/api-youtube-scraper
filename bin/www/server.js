import server from '../../src/app';

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`http://localhost${PORT}`);
});
