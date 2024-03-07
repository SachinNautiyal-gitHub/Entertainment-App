
const express = require('express');
const User = require('../models/User');
const router = express.Router();

const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require('../middleware')