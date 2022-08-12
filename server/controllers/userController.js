const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const { User, Basket } = require('../models/model');
const ApiError = require('../errors/apiError');

const generateToken = (id, email, role) => {
  const payload = { id, email, role };
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24h' });
};

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password, role } = req.body;
      if (!email || !password) {
        return next(ApiError.badRequest('Empty login or password'));
      }
      const isEmail = validator.isEmail(email);
      if (!isEmail) {
        return next(ApiError.badRequest('Invalid email'));
      }
      const isPasswordLengthValid = validator.isLength(password, 4, 10);
      if (!isPasswordLengthValid) {
        return next(
          ApiError.badRequest(
            'Password length must be more than 4 and less then 10 symbols',
          ),
        );
      }
      const isEmailUsed = await User.findOne({ where: { email } });
      if (isEmailUsed) {
        return next(ApiError.badRequest('Such email is already exists'));
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ email, password: hashPassword, role });
      const basket = await Basket.create({ userId: user.id });
      const token = generateToken(user.id, user.email, user.role);
      return res.status(200).json({ token });
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password, role } = req.body;

      if (!email || !password) {
        return next(ApiError.badRequest('Empty login or password'));
      }
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return next(ApiError.badRequest('User not found'));
      }
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        return next(ApiError.badRequest('Invalid password'));
      }
      const token = generateToken(user.id, user.email, user.role);
      return res.status(200).json({ token });
    } catch (e) {
      next(e);
    }
  }
  async check(req, res, next) {
    try {
      const { id, email, role } = req.user;
      const token = generateToken({ id, email, role });
      return res.json(token);
    } catch (e) {
      next(e);
    }
  }
  async getUsers(req, res, next) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
