import mongoose from 'mongoose'
import User from '../models/user'

const user = (req, res, next) => {
  const new_user = new User({
    name: req.body.name,
    age: req.body.age
  })
  new_user
    .save()
    .then(savedData => {
      res.json(savedData)
    })
    .catch(e => next(e))
}

export const getUser = (req, res, next) => {
  User.find({}, (error, events) => {
    res.json(events)
  })
}

export default user
