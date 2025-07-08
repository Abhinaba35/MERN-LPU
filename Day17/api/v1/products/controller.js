const createProductController = (req, res) => {
    console.log("Create Product Controller");
    console.log(req.body);
};

module.exports = { createProductController };