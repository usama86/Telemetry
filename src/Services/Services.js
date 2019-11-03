

export default {
    async videoApproval(req, res) {
        try {
            let reqBody = req.body;
            console.log('body => ', reqBody);
            let updateResult = await mongo.update({_id : reqBody._id}, { $set: {approved: reqBody.approve}});
            if(updateResult) {
                res.json({code : "ABT0000"});
            } else {
                res.json({code : "ABT0001"});
            }
        } catch (e) {
            console.log('error updating video document', e);
            res.json({code : "ABT0001"});
        }
    },
    async albumApproval(req, res) {
        try {
            let reqBody = req.body;
            console.log('body => ', reqBody);
            let updateResult = await mongo.update({_id : reqBody._id}, { $set: {approved: reqBody.approve}});
            if(updateResult) {
                res.json({code : "ABT0000"});
            } else {
                res.json({code : "ABT0001"});
            }
        } catch (e) {
            console.log('error updating album document', e);
            res.json({code : "ABT0001"});
        }
    },
    async adApproval(req, res) {
        try {
            let reqBody = req.body;
            console.log('body => ', reqBody);
            let updateResult = await mongo.update({_id : reqBody._id}, { $set: {approved: reqBody.approve}});
            if(updateResult) {
                res.json({code : "ABT0000"});
            } else {
                res.json({code : "ABT0001"});
            }
        } catch (e) {
            console.log('error updating ad document', e);
            res.json({code : "ABT0001"});
        }
    },
    async getAllLogs(req, res) {
        try {
            const logs = await Log.find().sort({ _id: -1 }).lean();

            res.json({ code: "ABT0000", logs: logs});
        } catch (e) {
            console.log('error fetching logs', e);
            res.json({code : "ABT0001"});
        }
    },
    async getAllUsers(req, res) {
        try {
            const users = await User.find().sort({ created_at: -1 }).lean();

            res.json({ code: "ABT0000", users: users});
        } catch (e) {
            console.log('error fetching users', e);
            res.json({code : "ABT0001"});
        }
    }
}
