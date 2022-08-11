const uuid = require('uuid');
const path = require('path');
const ApiError = require('../errors/apiError');
const { Device, DeviceInfo } = require('../models/model');

const getNumber = (val) => Number(val);
class DeviceController {
  async getAll(req, res, next) {
    try {
      let { brandId, typeId, limit, page } = req.query;
      limit = getNumber(limit) || 9;
      page = getNumber(page) || 1;
      typeId = getNumber(typeId);
      brandId = getNumber(brandId);
      const offset = limit * page - limit;
      let devices;

      if (!brandId && typeId) {
        devices = await Device.findAndCountAll({
          where: { typeId },
          limit,
          offset,
        });
      }
      if (!typeId && brandId) {
        devices = await Device.findAndCountAll({
          where: { brandId },
          limit,
          offset,
        });
      }
      if (!typeId && !brandId) {
        devices = await Device.findAndCountAll({ limit, offset });
      }
      if (typeId && brandId) {
        devices = await Device.findAndCountAll({
          where: { brandId, typeId },
          limit,
          offset,
        });
      }
      res.json(devices);
    } catch (e) {
      next(ApiError.badRequest('Invalid data'));
    }
  }
  async getOne(req, res, next) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo }],
    });
    if (!device) {
      next(ApiError.badRequest('Device is not found'));
    }
    return res.json(device);
  }
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      const fileName = uuid.v4() + '.jpg';
      //move file to static folder
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      if (!name || !price) {
        next(ApiError.badRequest('Fields name and price is necessary'));
      }
      const brandIdNum = Number(brandId);
      const typeIdNum = Number(typeId);
      const device = await Device.create({
        name,
        price,
        brandId: brandIdNum,
        typeId: typeIdNum,
        img: fileName,
      });

      if (info) {
        const infoArr = JSON.parse(info);
        infoArr.forEach((el) =>
          DeviceInfo.create({
            title: el.title,
            description: el.description,
            deviceId: device.id,
          }),
        );
      }
      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest('Invalid data'));
    }
  }

  async remove(req, res, next) {}
}

module.exports = new DeviceController();
