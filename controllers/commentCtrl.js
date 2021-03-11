const Comment = require("../model/Comment");

const commentCtrl = {
    getComments: async(req,res) => {
        try {
            const comments = await Comment.find({produt_id:req.params.id});
            res.send({comments})
        } catch (error) {
            res.status(500).json({msg:error.message})
        }

    }
}
module.exports = commentCtrl