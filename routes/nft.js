var express = require('express');
var router = express.Router();


const ipfs = require('ipfs-http-client');


const addFile = async () => {

  // connect to local ipfs node
  const client = ipfs.create()
  const file = { path: 'testfile2', content: Buffer.from('hii') };
  return await client.add(file).then(result => {
    console.log(result)
    return (result)
  })

}


const addImage = async (file) => {

  // connect to local ipfs node
  const client = ipfs.create()
  // const file = { path: 'testfile2', content: Buffer.from('hii') };
  return await client.add(file).then(result => {
    console.log(result)
    return (result)
  })

}

/* GET users listing. */
router.get('/', async function (req, res, next) {
  // res.send('respond with a resource');
  res.send(await addFile());
});


router.post('/nft', async function (req, res) {
  console.log(req.body.body);
  console.log('Post received: ' + req.params.title);
  console.log(req.body.body.image);
  console.log("hi");
  res.json({
    success: true,
  });
});


module.exports = router;
