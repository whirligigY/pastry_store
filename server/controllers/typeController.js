const { Type } = require('../models/model');
const ApiError = require('../errors/apiError');
class TypeController {
  async getAll(req, res, next) {
    const types = await Type.findAll();
    res.json(types);
  }

  async create(req, res, next) {
    const { name } = req.body;
    if (!name) {
      return next(ApiError.badRequest('Invalid type'));
    }
    const existedType = await Type.findOne({ where: { name } });
    if (existedType) {
      return next(ApiError.badRequest('This type is already exist'));
    }
    const type = await Type.create({ name });
    if (!type) {
      return next(ApiError.internal('Type is not created'));
    }
    return res.status(200).json(type);
  }
}

module.exports = new TypeController();
