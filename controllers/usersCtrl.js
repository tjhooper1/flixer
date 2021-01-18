const mockData = require("../mockData");

const getUsers = async (req, res) => {
    try {
        res.status(200).json(mockData.user)
    } catch (error) {
        return res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

module.exports = {
    getUsers
}