var mongoDBConn = require(process.cwd() + '/dao/mongoDBConnect');

// Create bank branches
exports.bankBranchesCreate = function(userReactionData, callback) {
	mongoDBConn.bankBranchSchema.create(
		{
			ifsc: userReactionData.ifsc,
			bank_id: userReactionData.bank_id,
			branch: userReactionData.branch,
			address: userReactionData.address,
			city: userReactionData.city,
			district: userReactionData.district,
			state: userReactionData.state
		},
		function(err, saved) {
			if (err || !saved) {
				callback(null, true);
			} else {
				callback(null, false);
				console.log('Bank Branch Creation Success...' + saved);
			}
		}
	);
};

// Get all bank branches for autocomplete
exports.getBankBranchDetails = function(getBankBranchData, callback) {
	mongoDBConn.bankBranchSchema.findOne(
		{
			branch: { $regex: getBankBranchData.q, $options: 'i' }
		},
		function(err, res) {
			if (err || !res) {
				callback(null, true);
			} else {
				callback(res, false);
				console.log('Get Bank Details Success...' + res);
			}
		}
	);
};

//Search bank details
exports.getBankBranchSearchDetails = function(getBankBranchSearchDetailsData, callback) {
	mongoDBConn.bankBranchSchema.find(
		{
			city: getBankBranchSearchDetailsData.q
		},
		function(err, res) {
			if (err || !res) {
				callback(null, true);
			} else {
				callback(res, false);
				console.log('Search Bank Details Success...' + res);
			}
		}
	);
};
