const ApiError = require('../errors/apiError');
const { Brand } = require('../models/model');
class BrandController {
  async getAll(req, res, next) {
    const brands = await Brand.findAll();
    return res.status(200).json(brands);
  }
  async create(req, res, next) {
    const { name } = req.body;
    if (!name) {
      return next(ApiError.badRequest('Empty field name'));
    }
    const brand = await Brand.create({ name });
    if (!brand) {
      return next(ApiError.internal('Something went wrong...'));
    }
    return res.status(200).json(brand);
  }

  async remove(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('No such element'));
    }
    const deletedBrand = await Brand.findOne({ id: Number(id) });
    if (!deletedBrand) {
      return next(ApiError.badRequest('No such element'));
    }
    await deletedBrand.destroy();
    return res.json(`Element with id ${id} is successfully deleted`);
  }
}

module.exports = new BrandController();
