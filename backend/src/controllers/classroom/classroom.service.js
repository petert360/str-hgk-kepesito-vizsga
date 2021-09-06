/**
 * @TODO service kapcsolat és CRUD műveletek a  Mongoose modellek segítségével
 */

const Classroom = require('../../models/classroom.model');

exports.create = classroomData => {
    const classroom = new Classroom(classroomData);
    return classroom.save();
};

exports.findAll = () => Classroom.find().populate();

exports.findOne = id => Classroom.findById(id).populate();

exports.update = (id, updateData) => Classroom.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Classroom.findByIdAndRemove(id); 