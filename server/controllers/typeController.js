class TypeController {
  async getAll(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }
  async getOne(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }
  async create(req, res, next) {
    try {
      res.status(200).json({ message: 'Create worked for types' });
    } catch (e) {
      console.log(e);
    }
  }
  async remove(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new TypeController();
