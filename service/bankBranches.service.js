var bankBranchesCreateDao = require(process.cwd() + '/dao/branchesLayer.logic');

// Service layer for bankBranchesCreate
module.exports.bankBranchesCreate = function (req, res) {
    var bankBranchesCreateUserReaction = req.body;
    bankBranchesCreateDao.bankBranchesCreate(bankBranchesCreateUserReaction, function (isError) {
        if (!isError) {
            res.send({
                status: "Success",
                data: 'Success'
            });
        }
        else {
            res.send({
                status: "Failed",
                error: "Error ocurred while creating user reaction"
            });
        }
    });
};

// Service layer for GetBankBranches 
module.exports.getBankBranchDetails = function (req, res) {
    var getBankBranchDetailsData = req.query;
    bankBranchesCreateDao.getBankBranchDetails(getBankBranchDetailsData, function (data, isError) {
        if (!isError) {
            console.log(data);
            res.send({
                status: "Success",
                branches: [data]
            });
        }
        else {
            res.send({
                status: "Failed",
                error: "Error ocurred while getting bank details"
            });
        }
    });
};

module.exports.getBankBranchSearchDetails = function (req, res) {
    var getBankBranchSearchDetailsData = req.query;
    bankBranchesCreateDao.getBankBranchSearchDetails(getBankBranchSearchDetailsData, function (data, isError) {
        if (!isError) {
            res.send({
                status: "Success",
                branches: [data]
            });
        }
        else {
            res.send({
                status: "Failed",
                error: "Error ocurred while search bank details"
            });
        }
    });
};
