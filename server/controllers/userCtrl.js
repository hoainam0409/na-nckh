require('dotenv').config()
const Users = require('../models/UserModel')
// const bcrypt = require('bcrypt')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

const userCtrl = {
  addUser: async (req, res) => {
    const { username, password, hovaten, phongban, chucvu, hocham, hocvi } = req.body

    // Simple validation
    if (!username || !password)
      return res
        .status(400)
        .json({ success: false, message: 'Vui lòng nhập các trường bắt buộc' })

    try {
      // Check for existing user
      const user = await Users.findOne({ username })

      if (user)
        return res
          .status(400)
          .json({ success: false, message: 'Taì khoản đã tồn tại' })

      // All good
      const hashedPassword = await argon2.hash(password)
      const newUser = new Users({ username, password: hashedPassword, hovaten, phongban, chucvu, hocham, hocvi })
      await newUser.save()

      // Return token
      const accessToken = jwt.sign(
        { userId: newUser._id },
        process.env.ACCESS_TOKEN_SECRET, { expiresIn: '11m' }
      )

      res.json({
        success: true,
        message: 'Thêm mới thành công',
        accessToken,
        user: newUser
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: 'Có lỗi xảy ra vui lòng liên hệ quản trị viên' })
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await Users.find();
      res.json({ success: true, users });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      await Users.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: "Xóa thành công!" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  updateUser: async (req, res) => {
    const { username, password, hovaten, phongban, chucvu, hocham, hocvi } = req.body;
    // Simple validation
    if (!username || !hovaten || !password)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      let updatedUser = {
        username, password, hovaten, phongban, chucvu, hocham, hocvi
      };

      updatedUser = await Users.findOneAndUpdate(
        req.params.id,
        updatedUser,
        { new: true }
      );
      // User not authorised to update post or post not found
      if (!updatedUser)
        return res.status(401).json({
          success: false,
          message: "Có lỗi xảy ra vui lòng liên hệ quản trị viên!",
        });

      res.json({
        success: true,
        message: "Chỉnh sửa thành công!",
        user: updatedUser,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  login: async (req, res) => {
    const { username, password } = req.body

    // Simple validation
    if (!username || !password)
      return res
        .status(400)
        .json({ success: false, message: 'Missing username and/or password' })

    try {
      // Check for existing user
      const user = await Users.findOne({ username })
      if (!user)
        return res
          .status(400)
          .json({ success: false, message: 'Incorrect username or password' })

      // Username found
      const passwordValid = await argon2.verify(user.password, password)
      if (!passwordValid)
        return res
          .status(400)
          .json({ success: false, message: 'Incorrect username or password' })

      // All good
      // Return token
      const accessToken = jwt.sign(
        { userId: user._id },
        process.env.ACCESS_TOKEN_SECRET
      )

      res.json({
        success: true,
        message: 'User logged in successfully',
        accessToken
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: 'Internal server error' })
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await Users.findById(req.userId).select('-password')
      if (!user)
        return res.status(400).json({ success: false, message: 'User not found' })
      res.json({ success: true, user })
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: 'Internal server error' })
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie('refreshtoken', { path: '/user/refresh_token' })
      return res.json({ message: "Logged out" })
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  },
}

module.exports = userCtrl