async function homePingController(req, res) {
    // Collect the request
    // send it to service
    // and then prepare and send response
    return res.json({msg: 'OK'});
}

module.exports = homePingController;